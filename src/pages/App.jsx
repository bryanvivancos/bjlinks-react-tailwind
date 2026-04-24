import '../styles/App.css'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Skills from '../components/Skills.jsx'
import Footer from '../components/Footer.jsx'
import FooterCTA from '../components/FooterCTA.jsx'
import Certificates from '../components/Certificates.jsx'
import FloatButton from '../components/FloatButton'
import ProjectsTab from '../components/ProjectsTab.jsx'
import ProjectsSection from '../components/ProjectsSection.jsx'
import Resume from '../components/Resume'

function App() {

  return (
    <div className='min-h-dvh bg-black overflow-x-hidden'>

      <main>
        <Hero/>
        <About/>
        
        <div className='w-full max-w-7xl mx-auto px-6 md:px-12'>
          <Skills/>
          <Resume/>
          <ProjectsSection/>
          <Certificates/> 
        </div>
        
      </main>
      
      {/* <Footer/> */}
      <FooterCTA/>
      <FloatButton/>

    </div>
  )
}

export default App
