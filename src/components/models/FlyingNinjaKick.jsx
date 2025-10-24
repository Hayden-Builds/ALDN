import React, { useEffect, useMemo, useRef } from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function FlyingNinjaKick(props) {
  const group = useRef()
  const { scene, animations } = useGLTF('/models/flying-ninja-kick-transformed.glb')

  // Clone the scene so multiple instances can exist independently
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)

  // Hook into the animation system
  const { actions, names } = useAnimations(animations, group)

  // Play the first animation when loaded
  useEffect(() => {
    if (actions && names.length > 0) {
      const action = actions[names[0]]
      action.reset().fadeIn(0.5).play()

      // Optional cleanup (fade out on unmount)
      return () => action.fadeOut(0.5)
    }
  }, [actions, names])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
        </group>
        <group name="Ch44" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <skinnedMesh
            name="Mesh"
            geometry={nodes.Mesh.geometry}
            material={materials.Ch44_Body}
            skeleton={nodes.Mesh.skeleton}
          />
          <skinnedMesh
            name="Mesh_1"
            geometry={nodes.Mesh_1.geometry}
            material={materials.Ch44_body1}
            skeleton={nodes.Mesh_1.skeleton}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/flying-ninja-kick-transformed.glb')