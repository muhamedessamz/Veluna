/* eslint-disable react/no-unknown-property */
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, MeshWobbleMaterial } from '@react-three/drei'

const BottlePlaceholder = () => {
  const meshRef = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    meshRef.current.rotation.y = t * 0.2
    meshRef.current.position.y = Math.sin(t) * 0.1
  })

  return (
    <group ref={meshRef}>
      {/* Main Bottle Body */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 1.5, 32]} />
        <MeshDistortMaterial
          color="#f0f0f0"
          speed={2}
          distort={0.1}
          radius={1}
          metalness={0.9}
          roughness={0.1}
          transmission={0.2}
          thickness={1}
        />
      </mesh>

      {/* Label */}
      <mesh position={[0, 0, 0.26]}>
        <planeGeometry args={[0.3, 0.8]} />
        <meshStandardMaterial color="#F8F5F2" roughness={0.4} metalness={0.0} />
      </mesh>

      {/* Bottle Cap */}
      <mesh position={[0, 0.85, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.3, 32]} />
        <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.2} />
      </mesh>

      {/* Floating Particles/Bubbles */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[0.05, 16, 16]} position={[1, 1, -1]}>
          <MeshWobbleMaterial color="#FFFFFF" factor={1} speed={2} />
        </Sphere>
      </Float>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
        <Sphere args={[0.03, 16, 16]} position={[-1, -0.5, 1]}>
          <MeshWobbleMaterial color="#D4AF37" factor={0.5} speed={1} />
        </Sphere>
      </Float>
    </group>
  )
}

export default BottlePlaceholder
