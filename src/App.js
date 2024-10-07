import './App.css';
import Header from './components/header/Header';
import Navigate from './components/navigate/Navigate';

function App() {
    return (
        <>
            <Header />
            <div className="content_wrapper">
                <Navigate />
            </div>
        </>
    );
}

export default App;
