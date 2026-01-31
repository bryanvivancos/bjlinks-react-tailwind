import '../styles/App.css'
import SocialIcon from './atoms/SocialIcon'
import {LINKEDIN, GITHUB, MAIL, INSTAGRAM} from '../CONTANTS'

const Socials = () => {
    return <div className='flex my-4 gap-4 justify-center'>
        <SocialIcon
            bg={"bg-fondo-linkedin"}
            url={LINKEDIN}
            social={"linkedin"}
        />
        <SocialIcon
            bg={"bg-fondo-github"}
            url={GITHUB}
            social={"github"}
        />
        <SocialIcon
            bg={"bg-gradient-to-br from-azul-outlook via-viaazul-outlook to-lightazul-outlook"}
            url={MAIL}
            social={"mail"}
        />
        <SocialIcon
            bg={"bg-gradient-to-tr from-amarillo-ig via-rosa-ig to-morado-ig"}
            url={INSTAGRAM}
            social={"instagram"}
        />
        {/* <SocialIcon
            bg={"bg-fondo-x"}
            url={"https://x.com/bryanvivancos"}
            social={"x"}
        />

         LINKEDIN GRADIENTE "bg-gradient-to-br from-[#0a66c2] to-[#0077B5]"
        */}
    </div >
}

export default Socials