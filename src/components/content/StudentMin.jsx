import React, { Component } from 'react';

class StudentMin extends Component {
    render() {
        return (
            <div className="studentMin">
                <div className="studentMin_name">
                    <img src="circle-green.svg" alt="circle" />
                    <p>Name Surname</p>
                    <div className="studentMin_bell">
                        <img src="bell-white.svg" alt="" />
                    </div>
                </div>
                <div className="studentMin_info">
                    <img src="smartphone.svg" alt="phone" />
                    <p>055-555-55-55</p>
                    <img src="whatsapp.svg" alt="whatsapp" />
                    <div className="studentMin_location">
                        <img src="location.svg" alt="location" />
                        <p>Rehovot</p>
                    </div>
                </div>
                <div className="studentMin_email">
                    <img src="email.svg" alt="email" />
                    <p>email@email.com</p>
                    <div className="studentMin_book">
                        <img src="book.svg" alt="" />
                        <p>FSD</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default StudentMin;
