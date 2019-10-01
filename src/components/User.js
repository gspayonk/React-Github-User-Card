import React from 'react';

const User = (props) => {

    const { avatar_url, bio, login, created_at, followers, html_url } = props.userData;
    
    return (
    <div>
        <div src={avatar_url} />
        
        <div>{login}</div>

        <div>
            <span className='date'>Joined on {created_at}</span>
        </div>

        <div>
            {bio}
        </div>

        <div>
        <a href={html_url}>
            <div name='user' /> Followed by {followers} users
        </a>
        </div>

    </div>
)
}

export default User;