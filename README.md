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

export default App;
