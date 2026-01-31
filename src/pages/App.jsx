import '../styles/App.css'
import Header from '../components/Header.jsx'
import Skills from '../components/Skills.jsx'
// import ProjectsGrid from '../components/ProjectsGrid.jsx'
import Footer from '../components/Footer.jsx'
import Certificates from '../components/Certificates.jsx'
import FloatButton from '../components/FloatButton'
import ProjectsTab from '../components/ProjectsTab.jsx'
import { Description } from '../components/Description.jsx'
import Resume from '../components/Resume'
import { DESCRIPTION } from '../CONTANTS.js'

function App() {

  return (
    <div className='grid grid-rows-[auto_1fr_auto] min-h-dvh justify-center items-center max-w-xl mx-auto px-4'>

      <main className='place-items-center my-8'>
        <div className='md:grid md:grid-cols-2 max-md:flex max-md:flex-col items-center w-full justify-center gap-2'>
          <div className='flex max-md:flex-col justify-center'>
            <Header/>
          </div>
          <Description/>
        </div>
        <p className='text-balance text-white font-Quick text-center my-4'> {DESCRIPTION}</p>
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
