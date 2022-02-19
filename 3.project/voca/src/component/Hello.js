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

export default function Hello() {
    function showName(){
        console.log("Mike");
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
            <h1>Hello</h1>
            {/* <World />
            <World /> */}
            {/* <div className="box">Hello</div> */}
            {/* module 사용하여 style from 불러와 style 분리 시키다 */}
            {/* <div className={style.box}>Hello</div> */}
            <button onClick={showName}>show name</button>
            <button
             onClick={() => {
                 console.log(30);
             }}
            >show age</button>
        </div>
    );
};