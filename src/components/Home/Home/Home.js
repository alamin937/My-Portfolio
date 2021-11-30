import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import ContactMe from '../ContactMe/ContactMe';
import MySkills from '../MySkills/MySkills';
import NavBar from '../NavBar/NavBar';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div style={{backgroundColor:'#2F1A2F '}} id='home'>
            <NavBar></NavBar>
            <Banner></Banner>
            <MySkills></MySkills>
            <Projects></Projects>
            <About></About>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;