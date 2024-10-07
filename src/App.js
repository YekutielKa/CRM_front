import './App.css';
import Header from './header/Header';

function App() {
    return (
        <div className="App">
            <Header/>
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
