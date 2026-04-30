# Tarjetas-De_Presentacion
App.js
import { useEffect, useState } from "react";
import Card from "./Card";

function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const data = [
 { nombre: "Enmanuel Castillo", ocupacion: "Programador", pais: "Honduras" },
      { nombre: "Cesia Castillo", ocupacion: "Doctora", pais: "México" },
      { nombre: "Salvador Barrera", ocupacion: "Profesor", pais: "España" },
      { nombre: "Sohary Jimenez", ocupacion: "Diseñadora", pais: "Argentina" },
      { nombre: "Lissy Barrera", ocupacion: "Ingeniero", pais: "Colombia" }
];

    setPeople(data);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lista de Personas</h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {people.map((person, index) => (
          <Card
            key={index}
            nombre={person.nombre}
            ocupacion={person.ocupacion}
            pais={person.pais}
          />
        ))}
      </div>
    </div>
  );
}

Cards.js
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

export default App;
