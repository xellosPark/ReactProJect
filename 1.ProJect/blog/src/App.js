/* eslint-disable */ 
import React, {useState}  from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  //addEventListener('click',function(){
  // addEventListener('click',()=>{

  // })

  //let [글제목, 글제목변경] = useState('남자 코트 추천');
  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬독학']);
  let [글제목2, 글제목변경2] = useState('남자 코트 추천');
  let [따봉, 따봉변경] = useState(0);

  function 제목바꾸기(){
    //var newArray = 글제목에 있던 0번째데이터를 여자코트추천으로 바꿈
    var newArray = [...글제목];
    newArray[0] = "여자 코트 추천";
    글제목변경(newArray);
  }

  let posts = '강남 고기 맛집';
  let posts2 = { color : 'white', fontSize : '30px'}

  return (
    <div className="App">
      <div className="black-nav">
        <div style = { posts2 }>개발 Blog</div>
      </div>    
      <div className="list">
        {/* <h3>{ 글제목 [0] } <span onClick={()=>{ console.log(1) }}>👍</span> 0 </h3>  */}
        {<h3>{ 글제목 [0] } <span onClick={()=>{ 따봉변경 (따봉+ 1) }}>👍</span> {따봉} </h3>  }
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <button onClick = {제목바꾸기}>버튼</button>
      <div className="list">
        <h3>{ 글제목 [1]}</h3>
        <p>4월 11일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ 글제목 [2]}</h3>
        <p>3월 17일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
