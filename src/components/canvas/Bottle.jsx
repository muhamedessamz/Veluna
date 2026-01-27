/* eslint-disable react/no-unknown-property */
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, MeshWobbleMaterial } from '@react-three/drei'

const BottlePlaceholder = () => {
  const meshRef = useRef()

  useFrame((state) => {
    if (!meshRef.current) return
    const t = state.clock.getElapsedTime()
    meshRef.current.rotation.y = t * 0.5
    meshRef.current.position.y = Math.sin(t) * 0.2
  })

  return (
    <group ref={meshRef}>
      {/* Main Bottle Body - Using a dark color for maximum contrast */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 2.2, 32]} />
        <meshStandardMaterial
          color="#2D3E33"
          metalness={0.7}
          roughness={0.2}
        />
      </mesh>

      {/* Glossy Cap */}
      <mesh position={[0, 1.25, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.4, 32]} />
        <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.1} />
      </mesh>

      {/* Simple Label */}
      <mesh position={[0, 0, 0.81]}>
        <planeGeometry args={[0.5, 1]} />
        <meshStandardMaterial color="#FFFFFF" roughness={1} />
      </mesh>
    </group>
  )
}

export default BottlePlaceholder
