import sprite from '../../assets/sprite.svg'

const CertificateItem = ({ url, logo, ico, from, course}) => { 
    return (
        <a 
            href={url} 
            target='_blank'
            rel='noopener noreferrer'
            className='aspect-square relative flex flex-col justify-between p-3 lg:p-6 group bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-green-600/30 transition-all duration-500 hover:bg-white/10 hover:scale-[1.02] overflow-hidden'
        >
            {/* Gradient Overlay on Hover */}
            <div className='absolute inset-0 bg-gradient-to-br from-green-600/0 to-green-600/0 group-hover:from-green-600/5 group-hover:to-transparent transition-all duration-500 pointer-events-none'></div>

            {/* Icon/Logo */}
            <div className='relative z-10'>
                {ico ? (
                    <div className='size-6 lg:size-14 flex items-center justify-center transition-transform duration-500 group-hover:scale-110'>
                        <img 
                            className='h-6 lg:h-14 object-contain' 
                            src={ico} 
                            alt={`${from} logo`} 
                        />
                    </div>
                ) : (
                    <svg 
                        className='size-6 sm:size-8 lg:size-14 text-green-600 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3'
                    >
                        <use href={`${sprite}#${logo}`}/>
                    </svg>
                )}
            </div>

            {/* Content */}
            <div className='relative z-10 flex flex-col gap-1.5'>

                {/* Institution */}
                <span className='text-white/50 text-[8px] lg:text-sm uppercase tracking-wider font-medium'>
                    {from}
                </span>
                    
                {/* Course Name */}
                <h3 className='flex text-white text-[10px] lg:text-lg font-medium leading-tight line-clamp-3 group-hover:text-green-600 transition-colors duration-300'>
                    {course}
                    {/* Arrow Icon */}
                    <div className='mt-2 -mb-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1 group-hover:-translate-y-1'>
                        <svg 
                            className='w-5 h-5 text-green-600' 
                            fill='none' 
                            stroke='currentColor' 
                            viewBox='0 0 24 24'
                        >
                            <path 
                                strokeLinecap='round' 
                                strokeLinejoin='round' 
                                strokeWidth={2} 
                                d='M7 17L17 7M10 7h7v7' 
                            />
                        </svg>
                    </div>
                </h3>

            </div>
        </a>
    )
}

export default CertificateItem;
