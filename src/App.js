import styled from "styled-components";

const Wrapper = styled.div`
  display : flex;
  height : 100vh;
  width : 100vw;
  justify-content : center;
  align-items : center;
  background-color : ${(props) => props.theme.bgColor};
`;

const Text = styled.span`
  color : ${(props) => props.theme.textColor};
  font-size : 50px;
`;


function App() {
  return (
    <Wrapper>
      <Text>Hello</Text>
    </Wrapper>
  );
}

export default App;
