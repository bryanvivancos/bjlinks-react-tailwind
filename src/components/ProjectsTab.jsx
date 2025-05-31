import { useState } from 'react';
import Project from './atoms/Project.jsx';

const ProjectsTab = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    const reactBackground = "bg-gradient-to-br from-cyan-900 via-cyan-700 to-cyan-500 border border-cyan-900"
    const pythonBackground = "bg-linear-to-br from-[#1565A7] to-[#327EBD] border border-[#327EBD]"
    const reflexBackground = "bg-gradient-to-br from-violet-800 via-violet-600 to-violet-500 border border-violet-900"
    const djangoBackground = "bg-gradient-to-br from-[#187451] to-[#27c187] border border-[#187451]"

    const tabs = [
        { id:"tab1", label: "Personales"},
        { id:"tab2", label: "Para Clientes" },
    ]

    const contents = {
        tab1: (
            <div>
                <Project
                url={""}
                skillName={"React JS y Tailwind CSS"}
                name={"Links Bio"}
                skill={"react"}
                span={"md:col-span-2"}
                background={reactBackground}
            />
            <Project
                url={"https://bryanvivancos.vercel.app/"}
                skillName={"Python y Reflex"}
                name={"Portfolio Web con Reflex"}
                ico={"/reflex.ico"}
                span={"md:col-span-1"}
                background={reflexBackground}
            />
            
            <Project
                url={"https://github.com/bryanvivancos/control-asist"}
                skillName={"Python, Django y SQL"}
                name={"Assist Control"}
                skill={"django"}
                span={"md:col-span-1"}
                background={djangoBackground}
            />
            <Project
                url={"https://github.com/bryanvivancos/album_project"}
                skillName={"Python, Reflex y Supabase"}
                name={"Album/Catalog"}
                ico={"/reflex.ico"}
                span={"md:col-span-2"}
                background={reflexBackground}
            />
            <Project
                url={"https://github.com/bryanvivancos/formularioweb_a_pdf"}
                skillName={"Python"}
                name={"Formulario Web a Word"}
                skill={"python"}
                span={"md:col-span-1"}
                background={pythonBackground}
            />
            <Project
                url={"https://github.com/bryanvivancos/backend_exercise_py"}
                skillName={"Python, FastAPI y MongoDB"}
                name={"Python Backend"}
                skill={"mongodb"}
                span={"md:col-span-1"}
                background={djangoBackground}
            />
            <Project
                url={"https://github.com/bryanvivancos/python_crash_course/tree/main/generating_data/chapter_15"}
                skillName={"Python"}
                name={"Generador de Datos"}
                skill={"python"}
                span={"md:col-span-2"}
                background={pythonBackground}
            />
            <Project
                url={"https://github.com/bryanvivancos/x_FollowCard"}
                skillName={"React JS"}
                name={"Follow Card de X"}
                skill={"react"}
                span={"md:col-span-2"}
                background={reactBackground}
            />
            </div>
        ),
        tab2: (
            <div>
                <Project
                    url={"https://github.com/bryanvivancos/catquizweb-v2"}
                    skillName={"React JS"}
                    name={"CatQuiz Web"}
                    skill={"react"}
                    span={"md:col-span-2"}
                    background={reactBackground}
                />
            </div>
        )
    }

    return (
        <div id='projectstab' className='mb-8 w-full'>
            <h2 className='text-white font-Quick flex justify-center mb-4 font-black text-xl'>Proyectos</h2>

            <div className="flex flex-wrap justify-around border-b">
                {tabs.map((tab) => (
                    <button key={tab.id}
                    className={`px-4 py-2 text-white font-Quick ${activeTab === tab.id ? "border-b-2 border-emerald-900 text-emerald-300" : "hover:text-emerald-300"}`}
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