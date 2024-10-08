import './App.css';
import Content from './components/content/Content';
import Header from './components/header/Header';
import Navigate from './components/navigate/Navigate';

function App() {
    return (
        <>
            <Header />
            <div className="wrapper">
                <Navigate />
                <Content />
            </div>
        </>
    );
}

export default App;
