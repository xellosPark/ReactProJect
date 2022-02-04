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

export default function Hello(){
    return (
        <div>
            <h1>Hello</h1>
            <World />
            <World />
        </div>
    );
};