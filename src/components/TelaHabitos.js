import styled from "styled-components";

function TelaHabitos() {
    return (
        <Content>
            <Top>
                <h1>Meus Hábitos</h1>
                <Icon><ion-icon name="add-outline"></ion-icon></Icon>
            </Top>
            <Habit>
                <input placeholder="nome do hábito" />
                <Week>
                    <Day><h2>D</h2></Day>
                    <Day><h2>D</h2></Day>
                    <Day><h2>D</h2></Day>
                    <Day><h2>D</h2></Day>
                    <Day><h2>D</h2></Day>
                    <Day><h2>D</h2></Day>
                </Week>
                <Buttons>
                    <h2>Cancelar</h2>
                    <Save>
                        <h2>Salvar</h2>
                    </Save>
                </Buttons>
            </Habit>
            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
        </Content>
    );
}

const Content = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 70px 20px;
    box-sizing: border-box;
    background: #E5E5E5;
    

    p {
        font-family: 'Lexend Deca';
        margin-top: 30px;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }
`

const Top = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 20px 0 20px;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
`

const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 35px;
    background: #52B6FF;
    border-radius: 5px;

    ion-icon {
        font-weight: 400;
        font-size: 27px;
        line-height: 34px;
        color: #FFFFFF;
    }
`

const Habit = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 340px;
    height: 180px;
    margin-top: 20px;
    background: #FFFFFF;
    border-radius: 5px;

    input {
        box-sizing: border-box;
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        padding-left: 11px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;

        &::placeholder {
            color: #DBDBDB;
        }
    }
`

const Week = styled.div`
    box-sizing: border-box;
    display: flex;
`

const Day = styled.div`
    box-sizing: border-box;    
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    margin-right: 5px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;

    h2 {
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #DBDBDB;
    }
`

const Buttons = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-family: 'Lexend Deca';

    h2 {
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;
        color: #52B6FF;
    }
`

const Save = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 84px;
    height: 35px;
    margin-left: 25px;
    background: #52B6FF;
    border-radius: 4.63636px;

    h2 {
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;
        color: #FFFFFF;
    }
`

export default TelaHabitos;