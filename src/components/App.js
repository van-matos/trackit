import { BrowserRouter, Routes, Route } from 'react-router-dom'

import TelaLogin from './TelaLogin';
import TelaCadastro from './TelaCadastro';
import TelaHabitos from './TelaHabitos';
import TelaHoje from './TelaHoje';
import TelaHistorico from './TelaHistorico';

import Header from './layouts/Header';
import Menu from './layouts/Menu';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<TelaLogin />} />
                <Route path="/cadastro" element={<TelaCadastro />} />
                <Route path="/habitos/:userId" element={<TelaHabitos />} />
                <Route path="/hoje/:userId" element={<TelaHoje />} />
                <Route path="/historico/:userId" element={<TelaHistorico />} />
            </Routes>
            <Menu />
        </BrowserRouter>
    );
}

export default App;