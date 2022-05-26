import styled from "styled-components";

function TelaHistorico() {
    return (
        <Content>
            <h1>Histórico</h1>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </Content>
    );
}

const Content = styled.div`
    background: #E5E5E5;;
    padding: 70px 15px;
    box-sizing: border-box;

    h1 {
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
        margin-top: 28px;
    }

    p {
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #666666;
        margin-top: 17px;
    }
`

export default TelaHistorico;