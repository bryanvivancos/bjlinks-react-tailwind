import '../../styles/App.css'
import sprite from '../../assets/sprite.svg'

const SocialIcon = ({ url, social, bg}) => {
    return <a className={`${bg} p-2 size-10 xs:size-12 flex items-center justify-center rounded-full hover:scale-110 transition-transform`} 
        href={url}
        target="_blank" aria-label={`${social}`} title={`Ir a ${social} de Bryan`}
        >
            <svg width="28" height="28">
                <use href={`${sprite}#${social}`}/>
            </svg>
        </a>
}

export default SocialIcon