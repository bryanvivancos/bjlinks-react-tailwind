import { useState } from 'react'
import ProjectItem from './atoms/ProjectItem'

const ProjectsSection = () => {
    const [activeTab, setActiveTab] = useState('personales')

    const tabs = [
        { id: 'personales', label: 'Personales' },
        { id: 'clientes', label: 'Para Clientes' }
    ]

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
            url: 'https://bryanvivancosbusiness.vercel.app/',
            skillName: 'React, Typescript, Strapi',
            description: 'Impulsa tu presencia profesional con una tarjeta digital personalizada que reúne todos tus datos de contacto.',
            name: 'Tarjeta Digital Profesional',
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

    // const projects = {
    //     personales: [
    //         {
    //             url: 'https://vincode.dev',
    //             skillName: 'Astro, React, Typescript, Tailwind CSS',
    //             description: 'Mi Startup de desarrollo de software que ofrece soluciones personalizadas para empresas e independientes.',
    //             name: 'Vincode.dev',
    //             skill: 'astro',
    //             image: '/imgs/vincode-img.webp'
    //         },
    //         {
    //             url: 'https://bryanvivancosbusiness.vercel.app/',
    //             skillName: 'React, Typescript, Strapi',
    //             description: 'Impulsa tu presencia profesional con una tarjeta digital personalizada que reúne todos tus datos de contacto.',
    //             name: 'Tarjeta Digital Profesional',
    //             skill: 'react',
    //             image: '/imgs/bj-card-img.webp'
    //         },
    //         {
    //             url: 'https://quizter-web.vercel.app/',
    //             skillName: 'React, Typescript, Zustand, Material UI, Express.js',
    //             description: 'Página de preguntas de cultura general en la que pondrás a prueba tus conocimientos. Usando Express.js para la API.',
    //             name: 'Quizter App',
    //             skill: 'react',
    //             image: '/imgs/quizter-img.webp'
    //         },
    //         {
    //             url: 'https://randomizer-app-psi.vercel.app/',
    //             skillName: 'React, Javascript, Tailwind CSS',
    //             description: 'Web de sorteos, juegos y datos aleatorios.',
    //             name: 'Randomizer App',
    //             skill: 'react',
    //             image: '/imgs/randomizer-img.webp'
    //         }
    //     ],
    //     clientes: [
    //         {
    //             url: 'https://github.com/bryanvivancos/control-asist',
    //             skillName: 'Python, Django, SQL',
    //             description: 'Control de asistencias para empresas con Python, Django, SQL Server.',
    //             name: 'Assist Control',
    //             skill: 'django',
    //             image: '/imgs/assist-control-img.webp'
    //         }
    //     ]
    // }

    return (
        <section id='projectssection' className='w-full bg-black py-16 md:py-24'>
            
            {/* Header */}
            <div className='flex flex-col items-center gap-4 mb-16 md:mb-24'>
                <span className='text-green-600 tracking-[0.5em] font-bold font-Quick text-sm md:text-base uppercase'>
                    Portfolio
                </span>
                <h2 className='text-white font-Quick font-black text-3xl md:text-4xl text-center'>
                    Mis Proyectos
                </h2>
            </div>

            {/* Tabs */}
            <div className='flex flex-wrap justify-center gap-4 mb-16 md:mb-24'>
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`px-8 py-3 font-Quick font-semibold rounded-lg transition-all duration-300 ${
                            activeTab === tab.id
                                ? 'bg-green-600 text-white shadow-lg'
                                : 'bg-white/5 text-white/60 hover:bg-white/10 border border-white/10'
                        }`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Projects */}
            <div className='space-y-0'>
                {projects[activeTab].map((project, index) => (
                    <ProjectItem key={index} project={project} index={index} />
                ))}
            </div>

            {/* Animations */}
            <style jsx>{`
                @keyframes fadeInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes fadeInRight {
                    from {
                        opacity: 0;
                        transform: translateX(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                .animate-fadeInLeft {
                    animation: fadeInLeft 0.8s ease-out;
                }

                .animate-fadeInRight {
                    animation: fadeInRight 0.8s ease-out;
                }
            `}</style>
        </section>
    )
}

export default ProjectsSection
