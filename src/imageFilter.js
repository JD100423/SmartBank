import React from "react"
import alimentacion from "./assets/img/alimentacion.svg"
import utilidades from "./assets/img/utilidades.svg"
import salud from "./assets/img/salud.svg"
import otros from "./assets/img/otros.svg"
import transporte from "./assets/img/transporte.svg"
import { IconoTema } from "./Componentes/UI"

export default (type) => {
    const Image = {
        Restaurante: <IconoTema src={alimentacion} alt="Restaurante" />,
        Utilidades: <IconoTema src={utilidades} alt="Utilidades" />,
        Salud: <IconoTema src={salud} alt="Salud" />,
        Transporte: <IconoTema src={transporte} alt="Transporte" />,
        default: <IconoTema src={otros} alt="Otros" />
    }

    return Image[type] || Image["default"];
}