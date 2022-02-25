import dummy from "../db/data.json"; // json 객체를 dummy 라는 변수에 넣어 임포트해준다.

export default function DayList(){
    console.log(dummy);
    return <ul className="list_day">
        { dummy.days.map(day => (
             <li key={day.id}> Day {day.day} </li>
        ))}
    </ul>;
}