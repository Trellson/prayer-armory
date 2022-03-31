import React, { Component } from 'react';
import axios from 'axios';
import '../styles/pageStyles/home.scss'


class Home extends Component  {
state = {
    todaysPost : [],
    prayers : []
};

 todaysPrayer = () => {
        axios.get(
        'https://uncovered-treasure-v1.p.rapidapi.com/today', { headers: {
            'X-RapidAPI-Host': 'uncovered-treasure-v1.p.rapidapi.com',
            'X-RapidAPI-Key': 'f7d1b6d8aamsh2d278a09daadf8ep11fac8jsn76bc896410dd'
          }})
    .then((response) => {
        console.log(response.data.results[0].text);
        this.setState({
          todaysPost: response.data.results[0].text
        })
    //.catch((err) => {console.log(err)});
});
 }

    componentDidMount(){
        this.todaysPrayer();
    };

    render(){
        return (
            <div className="home">
                <div className="home__info-block">
                    <p className="home__info-block--line">Welcome to the Prayer Armory!</p>
                    <p className="home__info-block--line">Every prayer Warrior needs to visit the Armory to gather supplies!</p>
                    <p className="home__info-block--line">This battle against the principalities of Darkness is not an easy one!</p>
                    <p className="home__info-block--line">Come in! Find Rest! Get what you need!</p>
                </div>
                <div className="Home__middle">
                    <p>{this.state.todaysPost}</p>
                </div>
            </div>
        );
    }
}

export default Home;