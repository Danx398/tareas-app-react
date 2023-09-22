export const FormularioTareas = ({handleInputChange,handleSubmit,descripcion}) => {
  return (
    <>
      <h3>Agregar Tarea</h3>
      <hr />
      <form action=""  onSubmit={(e) => {handleSubmit(e)}}>
        <div className="mb-3">
          <label htmlFor="tarea1" className="form-label">
            Descripcion
          </label>
          <input
            onChange={(e) => handleInputChange(e)}
            value={descripcion}
            type="text"
            className="form-control"
            id="tarea1"
            aria-describedby="descripcionText"
          />
          <div id="descripcionText" className="form-text">
            Es el texto de ayuda para la pagina
          </div>
        </div>
        <div className="d-grid">
          <button
            type="submit"
            className="btn btn-success"
          >
           Agregar
          </button>
        </div>
      </form>
    </>
  );
};
