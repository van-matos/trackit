import styled from "styled-components";
import { Link } from "react-router-dom";

import Logo from "../assets/logo.png"

function TelaLogin() {
    return (
        <Content>
            <img src={Logo} alt="TrackIt" />
            <Form>
                <input placeholder="email" />
                <input placeholder="senha" />
                <button>Entrar</button>
            </Form>
            <Link to="/cadastro">
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </Content>
    );
}

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Lexend Deca', sans-serif;

    img {
        margin: 70px 0 30px 0;
    }

    a {
        margin-top: 25px;
        text-decoration: none;
    }

    p {
        font-weight: 400;
        font-size: 14x;
        line-height: 17px;
        color: #52B6FF;
        text-decoration-line: underline;
    }
`
const Form = styled.div`
    display: flex;
    flex-direction: column;
    

    input {
        box-sizing: border-box;
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        padding-left: 11px;
        margin-bottom: 5px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;

        &::placeholder {
            color: #DBDBDB;
        }
    }

    button {
        width: 303px;
        height: 45px;
        background: #52B6FF;
        border-radius: 4.63636px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        color: #FFFFFF;
    }
`

export default TelaLogin;