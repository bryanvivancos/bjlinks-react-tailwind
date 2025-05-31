import '../styles/App.css'
import Header from '../components/Header.jsx'
import Socials from '../components/Socials.jsx'
import Skills from '../components/Skills.jsx'
import ProjectsGrid from '../components/ProjectsGrid.jsx'
import Footer from '../components/Footer.jsx'
import Certificates from '../components/Certificates.jsx'
import Resume from '../components/Resume'
import FloatButton from '../components/FloatButton'
import ProjectsTab from '../components/ProjectsTab.jsx'
import { DESCRIPTION } from '../CONTANTS.js'

function App() {

  return (
    <div className='grid grid-rows-[auto_1fr_auto] min-h-dvh justify-center items-center max-w-2xl  mx-6'>

      <Header/>
      <main>
        <Socials/>
        <p className='text-balance text-white font-Quick text-center mb-8'> {DESCRIPTION}</p>
        <Skills/>
        <Resume/>
        <ProjectsTab/>
        <Certificates/>
        <FloatButton/>
      </main>
      <Footer/>

    </div>
  )
}

export default App
