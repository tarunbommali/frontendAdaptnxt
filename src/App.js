import { useState } from 'react';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';

import './App.css';

function App() {
    const [isOpenMenu, setOpenMenu] = useState(true);

    return (
        <Router>
            <Header onToggleMenu={() => setOpenMenu(!isOpenMenu)} />
            <Routes>
                <Route path="/" element={<Dashboard isOpenMenu={isOpenMenu} />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
