import { useMemo } from 'react'
import '../styles/App.css'
import SkillItem from './atoms/SkillItem'


const skills_one = [
    { skill: "astro", url: "https://astro.build/" },
    { skill: "nextjs", url: "https://nextjs.org/" },
    { skill: "react", url: "https://react.dev/" },
    { skill: "tailwind", url: "https://tailwindcss.com/" },
    { skill: "html", url: "https://developer.mozilla.org/es/docs/Web/HTML" },
    { skill: "css", url: "https://developer.mozilla.org/es/docs/Web/CSS" },
    { skill: "javascript", url: "https://developer.mozilla.org/es/docs/Web/JavaScript" },
    { skill: "python", url: "https://www.python.org/" },
    { skill: "django", url: "https://www.djangoproject.com/" },
]

const skills_two = [
    { skill: "reflex", url: "https://reflex.dev/", ico: "/reflex.ico" },
    { skill: "bootstrap", url: "https://getbootstrap.com/" },
    { skill: "git", url: "https://git-scm.com/" },
    { skill: "mssql", url: "https://www.microsoft.com/es-es/sql-server" },
    { skill: "mongodb", url: "https://www.mongodb.com/" },
    { skill: "nodejs", url: "https://nodejs.org/es" },
    { skill: "zustand", url: "https://zustand-demo.pmnd.rs/", ico: "/zustand.ico" },
    { skill: "expressjs", url: "https://expressjs.com/" },
    { skill: "strapi", url: "https://strapi.io/" },
]


const Skills = () => {
    const duplicatedSkillsOne = useMemo(() => [...skills_one, ...skills_one], [])
    const duplicatedSkillsTwo = useMemo(() => [...skills_two, ...skills_two], [])

    return <section id='skills' className='py-16 md:py-24 relative z-10'>
        <div className='max-w-xs md:max-w-lg lg:max-w-xl mx-auto'>

            <div className='flex flex-col items-center gap-4 mb-12'>
                <div className='inline-flex items-center gap-2'>
                    <span className='pre-header'>
                        Stack Tecnológico
                    </span>
                </div>
                <h2 className='section-header'>
                    Tecnologías que domino
                </h2>
            </div>

            <div className="relative w-full overflow-hidden py-10 group space-y-4">

                {/* 🔥 Fade edges */}
                <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10"></div>
                <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10"></div>

                {/* 🔥 Carousel track */}
                <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused]">

                    {duplicatedSkillsOne.map((skill, index) => (
                        <SkillItem
                            key={index}
                            url={skill.url}
                            skill={skill.skill}
                        />
                    ))}

                </div>

                {/* 🔥 Carousel track */}
                <div className="flex w-max animate-scroll-right hover:[animation-play-state:paused]">

                    {duplicatedSkillsTwo.map((skill, index) => (
                        <SkillItem
                            key={index}
                            url={skill.url}
                            skill={skill.skill}
                            ico={skill.ico}
                        />
                    ))}

                </div>

            </div>
        </div>
    </section>
}

export default Skills