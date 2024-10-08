import React, { Component } from 'react';
import ContentHeader from './ContentHeader';
import StudentMin from './StudentMin';

class Content extends Component {
    render() {
        return (
            <div className="content">
                <ContentHeader />
                <div className="content_students">
                    <StudentMin />
                    <StudentMin />
                    <StudentMin />
                    <StudentMin />
                    <StudentMin />
                    <StudentMin />
                </div>
            </div>
        );
    }
}

export default Content;
