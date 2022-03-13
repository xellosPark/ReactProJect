import React from 'react'

function Customer(props) {
  console.log(props);
  return (
    <div>
      <CustomerProfile id={props.id} image={props.image} name={props.name} />
      <CustomerInfo birthday={props.birthday} gender={props.gender} job={props.job}/>
    </div>
  )
}

function CustomerProfile( Profile ) {
  // console.log(Profile);
  return (
    <div>
      <img src={Profile.image} alt="profile" />
      <h2>{Profile.name}({Profile.id})</h2>
    </div>
  )
}

function CustomerInfo ( ProInfo ) {
  return (
    <div>
      <p>{ProInfo.birthday}</p>
      <p>{ProInfo.gender}</p>
      <p>{ProInfo.job}</p>
    </div>
  )
}

export default Customer