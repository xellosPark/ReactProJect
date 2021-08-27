
import React, {useState}  from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  //let [글제목, 글제목변경] = useState('남자 코트 추천');
  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬독학']);
  let [글제목2, 글제목변경2] = useState('남자 코트 추천');

  let posts = '강남 고기 맛집';
  let posts2 = { color : 'white', fontSize : '30px'}

  return (
    <div className="App">
      <div className="black-nav">
        <div style = { posts2 }>개발 Blog</div>
      </div>
      <div className="list">
        <h3>{ 글제목 [0]}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ 글제목 [1]}</h3>
        <p>4월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ 글제목 [2]}</h3>
        <p>6월 17일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
