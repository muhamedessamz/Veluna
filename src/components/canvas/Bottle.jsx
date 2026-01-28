/* eslint-disable react/no-unknown-property */
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, Text } from '@react-three/drei'

const BottlePlaceholder = () => {
  const groupRef = useRef()

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.getElapsedTime()
    // Slow continuous rotation
    groupRef.current.rotation.y = t * 0.2
  })

  const glassMaterialProps = {
    transmission: 0.9,
    opacity: 1,
    metalness: 0,
    roughness: 0.2, // Frosted look
    ior: 1.5,
    thickness: 0.5,
    specularIntensity: 1,
    clearcoat: 1,
    color: "#ffffff"
  }

  const goldMaterialProps = {
    color: "#E5D3B3", // Soft Champagne Gold
    metalness: 1,
    roughness: 0.15, // Soft matte finish
  }

  return (
    <group ref={groupRef}>
      <Float
        speed={1.5}
        rotationIntensity={0.2}
        floatIntensity={0.5}
        floatingRange={[-0.1, 0.1]}
      >
        {/* --- BOTTLE BODY (Frosted Glass) --- */}
        <mesh position={[0, -0.5, 0]} castShadow>
          <cylinderGeometry args={[0.8, 0.8, 2.5, 64]} />
          <meshPhysicalMaterial {...glassMaterialProps} transparent />
        </mesh>

        {/* --- LIQUID (Inside) --- */}
        <mesh position={[0, -0.8, 0]}>
          <cylinderGeometry args={[0.72, 0.72, 1.8, 32]} />
          <meshStandardMaterial color="#FFF5E1" transparent opacity={0.8} />
        </mesh>

        {/* --- LABEL (Minimal) --- */}
        <group position={[0, -0.5, 0.81]}>
          <mesh>
            <planeGeometry args={[0.8, 1.2]} />
            <meshStandardMaterial color="#F9F6F0" roughness={0.8} />
          </mesh>

          {/* Brand Name */}
          <Text
            position={[0, 0.3, 0.01]}
            fontSize={0.12}
            color="#2D3E33"
            font="https://fonts.gstatic.com/s/cormorantgaramond/v16/H4cjBXynlCjFvrmyyk95tSftaW8.woff"
            anchorX="center"
            anchorY="middle"
          >
            Veluna
          </Text>

          {/* Product Name */}
          <Text
            position={[0, 0.1, 0.01]}
            fontSize={0.07}
            color="#2D3E33"
            font="https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEWuLy6AZ9hjp-Ek-_EeA.woff"
            anchorX="center"
            anchorY="middle"
            letterSpacing={0.05}
          >
            HYDRATING SERUM
          </Text>

          {/* Subtitle */}
          <Text
            position={[0, -0.4, 0.01]}
            fontSize={0.04}
            color="#D4AF37"
            anchorX="center"
            anchorY="middle"
            letterSpacing={0.1}
          >
            ADVANCED SKIN FORMULA
          </Text>
        </group>

        {/* --- NECK --- */}
        <mesh position={[0, 0.85, 0]}>
          <cylinderGeometry args={[0.3, 0.8, 0.3, 64]} />
          <meshPhysicalMaterial {...glassMaterialProps} transparent />
        </mesh>
        <mesh position={[0, 1.1, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 0.4, 32]} />
          <meshPhysicalMaterial {...glassMaterialProps} transparent />
        </mesh>

        {/* --- CAP (Gold Dropper) --- */}
        <mesh position={[0, 1.45, 0]}>
          <cylinderGeometry args={[0.32, 0.32, 0.6, 32]} />
          <meshStandardMaterial {...goldMaterialProps} />
        </mesh>

        {/* --- RUBBER BULB --- */}
        <mesh position={[0, 1.85, 0]}>
          <sphereGeometry args={[0.3, 32, 16]} />
          <meshStandardMaterial color="#F2F0EB" roughness={0.5} />
        </mesh>

      </Float>
    </group>
  )
}

export default BottlePlaceholder
