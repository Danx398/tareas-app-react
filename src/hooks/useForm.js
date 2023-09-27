import { useState } from "react"

export const useForm = (estadoInicial) => {
    const [descripcion, SetDescripcion] = useState(estadoInicial);

    const handleInputChange = (evento) => {
        SetDescripcion(evento.target.value);
      };
    return [descripcion, handleInputChange, SetDescripcion]
}