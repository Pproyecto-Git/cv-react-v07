import React from 'react'

export default function Experiencia({ experiencias }) {
  if (!experiencias || experiencias.length === 0) {
    return (
      <section className="section">
        <h3>Experiencia Profesional</h3>
        <p>No se ha registrado experiencia profesional.</p>
      </section>
    )
  }

  return (
    <section className="section">
      <h3>Experiencia Profesional</h3>
      <ul>
        {experiencias.map(({ id, cargo, empresa, periodo }) => (
          <li key={id}>
            <strong>{cargo}</strong> — {empresa} ({periodo})
          </li>
        ))}
      </ul>
    </section>
  )
}
