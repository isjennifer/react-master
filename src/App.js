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
    transform:rotate(180deg);
  }
  100% {
    border-radius : 0px;
    transform : rotate(360deg);
  }
`;

const Box = styled.div`
  background-color : tomato;
  width : 200px;
  height : 200px;
  display : flex;
  justify-content : center;
  align-items : center;
  animation : ${rotateAnimation} 1s linear infinite;
  span {
    font-size: 40px;
    &:hover {
      font-size: 60px;
    }
    &:active {
      opacity: 0;
    }
  };
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <span>😀</span>
      </Box>
    </Wrapper>
  );
}

export default App;
