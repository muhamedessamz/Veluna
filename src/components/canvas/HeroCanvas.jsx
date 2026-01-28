/* eslint-disable react/no-unknown-property */
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

import { OrbitControls, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei'
import Bottle from './Bottle'

const HeroCanvas = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0, 8], fov: 45 }} // Adjusted camera for better framing
        style={{ width: '100%', height: '100%' }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />

        {/* Soft Studio Lighting */}
        <ambientLight intensity={0.8} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} castShadow />
        <pointLight position={[-10, 0, -10]} intensity={0.5} color="#e6e6e6" />

        {/* Environment for Glass Reflections */}
        <Environment preset="city" intensity={0.8} />

        <Suspense fallback={null}>
          <Bottle />

          <ContactShadows
            position={[0, -2, 0]}
            opacity={0.3}
            scale={10}
            blur={2.5}
            far={4}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default HeroCanvas
