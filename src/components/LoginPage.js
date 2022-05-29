import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import styled from "styled-components";

import Logo from "../assets/logo.png";

import UserContext from "../context/UserContext";

function LoginPage(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [inputBackground, setInputBackground] = useState("#FFFFFF");
    const [opacity, setOpacity] = useState(1);
    const { setUserData } = useContext(UserContext); 
    const navigate = useNavigate();
    
    function loaderSpinner() {
        if (!loading) return <p>Entrar</p>;
        return <ThreeDots width="51px" height="13px" color="#FFFFFF"/>;
    }

    const button = loaderSpinner();

    function submit(e) {
        e.preventDefault();
        setLoading(true);
        setInputBackground("#F2F2F2");
        setOpacity(0.7);
        const user = {
            email: email,
            password: password
        }
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", user);
        promise.then(response => toToday(response.data));
        promise.catch(failure)
    }

    function toToday(data) {
        console.log(data);
        setUserData(data);
        navigate("/hoje");
    }

    function failure() {
        setLoading(false);
        setEmail("");
        setPassword("");
        setInputBackground("#FFFFFF");
        setOpacity(1)
        alert("Erro");
    }

    return (
        <Container>
            <img src={Logo} alt="Logo"/>
            <Form onSubmit={submit} color={inputBackground} opacity={opacity}>
                <input 
                    type="email" 
                    value={email}  
                    placeholder="email" 
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                    required>
                </input>
                <input 
                    type="password" 
                    value={password}  
                    placeholder="senha"
                    onChange={(e) =>setPassword(e.target.value)} 
                    disabled={loading}
                    required>   
                </input>
                <button type="submit" disabled={loading}>
                    {button}
                </button>
            </Form>
            <Link to="/cadastro">
                <p>
                    Não tem uma conta? Cadastre-se!
                </p>
            </Link>
        </Container>
    )
}

const Container = styled.div`
    box-sizing: border-box;
    font-family: 'Lexend Deca', sans-serif;    
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 180px;
        height: 178px;
        margin-top: 68px;
        margin-bottom: 33px;
    }

    a {
        margin-top: 25px;
        text-decoration-color: #52B6FF;

        p {
            font-family: 'Lexend Deca', sans-serif;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            color: #52B6FF;
        }
    }
`

const Form = styled.form`
    box-sizing: border-box;
    display:flex;
    flex-direction: column;
    align-items: center;
    
    input {
        box-sizing: border-box;
        width: 303px;
        height: 45px;
        margin-bottom: 6px;
        padding-left: 11px;
        background-color: ${props => props.inputBackground};
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        
        &::placeholder {
            color: #DBDBDB;
            font-family: 'Lexend Deca', sans-serif;
        }
    }

    button {
        box-sizing: border-box;
        width: 303px;
        height: 45px;
        background-color: #52B6FF;
        border: none;
        border-radius: 5px;
        opacity: ${props => props.opacity};
        display:flex;
        justify-content: center;
        align-items: center;

        p {
            font-family: 'Lexend Deca', sans-serif;
            font-weight: 400;
            font-size: 21px;
            line-height: 26px;
            color: #FFFFFF;
        }
    }
`

export default LoginPage;