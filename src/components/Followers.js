
import React from 'react';
import Follower from './FollowerInfo';

const FollowerList = props => {

    return (
        <>
        {props.followers.map(follower => {
            return <Follower key={follower.id} follower={follower} />
        })}
        </>
    )
}

export default FollowerList;