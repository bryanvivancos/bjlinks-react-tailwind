import React from 'react'
import '../../styles/App.css'
import sprite from '../../assets/sprite.svg'

const Project = ({ url, skillName, description, name, skill, ico, span, image }) => {
    return (
        <a href={url} 
        target="_blank" 
        aria-label={`Proyecto de ${skill}`}
        className={`flex items-start hover:scale-105 hover:contrast-125 transition col-span-1 ${span} group p-2`}>

            <div className={`w-2/3 relative overflow-hidden flex flex-col md:border-y-3 md:border-l-3 border-y-2 border-l-2 border-green-900 rounded-bl-2xl rounded-tl-2xl p-1.5 px-2.5 md:p-1.5 md:px-2 h-32 justify-between`}>

                <span className='font-semibold md:text-lg text-base z-10 text-white text flex my-1'>
                    {name} 
                </span>
            
                <p className='text-white md:text-xs sm:text-[10px] text-[7.5px] pr-16'
                >{ description }</p>

                <div className='flex gap-2 items-center w-full my-1'>
                    <span className='md:text-xs text-[8px] border px-1.5 rounded-lg py-0.5 z-10 text-white'>
                        {skillName}
                    </span>
                    {/* <svg width="32" height="32" 
                        className='size-3.5 block md:hidden group-hover:block'>
                        <use href={`${sprite}#openlink`}/>
                    </svg> */}
                </div>

                {ico ? (
                    <img src={ico} alt={ico}
                    className='absolute -right-4 -bottom-4 -rotate-6 size-14 md:size-20 group-hover:-rotate-12 group-hover:scale-125 transtition-transform'/>) : 
                    (
                        <svg width="32" height="32"
                        className='absolute -right-4 -bottom-4 -rotate-6 size-14 md:size-20 group-hover:-rotate-12 group-hover:scale-125 transtition-transform'>
                            <use href={`${sprite}#${skill}`}/>
                        </svg>
                    )
                }
            </div>
                
            <div className='w-1/3 h-32 rounded-tr-2xl rounded-br-2xl overflow-hidden relative'>
                <div className='md:hidden group-hover:block absolute inset-0 bg-gradient-to-t from-black/35 to-transparent'/>
                <img 
                    src={`${image}`} 
                    alt="imagen de proyecto" 
                    className='h-full object-cover'
                />

                <svg width="32" height="32" 
                className='size-3.5 block md:hidden group-hover:block absolute bottom-2 right-2'>
                <use href={`${sprite}#openlink`}/>
            </svg>
            </div>

        </a>
    )
}

export default Project;