import { DESCRIPTION } from '../CONTANTS'

const About = () => {
    return (
        <section id='about' className='w-full py-16 md:py-24 bg-bg-secondary'>
            <div className='w-full max-w-7xl mx-auto px-6 md:px-12'>
                
                <div className='grid md:grid-cols-2 gap-12 md:gap-16 items-center'>
                    
                    <div className='relative flex items-center justify-center order-2 md:order-1'>
                        <div className='relative w-full max-w-md'>
                            <div className='absolute -inset-4 bg-accent opacity-5 blur-2xl rounded-full'></div>
                            
                            <div className='relative bg-bg-card backdrop-blur-sm border border-border-hover rounded-2xl p-8 shadow-xl'>
                                <div className='space-y-6'>
                                    <div className='flex items-center gap-4'>
                                        <div className='w-12 h-12 rounded-full bg-accent flex items-center justify-center'>
                                            <svg className='w-6 h-6 text-text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className='text-text-primary font-Quick font-bold text-lg'>Ingeniero Colegiado</h3>
                                            <p className='text-text-muted text-sm'>Electrónica y Telecomunicaciones</p>
                                        </div>
                                    </div>

                                    <div className='flex items-center gap-4'>
                                        <div className='w-12 h-12 rounded-full bg-accent flex items-center justify-center'>
                                            <svg className='w-6 h-6 text-text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4' />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className='text-text-primary font-Quick font-bold text-lg'>+4 Años de Experiencia</h3>
                                            <p className='text-text-muted text-sm'>Desarrollo Web y TI</p>
                                        </div>
                                    </div>

                                    <div className='flex items-center gap-4'>
                                        <div className='w-12 h-12 rounded-full bg-accent flex items-center justify-center'>
                                            <svg className='w-6 h-6 text-text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className='text-text-primary font-Quick font-bold text-lg'>Proyectos Reales</h3>
                                            <p className='text-text-muted text-sm'>Clientes y personales</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-6 md:gap-8 order-1 md:order-2'>
                        <div className='inline-flex items-center gap-2'>
                            <div className='w-12 h-1 bg-accent rounded-full'></div>
                            <span className='text-text-secondary font-Quick text-sm md:text-base tracking-wide uppercase'>
                                Sobre mí
                            </span>
                        </div>

                        <h2 className='font-Quick font-black text-3xl md:text-4xl lg:text-5xl leading-tight text-text-primary'>
                            Transformando ideas en{' '}
                            <span className='text-accent'>soluciones digitales</span>
                        </h2>

                        <p className='text-text-secondary font-Quick text-base md:text-lg leading-relaxed'>
                            {DESCRIPTION}
                        </p>

                        <div className='grid grid-cols-2 gap-6 pt-4'>
                            <div className='space-y-2'>
                                <div className='text-accent font-Quick font-black text-3xl md:text-4xl'>11+</div>
                                <div className='text-text-muted font-Quick text-sm'>Proyectos Completados</div>
                            </div>
                            <div className='space-y-2'>
                                <div className='text-accent font-Quick font-black text-3xl md:text-4xl'>12+</div>
                                <div className='text-text-muted font-Quick text-sm'>Certificaciones</div>
                            </div>
                        </div>

                        <div className='flex flex-wrap gap-3 pt-4'>
                            <span className='px-4 py-2 bg-bg-card border border-border rounded-lg text-text-primary font-Quick text-sm'>
                                React
                            </span>
                            <span className='px-4 py-2 bg-bg-card border border-border rounded-lg text-text-primary font-Quick text-sm'>
                                Python
                            </span>
                            <span className='px-4 py-2 bg-bg-card border border-border rounded-lg text-text-primary font-Quick text-sm'>
                                Django
                            </span>
                            <span className='px-4 py-2 bg-bg-card border border-border rounded-lg text-text-primary font-Quick text-sm'>
                                Tailwind CSS
                            </span>
                            <span className='px-4 py-2 bg-bg-card border border-border rounded-lg text-text-primary font-Quick text-sm'>
                                TypeScript
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
