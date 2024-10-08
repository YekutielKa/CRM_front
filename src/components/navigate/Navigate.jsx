import React, { Component } from 'react';

class Navigate extends Component {
    render() {
        return (
            <>
                <div className="navigate">
                    <div className="navigate_create">
                        <div>Create</div>
                    </div>
                    <div className="navigate_active">
                        <div>Active</div>
                    </div>
                    <div className="navigate_contacts">
                        <div>Contacts</div>
                    </div>
                    <div className="navigate_group">
                        <div>Group</div>
                    </div>
                    <div className="navigate_students">
                        <div>Students</div>
                    </div>
                    <div className="navigate_lecturers">
                        <div>Lecturers</div>
                    </div>
                </div>
            </>
        );
    }
}

export default Navigate;
