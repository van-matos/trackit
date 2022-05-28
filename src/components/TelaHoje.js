import styled from "styled-components";

import TopBar from "./TopBar";
import Menu from "./Menu";
import Checkmark from "../assets/checkmark.png"

function TelaHoje() {
    return (
        <>
            <TopBar />
            <Content>
                <h1>Segunda, 17/05</h1>
                <h2>Nenhum hábito concluído ainda</h2>
                <Habit>
                    <div>
                        <h1>Ler 1 capítulo de livro</h1>
                        <p>Sequência atual: 3 dias</p>
                        <p>Seu recorde: 5 dias</p>
                    </div>
                    <Icon><img src={Checkmark} alt="Checkmark"/></Icon>
                </Habit>
            </Content>
            <Menu />
        </>
        
    );
}

const Content = styled.div`
    background: #E5E5E5;;
    padding: 98px 15px;
    box-sizing: border-box;

    h1 {
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
    }

    h2 {
        margin-bottom: 30px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #BABABA;
    }

    h3 {
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #8FC549;
    }
`

const Habit = styled.div`
    width: 340px;
    height: 94px;
    padding: 15px;
    box-sizing: border-box;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #666666;
    }

    p {
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;
        color: #666666;
    }
`

const Icon = styled.div`
    box-sizing: border-box;
    width: 69px;
    height: 69px;
    background: #EBEBEB;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 35px;
        height: 28px;
    }
`

export default TelaHoje;