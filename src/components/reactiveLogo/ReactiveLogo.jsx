import { Suspense, useRef } from "react";
import { Canvas,useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, useGLTF} from "@react-three/drei"

function Model({glb}) {
  const { scene } = useGLTF(glb)
  return <primitive object={scene} />;
}

const CameraControls = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls class.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls

  const {
    camera,
    gl: { domElement }
  } = useThree();

  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();
  useFrame(state => controls.current.update());
  return (
    <OrbitControls
      ref={controls}
      args={[camera, domElement]}
      enableZoom={false}
      enableDamping={false}
      enablePan={false}
      maxAzimuthAngle={Math.PI / 4}
      minAzimuthAngle={-Math.PI / 4}
      maxPolarAngle={Math.PI}
      minPolarAngle={0}
    />
  );
};

export default function ReactiveLogo({
  visible,
  cameraR,
  glb,
  className,
}) {
  return (
    <div className={"pane "+className}>
        <Canvas className="" camera={cameraR}>
          <CameraControls />
          <pointLight position={[0, 10, 0]} intensity={1.5}/>
          <Suspense  fallback={null}>
            {visible && <Model glb={glb}/>}
          </Suspense>
        </Canvas>
      </div>
  );
}

ReactiveLogo.defaultProps = {
  className: "",
}
