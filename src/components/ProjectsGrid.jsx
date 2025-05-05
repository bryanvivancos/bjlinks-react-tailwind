import '../styles/App.css'
import Project from './atoms/Project.jsx'

const ProjectsGrid = () => {   
    const reactBackground = "bg-gradient-to-br from-cyan-900 via-cyan-700 to-cyan-500 border border-cyan-900"
    const pythonBackground = "bg-linear-to-br from-[#1565A7] to-[#327EBD] border border-[#327EBD]"

    return <div id='projects' className='mb-8'>
        <h2 className='text-white font-Quick flex justify-center mb-4 font-black text-xl'>Proyectos</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 w-full">

            <Project
                url={""}
                skillName={"React JS y Tailwind CSS"}
                name={"Página de Links"}
                skill={"react"}
                span={"2"}
                background={reactBackground}
            />
            <Project
                url={"https://bryanvivancos.vercel.app/"}
                skillName={"Python y Reflex"}
                name={"Portfolio Web con Reflex"}
                ico={"/reflex.ico"}
                span={"1"}
                background={pythonBackground}
            />
            
            <Project
                url={"https://github.com/bryanvivancos/control-asist"}
                skillName={"Python, Django y SQL"}
                name={"Assist Control"}
                skill={"python"}
                span={"1"}
                background={pythonBackground}
            />
            <Project
                url={"https://github.com/bryanvivancos/catquizweb-v2"}
                skillName={"React JS"}
                name={"CatQuiz Web"}
                skill={"react"}
                span={"2"}
                background={reactBackground}
            />
            <Project
                url={"https://github.com/bryanvivancos/album_project"}
                skillName={"Python, Reflex y Supabase"}
                name={"Album/Catalog"}
                ico={"/reflex.ico"}
                span={"2"}
                background={pythonBackground}
            />
            <Project
                url={"https://github.com/bryanvivancos/formularioweb_a_pdf"}
                skillName={"Python"}
                name={"Formulario Web a Word"}
                skill={"python"}
                span={"1"}
                background={pythonBackground}
            />
            <Project
                url={"https://github.com/bryanvivancos/backend_exercise_py"}
                skillName={"Python, FastAPI y MongoDB"}
                name={"Backend Exercise"}
                skill={"python"}
                span={"1"}
                background={pythonBackground}
            />
            <Project
                url={"https://github.com/bryanvivancos/python_crash_course/tree/main/generating_data/chapter_15"}
                skillName={"Python"}
                name={"Generador de Datos"}
                skill={"python"}
                span={"2"}
                background={pythonBackground}
            />
            <Project
                url={"https://github.com/bryanvivancos/x_FollowCard"}
                skillName={"React JS"}
                name={"Generador de Datos"}
                skill={"react"}
                span={"2"}
                background={reactBackground}
            />
            <Project
                url={"https://github.com/bryanvivancos?tab=repositories"}
                skillName={"GitHub"}
                name={"Más Proyectos..."}
                skill={"github"}
                span={"1"}
                background={"bg-gradient-to-br from-gray-600 to-gray-400 border border-gray-900"}
            />
        </div>
    </div>
}

export default ProjectsGrid