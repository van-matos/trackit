import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import "../css/reset.css";

import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import TelaHabitos from './TelaHabitos';
import TelaHoje from './TelaHoje';
import TelaHistorico from './TelaHistorico';
import UserContext from "../context/UserContext";

function App() {

    const [userData, setUserData] = useState({});
    
    return (
        <UserContext.Provider value={{userData, setUserData}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginScreen />} />
                    <Route path="/cadastro" element={<SignUpScreen />} />
                    <Route path="/habitos" element={<TelaHabitos />} />
                    <Route path="/hoje" element={<TelaHoje />} />
                    <Route path="/historico" element={<TelaHistorico />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;