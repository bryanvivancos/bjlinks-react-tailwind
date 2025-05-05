import sprite from '../../assets/sprite.svg'


const CertificateItem = ({ url, logo, ico,from, course}) => { 
    return <div className="gap-6">
        <a href={url} target='_blank'
        className='flex gap-4 mr-0 group items-center'>
            {ico  ? 
                (<img className="group-hover:animate-slide-in-left" 
                    src={ico} alt= {`icono ${logo}`} />) :
                (<svg width="60" height="60"
                className="group-hover:animate-slide-in-left size-12 md:size-18">
                    <use href={`${sprite}#${logo}`}/>
                </svg>) 
            }
            <div className={`flex flex-col rounded-3xl px-4 py-1 w-full text-slate-200 bg-[#056559] border border-[#056559] group-hover:animate-slide-in-right`}>
                <span className='flex-start text-sm'>{from}</span>
                <span className='flex-end text-medium font-bold'>{course}</span>
            </div>
        </a>
    </div>
}

export default CertificateItem;