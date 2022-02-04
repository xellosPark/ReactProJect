import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';
import styles from './App.module.css';

function App() {
  // const name = "Tom";
  // // 숫자및 문자열 표시 가능
  // // bool,객처는 사용 불가
  // const user = {
  //   name: "jone",
  // };
  // const naver = {
  //   name: "네이버",
  //   url: "https://naver.com",
  // };
  // return <div className="App">
  //   <h1 style={{
  //       // color: "red",
  //       color: "#f0f",
  //       backgroundColor: "green",
  //     }}
  //   >
  //     Hello, {name}.<p>{2 + 3}</p>
  //     {/* 오류 발생 */}
  //     {/* <p>{user}</p> */}
  //     <p>{user.name}</p>
  //   </h1>
  //   <a href = {naver.url}>{naver.name}</a>
  // </div>;
  // 새로 시작 2022-0204-5시
  return <div className="App">
    {/* <Hello></Hello> */}
    <Hello />
    {/* <Welcome />
    <Hello />
    <Hello /> 
    */}
    <div className={styles.box}>App</div>
  </div>
}

export default App;
