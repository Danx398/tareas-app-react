import { useEffect } from "react";
import { Footer, FormularioTareas, Header, Tareas } from "./components";
import { useCrud, useForm, useProgress } from "./hooks";

export const App = () => {
  const [descripcion, handleInputChange, SetDescripcion] = useForm("");
  const {tareas, handleSubmit, handleCambiar, handleEliminar} = useCrud(descripcion,SetDescripcion);
  const porcentaje = useProgress(tareas)

  useEffect(() => {
    //Estado
    localStorage.setItem("tareas", JSON.stringify(tareas));
    //Arreglo de dependencias, una o mas dependencias o vacio
  }, [tareas]);

  //Para hacer que el footer funcione
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
              {tareas.map((tarea, index) => {
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
