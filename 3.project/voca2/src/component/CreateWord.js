import { useRef } from "react";
import { useNavigate } from "react-router-dom";
// 5v
// import { useHistory } from "react-router";
import useFetch from "../hooks/useFetch";

export default function CreateWord()	{
	const days = useFetch("http://localhost:3001/days");
	// 5v
	// const history =  useHistory();
	const history = useNavigate();
    

	// 버튼 클릭시 깜박이 없어짐
	function onSubmit(e){
		e.preventDefault();
		// console.log(engRef.current.value);
		// console.log(korRef.current.value);
		// console.log(dayRef.current.value);

		 // setIsDone(!isDone);
		 fetch(`http://localhost:3001/words/`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // 문자열 JSON
            body: JSON.stringify({
                day : dayRef.current.value,
                eng : engRef.current.value,
				kor : korRef.current.value,
				isDone : false
            }),
        })
        .then(res => {
            if (res.ok){
                alert("생성이 완료 되었습니다");
				//history.push(`/day/${dayRef.current.value}`);
				history(`/day/${dayRef.current.value}`);
            }
        });
	}

	const engRef = useRef(null);
	const korRef = useRef(null);
	const dayRef = useRef(null);

	// function onClick(){
    //     console.log("로그");;
    // }

	

	
	return (
		<form onSubmit={onSubmit}>
			<div class="input_area">
				<label>Eng</label>
				<input tpye="text" placeholder="computer" ref={engRef} />
			</div>
			<div class="input_area">
				<label>Kor</label>
				<input tpye="text" placeholder="컴퓨터" ref={korRef} />
			</div>
			<div class="input_area">
				<label>Day</label>
				<select ref={dayRef}>
					{ days.map(day => (
						<option key={day.id} value={day.day}>
							{day.day}
						</option>
					))}
					{/* <option>1</option>
					<option>2</option> */}
				</select>
			</div>
			<button>저장</button>
		</form>
    );
}