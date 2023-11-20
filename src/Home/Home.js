import './Home.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

class Home extends React.Component {
    // handleClick = () =>{
      
    // }
    render() {
        return (
            <div className="container">
                <div className="container-left">
                    <h1><span className="exopet">Mengenal</span> Exotic Pets</h1>
                    <p>Saat ini pemeliharaan hewan exotic sudah mulai banyak diminati. 
                    Banyak hewan yang sebelumnya tidak biasa dipelihara seperti reptil justru menjadi daya tarik tersendiri.
                    Hingga saat ini semakin banyak hewan exotic yang diminati seperti reptil, amphibi, dan serangga</p>
                    <div className="btn3">
                    <NavLink to="/Main"><button className="btn">Explore</button></NavLink>
                    </div>
                </div>
                <div className="container-right">
                    <img src="/iguana.png" alt="exopet"/>
                </div>
                <Navbar/>
            </div>
            
        );
    }
}

export default Home;