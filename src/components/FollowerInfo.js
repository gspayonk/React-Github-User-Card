import React from 'react';
import axios from 'axios';
import User from './User';

class Follower extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            follower: this.props.follower
        }
    }

componentDidMount() {
    axios

    .get(`https://api.github.com/users/${this.props.follower.login}`)
    
    .then((response => {
        this.setState({ follower: response.data })
    }))

    .catch(error => {
        console.log('We have an error!', error);
    })
}

render() {
    return (
    <User userData={this.state.follower} />
    )
}
}

export default Follower;