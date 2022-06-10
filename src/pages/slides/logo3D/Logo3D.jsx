import React, { Suspense } from 'react';
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"

// import Model from "./Donut48"

function Model() {
  const { scene } = useGLTF("mgl3.glb")
  return <primitive object={scene} />;
}

function ShowObject(props) {

  return (
    <div style = {{height:"100vh",width:"100vh", backgroundColor:"#fff"}}>
      <Canvas camera={{position: [150, 150, 450], fov: 0.5 }}>
        <pointLight position={[10, 10, 10]} intensity={1.3} />
        <Suspense fallback={null}>
          <Model/>
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}


export default ShowObject;