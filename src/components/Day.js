import { useState, useEffect } from "react";
import styled from "styled-components";

export default function Day({ index, day, createHabit, setCreateHabit }) {

    const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
    const [textColor, setTextColor] = useState("#DBDBDB");

    useEffect(() => {
     if (createHabit.days.filter(i => i === index).length) {
        setBackgroundColor("#CFCFCF");
        setTextColor("#FFFFFF");
     }   
    });

    function daySelect() {
        if (createHabit.days.filter(i => i === index).length) {
            setCreateHabit({...createHabit, days: createHabit.days.filter(i => i !== index)});
            setBackgroundColor("#FFFFFF");
            setTextColor("#DBDBDB");
        } else {
            setCreateHabit({...createHabit, days: [...createHabit.days, index].sort()});
            setBackgroundColor("#CFCFCF");
            setTextColor("#FFFFFF");
        }
        
    }
    return (
        <Container textColor={textColor} backgroundColor={backgroundColor} onClick={daySelect}>
            {day[0]}
        </Container>
    );
}
const Container = styled.div`
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