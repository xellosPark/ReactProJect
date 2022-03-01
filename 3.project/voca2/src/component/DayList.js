import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
//import dummy from "../db/data.json"; // json 객체를 dummy 라는 변수에 넣어 임포트해준다.

export default function DayList() {
//    console.log(dummy); 
//    const [days, setDays] = useState([]);
//  const [count, setCount] = useState(0);

    // function onClick(){
    //     setCount(count + 1);
    // }

    // function onClick2(){
    //     setDays([
    //         ...days,
    //         {
    //             id: Math.random(),
    //             day:1,
    //         },
    //     ]);
    // }
    
    //유저이펙트
    const days = useFetch(`http://localhost:3001/days`);
    // useEffect(() => {
    //     //console.log("Count change");
    //     // fetch 비동기
    //     // const fetchResponsePromise = fetch(resource [, init])
    //     fetch(`http://localhost:3001/days`)
    //     //.then (promise)프라미스
    //     //Return value
    //     //A Promise that resolves to a Response object.
    //         .then(res => { 
    //             return res.json();
    //         })
    //         .then(data => {
    //             setDays(data);
    //         });
    // },[]); 
    // useEffect 를 사용 할 때에는 첫번째 파라미터에는 함수,
    // 두번째 파라미터에는 의존값이 들어있는 배열 (deps)을 넣습니다.
    // 만약에 deps 배열을 비우게 된다면, 컴포넌트가 처음 나타날때에만
    // useEffect 에 등록한 함수가 호출됩니다.
    // 그리고, useEffect 에서는 함수를 반환 할 수 있는데 이를 cleanup 함수라고 부릅니다. cleanup 함수는 useEffect 에 대한 뒷정리를 해준다고 이해하시면 되는데요,
    // deps 가 비어있는 경우에는 컴포넌트가 사라질 때 cleanup 함수가 호출됩니다.
    // [count] deps 에 특정 값 넣기
    // deps 에 특정 값을 넣게 된다면, 컴포넌트가 처음 마운트 될 때에도 호출이 되고,
    // 지정한 값이 바뀔 때에도 호출이 됩니다. 그리고, deps 안에 특정 값이 있다면
    // 언마운트시에도 호출이되고, 값이 바뀌기 직전에도 호출이 됩니다.
    // [] 처음 호출시에만 호출

    return (
        <> 
            <ul className="list_day">
                {/* { dummy.days.map(day => ( */}
                { days.map(day => (
                    <li key={day.id}>
                        {/* <a href=""></a> => Link to 사용*/} 
                        <Link to={`/day/${day.day}`}> Day {day.day} </Link>
                    </li>
                ))}
            </ul>
            {/* <button onClick={onClick}>{count}</button>
            <button onClick={onClick2}>Day change</button> */}
        </>
    );
}

/**
 * REST API
 * 
 * Create : POST
 * Read : GET
 * Update : PUT
 * Delete : DELETE
 */