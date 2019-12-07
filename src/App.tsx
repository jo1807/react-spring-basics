import React from "react";
import styled from "styled-components";

import UseSpringExamples from "./useSpringExamples";

const Wrapper = styled.div`
  background-color: pink;
  height: 100vh;
  margin: 0;
  overflow: hidden;
`;

function App() {
  return (
    <Wrapper>
      <UseSpringExamples />
    </Wrapper>
  );
}

export default App;
