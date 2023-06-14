import React from "react";
import styled from "styled-components";
import {useRef } from "react";

import { RenderTexture, Text, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Cube = () => {
    const textRef=useRef()

    useFrame( state=>(textRef.current.rotation.x=Math.sin(state.clock.elapsedTime)))

    
  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={["#ae99f2"]} />
          <Text ref={textRef} fontSize={1} color="#555">
            hello
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Cube;
