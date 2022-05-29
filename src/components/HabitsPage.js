import { useEffect, useState, useContext } from "react";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import styled from "styled-components";

import Day from "./Day";
import Habit from "./Habit";
import MenuBar from "./MenuBar";
import TopBar from "./TopBar";

import UserContext from "../context/UserContext";

function HabitsPage() {

    const { userData } = useContext(UserContext);

    const [addHabit, setAddHabit] = useState("none");
    const [habits, setHabits] = useState([]);
    const [loading, setLoading] = useState(false);
    const [createHabit, setCreateHabit] = useState({
        name: "",
        days: []
    });

    const [inputBackground, setInputBackground] = useState("#FFFFFF");
    const [opacity, setOpacity] = useState(1);

    const weekdays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    const showLoading = LoaderSpinner();
    
    const makeHabit = renderCreateHabit();
    const MyHabits = renderHabits();

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${userData.token}` 
            }
        };

        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);
        promise.then(response => setHabits(response.data));
        promise.catch(() => alert("Erro"));
    }, []);

    function renderHabits() {
        if (habits.length > 0) {
            return habits.map( (habit, i) => <Habit key={i} habit={habit} habits={habits} setHabits={setHabits} />);
        }
        return (
            <Text>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </Text>
        );
    }

    function renderCreateHabit() {
        if (addHabit === "none") {
            return <></>;
        } else {
            return (
                <CreateHabit display={addHabit} opacity={opacity} inputBackground={inputBackground} >
                    <input value={createHabit.name} onChange={(e) => setCreateHabit({...createHabit, name: e.target.value})} placeholder="nome do hábito" ></input>
                    <div>
                        {weekdays.map( (day, i) => <Day key={i} index={i} day={day} createHabit={createHabit} setCreateHabit={setCreateHabit} />)}
                    </div>
                    <Buttons>
                        <p onClick={cancelNewHabit}>
                            Cancelar
                        </p>
                        <button onClick={saveHabit} disabled={loading}>
                            {showLoading}
                        </button>
                    </Buttons>
                </CreateHabit>
            );
        }
    }

    function LoaderSpinner() {
        if (loading) {
            return <ThreeDots width="43px" height="11px" color="#FFFFFF"/>;
        }
        return <>Salvar</>;
    }

    function cancelNewHabit() {
        setAddHabit("none");
    }

    function successNewHabit(data) {
        setHabits([...habits, data]);
        setAddHabit("none");
        setCreateHabit({...createHabit, name: "", days: []});
    }

    function failNewHabit() {
        alert("Erro");
    }

    function saveHabit() {
        if (createHabit.name && createHabit.days.length) {
            setLoading(true);
            setInputBackground("#F2F2F2");
            setOpacity(0.7);

            const config = {
                headers: {
                    Authorization: `Bearer ${userData.token}` 
                }
            };

            const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", createHabit, config);
            promise.then(response => successNewHabit(response.data));
            promise.catch(failNewHabit);

            setLoading(false);
            setInputBackground("#FFFFFF");
            setOpacity(1);
        }
        else {
            alert("Preencha o nome do hábito e marque pelo menos um dia da semana!");
        }
    }

    return (
        <>
            <TopBar />
            <Container>
                <Top>
                    <h1>Meus hábitos</h1>
                    <div onClick={() => setAddHabit("column")}><ion-icon name="add-outline" /></div>
                </Top>
                <div>
                    {makeHabit}
                    {MyHabits}
                </div>
            </Container>
            <MenuBar />
        </>
    );
}

const Container = styled.div`
    box-sizing: border-box;
    min-height: 100vh;
    padding: 90px 20px 70px 20px;
    background-color: #F2F2F2;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
    }

    div {
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;

        ion-icon {
            font-weight: 400;
            font-size: 27px;
            line-height: 34px;
            color: #FFFFFF;
        }
    }
`

const Text = styled.p`
    margin-top: 30px;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #666666;
`
const CreateHabit = styled.div`
    box-sizing: border-box;
    width: 340px;
    height: 180px;
    margin-top: 20px;
    padding: 15px;
    border-radius: 5px;
    background-color: #FFFFFF;
    font-family: 'Lexend Deca', sans-serif;
    display: ${props => props.display};
    flex-direction: column;

    input {
        box-sizing: border-box;
        width: 100%;
        height: 45px;
        border: 1px solid #D4D4D4;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #666666;
        border-radius: 5px;
        padding-left: 11px;
        background-color: ${props => props.inputBackground};
        &::placeholder {
            color: #DBDBDB;
        }
    }

    > div {
        box-sizing: border-box;
        display: flex;
        margin-top: 8px;
    }
`

const Buttons = styled.div`
    display: flex;
    width: 100%;
    justify-content: end;
    align-items: center;
    padding-top: 21px;
    align-self: flex-end;

    p {
        margin-right: 23px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #52B6FF;
    }

    button {
        width: 84px;
        height: 35px;
        border: none;
        border-radius: 5px;
        background-color: #52B6FF;
        opacity: ${props => props.opacity};
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px; 
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export default HabitsPage;