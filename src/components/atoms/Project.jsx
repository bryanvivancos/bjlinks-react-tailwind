import React from 'react'
import '../../styles/App.css'
import sprite from '../../assets/sprite.svg'

const Project = ({ url, skillName, name, skill, ico, span, background}) => {
    return (
        <a href={url} 
        target="_blank" 
        aria-label={`Proyecto de ${skill}`}
        className={`relative rounded-3xl overflow-hidden border flex items-start hover:scale-105 hover:contrast-125 transition p-7 min-h-32 ${span} group ${background}`}>

            <span className='absolute top-2 left-2 text-xs border rounded-xl px-2 py-0.5 z-10 text-white'>{skillName}</span>

            <span className='absolute bottom-2 left-2 font-bold text-xl z-10 text-emerald-950 text'>{name}</span>

            {ico ? (
                <img src={ico} alt={ico}
                className='absolute -right-4 -bottom-4 -rotate-6 size-20 group-hover:-rotate-12 group-hove:scale-125 transtition-transform'/>) : 
                (
                    <svg width="50" height="50"
                    className='absolute -right-4 -bottom-4 -rotate-6 size-28 group-hover:-rotate-12 group-hove:scale-125 transtition-transform'>
                        <use href={`${sprite}#${skill}`}/>
                    </svg>
                )
            }
            
        </a>
    )
}

export default Project;