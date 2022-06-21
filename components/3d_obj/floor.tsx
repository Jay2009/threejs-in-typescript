import React from "react"

function Floor(props: any) {
  return (
    <mesh {...props} recieveShadow={true}>
      <boxBufferGeometry args={[15, 1, 10]} />
      <meshPhysicalMaterial color='white' />
    </mesh>
  )
}

export default Floor
