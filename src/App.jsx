import { useEffect, useReducer, useState } from "react";
import { Footer } from "./components/Footer/Footer";
import { FormularioTareas } from "./components/FormularioTareas/FormularioTareas";
import { Header } from "./components/Header/Header";
import { Tareas } from "./components/Tareas/Tareas";
import { TareaReducer } from "./reducers/tareaReducer";

export const App = () => {
  const init = () => {
    return JSON.parse(localStorage.getItem("tareas")) || []
  };
  const [state, dispatch] = useReducer(TareaReducer, [], init);
  const [descripcion, SetDescripcion] = useState("");
  useEffect(() => {
    //Estado
    localStorage.setItem("tareas",JSON.stringify(state))
    //Arreglo de dependencias, una o mas dependencias o vacio
  }, [state])
  
  const handleInputChange = (evento) => {
    SetDescripcion(evento.target.value);
  };
  
  const handleSubmit = (evento) => {
    evento.preventDefault();
    const tareaNueva = {
      id: new Date().getTime(),
      descripcion: descripcion,
      realizado: false,
    };
    const action = {
      type: "agregar",
      payload: tareaNueva
    }
    dispatch(action)
    SetDescripcion("")
  };
  const handleCambiar = (id) => {
    dispatch({
      type: "cambiar",
      payload: id,
    });
  };
  const handleEliminar = (id) => {
    dispatch({
      type: "borrar",
      payload: id,
    });
  };
  //Para hacer que el footer funcione
  let terminadas = 0;
  for (let i = 0; i < state.length; i++) {
    if (state[i].realizado === true) {
      terminadas++;
    }
  }
  let porcentaje = terminadas / state.length;
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-10 col-xs-1">
            <FormularioTareas
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              descripcion={descripcion}
            />
          </div>
          <div className="col-md-8 col-sm-10">
            <div className="row row-cols-1 row-cols-md-2 pg-4">
              {state.map((tarea, index) => {
                return (
                  <Tareas
                    key={index}
                    index={tarea.id}
                    titulo={index}
                    tarea={tarea}
                    handleCambiar={handleCambiar}
                    handleEliminar={handleEliminar}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Footer porcentaje={porcentaje} />
    </>
  );
};

/* 
    State: Estado en un momento dado que su valor varia por eventos
    useState() -> Hook y función
    Hooks: Funciones que retornan funcionalidad
    Props: Cuando un componente recibe un argumento 

    TAREA: Que se acomoden las cards, que funcione la barra
*/
