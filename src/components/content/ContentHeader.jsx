import React, { Component } from 'react';

class Content_header extends Component {
    render() {
        return (
            <div className="content_header">
                <select className="sortBy" name="sort_by">
                    <option value="">Status</option>
                    <option value="lead">Lead</option>
                    <option value="in_work">In Work</option>
                    <option value="consultation">Consultation</option>
                    <option value="save_for_later">Save for later</option>
                    <option value="student">Student</option>
                    <option value="archive">Archive</option>
                </select>
            </div>
        );
    }
}

export default Content_header;
