import React from 'react'

export default function Educacion() {
  return (
    <section className="section">
      <h2>Educación</h2>

      <div>
        <strong>Técnico en programación</strong>
        <p className="small">Institución educativa técnica agroindustrial Leopoldo García — Año: 2024</p>
      </div>

      <div style={{ marginTop: '0.6rem' }}>
        <strong>Formación complementaria</strong>
        <ul>
          <li>Curso de Git y GitHub (básico)</li>
          <li>Introducción a React con Vite</li>
          <li>Buenas prácticas de desarrollo</li>
        </ul>
      </div>
    </section>
  )
}
