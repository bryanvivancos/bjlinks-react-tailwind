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
                skillName={"React, Typescript y Tailwind CSS"}
                description={"Startup de Desarrollo Web"}
                name={"Vincode.dev"}
                skill={"react"}
                span={"md:col-span-2"}
                // background={reactBackground}
            />
                <Project
                url={"https://bryanvivancosbusiness.vercel.app/"}
                skillName={"React, Typescript y Strapi"}
                description={"Tarjeta que muestra tus datos mas importantes que se puede compartir fácilmente ya que cuenta con qr integrado y botón para agregar contacto"}
                name={"Tarjeta Digital Profesional"}
                skill={"react"}
                span={"md:col-span-2"}
                // background={reactBackground}
            />
            <Project
                url={"https://quizter-web.vercel.app/"}
                skillName={"React, Typescript, Zustand, Material UI y Express.js"}
                description={"Página de preguntas de cultura general en la que pondras a prueba tus conocimientos. Usando Express.js para la API"}
                name={"Quizter App"}
                skill={"react"}
                span={"md:col-span-2"}
                // background={reactBackground}
            />
            <Project
                url={"https://randomizer-app-psi.vercel.app/"}
                skillName={"React, Javascript y Tailwind CSS"}
                description={"Web de sorteos y datos aleatorios."}
                name={"Randomizer App"}
                skill={"react"}
                span={"md:col-span-2"}
                // background={reactBackground}
            />
            <Project
                url={"https://bryanvivancos.vercel.app/"}
                skillName={"Python y Reflex"}
                description={"Página web que muestra mi portafolio personal usando las tecnologías Reflex y Python."}
                name={"Portfolio Web con Reflex"}
                ico={"/reflex.ico"}
                span={"md:col-span-1"}
                // background={reflexBackground}
            />
            
            <Project
                url={"https://github.com/bryanvivancos/control-asist"}
                skillName={"Python, Django y SQL"}
                description={"Control de asistencias para empresas con Python, Django, SQL Server."}
                name={"Assist Control"}
                skill={"django"}
                span={"md:col-span-1"}
                // background={djangoBackground}
            />
            <Project
                url={"https://github.com/bryanvivancos/album_project"}
                skillName={"Python, Reflex y Supabase"}
                description={"Plataforma con CRUD completo, muestra un catálogo de items con backend en SUPABASE."}
                name={"Album/Catalog"}
                ico={"/reflex.ico"}
                span={"md:col-span-2"}
                // background={reflexBackground}
            />
            {/* <Project
                url={"https://github.com/bryanvivancos/backend_exercise_py"}
                skillName={"Python, FastAPI y MongoDB"}
                name={"Python Backend"}
                skill={"mongodb"}
                span={"md:col-span-1"}
                // background={djangoBackground}
            /> */}
            {/* <Project
                url={"https://github.com/bryanvivancos/python_crash_course/tree/main/generating_data/chapter_15"}
                skillName={"Python"}
                name={"Generador de Datos"}
                skill={"python"}
                span={"md:col-span-2"}
                // background={pythonBackground}
            /> */}
            <Project
                url={"https://github.com/bryanvivancos/x_FollowCard"}
                skillName={"React y Javascript"}
                description={"Plantilla simple de Seguir/Dejar de seguir de X."}
                name={"Follow Card de X"}
                skill={"react"}
                span={"md:col-span-2"}
                // background={reactBackground}
            />
                <Project
                url={"https://github.com/bryanvivancos/mj-awards-webscrapping"}
                skillName={"Python"}
                description={"Haciendo web scrapping de la página de los premios un cantante en wikipedia."}
                name={"Web Scrapping con Python"}
                skill={"python"}
                span={"md:col-span-2"}
                // background={reactBackground}
            />
            </div>
        ),
        clientes: (
            <div>
                <Project
                url={"https://catquiz-card.vercel.app/"}
                skillName={"React, Typescript, Tailwind CSS y Strapi"}
                description={"Tarjeta digital para Joyeria"}
                name={"CatQuiz - Business Card"}
                skill={"react"}
                span={"md:col-span-2"}
                // background={reactBackground}
            />
                <Project
                    url={"https://catquizpe.vercel.app/"}
                    skillName={"React, Javascript y Tailwind CSS"}
                    description={"Link Web para la empresa Catquiz con React."}
                    name={"CatQuiz - Link Bio"}
                    skill={"react"}
                    span={"md:col-span-2"}
                    // background={reactBackground}
                />
                <Project
                url={"https://github.com/bryanvivancos/formularioweb_a_pdf"}
                skillName={"Python"}
                description={"Plantilla web tipo formulario que pasa las respuestas a un documento Word."}
                name={"Formulario Web a Word"}
                skill={"python"}
                span={"md:col-span-1"}
                // background={pythonBackground}
            />
            </div>
        )
    }

    return (
        <div id='projectstab' className='mb-8 w-full'>
            <h2 className='text-white font-Quick flex justify-center mb-4 font-black text-xl'>Proyectos</h2>

            <div className="flex flex-wrap justify-around border-b mb-8">
                {tabs.map((tab) => (
                    <button key={tab.id}
                    className={`px-4 py-2 text-white w-1/2 font-Quick ${activeTab === tab.id ? "border-b-2 border-emerald-900 text-emerald-300" : "hover:text-emerald-300"}`}
                    onClick={() => setActiveTab(tab.id)} 
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className='my-4 gap-2'>
                {contents[activeTab]}
            </div>
        </div>
    );
}

export default ProjectsTab;
