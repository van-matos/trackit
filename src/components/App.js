import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import "../css/reset.css";

import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import HabitsPage from './HabitsPage';
import DailyPage from './DailyPage';
import HistoryPage from './HistoryPage';

import UserContext from "../context/UserContext";
import CompletedHabits from "../context/CompletedHabits";

function App() {

    const [userData, setUserData] = useState({});
    const [completedHabits, setCompletedHabits] = useState();
    
    return (
        <UserContext.Provider value={{userData, setUserData}}>
            <CompletedHabits.Provider value={{completedHabits,setCompletedHabits}}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/cadastro" element={<SignUpPage />} />
                        <Route path="/habitos" element={<HabitsPage />} />
                        <Route path="/hoje" element={<DailyPage />} />
                        <Route path="/historico" element={<HistoryPage />} />
                    </Routes>
                </BrowserRouter>
            </CompletedHabits.Provider>
        </UserContext.Provider>
    );
}

export default App;