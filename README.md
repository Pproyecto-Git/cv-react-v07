# CV React (cv-react-v07)

Proyecto de CV dinámico en React (Vite) que usa datos centralizados y props para renderizar secciones reutilizables.

## Descripción
Aplicación que muestra un currículo usando componentes React reutilizables. Los datos están en `src/data/cvData.js` y se pasan por props a los componentes. Cada componente aplica desestructuración de props y renderizado condicional cuando corresponde.

## Estructura del proyecto
mi-app-react/  
├── public/  
│   └── vite.svg  
├── src/  
│   ├── components/  
│   │   ├── CabeceraCV.jsx  
│   │   ├── Perfil.jsx  
│   │   ├── Educacion.jsx  
│   │   ├── Experiencia.jsx  
│   │   ├── StackTecnologias.jsx  
│   │   ├── Proyectos.jsx   <-- nuevo
│   │   └── Habilidades.jsx   <-- nuevo
│   ├── data/   <-- carpeta nueva
│   │   └── cvData.js   <-- nuevo
│   ├── App.jsx  
│   ├── index.css  
│   └── main.jsx  
├── .gitignore  
├── package.json  
├── README.md  
└── vite.config.js

## Uso de props y desestructuración (explicación práctica)
La app centraliza datos en `src/data/cvData.js` y los pasa desde `App.jsx` a cada componente. Los componentes extraen (desestructuran) las props en la firma o internamente para mejorar legibilidad.

Ejemplo de paso de props (App.jsx):
```jsx
<CabeceraCV
  nombre={cabecera.nombre}
  cargo={cabecera.cargo}
  ciudad={cabecera.ciudad}
  contacto={cabecera.contacto}
/>

<Perfil resumen={perfil.resumen} />

<Educacion estudios={educacion} />

<Experiencia experiencias={experiencia} />
```

Ejemplo de desestructuración en un componente:
```jsx
export default function CabeceraCV({ nombre, cargo, ciudad, contacto }) {
  const { email, telefono } = contacto || {};
  return ( /* ... */ );
}
```
## captura del como debe verse.
![imagen del tema](image.png)

Qué debes saber:
- Nombres de props: usa nombres semánticos (ej. `estudios`, `experiencias`, `tecnologias`).
- Desestructuración: mejora legibilidad y evita `props.` repetido.
- Renderizado condicional: cada componente comprueba si el array existe o está vacío y muestra un mensaje alternativo si no hay datos (p. ej. "No se han registrado proyectos.").

## Componentes y props esperadas
- CabeceraCV.jsx → props: { nombre, cargo, ciudad, contacto: { email, telefono } }
- Perfil.jsx → props: { resumen }
- Educacion.jsx → props: { estudios } (array de { id, titulo, institucion, periodo })
- Experiencia.jsx → props: { experiencias } (array de { id, cargo, empresa, periodo })
- StackTecnologias.jsx → props: { tecnologias } (array de { id, nombre, tipo })
- Proyectos.jsx → props: { proyectos } (array de { id, nombre, descripcion, enlace })
- Habilidades.jsx → props: { habilidades } (array de { id, nombre, nivel })

## Archivo de datos
Editar `src/data/cvData.js` para personalizar tu CV. Mantén las claves requeridas por los componentes para evitar errores.

## Cómo ejecutar (Windows)
1. Abrir terminal en la raíz del proyecto:
   - code .
2. Instalar dependencias:
   - npm install
3. Ejecutar servidor de desarrollo:
   - npm run dev
4. Abrir la URL que indique Vite (por defecto http://localhost:5173).

## Commits sugeridos (historial esperado)
1. refactor: extracción de datos personales a src/data/cvData.js  
2. feat: componente CabeceraCV ahora recibe props  
3. feat: desestructuración de props en CabeceraCV  
4. feat: componente Perfil dinámico con props  
5. feat: Experiencia mapeada desde arreglo en App.jsx  
6. feat: componente Educación con props y desestructuración  
7. docs: actualización del README con explicación del uso de props

## Buenas prácticas recomendadas
- Validar props en desarrollo con `prop-types` o migrar a TypeScript.  
- Separar estilos por componente (CSS modules o archivos por componente).  
- Mantener datos en `src/data/cvData.js` para facilitar mantenimiento y pruebas.  
- Escribir pruebas unitarias (React Testing Library / Vitest) para componentes que mapean datos.

## Licencia
MIT — libre uso y modificación.

---
Personaliza `src/data/cvData.js` con tus datos y verifica en el navegador. Si quieres, puedo generar los commits sugeridos a partir de los cambios realizados.