export const Tareas = ({ tarea, index, handleCambiar, handleEliminar,titulo}) => {
  return (
    <>
      <div className="">
        <div
          className={tarea.realizado ? 'card bg-success mt-1': 'card bg-light mt-1'}
        >
          <div className="card-body">
            <h5 className="card-title">Tarea: {titulo+1}</h5>
            <p className="card-text">{tarea.descripcion}</p>
            <hr />
            <div className="d-grid gap-2">
              <button className="btn btn-danger" onClick={()=>handleEliminar(index)}>Borrar</button>

              <button className="btn btn-info" onClick={ () => handleCambiar(index)}>
                {tarea.realizado ? 'Marcar como inconclusa':'Marcar como terminada'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
