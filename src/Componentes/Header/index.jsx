import React from "react";
import styled from "styled-components";
import logo from "../../assets/img/logo.svg"
import { colorPrimario } from "../UI/variables";


const StyleHeader = styled.nav`
    
    background-color: ${colorPrimario};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`

const Logo = styled.img`
    
    height: 50px;
    width: 50px;
`

const BntHeader = styled.a`
    text-align: center;
    border-radius: 3px;
    padding: 5px 20px;
    margin: 0 10px;
    font-weight: 600;
    border: 2px solid white;
    color: ${ (props) => props.primary ?  "white" : colorPrimario };
    background: ${(props) => props.primary ? "transparent " : "white"};
`

const Header = () => {
    return (
        <StyleHeader>
            <Logo src={logo} alt="Logo Smart Bank"/>
        <div>
        <BntHeader  href="https://google.com">Ayuda</BntHeader>
        <BntHeader primary href="https://google.com">Salir</BntHeader>
        </div>
        </StyleHeader>
    )
}

export default Header