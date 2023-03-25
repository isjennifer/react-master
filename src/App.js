import styled from "styled-components";

const Father = styled.div`
  display : flex;
`;

const Btn = styled.button`
  background-color : teal;
`;

// Input 안에 중복되는 속성을 넣고 싶은 경우 return 안의 Input에 다 넣을 필요 없이 attrs를 사용하면 됨
const Input = styled.input.attrs({required : true, maxLength : 10})`
  background-color : tomato;
`;

function App() {
  return (
    <Father>
      {/* Btn은 button이지만 다른 html 태그로 바꾸고 싶을때 as 속성을 사용하면 됨  */}
      <Btn as="a" href="/">Log In</Btn>
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default App;
