import React, { Component } from 'react';

class Navigate extends Component {
    render() {
        return (
            <div className="content">
                <div className="content_navigate">
                    <div className="content_navigate_create">
                        <div>Create</div>
                    </div>
                    <div className="content_navigate_active">
                        <div>Active</div>
                    </div>
                    <div className="content_navigate_contacts">
                        <div>Contacts</div>
                    </div>
                    <div className="content_navigate_group">
                        <div>Group</div>
                    </div>
                    <div className="content_navigate_students">
                        <div>Students</div>
                    </div>
                    <div className="content_navigate_lecturers">
                        <div>Lecturers</div>
                    </div>
                </div>
                <div className="content_data"></div>
            </div>
        );
    }
}

export default Navigate;
