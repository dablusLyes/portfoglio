import React from 'react';

const Header = ({toggleClose}) => {
    return (
        <div  className='Header'>
            <div className="nav-logo">LR</div>
            <div className='navigation'>
                <a>About</a>
                <a>Experience</a>
                <a onClick={toggleClose}>Contact</a>
            </div>
        </div>
    );
}

export default Header;
