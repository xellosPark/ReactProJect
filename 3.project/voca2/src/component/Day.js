// import dummy from "..//db/data.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Word from "./Word";

export default function Day(){
    // dummy.words
    const { day } = useParams();
    // const day = useParams().day;
    // const day = a.day;
    // const [words, setWords] = useState([]);

    // 문자와 숫자를 비교 word.day 숫자
    //const wordList = dummy.words.filter(word => word.day === day);
    // const wordList = dummy.words.filter(word => word.day === Number(day));
    
    // const a = useParams();
    // console.log(a);
    // useEffect(() => {
    //     fetch(`http://localhost:3001/words?day=${day}`)
    //         .then(res => { 
    //             return res.json();
    //         })
    //         .then(data => {
    //             setWords(data);
    //         });
    // }, [day]);

    const words = useFetch(`http://localhost:3001/words?day=${day}`);

    return(
        <>
            <h2>Day {day}</h2>
            {words.length === 0 && <span>Loading...</span>}
            <table>
                <tbody>
                    {/* {dummy.words.map((word) => ( */}
                    {/* {wordList.map((word) => ( */}
                    {words.map((word) => (
                       <Word word={word} key={word.id} />
                    ))}
                </tbody>
            </table>
        </>
    );
}