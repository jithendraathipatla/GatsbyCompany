import React from 'react';
import NavbarComponent from '../Components/Navbar';
import FooterComponent from '../Components/Foooter';

const Layout = (props) => {
    return (
        <div>
          <NavbarComponent/>
            {props.children}
          <FooterComponent/>
        </div>
    );
};

export default Layout;