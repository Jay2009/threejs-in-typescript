import type { NextPage } from "next"
import Floor from "../components/3d_obj/floor"
import styles from "../styles/Home.module.css"
import { Canvas, useFrame } from "@react-three/fiber"
import Box from "../components/3d_obj/box"
import LightBulb from "../components/lightBulb"
import { OrbitControls } from "@react-three/drei"
import Draggable from "../components/3d_obj/draggable"
import { Suspense } from "react"

const Home: NextPage = () => {
  return (
    <div className='flex w-full text-red-800'>
      <Canvas
        shadows={true}
        className='z-50 w-full bg-blue-500 bg-opacity-0'
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <ambientLight color={"white"} intensity={0.1} />
        <LightBulb position={[0, 2, 0]} />
        <Draggable>
          <Suspense fallback={null}>
            <Box rotateX={3} rotateY={0.2} />
          </Suspense>
        </Draggable>
        <OrbitControls />
        <Floor position={[0, -1, 0]} />
      </Canvas>
    </div>
  )
}

export default Home
