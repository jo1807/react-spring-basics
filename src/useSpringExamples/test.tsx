import React, { useState, useEffect } from "react";
import { animated, useSpring } from "react-spring";
import { Spring } from "react-spring/renderprops";
import styled from "styled-components";

const Content = (props: any) => {
  const [running, setRunning] = useState(1); // 0 reset, 1 run
  useEffect(() => {
    if (running === 0) {
      setRunning(1);
    }
  }, [running === 0]);

  return (
    <div>
      <Spring
        delay={1200}
        // config={SpringCfg.wobbly}
        reset={running === 0}
        // onRest={() => {
        //   setRunning(0);
        // }}
        from={{ opacity: 0, letterSpacing: "0px" }}
        to={{ opacity: 1, letterSpacing: "27px" }}
      >
        {(props: any) => (
          <div style={{ ...props, fontSize: "22px" }}>hello</div>
        )}
      </Spring>
    </div>
  );
};

export default Content;
