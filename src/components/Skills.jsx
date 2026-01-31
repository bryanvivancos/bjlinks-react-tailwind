import '../styles/App.css'
import SkillItem from './atoms/SkillItem'

const Skills = () => {
    return <div id='skills' className='mb-8 pt-8 z-50 overflow-hidden space-y-2 md:max-w-xl max-md:max-w-md max-sm:w-[360px]
    [mask-image:linear-gradient(to_right,transparent,black_20%,black_90%,transparent)]
    [-webkit-mask-image:linear-gradient(to_right,transparent,black_20%,black_90%,transparent)]
    '>
        
        <h2 className='text-white font-Quick flex justify-center mb-4 font-black text-xl'>Habilidades</h2>

        <div className='
            inline-flex 
            animate-skills-left-spin 
            whitespace-nowrap 
            will-change-transform 
            gap-0
            hover:[animation-play-state:paused]'>
            <div className='flex justify-center gap-4'>
                <SkillItem 
                    url={"https://astro.build/"}
                    skill={"astro"}
                />
                <SkillItem 
                    url={"https://nextjs.org/"}
                    skill={"nextjs"}
                />
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
            </div>
            <div aria-hidden className='flex justify-center gap-0'>
                <SkillItem 
                    url={"https://astro.build/"}
                    skill={"astro"}
                />
                <SkillItem 
                    url={"https://nextjs.org/"}
                    skill={"nextjs"}
                />
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
            </div>
            
        </div>

        
        
        <div className='
            inline-flex 
            animate-skills-right-spin 
            whitespace-nowrap 
            will-change-transform 
            gap-0
            hover:[animation-play-state:paused]'>
            <div aria-hidden className='flex justify-center gap-4'>
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
                <SkillItem 
                    url={"https://zustand-demo.pmnd.rs/"}
                    skill={"zustand"}
                    ico={"/zustand.ico"}
                />
                <SkillItem 
                    url={"https://expressjs.com/"}
                    skill={"expressjs"}
                />
                <SkillItem 
                    url={"https://strapi.io/"}
                    skill={"strapi"}
                />
            </div>

            <div className='flex justify-center gap-0'>            
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
                <SkillItem 
                    url={"https://zustand-demo.pmnd.rs/"}
                    skill={"zustand"}
                    ico={"/zustand.ico"}
                />
                <SkillItem 
                    url={"https://expressjs.com/"}
                    skill={"expressjs"}
                />
                <SkillItem 
                    url={"https://strapi.io/"}
                    skill={"strapi"}
                />
                </div>
        </div>
            
    </div>
}

export default Skills