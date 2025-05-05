import sprite from '../assets/sprite.svg'

const Resume = () => {
    return <div className='mb-8'> 
        <h2 className="text-white font-bold text-center mb-4 text-xl font-Quick">
            Curriculums
        </h2>

        <div className="flex flex-row justify-center gap-8">

            <div className='flex flex-col items-center gap-2'>
                <a className={`bg-emerald-900 p-2 size-10 md:size-18 flex flex-col justify-center rounded-full hover:scale-120 transition-transform gap-4 items-center`} 
                    href="https://docs.google.com/document/d/1COvjcCJE4GXUlkkSa9U6CrofLQPBkKWM/edit?usp=sharing&ouid=117976139180001148882&rtpof=true&sd=true"
                    target="_blank" aria-label={`cv`} title={`Ir a CV de Bryan`}
                    >
                        <svg width="40" height="40">
                            <use href={`${sprite}#cv`}/>
                        </svg>
                </a>
                <span className='text-white font-Quick'>ES-ES</span>
            </div>

            <div className='flex flex-col items-center gap-2'>
                <a className={`bg-emerald-900 p-2 size-10 md:size-18 flex flex-col justify-center rounded-full hover:scale-120 transition-transform gap-4 items-center`} 
                    href="https://docs.google.com/document/d/1-HQzm3XRZhPyWru5ViaSeCmuRuVj-9RO/edit?usp=sharing&ouid=117976139180001148882&rtpof=true&sd=true"
                    target="_blank" aria-label={`cv`} title={`Go to Bryan's Resume`}
                    >
                        <svg width="40" height="40">
                            <use href={`${sprite}#cv`}/>
                        </svg>
                </a>
                
                <span className='text-white font-Quick'>EN-US</span>
            </div>
        </div>
        </div>
}

export default Resume