import React from 'react'

export default function Educacion({ estudios }) {
  if (!estudios || estudios.length === 0) {
    return (
      <section className="section">
        <h3>Educación</h3>
        <p>No se ha registrado formación académica.</p>
      </section>
    )
  }

  return (
    <section className="section">
      <h3>Educación</h3>
      <ul>
        {estudios.map(({ id, titulo, institucion, periodo }) => (
          <li key={id}>
            <strong>{titulo}</strong> — {institucion} ({periodo})
          </li>
        ))}
      </ul>
    </section>
  )
}
