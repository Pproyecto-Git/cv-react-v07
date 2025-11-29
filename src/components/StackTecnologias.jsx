import React from "react";

export default function StackTecnologias() {
  const tecnologias = [
    { id: 1, nombre: "React", tipo: "frontend" },
    { id: 2, nombre: "JavaScript", tipo: "frontend" },
    { id: 3, nombre: "HTML5", tipo: "frontend" },
    { id: 4, nombre: "CSS3", tipo: "frontend" },
    { id: 5, nombre: "Node.js", tipo: "backend" },
    { id: 6, nombre: "Express", tipo: "backend" },
    { id: 7, nombre: "PostgreSQL", tipo: "base de datos" },
    { id: 8, nombre: "MongoDB", tipo: "base de datos" },
    { id: 9, nombre: "Git", tipo: "herramienta" },
    { id: 10, nombre: "Vite", tipo: "herramienta" }
  ];

  const obtenerColor = (tipo) => {
    switch (tipo) {
      case "frontend": return "#2563eb";
      case "backend": return "#16a34a";
      case "base de datos": return "#f97316";
      case "herramienta": return "#6b7280";
      default: return "#334155";
    }
  };

  if (tecnologias.length === 0) {
    return (
      <section>
        <h3>Stack de Tecnologías</h3>
        <p>No se han definido tecnologías.</p>
      </section>
    );
  }

  return (
    <section>
      <h3>Stack de Tecnologías</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tecnologias.map((tech) => (
          <li key={tech.id} style={{ marginBottom: 8, display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{
              display: "inline-block",
              width: 10,
              height: 10,
              borderRadius: 4,
              backgroundColor: obtenerColor(tech.tipo)
            }} />
            <div>
              <strong>{tech.nombre}</strong> <span style={{ color: "#6b7280", fontStyle: "italic", fontSize: 13 }}>— {tech.tipo}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}