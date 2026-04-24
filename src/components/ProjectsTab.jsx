import { useState } from 'react';
import Project from './atoms/Project.jsx';

const ProjectsTab = () => {
    const [activeTab, setActiveTab] = useState("personales");

    // const reactBackground = "bg-gradient-to-br from-cyan-900 via-cyan-700 to-cyan-500 border border-cyan-900"
    // const pythonBackground = "bg-linear-to-br from-[#1565A7] to-[#327EBD] border border-[#327EBD]"
    // const reflexBackground = "bg-gradient-to-br from-violet-800 via-violet-600 to-violet-500 border border-violet-900"
    // const djangoBackground = "bg-gradient-to-br from-[#187451] to-[#27c187] border border-[#187451]"

    const tabs = [
        { id:"personales", label: "Personales"},
        { id:"clientes", label: "Para Clientes" },
    ]

    const contents = {
        personales: (
            <div>
                <Project
                    url={"https://vincode.dev"}
                    skillName={"Astro, React, Typescript y Tailwind CSS"}
                    description={"Startup enfocada en el desarrollo de soluciones digitales para negocios e independientes."}
                    name={"Vincode.dev"}
                    skill={"astro"}
                    span={"md:col-span-2"}
                    image={"/imgs/vincode-img.webp"}
                    // background={reactBackground}
                />
                <Project
                    url={"https://bryanvivancosbusiness.vercel.app/"}
                    skillName={"React, Typescript y Strapi"}
                    description={"Impulsa tu presencia profesional con una tarjeta digital personalizada que reúne todos tus datos de contacto."}
                    name={"Tarjeta Digital Profesional"}
                    skill={"react"}
                    span={"md:col-span-2"}
                    image={"/imgs/bj-card-img.webp"}
                    // background={reactBackground}
                />
                <Project
                    url={"https://quizter-web.vercel.app/"}
                    skillName={"React, Typescript, Zustand, Material UI y Express.js"}
                    description={"Aplicación web de trivia. Página de preguntas de cultura general en la que pondras a prueba tus conocimientos. Usando Express.js para la API"}
                    name={"Quizter App"}
                    skill={"react"}
                    span={"md:col-span-2"}
                    image={"/imgs/quizter-img.webp"}
                    // background={reactBackground}
                />
                <Project
                    url={"https://randomizer-app-psi.vercel.app/"}
                    skillName={"React, Javascript y Tailwind CSS"}
                    description={"Aplicación web para sorteos aleatorios con lógica personalizada. Web de sorteos, juegos y datos aleatorios."}
                    name={"Randomizer App"}
                    skill={"react"}
                    span={"md:col-span-2"}
                    image={"/imgs/randomizer-img.webp"}
                    // background={reactBackground}
                />
                <Project
                    url={"https://github.com/bryanvivancos/control-asist"}
                    skillName={"Python, Django y SQL"}
                    description={"Desarrollo de sistema con Python (Django) y SQL Server para el registro y gestión de asistencia de colaboradores. Diseño de base de datos relacional, consultas SQL para análisis de asistencia, generación de reportes y métricas de comportamiento."}
                    name={"Assist Control"}
                    skill={"django"}
                    span={"md:col-span-1"}
                    image={"/imgs/assist-control-img.webp"}
                    // background={djangoBackground}
                />
                <Project
                    url={"https://github.com/bryanvivancos/album_project"}
                    skillName={"Python, Reflex y Supabase"}
                    description={"Aplicación full-stack tipo CRUD con arquitectura orientada a componentes e integración con base de datos en la nube, optimizando la gestión y persistencia de datos en tiempo real."}
                    name={"Album/Catalog"}
                    ico={"/reflex.ico"}
                    span={"md:col-span-2"}
                    image={"/imgs/album-reflex-img.webp"}
                    // background={reflexBackground}
                />
                <Project
                    url={"https://github.com/bryanvivancos/mj-awards-webscrapping"}
                    skillName={"Python"}
                    description={"Extracción de datos desde fuentes web utilizando técnicas de scraping.Procesamiento, limpieza y estructuración de datos para su posterior análisis.Aplicación de análisis exploratorio y visualización para identificar insights relevantes."}
                    name={"Web Scrapping con Python"}
                    skill={"python"}
                    span={"md:col-span-2"}
                    image={"/imgs/web-scrapping-img.webp"}
                    // background={reactBackground}
                 />
                {/* <Project
                    url={"https://bryanvivancos.vercel.app/"}
                    skillName={"Python y Reflex"}
                    description={"Página web que muestra mi portafolio personal usando las tecnologías Reflex y Python."}
                    name={"Portfolio Web con Reflex"}
                    ico={"/reflex.ico"}
                    span={"md:col-span-1"}
                    image={"/imgs/portfolio-reflex-img.webp"}
                    // background={reflexBackground}
                /> */}
                {/* <Project
                    url={"https://github.com/bryanvivancos/backend_exercise_py"}
                    skillName={"Python, FastAPI y MongoDB"}
                    name={"Python Backend"}
                    skill={"mongodb"}
                    span={"md:col-span-1"}
                    image={"src/assets/imgs/business-card.webp"}
                    // background={djangoBackground}
                /> */}
                {/* <Project
                    url={"https://github.com/bryanvivancos/python_crash_course/tree/main/generating_data/chapter_15"}
                    skillName={"Python"}
                    name={"Generador de Datos"}
                    skill={"python"}
                    span={"md:col-span-2"}
                    image={"src/assets/imgs/business-card.webp"}
                    // background={pythonBackground}
                /> */}
                {/* <Project
                    url={"https://github.com/bryanvivancos/x_FollowCard"}
                    skillName={"React y Javascript"}
                    description={"Plantilla simple de Seguir/Dejar de seguir de X."}
                    name={"Follow Card de X"}
                    skill={"react"}
                    span={"md:col-span-2"}
                    image={"src/assets/imgs/business-card.webp"}
                    // background={reactBackground}
                /> */}
            </div>
        ),
        clientes: (
            <div>
                <Project
                    url={"https://vincode.dev/services/vin-display"}
                    skillName={"React, Typescript y Tailwind CSS"}
                    description={"Sistema web para gestión de publicidad y menús dinámicos en negocios. Software de cartelería digital para negocios que desean gestionar su publicidad, menús y promociones de forma dinámica."}
                    name={"VIN DISPLAY - Software de Cartelería Digital y Menús Dinámicos"}
                    skill={"react"}
                    span={"md:col-span-2"}
                    image={"/imgs/vin-display.webp"}
                    // background={reactBackground}
                />
                <Project
                    url={"https://catquiz-card.vercel.app/"}
                    skillName={"React, Typescript, Tailwind CSS y Strapi"}
                    description={"Tarjeta Digital para una Tienda de Joyas."}
                    name={"CatQuiz - Business Card"}
                    skill={"react"}
                    span={"md:col-span-2"}
                    image={"/imgs/catquiz-card-img.webp"}
                    // background={reactBackground}
                />
                <Project
                    url={"https://catquizpe.vercel.app/"}
                    skillName={"React, Javascript y Tailwind CSS"}
                    description={"Página link bio web para tienda de joyas con React JS."}
                    name={"CatQuiz - Link Bio"}
                    skill={"react"}
                    span={"md:col-span-2"}
                    image={"/imgs/catquiz-linkbio-img.webp"}
                    // background={reactBackground}
                />
                <Project
                    url={"https://github.com/bryanvivancos/formularioweb_a_pdf"}
                    skillName={"Python"}
                    description={"Automatización de generación de documentos desde formularios web."}
                    name={"Formulario Web a Word"}
                    skill={"python"}
                    span={"md:col-span-1"}
                    image={"/imgs/formulario-web-word-img.webp"}
                    // background={pythonBackground}
                />
            </div>
        )
    }

    return (
        <section id='projectstab' className='w-full py-16 md:py-24'>
            <div className='flex flex-col items-center gap-4 mb-12'>
                <div className='inline-flex items-center gap-2'>
                    
                    <span className='text-green-600 tracking-[0.5em] font-bold font-Quick text-sm md:text-base uppercase'>
                        Portfolio
                    </span>
                    
                </div>
                <h2 className='text-text-primary font-Quick font-black text-3xl md:text-4xl text-center'>
                    Mis Proyectos
                </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {tabs.map((tab) => (
                    <button key={tab.id}
                    className={`px-8 py-3 font-Quick font-semibold rounded-lg transition-all duration-300 ${activeTab === tab.id ? "bg-green-600 text-text-primary shadow-lg" : "bg-bg-card text-text-secondary hover:bg-bg-card-hover border border-border"}`}
                    onClick={() => setActiveTab(tab.id)} 
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className='mt-12'>
                {contents[activeTab]}
            </div>
        </section>
    );
}

export default ProjectsTab;
