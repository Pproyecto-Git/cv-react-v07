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
  return (
    <section className="section">
      <h2>Experiencia</h2>
      <p className="small">Crear aplicaciones móviles</p>

      {cargos.map((c, i) => (
        <div key={i} style={{ marginTop: '0.6rem' }}>
          <strong>{c.puesto}</strong> — <span className="small">{c.empresa} · {c.tiempo}</span>
          <ul>
            {c.responsabilidades.map((r, idx) => <li key={idx}>{r}</li>)}
          </ul>
        </div>
      ))}
    </section>
  )
}
