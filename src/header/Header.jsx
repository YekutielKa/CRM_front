import React, { Component } from 'react';
import Search from './Search';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <img className="header_logo" src="logo.svg" alt="logo" />
                <Search />
                <text className="header_signout">Sign out</text>
            </header>
        );
    }
}

export default Header;
