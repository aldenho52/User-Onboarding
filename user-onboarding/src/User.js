import React from 'react'

function User({ details }) {
  if (!details) {
    return <h3>Working fetching your user&apos;s details...</h3>
  }

  return (
    <div className='user-container'>
      <h2>{details.username}</h2>
      <p>Email: {details.email}</p>
      <p>Password: {details.password}</p>
      <p>Character: {details.role}</p>
      <p>Server: {details.server}</p>
      <p>Gender: {details.gender}</p>
      <p>Hell Mode? {details.hellmode ? 'ON' : 'OFF'}</p>
    </div>
  )
}

export default User


// {
//     !!details.hobbies && !!details.hobbies.length &&
//     <div>
//       Hobbies:
//       <ul>
//         {details.hobbies.map((like, idx) => <li key={idx}>{like}</li>)}
//       </ul>
//     </div>
//   }