import React from 'react'

export default function Perfil({ resumen }) {
  if (!resumen) {
    return (
      <section className="section">
        <h3>Perfil</h3>
        <p>No hay resumen profesional.</p>
      </section>
    )
  }

  return (
    <section className="section">
      <h3>Perfil</h3>
      <p>{resumen}</p>
    </section>
  )
}
