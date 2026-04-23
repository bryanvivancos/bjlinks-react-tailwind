import sprite from '../../assets/sprite.svg'

const ProjectItem = ({ project, index }) => {
    const { url, name, description, skillName, image, skill, ico } = project

    const isEven = index % 2 === 0

    return (
        <div className='w-full max-w-7xl mx-auto py-4 md:py-6'>
            <div className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center ${isEven ? '' : 'md:grid-flow-dense'}`}>
                
                {/* Content Side */}
                <div className={`flex flex-col gap-6 md:gap-8 ${isEven ? 'md:order-1' : 'md:order-2'} animate-fadeInLeft`}>
                    
                    {/* Badge */}
                    <div className='inline-flex items-center gap-2 w-fit'>
                        {ico ? (
                            <img src={ico} alt={skill} className='size-5' />
                        ) : skill ? (
                            <svg className='size-5 text-green-600'>
                                <use href={`${sprite}#${skill}`} />
                            </svg>
                        ) : null}
                        <span className='text-green-600 text-xs uppercase tracking-[0.2em] font-bold'>
                            Featured Project
                        </span>
                    </div>

                    {/* Title */}
                    <h3 className='text-white font-light text-xl md:text-2xl lg:text-3xl leading-tight'>
                        {name}
                    </h3>

                    {/* Description */}
                    <p className='text-white/60 text-lg leading-relaxed max-w-md'>
                        {description}
                    </p>

                    {/* Stack */}
                    <div className='flex flex-wrap items-center gap-3 text-white/40 text-lg'>
                        {skillName.split(',').map((tech, idx, arr) => (
                            <span key={idx} className='flex items-center gap-3'>
                                {tech.trim()}
                                {idx < arr.length - 1 && (
                                    <span className='w-1 h-1 rounded-full bg-white/40'></span>
                                )}
                            </span>
                        ))}
                    </div>

                    {/* CTA */}
                    <a 
                        href={url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-2 text-white hover:text-green-600 text-lg font-medium transition-all duration-300 group w-fit'
                    >
                        <span>View Project</span>
                        <svg className='w-4 h-4 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                        </svg>
                    </a>
                </div>

                {/* Image Side */}
                <div className={`relative ${isEven ? 'md:order-2' : 'md:order-1'} animate-fadeInRight`}>
                    <div className='relative rounded-2xl overflow-hidden shadow-2xl group'>
                        <img 
                            src={image}
                            alt={`${name} preview`}
                            className='w-full h-full object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-105'
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem
