import React from "react";

export default function CabeceraCV({ nombre, cargo, ciudad, contacto }) {
  const { email, telefono } = contacto || {};
  return (
    <header>
      <h1>{nombre}</h1>
      <h2>{cargo}</h2>
      <p>
        {ciudad} {email && <>• {email}</>} {telefono && <>• {telefono}</>}
      </p>
      <hr />
    </header>
  );
}

// Perfil.jsx
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
