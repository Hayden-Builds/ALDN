import React, { useRef, useEffect, useState } from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useProgress } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import * as THREE from "three";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function Alden(props) {
  const group = useRef();
  const { progress } = useProgress();
  const [isIntroAnimationDone, setIsIntroAnimationDone] = useState(false);

  const { scene } = useGLTF('/models/alden-transformed.glb')
  // const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  // After cloning the scene and before return
const clone = React.useMemo(() => {
  const clonedScene = SkeletonUtils.clone(scene);

  // Set default relaxed arms
  const leftArm = clonedScene.getObjectByName("mixamorigLeftArm");
  const rightArm = clonedScene.getObjectByName("mixamorigRightArm");

  if (leftArm) leftArm.rotation.x = 1; // move down slightly
  if (rightArm) rightArm.rotation.x = 1; // move down slightly

  return clonedScene;
}, [scene]);

  const { nodes, materials } = useGraph(clone)

  const mouse = useRef(new THREE.Vector2());
  const headRef = useRef();

  // Smooth intro + default pose
  useGSAP(() => {
    if (progress === 100 && group.current) {
      gsap.fromTo(
        group.current.rotation,
        { y: Math.PI },            // start rotation
        { 
          y: 0,                    // end rotation (intro turn)
          duration: 1.5,
          ease: "power1.inOut",
          onComplete: () => {
            setIsIntroAnimationDone(true);

            // Smoothly tilt head and body to default pose
            const head = group.current.getObjectByName("mixamorigHead");
            if (head) headRef.current = head;

            // Head look up smoothly
            gsap.to(headRef.current.rotation, {
              x: -0.2,               // tilt head upwards (radians)
              duration: 1,
              ease: "power1.out"
            });

            // Body rotate slightly right
            gsap.to(group.current.rotation, {
              y: 0.3,                 // radians
              duration: 1,
              ease: "power1.out"
            });
          },
        }
      );
    }
  }, [progress]);

  // Mouse movement after intro
  useEffect(() => {
    if (isIntroAnimationDone && group.current) {
      const handleMouseMove = (event) => {
        const { innerWidth, innerHeight } = window;
        mouse.current.x = (event.clientX / innerWidth) * 2 - 1;
        mouse.current.y = -(event.clientY / innerHeight) * 2 + 1;

        const target = new THREE.Vector3(mouse.current.x, mouse.current.y, 1);

        // Smooth head rotation to target
        if (headRef.current) {
          gsap.to(headRef.current.rotation, {
            x: -target.y * 0.5,  // adjust sensitivity
            y: target.x * 0.2,
            duration: 0.2,
            ease: "power1.out"
          });
        }

        // Smooth body rotation following mouse
        gsap.to(group.current.rotation, {
          y: 0.3 + target.x * 0.2, // base rotation + mouse
          duration: 0.2,
          ease: "power1.out"
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [isIntroAnimationDone]);

  return (
    <group {...props} ref={group} dispose={null}>
      <primitive object={nodes.mixamorigHips} />
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <skinnedMesh geometry={nodes.Mesh.geometry} material={materials.Ch44_Body} skeleton={nodes.Mesh.skeleton} />
        <skinnedMesh geometry={nodes.Mesh_1.geometry} material={materials.Ch44_body1} skeleton={nodes.Mesh_1.skeleton} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/alden-transformed.glb')