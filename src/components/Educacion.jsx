import React from 'react'

export default function Educacion() {
  const educacion = [
    { id: 1, institucion: "Universidad Nacional", titulo: "Ingeniería en Sistemas", año: "2018-2022" },
    { id: 2, institucion: "Institución Técnica", titulo: "Técnico en Programación", año: "2016-2018" },
    { id: 3, institucion: "Plataforma Online", titulo: "Curso Git y GitHub", año: "2023" },
    { id: 4, institucion: "Plataforma Online", titulo: "Introducción a React con Vite", año: "2023" },
    { id: 5, institucion: "Taller Local", titulo: "Buenas Prácticas de Desarrollo", año: "2022" }
  ];

  if (educacion.length === 0) {
    return (
      <section>
        <h3>Educación</h3>
        <p>No se han registrado estudios ni cursos.</p>
      </section>
    );
  }

  return (
    <section>
      <h3>Educación</h3>
      <ul>
        {educacion.map((e) => (
          <li key={e.id} style={{ marginBottom: 8 }}>
            <strong>{e.titulo}</strong>
            <div style={{ fontSize: 13, color: "#555" }}>{e.institucion} — {e.año}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
