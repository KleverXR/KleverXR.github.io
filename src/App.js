import React from 'react';
import {Canvas} from '@react-three/fiber';
import { ARCanvas } from '@react-three/xr'
import {OrbitControls} from '@react-three/drei';
function Box(){
return (<mesh>
    <boxBufferGeometry attach="geometry" />
    <meshLambertMaterial attach="material" color="hotpink"/>
  </mesh>
  );
}
export default function App(){
  return <ARCanvas>
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <Box />
        </ARCanvas>;
}
