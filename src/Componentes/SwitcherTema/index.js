import React from "react";
import themeOn from "../../assets/img/themeOn.svg"
import themeOff from "../../assets/img/themeOff.svg"
import { Icono } from "../UI";

export default ({tema}) => {
    const claro = <Icono src={themeOn} alt="Tema claro" />
    const oscuro = <Icono src={themeOff} alt="Tema oscuro" />

    return <>{tema ? oscuro : claro}</>;
}