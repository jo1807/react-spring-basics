import React from "react";
import styled from "styled-components";

import FadeInText from "./fadeInText";
import Content from "./test";
import ProgressBar from "./progress";
import Moon from "./moon";

const Wrapper = styled.div`
  background-color: red;
`;

const UseSpringExamples = () => {
  return (
    <>
      <FadeInText />
      <Content />
    </>
  );
};

export default UseSpringExamples;
