import "./styles/Contacto.css";

function Contacto() {
  return (
    <div>
      <h1>Contacto</h1>
      <form className="form-contacto">
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="mensaje">Mensaje:</label>
        <textarea id="mensaje" name="mensaje" required></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contacto
