import React from 'react'

export default function CabeceraCV({ nombre, cargo, ciudad, contacto }) {
  const { email, telefono } = contacto || {};
  return (
    <header className="section" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <h1 style={{ margin: 0 }}>{nombre}</h1>
        <p className="small" style={{ margin: '0.25rem 0 0 0' }}>{cargo}</p>
        <p className="small" style={{ margin: '0.25rem 0 0 0' }}>
          {telefono} — {email} — {ciudad}
        </p>
      </div>
      <div style={{ textAlign: 'right' }}>
        <span className="badge">CV · React</span>
      </div>
    </header>
  )
}
