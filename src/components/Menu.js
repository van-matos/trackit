import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

function Menu () {

    return (
        <MenuStyle>
            <div className="organizate">
                <LinkStyle to={"/habitos"} ><p>Hábitos</p></LinkStyle>
                <ProgressbarStyle >
                    <Link to={"/hoje"}>
                        <CircularProgressbar
                            value="50"
                            text="Hoje"
                            background
                            backgroundPadding={6}
                            styles={buildStyles({
                            backgroundColor: "#52B6FF",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent"
                            })}
                        />
                    </Link>
                </ProgressbarStyle>
                <LinkStyle to={"/historico"} ><p>Histórico</p></LinkStyle>
            </div>
        </MenuStyle>
    );
}



const MenuStyle = styled.div`
    width: 100%;
    height: 70px;
    position: fixed;
    left: 0px;
    bottom: 0px;
    background-color: #FFFFFF;
    .organizate {
        height: 70px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: relative;
    }
`;

const LinkStyle = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    p {
        
        
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color: #52B6FF;
    }
    .firstChild {
    }
    >:first-child {
        
    }
`;

const ProgressbarStyle = styled.div`
    width: 90px;
    height: 90px;
    position: absolute;
    bottom: 10px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
`

export default Menu;