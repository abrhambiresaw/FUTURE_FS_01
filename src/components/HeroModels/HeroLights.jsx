import * as THREE from "three";

const HeroLights = () => (
  <>
    {/* lamp's light */}
    <spotLight
  position={[5, 8, 5]}
  angle={0.3}
  penumbra={0.5}
  intensity={80}
  color="#ffffff"
  castShadow
/>
    {/* bluish overhead lamp */}
    <spotLight
        position={[-5, 4, 3]}
  angle={0.6}
  penumbra={1}
  intensity={20}
  color="#bde0fe"

    />
    {/* purplish side fill */}
    <spotLight
      position={[0, 6, -5]}
      angle={0.4}
      penumbra={1}
      intensity={40}
      color="#c77dff"
    />
    {/* area light for soft moody fill */}
    <primitive
      object={new THREE.RectAreaLight("#a259ff", 8, 3, 2)}
      position={[1, 3, 4]}
      rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      intensity={15}
    />
    {/* subtle point light for atmospheric tone */}
    <pointLight position={[0, 1, 0]} intensity={8} color="#7209b7" />
    <pointLight position={[1, 2, -2]} intensity={5} color="#4cc9f0" />
  </>
);

export default HeroLights;
