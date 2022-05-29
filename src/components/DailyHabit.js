
import { useContext } from "react";
import axios from "axios";
import styled from "styled-components";

import UserContext from "../context/UserContext";

function DailyHabit({ habitName, habitId, isDone, currentSequence, highestSequence }) {

    const buttonBackgroundColor = isDone ? "#8FC549" : "#EBEBEB";
    const { userData } = useContext(UserContext);

    function toggleCheck() {
        const config = {
            headers: {
                Authorization: `Bearer ${userData.token}`
            }
        };
        if (isDone) {
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}/uncheck`, null, config);
        } else {
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}/check`, null, config);
        }
    }

    return (
        <Container buttonBackgroundColor={buttonBackgroundColor}>
            <Description>
                <h1>{habitName}</h1>
                <div>
                    <p>Sequência atual: {currentSequence}</p>
                    <p>Seu recorde: {highestSequence}</p>
                </div>
            </Description>
            <button onClick={toggleCheck}>
                <ion-icon name="checkmark-sharp"></ion-icon>
            </button>
        </Container>
    );
}

const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 94px;
    margin-bottom: 10px;
    padding: 13px 13px 12px 15px;
    border-radius: 5px;
    background: #FFFFFF;
    display: flex;
    justify-content: space-between;
    
    button {
        box-sizing: border-box;
        width: 69px;
        height: 69px;
        border: none;
        border-radius: 5px;
        background: ${props => props.buttonBackgroundColor};
        
        ion-icon {
            font-size: 48px;
            color: #FFFFFF;
        }
    }
    
`

const Description = styled.div`
    h1 {
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
    }

    div {
        margin-top: 7px;

        p {
            font-family: 'Lexend Deca', sans-serif;
            font-weight: 400;
            font-size: 12.976px;
            line-height: 16px;
            color: #666666;
        }
    }
`

export default DailyHabit;