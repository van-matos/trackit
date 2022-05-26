import styled from "styled-components";
import { Link } from "react-router-dom";

function Menu () {
    return (
        <Footer>
            <Link to="/habitos">
                <p>Hábitos</p>
            </Link>
            <Link to="/historico">
                <p>Histórico</p>
            </Link>  
        </Footer>
    );
}

const Footer = styled.div`
    width: 100%;
    height: 70px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    box-sizing: border-box;

    a {
        text-decoration: none;
    }

    p {
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #52B6FF;
    }
`

export default Menu;