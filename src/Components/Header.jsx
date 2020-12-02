import React from 'react';

const name = "Abdul";

const Header = () => {
    return (

    <header className="NavBar">
        <img src = "logo.png" alt="QA Logo"/>
        <p>Welcome to {name}'s page</p>
    </header>
 
    )
}

export default Header;
