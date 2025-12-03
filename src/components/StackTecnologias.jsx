import React from "react";

export default function StackTecnologias({ tecnologias }) {
  const color = (tipo) =>
    tipo === "frontend" ? "#1e90ff" : tipo === "backend" ? "#2ca02c" : "#888";

  if (!tecnologias || tecnologias.length === 0) {
    return (
      <section className="section">
        <h3>Stack de Tecnologías</h3>
        <p>No se han registrado tecnologías.</p>
      </section>
    );
  }

  return (
    <section className="section">
      <h3>Stack de Tecnologías</h3>
      <ul>
        {tecnologias.map(({ id, nombre, tipo }) => (
          <li key={id} style={{ color: color(tipo) }}>
            {nombre} <em>({tipo})</em>
          </li>
        ))}
      </ul>
    </section>
  );
}