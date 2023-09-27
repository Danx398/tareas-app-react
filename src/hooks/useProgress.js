export const useProgress = (tareas) =>{
    let terminadas = 0;
  for (let i = 0; i < tareas.length; i++) {
    if (tareas[i].realizado === true) {
      terminadas++;
    }
  }
  let porcentaje = terminadas / tareas.length;
  if (!porcentaje) {
    porcentaje = 0;
  }
  return porcentaje
}