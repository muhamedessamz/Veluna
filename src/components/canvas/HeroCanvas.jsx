/* eslint-disable react/no-unknown-property */
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Bottle from './Bottle'

const HeroCanvas = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        shadows
        dpr={[1, 2]}
        style={{ width: '100%', height: '100%' }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />

        <ambientLight intensity={1} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={1} />

        <Suspense fallback={null}>
          <Bottle />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default HeroCanvas
