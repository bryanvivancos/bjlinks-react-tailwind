import sprite from '../assets/sprite.svg'

const Resume = () => {
    return <section className='w-full py-16 md:py-24'> 
        <div className='flex flex-col items-center gap-8 mb-12'>
            <div className='inline-flex items-center gap-2'>
                
                <span className='text-green-600 tracking-[0.5em] font-bold font-Quick text-sm md:text-base uppercase'>
                    Currículums
                </span>
                
            </div>
            <h2 className="text-text-primary font-Quick font-black text-3xl md:text-4xl text-center">
                Descarga mi CV
            </h2>
        </div>

        <div className="flex flex-row justify-center gap-8">

            <div className='flex flex-col items-center gap-4'>
                <a className='group bg-bg-card hover:bg-green-600 border-2 border-border hover:border-green-600 p-6 rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex flex-col items-center gap-3' 
                    href="https://docs.google.com/document/d/1COvjcCJE4GXUlkkSa9U6CrofLQPBkKWM/edit?usp=sharing&ouid=117976139180001148882&rtpof=true&sd=true"
                    target="_blank" aria-label='cv' title='Ir a CV de Bryan'
                    >
                        <svg width="40" height="40" className='text-accent group-hover:text-text-primary transition-colors'>
                            <use href={`${sprite}#cv`}/>
                        </svg>
                        <span className='text-text-primary font-Quick font-semibold group-hover:text-text-primary'>Español</span>
                </a>
            </div>

            <div className='flex flex-col items-center gap-4'>
                <a className='group bg-bg-card hover:bg-green-600 border-2 border-border hover:border-green-600 p-6 rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex flex-col items-center gap-3' 
                    href="https://docs.google.com/document/d/1-HQzm3XRZhPyWru5ViaSeCmuRuVj-9RO/edit?usp=sharing&ouid=117976139180001148882&rtpof=true&sd=true"
                    target="_blank" aria-label='cv' title="Go to Bryan's Resume"
                    >
                        <svg width="40" height="40" className='text-accent group-hover:text-text-primary transition-colors'>
                            <use href={`${sprite}#cv`}/>
                        </svg>
                        <span className='text-text-primary font-Quick font-semibold group-hover:text-text-primary'>English</span>
                </a>
            </div>
        </div>
    </section>
}

export default Resume