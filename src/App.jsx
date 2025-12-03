import React from 'react'
import './App.css'
import './index.css'

import CabeceraCV from './components/CabeceraCV'
import Perfil from './components/Perfil'
import Educacion from './components/Educacion'
import Experiencia from './components/Experiencia'
import StackTecnologias from './components/StackTecnologias'
import Proyectos from './components/Proyectos'
import Habilidades from './components/Habilidades'

import {
  cabecera,
  perfil,
  educacion,
  experiencia,
  stackTecnologias,
  proyectos,
  habilidades
} from './data/cvData'

export default function App() {
  return (
    <main className="container" style={{ maxWidth: 900, margin: '0 auto', padding: 20 }}>
      <CabeceraCV
        nombre={cabecera.nombre}
        cargo={cabecera.cargo}
        ciudad={cabecera.ciudad}
        contacto={cabecera.contacto}
      />

      <Perfil resumen={perfil.resumen} />

      <Educacion estudios={educacion} />

      <Experiencia experiencias={experiencia} />

      <StackTecnologias tecnologias={stackTecnologias} />

      <Proyectos proyectos={proyectos} />

      <Habilidades habilidades={habilidades} />
    </main>
  )
}
