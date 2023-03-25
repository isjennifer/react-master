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
  background-color : ${(props) => props.bgColor};
  width : ${(props) => props.width};
  height : 200px;
  display : flex;
  justify-content : center;
  align-items : center;
  animation : ${rotateAnimation} 1s linear infinite;
`;


function App() {
  return (
    <Wrapper>
      <Box bgColor="tomato" width="200px"/>
      <Box bgColor="black" width="100px"/>
      <Box bgColor="teal" width="50px"/>
      <Box bgColor="green" width="200px"/>
      <Box bgColor="yellow" width="10px"/>
      <Box bgColor="tomato" width="300px"/>
    </Wrapper>
  );
}

export default App;
