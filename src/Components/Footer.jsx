import React from 'react';

const date = new Date().toLocaleDateString();

const Footer = () => {

    return (
        <div>
            <footer id="footer"> Last Edited: {date}</footer>
        </div>
        
    );
}

export default Footer;
