import React from 'react'
import CabeceraCV from './components/CabeceraCV.jsx'
import Perfil from './components/Perfil.jsx'
import Educacion from './components/Educacion.jsx'
import Experiencia from './components/Experiencia.jsx'
import StackTecnologias from './components/StackTecnologias.jsx'

export default function App() {
  return (
    <div style={{ fontFamily: 'Inter, system-ui, Arial', maxWidth: 900, margin: '2rem auto', padding: 20 }}>
      <CabeceraCV />
      <main style={{ display: 'grid', gap: 18 }}>
        <Perfil />
        <Educacion />
        <Experiencia />
        <StackTecnologias />
      </main>
    </div>
  )
}
