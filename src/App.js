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
            
        </div>
    );
}

export default App;
