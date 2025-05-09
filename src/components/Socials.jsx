import '../styles/App.css'
import SocialIcon from './atoms/SocialIcon'

const Socials = () => {
    return <div className='flex flex-wrap gap-4 mb-8 justify-center'>
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
            bg={"bg-gradient-to-br from-azul-outlook via-viaazul-outlook to-lightazul-outlook"}
            url={"mailto:bryanvivanco97@outlook.com"}
            social={"mail"}
        />
        <SocialIcon
            bg={"bg-gradient-to-tr from-amarillo-ig via-rosa-ig to-morado-ig"}
            url={"https://instagram.com/bryanvivancos"}
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