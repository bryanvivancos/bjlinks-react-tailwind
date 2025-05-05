import React from 'react'
import '../styles/App.css'
import Header from '../components/Header.jsx'
import Socials from '../components/Socials.jsx'
import Skills from '../components/Skills.jsx'
import ProjectsGrid from '../components/ProjectsGrid.jsx'
import Footer from '../components/Footer.jsx'
import Certificates from '../components/Certificates.jsx'
import Resume from '../components/Resume'
import FloatButton from '../components/FloatButton'

function App() {

  return (
    <div className='grid grid-rows-[auto_1fr_auto] min-h-dvh justify-center items-center max-w-2xl  mx-4'>

      <Header/>
      <main>
        <Socials/>
        <p className='text-balance text-white font-Quick text-center mb-8'> Desarrollador Web e Ingeniero Electrónico y Telecomunicaciones Colegiado de la Universidad Nacional de Piura con N° reg CIP 328477. Autodidacta con +3 años trabajando en el campo de TI y +1 año aprendiendo tecnologías y realizando proyectos personales.</p>
        <Skills/>
        <Resume/>
        <ProjectsGrid/>
        <Certificates/>
        <FloatButton/>
      </main>
      <Footer/>

    </div>
  )
}

export default App
