import './App.css';

function App() {
    return (
        <div className="App">
            <header className="header">
                <img className="header_logo" src="logo.svg" alt="logo" />
                <div className="header_search">
                    <img
                        className="header_search_svg"
                        src="search.svg"
                        alt="search"
                    />
                    <text className="header_search_placeholder">Search</text>
                </div>
                <text className='header_signout'>Sign out</text>
            </header>
            <div className='content'>
                <div className='content_navigate'>
                    <div className='content_navigate_create'><div>Create</div></div>
                    <div className='content_navigate_active'><div>Active</div></div>
                    <div className='content_navigate_contacts'><div>Contacts</div></div>
                    <div className='content_navigate_group'><div>Group</div></div>
                    <div className='content_navigate_students'><div>Students</div></div>
                    <div className='content_navigate_lecturers'><div>Lecturers</div></div>
                </div>
                <div className='content_data'>

                </div>

            </div>
            
        </div>
    );
}

export default App;
