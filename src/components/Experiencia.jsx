import React from 'react'

const cargos = [
  {
    puesto: 'Desarrollador Frontend (Prácticas)',
    empresa: 'Proyecto Estudiantil',
    tiempo: '2024 — Presente',
    responsabilidades: [
      'Implementación de interfaces en React.',
      'Colaboración en control de versiones con Git.',
      'Adaptación de diseños responsivos.'
    ]
  },
  {
    puesto: 'Auxiliar de soporte técnico',
    empresa: 'Institución educativa',
    tiempo: '2023 — 2024',
    responsabilidades: [
      'Mantenimiento básico de equipos.',
      'Instalación de software y configuración de usuarios.',
    ]
  },
  {
    puesto: 'Asistente de laboratorio de computación',
    empresa: 'SENA - Centro',
    tiempo: '2022 — 2023',
    responsabilidades: [
      'Acompañamiento a aprendices en prácticas.',
      'Preparación y chequeo de ambientes de desarrollo.',
    ]
  },
  {
    puesto: 'Desarrollador de aplicaciones móviles (Proyecto)',
    empresa: 'Proyecto personal',
    tiempo: '2024',
    responsabilidades: [
      'Creación de prototipos de aplicaciones móviles.',
      'Implementación de funcionalidades básicas.'
    ]
  }
]

export default function Experiencia() {
  const experiencia = [
    { id: 1, cargo: "Desarrollador Frontend", empresa: "Proyecto Estudiantil", año: "2024", descripcion: "Implementación de componentes React y maquetación responsive." },
    { id: 2, cargo: "Desarrollador Full Stack (Prácticas)", empresa: "Startup Local", año: "2023", descripcion: "API REST con Node.js y frontend con React." },
    { id: 3, cargo: "Instructor TIC (Auxiliar)", empresa: "SENA", año: "2022", descripcion: "Acompañamiento en prácticas y resolución de dudas." },
    { id: 4, cargo: "Soporte Técnico", empresa: "Institución Educativa", año: "2021", descripcion: "Mantenimiento de equipos y configuración de entornos." },
    { id: 5, cargo: "Freelance: Landing Pages", empresa: "Clientes Varios", año: "2021", descripcion: "Maquetación y optimización básica para performance." },
    { id: 6, cargo: "Desarrollador Móvil (Proyecto)", empresa: "Proyecto Personal", año: "2020", descripcion: "Prototipado y pruebas en emuladores." },
    { id: 7, cargo: "Asistente de Laboratorio", empresa: "Centro de Formación", año: "2019", descripcion: "Preparación de entornos y documentación." },
    { id: 8, cargo: "Proyecto: Tienda Online (Frontend)", empresa: "Proyecto Académico", año: "2020", descripcion: "Catálogo, carrito y validaciones." },
    { id: 9, cargo: "Automatización de Tareas", empresa: "Laboratorio SENA", año: "2019", descripcion: "Scripting para tareas repetitivas y documentación." },
    { id: 10, cargo: "Contribuyente Documentación Técnica", empresa: "Equipo Educativo", año: "2018", descripcion: "Guías y ejemplos para aprendices." }
  ];

  if (experiencia.length === 0) {
    return (
      <section>
        <h3>Experiencia Profesional</h3>
        <p>No se ha registrado experiencia profesional.</p>
      </section>
    );
  }

  return (
    <section>
      <h3>Experiencia Profesional</h3>
      <ul>
        {experiencia.map((exp) => (
          <li key={exp.id} style={{ marginBottom: 8 }}>
            <strong>{exp.cargo}</strong> — {exp.empresa} ({exp.año})
            <div style={{ fontSize: 13, color: "#555" }}>{exp.descripcion}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
