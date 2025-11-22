import React from 'react'
import CabeceraCV from './components/CabeceraCV'
import Perfil from './components/Perfil'
import Experiencia from './components/Experiencia'
import Educacion from './components/Educacion'

export default function App() {
  return (
    <div className="app-container" style={{ fontFamily: 'Arial, sans-serif', maxWidth: 900, margin: '2rem auto', padding: '1.5rem', boxShadow: '0 6px 18px rgba(0,0,0,0.08)', borderRadius: 12 }}>
      <CabeceraCV />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', marginTop: '1.2rem' }}>
        <Perfil />
        <Experiencia />
        <Educacion />
      </div>
    </div>
  )
}
