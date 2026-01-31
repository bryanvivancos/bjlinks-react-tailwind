import sprite from '../../assets/sprite.svg'

const CertificateItem = ({ url, logo, ico, from, course}) => { 
    return <div className="gap-6">
        <a href={url} target='_blank'
        className='flex gap-4 mr-0 group items-center'>
            {ico  ? 
                (<div className="group-hover:animate-squeeze transition-all duration-300 ease-in-out size-12 md:size-18 object-contain flex items-center justify-center">
                    <img className="h-8 xs:h-12 md:h-16" 
                        src={ico} alt= {`icono ${logo}`} /></div>
                ) :
                (<svg width="60" height="60"
                className="group-hover:animate-squeeze size-12 md:size-18">
                    <use href={`${sprite}#${logo}`}/>
                </svg>) 
            }
            <div className={`flex flex-col rounded-3xl px-4 py-1 w-full text-slate-200 bg-[#056559] border border-[#056559] group-hover:animate-slide-in-right transition-all duration-300 ease-in-out`}>
                <span className='flex-start text-sm text-balance'>{from}</span>
                
                <div className=' flex flex-end justify-between gap-2 items-center w-full'>
                    <span className='text-medium text-balance font-bold'>{course}</span>
                    <svg width="32" height="32" 
                        className='size-3 shrink-0 md:size-3.5 block md:hidden group-hover:block flex-end'>
                            <use href={`${sprite}#openlink`}/>
                    </svg>
                </div>
            </div>
        </a>
    </div>
}

export default CertificateItem;
