import React from 'react';
import axios from 'axios';
import User from './components/User';
import Followers from './components/Followers';
import './styles.css';

class App extends React.Component{

    constructor() {
        super();
        this.state ={
            user: {},
            followers: [],
            follower: {}
        };
    }

fetchFollowers = url => {
    axios
        .get(url)

        .then(response => {
            this.setState({
                followers: response.data
            })
        })

        .catch(error => {
        console.log('We have an error!', error);
        })
}


componentDidMount() {

    axios
    .get('https://api.github.com/users/gspayonk')

    .then(response => {
        this.setState({
        user: response.data
        })
        this.fetchFollowers(response.data.followers_url);
    })

    .catch(error => {
        console.log('We have an error!', error);
    })
}

render() {

    return (    
    <div className="App">

        <h1>Github User Card</h1>

        <div className="user">
            <User userData={this.state.user} />
        </div>

        <h2>Followers: </h2>

        <div className="followers">
            <Followers followers={this.state.followers} />
        </div>

    </div>
    );
}
}

export default App;
