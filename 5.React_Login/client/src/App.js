import { Container } from "react-bootstrap";
import Layout from "./layouts/Layout";

function App() {
  // Container 가운데 쪽으로 
  return (
    <Layout>
      {/* vh & vw (vertical height & vertical width) */}
      {/* 바로 vh와 vw 단위가 그런 의도에 맞는 단위이고 vh 
      요소는 높이값의 100분의 1의 단위입니다. 예를 들어 브라우저
      높이값이 900px일때 1vh는 9px이라는 뜻이 되지요.
      그와 유사하게 뷰포트의 너비값이 750px이면 1vw는 7.5px이 됩니다.*/}
      <Container style={{ minHeight: "85vh"}}>App</Container>
    </Layout>
  );
}

export default App;
