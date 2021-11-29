import React from 'react';
import Banner from '../Banner/Banner';
import ContactMe from '../ContactMe/ContactMe';
import MySkills from '../MySkills/MySkills';
import NavBar from '../NavBar/NavBar';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div id='home'>
            <NavBar></NavBar>
            <Banner></Banner>
            <MySkills></MySkills>
            <Projects></Projects>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;