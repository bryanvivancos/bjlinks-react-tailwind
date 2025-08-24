import React from 'react'
import '../../styles/App.css'
import sprite from '../../assets/sprite.svg'

const Project = ({ url, skillName, description, name, skill, ico, span }) => {
    return (
        <a href={url} 
        target="_blank" 
        aria-label={`Proyecto de ${skill}`}
        className={`my-4 relative overflow-hidden border-y-2 border-green-900 flex items-start hover:scale-105 hover:contrast-125 transition p-2 min-h-28 col-span-1 ${span} group flex flex-col justify-between gap-5`}>

            <div className=' top-2 left-2 flex gap-2 items-center w-full my-1'>
                <span className='text-xs border rounded-xl px-2 py-0.5 z-10 text-white'>
                    {skillName}
                </span>
                <svg width="32" height="32" 
                    className='size-3.5 block md:hidden group-hover:block'>
                        <use href={`${sprite}#openlink`}/>
                    </svg>
            </div>
            
            <p className='text-white text-sm pr-16'
            >{ description }</p>

            <span className=' bottom-2 left-2 font-bold text-xl z-10 text-white text flex my-1'>
                {name} 
            </span>

            {ico ? (
                <img src={ico} alt={ico}
                className='absolute -right-4 -bottom-4 -rotate-6 size-18 md:size-22 group-hover:-rotate-12 group-hove:scale-125 transtition-transform'/>) : 
                (
                    <svg width="32" height="32"
                    className='absolute -right-4 -bottom-4 -rotate-6 size-18 md:size-22 group-hover:-rotate-12 group-hover:scale-125 transtition-transform'>
                        <use href={`${sprite}#${skill}`}/>
                    </svg>
                )
            }
            
        </a>
    )
}

export default Project;

{/* <a href={url} 
        target="_blank" 
        aria-label={`Proyecto de ${skill}`}
        className={`my-2 relative rounded-3xl overflow-hidden border flex items-start hover:scale-105 hover:contrast-125 transition p-7 min-h-28 col-span-1 ${span} group ${background}`}>

            <div className='absolute top-2 left-2 flex gap-2 items-center w-full'>
                <span className='text-xs border rounded-xl px-2 py-0.5 z-10 text-white'>
                    {skillName}
                </span>
                <svg width="32" height="32" 
                    className='size-3.5 block md:hidden group-hover:block'>
                        <use href={`${sprite}#openlink`}/>
                    </svg>
            </div>
            

            <span className='absolute bottom-2 left-2 font-bold text-xl z-10 text-emerald-950 text flex'>
                {name} 
            </span>

            {ico ? (
                <img src={ico} alt={ico}
                className='absolute -right-4 -bottom-4 -rotate-6 size-18 md:size-22 group-hover:-rotate-12 group-hove:scale-125 transtition-transform'/>) : 
                (
                    <svg width="32" height="32"
                    className='absolute -right-4 -bottom-4 -rotate-6 size-18 md:size-22 group-hover:-rotate-12 group-hover:scale-125 transtition-transform'>
                        <use href={`${sprite}#${skill}`}/>
                    </svg>
                )
            }
            
        </a> */}