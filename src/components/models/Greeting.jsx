import React, { useEffect } from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Greeting(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF(import.meta.env.BASE_URL + 'models/greeting-transformed.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)

  // Play the first animation automatically
  useEffect(() => {
    if (actions) {
      const firstActionName = Object.keys(actions)[0] // pick first animation
      if (firstActionName) {
        actions[firstActionName].reset().fadeIn(0.5).play()
      }
    }
  }, [actions])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
        </group>
        <group name="Ch44" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <skinnedMesh name="Mesh" geometry={nodes.Mesh.geometry} material={materials.Ch44_Body} skeleton={nodes.Mesh.skeleton} />
          <skinnedMesh name="Mesh_1" geometry={nodes.Mesh_1.geometry} material={materials.Ch44_body1} skeleton={nodes.Mesh_1.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(import.meta.env.BASE_URL + 'models/greeting-transformed.glb')