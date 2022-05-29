import { useContext } from "react";
import styled from "styled-components";
import axios from "axios";

import UserContext from "../context/UserContext";

export default function Habit({ habit, habits, setHabits }) {

    const { userData } = useContext(UserContext);

    const weekdays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

    function renderDay(day, index) {
        if (habit.days.filter(i => i === index).length) {
            return (
                <DaySelect key={index} textColor="#FFFFFF" backgroundColor="#CFCFCF">
                    {day[0]}
                </DaySelect>
            );
        }
        return (
            <DaySelect key={index} textColor="#CFCFCF" backgroundColor="#FFFFFF">
                {day[0]}
            </DaySelect>
        ) 
    }

    function renderWeek() {
        return weekdays.map( (day, index) => renderDay(day, index));
    }

    function habitDelete() {
        if (window.confirm("Gostaria de excluir este hábito?")) {
            const config = {
                headers: {
                    Authorization: `Bearer ${userData.token}`
                }
            };
            const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}`, config);
            promise.then(() => deleteSuccess());
        }
    }

    function deleteSuccess() {
        setHabits(habits.filter(item => item !== habit));
    }

    const habitDays = renderWeek();

    return (
            <Container>
                <p>{habit.name}</p>
                <div>
                    {habitDays}
                </div>
                <ion-icon onClick={habitDelete} name="trash-outline"></ion-icon>
            </Container>
    );
}

const Container = styled.div`
    box-sizing: border-box;
    width: 340px;
    height: 91px;
    margin-top: 20px;
    padding: 15px;
    border-radius: 5px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    position: relative;
    > p {
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #666666;
    }
    > div {
        margin-top: 8px;
        display: flex;
    }
    ion-icon {
        font-weight: 400;
        font-size: 18px;
        line-height: 34px;
        color: #666666;
        position: absolute;
        top: 11px;
        right: 10px;
    }
`
const DaySelect = styled.div`
    box-sizing: border-box;
    width: 30px;
    height: 30px;
    margin-right: 4px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    background-color: ${props => props.backgroundColor};
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: ${props => props.textColor};
    display: flex;
    align-items: center;
    justify-content: center;
`