import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import "../css/reset.css";

import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import HabitsPage from './HabitsPage';
import TelaHoje from './TelaHoje';
import TelaHistorico from './TelaHistorico';
import UserContext from "../context/UserContext";

function App() {

    const [userData, setUserData] = useState({});
    
    return (
        <UserContext.Provider value={{userData, setUserData}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/cadastro" element={<SignUpPage />} />
                    <Route path="/habitos" element={<HabitsPage />} />
                    <Route path="/hoje" element={<TelaHoje />} />
                    <Route path="/historico" element={<TelaHistorico />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;