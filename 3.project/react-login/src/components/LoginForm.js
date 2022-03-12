import React, { useState } from 'react'

function LoginForm({ Login, error}) {
  const [details, setDetails] = useState({name: "", email: "", password: ""});
  const submitHandler = e =>{
    // html 에서 a 태그나 submit 태그는 고유의 동작이 있다. 페이지를 이동시킨다거나
    // form 안에 있는 input 등을 전송한다던가 그러한 동작이 있는데 e.preventDefault
    // 는 그 동작을 중단시킨다.
    e.preventDefault();

    Login(details);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
          <h2>Loging</h2>
          {/* Error! */}
          <div className="form-group">
            {/* htmlfor :  htmlFor에 input의 아이디나 네임을 적어 인풋과 연결합니다.  */}
            <label htmlfor="name">Name:</label>
            <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
          </div>
          <div className="form-group">
            <label htmlfor="email">Email: </label>
            <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
          </div>
          <input type="submit" value="LOGIN" />
      </div>
    </form>
  )
}

export default LoginForm