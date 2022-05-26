import { BrowserRouter, Routes, Route } from 'react-router-dom'

import "../css/reset.css";

import TelaLogin from './TelaLogin';
import TelaCadastro from './TelaCadastro';
import TelaHabitos from './TelaHabitos';
import TelaHoje from './TelaHoje';
import TelaHistorico from './TelaHistorico';

import Topo from './Topo';
import Menu from './Menu';

function App() {
    return (
        <BrowserRouter>
            <Topo />
            <Routes>
                <Route path="/" element={<TelaLogin />} />
                <Route path="/cadastro" element={<TelaCadastro />} />
                <Route path="/habitos" element={<TelaHabitos />} />
                <Route path="/hoje" element={<TelaHoje />} />
                <Route path="/historico" element={<TelaHistorico />} />
            </Routes>
            <Menu />
        </BrowserRouter>
    );
}

export default App;