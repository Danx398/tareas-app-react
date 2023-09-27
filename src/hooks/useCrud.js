import { useReducer } from "react";
import { TareaReducer } from "../reducers/tareaReducer";
import Swal from "sweetalert2";

export const useCrud = (descripcion, SetDescripcion) =>{
    const init = () => {
        return JSON.parse(localStorage.getItem("tareas")) || [];
      };

      const [tareas, dispatch] = useReducer(TareaReducer, [], init);
      
      const handleSubmit = (evento) => {
        evento.preventDefault();
        if (descripcion == "") {
          Swal.fire("No puede estar vacio","","error");
        } else {
          const tareaNueva = {
            id: new Date().getTime(),
            descripcion: descripcion,
            realizado: false,
          };
          const action = {
            type: "agregar",
            payload: tareaNueva,
          };
          dispatch(action);
          SetDescripcion("");
        }
      };
      const handleCambiar = (id) => {
        dispatch({
          type: "cambiar",
          payload: id,
        });
      };
      const handleEliminar = (id) => {
        Swal.fire({
          title: 'Estas seguro de que quieres borrarlo',
          text: "Una vez borrado no se puede recuperar",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, borrar'
        }).then((result) => {
          if (result.isConfirmed) {
            dispatch({
              type: "borrar",
              payload: id,
            });
            Swal.fire(
              'Eliminado',
              'Tu tarea ha sido eliminada',
              'success'
            )
          }
        })
      };
      return {tareas, handleSubmit, handleCambiar, handleEliminar};
}