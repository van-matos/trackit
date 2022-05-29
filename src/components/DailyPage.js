import { useEffect, useContext, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import styled from "styled-components";

import CompletedHabits from "../context/CompletedHabits";
import UserContext from "../context/UserContext";

import DailyHabit from "./DailyHabit";
import MenuBar from "./MenuBar";
import TopBar from "./TopBar";

function DailyPage() {

    const { completedHabits, setCompletedHabits } = useContext(CompletedHabits);
    const { userData } = useContext(UserContext);

    const [dailyHabits, setDailyHabits] = useState([]);

    const utc = require('dayjs/plugin/utc');
    const updateLocale = require('dayjs/plugin/updateLocale');

    dayjs.extend(utc);
    dayjs.extend(updateLocale);
    dayjs.updateLocale('en', {weekdays: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"]});

    const date = dayjs.utc().local();

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${userData.token}`
            }
        };

        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);
        promise.then(response => setDailyHabits(response.data));
    }, [dailyHabits]);

    useEffect(() => setCompletedHabits(dailyHabits.filter( habit => habit.done === true).length / dailyHabits.length), [dailyHabits]);

    function habitsCompleted() {
        if (completedHabits) {
            return (
                <CompletionRate>
                    <p>{(completedHabits*100).toFixed(0)}% dos hábitos concluídos</p>
                </CompletionRate>
            );
        }
        return <p>Nenhum hábito concluído ainda</p>;
    }

    function renderDailyHabits() {
        if (dailyHabits.length) {
            return dailyHabits.map( (habit) => <DailyHabit key={habit.id} habitName={habit.name} habitId={habit.id} isDone={habit.done} currentSequence={habit.currentSequence} highestSequence={habit.highestSequence} />);
        }
        else return <p>Parece que você não tem hábitos ainda, que tal criar algum?</p>;
    }

    const completion = habitsCompleted();
    const listDailyHabits = renderDailyHabits();

    return (
        <>
            <TopBar />
            <Container>
                <Top>
                    <h1>{date.format("dddd, DD/MM")}</h1>
                    {completion}
                </Top>
                {listDailyHabits}
            </Container>
            <MenuBar />
        </>
    );
}

const Container = styled.div`
    box-sizing: border-box;
    min-height: 100vh;
    padding: 90px 17px 70px 17px;
    background-color: #F2F2F2;
`

const Top = styled.div`
    margin-bottom: 30px;

    h1 {
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
    }

    p {
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #BABABA;
    }
`
const CompletionRate = styled.div`
    p {
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #8FC549;
    }
` 

export default DailyPage;