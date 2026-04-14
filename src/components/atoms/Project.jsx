import React from 'react'
import '../../styles/App.css'
import sprite from '../../assets/sprite.svg'

const Project = ({ url, skillName, description, name, skill, ico, span, image }) => {
    return (
        <a href={url} 
        target="_blank" 
        aria-label={`Proyecto de ${name}`}
        className={`group bg-bg-card border border-border hover:border-border-hover rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl col-span-1 ${span}
        timeline-view animate-zoom-in animate-range-[entry_5%_contain_10%]
        `}>

            <div className="grid md:grid-cols-2 gap-0">
                
                <div className="flex flex-col justify-between p-6 md:p-8">
                    
                    <div className="flex items-start gap-3 mb-4">
                        {ico ? (
                            <img src={ico} alt={skill}
                            className='size-8 md:size-10 flex-shrink-0'/>
                        ) : (
                            <svg className='size-8 md:size-10 flex-shrink-0 text-accent'>
                                <use href={`${sprite}#${skill}`}/>
                            </svg>
                        )}
                        <div>
                            <span className='text-text-muted text-xs uppercase tracking-wide font-Quick'>
                                Featured Project
                            </span>
                            <h3 className='font-Quick font-bold text-lg md:text-xl text-text-primary mt-1 leading-tight'>
                                {name}
                            </h3>
                        </div>
                    </div>

                    <p className='text-text-secondary text-sm md:text-base leading-relaxed mb-6'>
                        {description}
                    </p>

                    <div className='flex flex-wrap gap-2 mb-4'>
                        {skillName.split(',').map((tech, index) => (
                            <span key={index} className='px-3 py-1 bg-bg-secondary border border-border rounded-lg text-text-primary text-xs font-Quick'>
                                {tech.trim()}
                            </span>
                        ))}
                    </div>

                    <div className='flex items-center gap-2 text-accent font-Quick font-semibold text-sm group-hover:gap-3 transition-all'>
                        <span>Ver proyecto</span>
                        <svg className='size-4'>
                            <use href={`${sprite}#openlink`}/>
                        </svg>
                    </div>
                </div>

                <div className='relative h-64 md:h-auto bg-bg-secondary overflow-hidden'>
                    <div className='absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent'></div>
                    <img 
                        src={image} 
                        alt={`Preview de ${name}`}
                        className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                </div>
            </div>

        </a>
    )
}

export default Project;