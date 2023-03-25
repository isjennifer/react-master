import styled, {keyframes} from "styled-components";

const Wrapper = styled.div`
  display : flex;
`;
const rotateAnimation = keyframes`
  0% {
    border-radius : 0px;
    transform : rotate(0deg);
  }
  50% {
    border-radius : 100px;
    transform:rotate(360deg);
  }
  100% {
    border-radius : 0px;
    transform : rotate(0deg);
  }
`;

const Box = styled.div`
  background-color : tomato;
  width : 200px;
  height : 200px;
  animation : ${rotateAnimation} 1s linear infinite
`;

function App() {
  return (
    <Wrapper>
      <Box />
    </Wrapper>
  );
}

export default App;
