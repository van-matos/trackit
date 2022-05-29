import styled from "styled-components";

import MenuBar from "./MenuBar";
import TopBar from "./TopBar";

function HistoryPage() {
    return (
        <>
            <TopBar />
            <Content>
                <h1>Histórico</h1>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </Content>
            <MenuBar />
        </>
    );
}

const Content = styled.div`
    box-sizing: border-box;
    min-height: 100vh;
    padding: 70px 15px;
    background: #E5E5E5;

    h1 {
        margin-top: 28px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
    }

    p {
        margin-top: 17px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #666666;
    }
`

export default HistoryPage;