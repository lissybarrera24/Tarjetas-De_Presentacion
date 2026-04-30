function Card({ nombre, ocupacion, pais }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        borderRadius: "10px",
        width: "200px",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.1)"
      }}
    >
      <h3>{nombre}</h3>
      <p><strong>Ocupación:</strong> {ocupacion}</p>
      <p><strong>País:</strong> {pais}</p>
    </div>
  );
}

export default Card;