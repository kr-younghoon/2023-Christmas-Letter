import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LetterPage from './Pages/LetterPage';
import IconPage from './Pages/IconPage';

function App() {
    return (
        <>
            <Router basename="/">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/2" element={<LetterPage />} />
                    <Route path="/3" element={<IconPage />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
