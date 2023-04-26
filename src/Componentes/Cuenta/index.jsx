import React, {useState} from "react";
import styled from "styled-components";
import { Icono, Box, Btn, Detalle, Saldo } from "../UI";
import privado from "../../assets/img/privado.svg"
import ojo from "../../assets/img/ojo.svg"
import dinero from "../../assets/img/dinero.svg"

const IconMargin = styled(Icono)`
    margin-top: 2px;
`

const Cuenta = () => {
    const [toggleState, untoggle] = useState(true)

    const toggleHandler = () => {
        untoggle((toggleState) => !toggleState)
    }

    return (
        <Box>
            <h2>Cuenta</h2>
            <div style={{fontSize: "26px", padding: "20px 0"}}>
                Saldo disponible
                <span>
                    <Icono src={dinero} alt="Icono de dinero"/>
                </span>
                {toggleState ? (
                    <Saldo>
                        <Detalle>$</Detalle> 8,621.50
                        </Saldo>
                ) : null}
            </div>

            <Btn onClick={toggleHandler}>
                <IconMargin 
                src={toggleState ? privado : ojo}
                alt="Privacidad de saldo"
                />
            </Btn>
        </Box>
    )
}

export default Cuenta