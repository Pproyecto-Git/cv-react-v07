import React from 'react'

export default function CabeceraCV() {
  return (
    <header className="section" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <h1 style={{ margin: 0 }}>Gillson Andrey Martinez Sandoval</h1>
        <p className="small" style={{ margin: '0.25rem 0 0 0' }}>Programador de software</p>
        <p className="small" style={{ margin: '0.25rem 0 0 0' }}>
          1111196865 — gilanmarsa@gmail.com — Medellín
        </p>
      </div>
      <div style={{ textAlign: 'right' }}>
        <span className="badge">CV · React</span>
      </div>
    </header>
  )
}
