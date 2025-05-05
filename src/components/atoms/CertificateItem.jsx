import sprite from '../../assets/sprite.svg'


const CertificateItem = ({ url, logo, ico,from, course}) => { 
    return <div className="gap-6">
        <a href={url} target='_blank'
        className='flex gap-4 mr-0 group'>
            {ico  ? 
                (<img className="group-hover:animate-slide-in-left" 
                    src={ico} alt= {`icono ${logo}`} />) :
                (<svg width="60" height="60"
                className="group-hover:animate-slide-in-left">
                    <use href={`${sprite}#${logo}`}/>
                </svg>) 
            }
            <div className={`relative flex flex-col rounded-3xl px-4 py-1 w-full text-slate-200 bg-[#056559] border border-[#056559] group-hover:animate-slide-in-right`}>
                <span className='text-sm absolute top-1'>{from}</span>
                <span className='text-medium font-bold absolute bottom-2'>{course}</span>
            </div>
        </a>
    </div>
}

export default CertificateItem;