import { DIGITAL_CARD } from '../CONTANTS'
import Socials from './Socials.jsx'

const Hero = () => {
    return (
        <section id='hero' className='w-full min-h-[85vh] flex items-center justify-center py-16 md:py-24'>
            <div className='w-full max-w-7xl mx-auto px-6 md:px-12'>
                
                <div className='grid md:grid-cols-2 gap-12 md:gap-16 items-center'>
                    
                    <div className='flex flex-col gap-6 md:gap-8 max-md:text-center'>
                        
                        <div className='inline-flex items-center gap-2 max-md:justify-center'>
                            <div className='w-2 h-2 rounded-full bg-accent animate-pulse'></div>
                            <span className='text-text-secondary font-Quick text-sm md:text-base tracking-wide'>
                                Hola, soy Bryan Vivanco
                            </span>
                        </div>

                        <h1 className='font-Quick font-black text-4xl md:text-5xl lg:text-6xl leading-tight text-text-primary'>
                            Desarrollador Web{' '}
                            <span className='relative inline-block'>
                                <span className='relative z-10'>desde Perú</span>
                                <span className='absolute bottom-2 left-0 w-full h-3 bg-accent opacity-30 -rotate-1'></span>
                            </span>
                        </h1>

                        <p className='text-text-secondary font-Quick text-base md:text-lg leading-relaxed max-w-xl'>
                            Ingeniero Electrónico y de Telecomunicaciones con +4 años creando soluciones web modernas para empresas e independientes.
                        </p>

                        <div className='flex flex-col sm:flex-row gap-4 max-md:items-center'>
                            <a 
                                href={DIGITAL_CARD}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-text-primary font-Quick font-bold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl'
                            >
                                Ver Tarjeta Digital
                                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                                </svg>
                            </a>

                            <a 
                                href='#projectstab'
                                className='inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-border hover:border-border-hover text-text-primary font-Quick font-semibold rounded-lg transition-all duration-300 hover:bg-bg-card'
                            >
                                Ver Proyectos
                            </a>
                        </div>

                        <div className='pt-4 max-md:flex max-md:justify-center'>
                            <Socials/>
                        </div>
                    </div>

                    <div className='relative flex items-center justify-center'>
                        <div className='absolute inset-0 bg-accent opacity-10 blur-3xl rounded-full'></div>
                        
                        <div className='relative w-full max-w-md aspect-square'>
                            <div className='absolute inset-0 border-2 border-border rounded-3xl rotate-6 opacity-50'></div>
                            <div className='absolute inset-0 border-2 border-accent rounded-3xl -rotate-6 opacity-30'></div>
                            
                            <div className='relative w-full h-full rounded-3xl overflow-hidden border-2 border-border-hover shadow-2xl'>
                                <img 
                                    src='/IMG-20230911-WA0113.webp' 
                                    alt='Bryan Vivanco Silva - Desarrollador Web' 
                                    className='w-full h-full object-cover'
                                />
                                
                                <div className='absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-60'></div>
                            </div>

                            <div className='absolute -bottom-4 -right-4 bg-bg-card backdrop-blur-sm border border-border-hover rounded-2xl px-6 py-4 shadow-xl'>
                                <div className='flex items-center gap-3'>
                                    <div className='w-3 h-3 rounded-full bg-accent animate-pulse'></div>
                                    <span className='text-text-primary font-Quick font-semibold text-sm'>
                                        Disponible para proyectos
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
