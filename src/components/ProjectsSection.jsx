import { useState } from 'react'
import ProjectItem from './atoms/ProjectItem'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ProjectsSection = () => {

    const projects = {
    personales: [
        {
            url: 'https://vincode.dev',
            skillName: 'Astro, React, Typescript, Tailwind CSS',
            description: 'Mi Startup de desarrollo de software que ofrece soluciones personalizadas para empresas e independientes.',
            name: 'Vincode.dev',
            skill: 'astro',
            image: '/imgs/vincode-img.webp'
        },
        {
            url: 'https://card.vincode.dev/',
            skillName: 'React, Typescript, Supabase',
            description: 'Impulsa tu presencia profesional con una tarjeta digital personalizada que reúne todos tus datos de contacto.',
            name: 'Tarjeta de Presentación Profesional',
            skill: 'react',
            image: '/imgs/bj-card-img.webp'
        },
        {
            url: 'https://quizter-web.vercel.app/',
            skillName: 'React, Typescript, Zustand, Material UI, Express.js',
            description: 'Página de preguntas de cultura general en la que pondrás a prueba tus conocimientos. Usando Express.js para la API.',
            name: 'Quizter App',
            skill: 'react',
            image: '/imgs/quizter-img.webp'
        },
        {
            url: 'https://randomizer-app-psi.vercel.app/',
            skillName: 'React, Javascript, Tailwind CSS',
            description: 'Web de sorteos, juegos y datos aleatorios.',
            name: 'Randomizer App',
            skill: 'react',
            image: '/imgs/randomizer-img.webp'
        },
        {
            url: 'https://github.com/bryanvivancos/control-asist',
            skillName: 'Python, Django, SQL',
            description: 'Control de asistencias para empresas con Python, Django y SQL Server.',
            name: 'Assist Control',
            skill: 'django',
            image: '/imgs/assist-control-img.webp'
        },
        {
            url: 'https://github.com/bryanvivancos/album_project',
            skillName: 'Python, Reflex, Supabase',
            description: 'Plataforma con CRUD completo que muestra un catálogo de items con backend en Supabase.',
            name: 'Album / Catalog',
            skill: 'python',
            image: '/imgs/album-reflex-img.webp'
        },
        {
            url: 'https://github.com/bryanvivancos/mj-awards-webscrapping',
            skillName: 'Python',
            description: 'Web scraping de datos de premios de un artista desde Wikipedia.',
            name: 'Web Scraping con Python',
            skill: 'python',
            image: '/imgs/web-scrapping-img.webp'
        }
    ],

    clientes: [
        {
            url: 'https://vincode.dev/services/vin-display',
            skillName: 'React, Typescript, Tailwind CSS',
            description: 'Software de cartelería digital para negocios que desean gestionar su publicidad, menús y promociones de forma dinámica.',
            name: 'VIN DISPLAY - Cartelería Digital',
            skill: 'react',
            image: '/imgs/vin-display.webp'
        },
        {
            url: 'https://catquiz-card.vercel.app/',
            skillName: 'React, Typescript, Tailwind CSS, Strapi',
            description: 'Tarjeta digital personalizada para joyería.',
            name: 'CatQuiz - Business Card',
            skill: 'react',
            image: '/imgs/catquiz-card-img.webp'
        },
        {
            url: 'https://catquizpe.vercel.app/',
            skillName: 'React, Javascript, Tailwind CSS',
            description: 'Link web tipo bio para la empresa CatQuiz.',
            name: 'CatQuiz - Link Bio',
            skill: 'react',
            image: '/imgs/catquiz-linkbio-img.webp'
        },
        {
            url: 'https://github.com/bryanvivancos/formularioweb_a_pdf',
            skillName: 'Python',
            description: 'Formulario web que exporta respuestas a documento Word.',
            name: 'Formulario Web a Word',
            skill: 'python',
            image: '/imgs/formulario-web-word-img.webp'
        }
    ]
}

    
  const containerRef = useRef(null)
  const [activeTab, setActiveTab] = useState('personales')

  const currentProjects = projects[activeTab]

  // 🔥 Scroll reset al cambiar tab (opcional pero recomendado)
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: 'instant' })
//   }, [activeTab])

  // 🔥 GSAP + ScrollTrigger
    // useEffect(() => {
    // const ctx = gsap.context(() => {
    //     const cards = gsap.utils.toArray('.project-card')

    //     if (!cards.length) return

    //     cards.forEach((card, index) => {
    //     const scale = index === cards.length - 1 ? 1 : 0.92

    //     gsap.to(card, {
    //         scale,
    //         ease: 'none',
    //         scrollTrigger: {
    //         trigger: card,
    //         start: 'top top',
    //         end: '+=100%',
    //         pin: true,
    //         pinSpacing: true,
    //         scrub: 0.5,
    //         invalidateOnRefresh: true
    //         }
    //     })
    //     })
    // }, containerRef)

    // return () => {
    //     ctx.revert()
    //     ScrollTrigger.getAll().forEach(st => st.kill())
    // }

    // }, [activeTab])

    useEffect(() => {
  const ctx = gsap.context(() => {
    const cards = gsap.utils.toArray('.project-card')

    if (!cards.length) return

    // 🔥 Z-INDEX correcto (capas) - nuevas cards encima
    cards.forEach((card, i) => {
      gsap.set(card, {
        zIndex: i + 1
      })
    })

    // 🔥 Obtener la última card para calcular el end
    const lastCard = cards[cards.length - 1]
    
    const lastST = ScrollTrigger.create({
      trigger: lastCard,
      start: 'center center'
    })

    // 🔥 STACK BASE - Las cards se quedan apiladas
    cards.forEach((card, index) => {
      const isLast = index === cards.length - 1

      gsap.to(card, {
        scale: isLast ? 1 : 0.95,
        ease: 'none',
        scrollTrigger: {
          trigger: card,
          start: 'top top',
          end: () => lastST.start,
          pin: true,
          pinSpacing: false,
          scrub: 0.6,
          invalidateOnRefresh: true,
          anticipatePin: 1
        }
      })
    })

  }, containerRef)

  // 🔥 IMPORTANTE en React (tabs, re-render)
  setTimeout(() => {
    ScrollTrigger.refresh()
  }, 100)

  return () => ctx.revert()

}, [activeTab])

  return (
    <section id="projects" ref={containerRef} className="relative py-32 bg-black">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 text-center">
        <p className="pre-header">
          Portfolio
        </p>

        <h2 className='section-header'>
            Mis Proyectos
        </h2>

        {/* TABS */}
        <div className="flex justify-center gap-8">
          <button
            onClick={() => setActiveTab('personales')}
            className={`uppercase tracking-[0.3em] text-sm transition-all duration-300 cursor-pointer ${
              activeTab === 'personales'
                ? 'text-green-600'
                : 'text-white/30 hover:text-white/60'
            }`}
          >
            Personales
          </button>

          <button
            onClick={() => setActiveTab('clientes')}
            className={`uppercase tracking-[0.3em] text-sm transition-all duration-300 cursor-pointer ${
              activeTab === 'clientes'
                ? 'text-green-600'
                : 'text-white/30 hover:text-white/60'
            }`}
          >
            Clientes
          </button>
        </div>
      </div>

      {/* STACKED CARDS */}
      <div key={activeTab} className="relative">
        {currentProjects.map((project, index) => (
          <div
            key={index}
            className="project-card h-screen flex items-center will-change-transform"
          >
            <ProjectItem project={project} index={index} />
          </div>
        ))}
      </div>

    </section>
  )
}

export default ProjectsSection

