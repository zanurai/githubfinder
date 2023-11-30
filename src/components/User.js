import React from 'react'
//import axios from 'axios'
const UserList = (props) => {
    const { avatar_url, login, html_url, bio } = props.user
    return (
        <div className="user">
            <img src={avatar_url} alt={login}></img>
            <h2>{login}</h2>
            <p>{bio}</p>
            <a href={html_url}>view profile</a>
        </div>
    )
}

const User = (props) => {
    return (
        <div className="Userlist">
            {props.users.map((user) => (
                <UserList user={user} key={user.id} />
            ))}
        </div>
    )
}

export default User
