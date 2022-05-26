import styled from "styled-components";

import UserImage from "../assets/userimage.png" 

function Topo() {
    return(
        <Header>
            <p>TrackIt</p>
            <img src={UserImage} alt="Placeholder"/>
        </Header>
    );
}

const Header = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 70px;
    box-sizing: border-box;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px 0px #00000026;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    p {
        font-family: 'Playball', cursive;
        font-weight: 400;
        font-size: 40px;
        line-height: 49px;
        color: #FFFFFF;

    }
    img {
        width: 51px;
        height: 51px;
        border-radius: 50%;
        object-fit: cover;
    }
`

export default Topo;