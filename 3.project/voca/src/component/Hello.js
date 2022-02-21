//1.
//const Hello = function () {
//    <p>Hello</p>;
//};
//2.
//const Hello = () => {
 //   <p>Hello</p>;
//};
//export default Hello;
//3
import World from "./World";
import style from "./Hello.module.css";
import { useState } from "react"; 

export default function Hello(props) {

    console.log(props);
    //let name = "Mike";
    // props.age = 100; 오류 발생
    const [name, setName] = useState("Mike");
    const [age, setAge] = useState(props.age);

    const msg = age > 19 ?"성인 입니다." : "미성년자 입니다.";

    function showName(){
        console.log("Mike");
    }

    function showAge(age) {
        //console.log(age);
    }

    function showTest(e){
        //console.log(e.target.value);
    }

    function changeName(){
        //name = name === "Mike" ? "Jane" : "Mike";
        //console.log(name);
        //document.getElementById("name").innerText = name;
        //const newName = name === "Mike" ? "Jane" : "Mike";
        setName(name === "Mike" ? "Jane" : "Mike");
        setAge(age + 1);
    }

    return (
        <div>
            {/* <h1 style=
            {{
                color: "#f00",
                borderRight: "2px solid #000",
                marginBottom: "50px",
                // 불투명도
                opacity: 0.5,
            }}>Hello</h1> */}
            {/* <h1>Hello</h1> */}
            {/* <World />
            <World /> */}
            {/* <div className="box">Hello</div> */}
            {/* module 사용하여 style from 불러와 style 분리 시키다 */}
            {/* <div className={style.box}>Hello</div> */}
            <button onClick={showName}>show name</button>
            <button
             onClick={() => {
                showAge(10);
             }}
            >show age
            </button>
            {/* <input type="text" onChange={showTest} /> */}
            <input type="text" onChange={(e)=>{
                console.log(e.target.value);
            }} />
            <p></p>
            <h1>state</h1>
            <h2 id="name">{name}({age}세) : {msg}
            </h2>
            <button onClick={changeName}>Change</button>
        </div>
    );
};