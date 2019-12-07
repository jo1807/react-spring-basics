import React, { useState, useEffect } from "react";
import { animated, useSpring } from "react-spring";
import Spring from "react-spring/renderprops";
import styled from "styled-components";

const ProgressBar = () => {
  const [opacityStart, setOpacityStart] = useState(0);
  const [opacityEnd, setOpacityEnd] = useState(1);

  const [percentage, setPercentage] = useState(0);
  const [loaded, setToLoaded] = useState(false);

  const handleRest = () => {
    setOpacityStart(opacityEnd);
    setOpacityEnd(opacityStart);
  };

  useEffect(() => {
    //setPercentage(percentage + 1);
    console.log("hi");
  });

  useEffect(() => {
    if (percentage === 100) {
      setToLoaded(true);
    }
    return;
  }, [loaded]);

  const props = useSpring({
    opacity: opacityEnd,
    color: "red",
    from: { opacity: 0, color: "blue" },
    delay: 400,
    onRest: handleRest
  });
  console.log(percentage, loaded);
  return <h1>hi</h1>;
};

export default ProgressBar;
