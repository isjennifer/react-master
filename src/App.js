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

const BoxSm = styled.div`
  background-color : teal;
  width : 100px;
  height : 100px;
  display : flex;
  justify-content : center;
  align-items : center;
  animation : ${rotateAnimation} 1s linear infinite; 
`;

const Box = styled.div`
  background-color : tomato;
  width : 200px;
  height : 200px;
  display : flex;
  justify-content : center;
  align-items : center;
  animation : ${rotateAnimation} 1s linear infinite;
  ${BoxSm} {
    &:hover {
      background-color : black;
    }
  }
`;



function App() {
  return (
    <Wrapper>
      <Box>
        <BoxSm></BoxSm>
      </Box>
    </Wrapper>
  );
}

export default App;
