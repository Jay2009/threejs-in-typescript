import React, { useEffect, useRef, useState } from "react"
import { extend, useThree } from "@react-three/fiber"
import { DragControls } from "three/examples/jsm/controls/DragControls"
import { OrbitControls } from "@react-three/drei"

extend({ DragControls })

interface groupRefForm {
  current?: any
  groupRef?: any
  children?: any
}
interface controlsRefForm {
  controlsRef?: any
  current?: any
}

function Draggable(props: any) {
  const groupRef: groupRefForm = useRef()
  const controlsRef: controlsRefForm = useRef()
  const [objects, setObjects] = useState()
  const { camera, gl, scene } = useThree()
  useEffect(() => {
    console.log(scene, "orbit!")
    setObjects(groupRef.current.children)
  }, [groupRef])

  useEffect(() => {
    controlsRef.current.addEventListener("hoveron", () => {
      scene.visible = false
    })
    controlsRef.current.addEventListener("hoveroff", () => {
      scene.visible = true
    })
  }, [objects])
  return (
    <group ref={groupRef}>
      <DragControls ref={controlsRef} args={[objects, camera, gl.domElement]} />
      {props.children}
    </group>
  )
}

export default Draggable
