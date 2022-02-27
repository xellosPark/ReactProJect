import { Link } from "react-router-dom";
import dummy from "../db/data.json"; // json 객체를 dummy 라는 변수에 넣어 임포트해준다.

export default function DayList(){
    console.log(dummy);
    return <ul className="list_day">
        { dummy.days.map(day => (
             <li key={day.id}>
                {/* <a href=""></a> => Link to 사용*/} 
                <Link to={`/day/${day.day}`}> Day {day.day} </Link>
             </li>
        ))}
    </ul>;
}