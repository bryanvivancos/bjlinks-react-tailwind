import '../styles/App.css'
import SkillItem from './atoms/SkillItem'

const Skills = () => {
    return <div id='skills' className='mb-8 z-50'>
        
        <h2 className='text-white font-Quick flex justify-center mb-4 font-black text-xl'>Habilidades</h2>

        <div className='flex flex-wrap justify-center gap-4'>

            <SkillItem 
                url={"https://react.dev/"}
                skill={"react"}
            />
            <SkillItem 
                url={"https://tailwindcss.com/"}
                skill={"tailwind"}
            />
            <SkillItem 
                url={"https://developer.mozilla.org/es/docs/Web/HTML"}
                skill={"html"}
            />
            <SkillItem 
                url={"https://developer.mozilla.org/es/docs/Web/CSS"}
                skill={"css"}
            />
            <SkillItem 
                url={"https://developer.mozilla.org/es/docs/Web/JavaScript"}
                skill={"javascript"}
            />
            <SkillItem 
                url={"https://www.python.org/"}
                skill={"python"}
            />
            <SkillItem 
                url={"https://www.djangoproject.com/"}
                skill={"django"}
            />
            <SkillItem 
                url={"https://reflex.dev/"}
                skill={"reflex"}
                ico={"/reflex.ico"}
            />
            <SkillItem 
                url={"https://getbootstrap.com/"}
                skill={"bootstrap"}
            />
            <SkillItem 
                url={"https://git-scm.com/"}
                skill={"git"}
            />
            <SkillItem 
                url={"https://www.microsoft.com/es-es/sql-server"}
                skill={"mssql"}
            />
            <SkillItem 
                url={"https://www.mongodb.com/"}
                skill={"mongodb"}
            />
            <SkillItem 
                url={"https://nodejs.org/es"}
                skill={"nodejs"}
            />
        </div>
            
    </div>
}

export default Skills