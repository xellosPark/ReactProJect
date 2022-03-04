import { useState } from "react";
// 새로운 변수명으로 설정
export default function Word({ word: w }) {
//export default function Word({ props }) {
    const [word, setWord] = useState(w);
    //const [word, setWord] = useState(props.word);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    function toggleShow() {
        setIsShow(!isShow);
    }

    function toggleDone(){
        // setIsDone(!isDone);
        fetch(`http://localhost:3001/words/${word.id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            // 문자열 JSON
            body: JSON.stringify({
                ...word,
                isDone: !isDone,
            }),
        })
        .then(res => {
            if (res.ok){
                setIsDone(!isDone);
            }
        });
    }

    function del(){
        console.log("del change");
        if(window.confirm('삭제 하시겠습니다?')){
            fetch(`http://localhost:3001/words/${word.id}`,{
                method: "DELETE",
            }).then(res => {
                if(res.ok){
                    setWord({ id: 0 });
                }
            });
        }
    }

    if (word.id === 0) {
        return null;
    } 

    return (
        <tr className={isDone ? "off" : ""}>
            <td>
                <input type="checkbox" checked={isDone} onChange={toggleDone}/>
            </td>
            <td>{word.eng}</td>
            <td>{isShow && word.kor}</td>
            <td>
                <button onClick={ toggleShow }>답 { isShow ? "숨기기" : "보기" } </button>
                <button onClick={ del } className="btn_del">삭제</button>
            </td>
        </tr>
    );
}