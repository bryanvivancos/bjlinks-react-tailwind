import '../../styles/App.css'
import sprite from '../../assets/sprite.svg'

const SocialIcon = ({ url, social, bg}) => {
    const UpperSocial = social.charAt(0).toUpperCase() + social.slice(1)

    return <a className={`${bg} p-2 size-12 xs:size-14 flex items-center justify-center rounded-full hover:scale-120 transition-transform`} 
        href={url}
        target="_blank" aria-label={`${social}`} title={`Ir a ${UpperSocial} de Bryan`}
        >
            <svg width="28" height="28">
                <use href={`${sprite}#${social}`}/>
            </svg>
        </a>
}

export default SocialIcon