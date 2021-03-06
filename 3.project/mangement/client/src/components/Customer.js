import React from 'react'
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

function Customer( User ) {
  // console.log(User);
  return (
    <TableRow>
      <TableCell>{User.id}</TableCell>
      <TableCell><img src={User.image} alt="profile" /> </TableCell>
      <TableCell>{User.name}</TableCell>
      <TableCell>{User.birthday}</TableCell>
      <TableCell>{User.gender}</TableCell>
      <TableCell>{User.job}</TableCell>
    </TableRow>
  )
}

// function Customer( User ) {
//   // console.log(User);
//   return (
//     <div>
//       <CustomerProfile id={User.id} image={User.image} name={User.name} />
//       <CustomerInfo birthday={User.birthday} gender={User.gender} job={User.job}/>
//     </div>
//   )
// }

// function CustomerProfile( Profile ) {
//   // console.log(Profile);
//   return (
//     <div>
//       <img src={Profile.image} alt="profile" />
//       <h2>{Profile.name}({Profile.id})</h2>
//     </div>
//   )
// }

// function CustomerInfo ( ProInfo ) {
//   return (
//     <div>
//       <p>{ProInfo.birthday}</p>
//       <p>{ProInfo.gender}</p>
//       <p>{ProInfo.job}</p>
//     </div>
//   )
// }

export default Customer