import React, { Component } from 'react';
import Search from './Search';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img className="header_logo" src="logo.svg" alt="logo" />
                <Search />
                <p className="header_signout">Sign out</p>
            </div>
        );
    }
}

export default Header;
