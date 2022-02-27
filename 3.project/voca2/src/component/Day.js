import dummy from "..//db/data.json";
import { useParams } from "react-router-dom";
import Word from "./Word";

export default function Day(){
    // dummy.words
    const { day } = useParams();
    // const day = useParams().day;
    // const day = a.day;

    // 문자와 숫자를 비교 word.day 숫자
    //const wordList = dummy.words.filter(word => word.day === day);
    const wordList = dummy.words.filter(word => word.day === Number(day));
    
    // const a = useParams();
    // console.log(a);
    return(
        <>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                    {/* {dummy.words.map((word) => ( */}
                    {wordList.map((word) => (
                       <Word word={word} key={word.id} />
                    ))}
                </tbody>
            </table>
        </>
    );
}