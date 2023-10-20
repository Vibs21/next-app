import React from 'react'

interface User {
  id: number,
  name: string
}

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();
  console.log('hello')
  return (
    <>
      <div> UserPage </div>
      <ul>
        {users.map(user => 
        <li key={user.id}>
          <h2>{user.name}</h2>
        </li>)}
      </ul>
    </>

  )
}

export default UsersPage