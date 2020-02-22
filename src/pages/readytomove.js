import React from 'react';
import Navbarabc from '../Components/Navbar';
import Footerabc from '../Components/Foooter';
import '../GlobalStyle/main.css';

const readytomove = () => {
    return (
        <div>
            <Navbarabc/>
            <h1>I am from the ready to move</h1>
            <Footerabc/>
        </div>
    );
};

export default readytomove;

