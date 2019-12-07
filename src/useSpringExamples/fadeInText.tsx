import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
import Spring from "react-spring/renderprops";
import styled from "styled-components";

//const props = useSpring({ opacity: 1, from: { opacity: 0 } });
const FadeInText = () => {
  const FadeInText = styled(animated.h1)`
    font-family: "Gill Sans";
  `;
  const [opacityStart, setOpacityStart] = useState(0);
  const [opacityEnd, setOpacityEnd] = useState(1);

  const handleRest = () => {
    setOpacityStart(opacityEnd);
    setOpacityEnd(opacityStart);
  };

  const props = useSpring({
    //opacity: 1,
    color: "red",
    //from: { opacity: 0, color: "blue" },
    opacity: 0,
    from: { opacity: 1 },
    delay: 400
    // onRest: handleRest
  });

  return <FadeInText style={props}>FADE OUT</FadeInText>;
};

export default FadeInText;

// function App() {
//   const props = useSpring({ opacity: 1, from: { opacity: 0 } });
//   return <animated.div style={props}>I will fade in</animated.div>;
// }

//fade in contoius

//loader

//progress

//promises

//svg outline

//snap

//springs
//transition
//trail
