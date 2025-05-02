import '../styles/App.css'
import SocialIcon from './atoms/SocialIcon'

const Socials = () => {
    return <div className='flex gap-2 mb-8'>
        <SocialIcon
            bg={"bg-fondo-linkedin"}
            url={"https://www.linkedin.com/in/bryan-josue-vivanco-silva-8739521bb/"}
            social={"linkedin"}
        />
        <SocialIcon
            bg={"bg-fondo-github"}
            url={"https://github.com/bryanvivancos"}
            social={"github"}
        />
        <SocialIcon
            bg={"bg-fondo-x"}
            url={"https://x.com/bryanvivancos"}
            social={"x"}
        />
        <SocialIcon
            bg={"bg-gradient-to-tr from-amarillo-ig via-rosa-ig to-morado-ig"}
            url={"https://instagram.com/bryanvivancos"}
            social={"instagram"}
        />
    </div >
}

export default Socials