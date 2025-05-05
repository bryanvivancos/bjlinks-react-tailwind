import { useState,useRef } from 'react'
import sprite from '../assets/sprite.svg'
import FloatBtnItem from './atoms/FloatBtnItem'

const FloatButton = () => {

    const [isClicked, setIsClicked] = useState(false)
    const buttonRef = useRef(null)

    const handleClick = () => {
        setIsClicked(!isClicked)
        console.log("Menu Abierto:", !isClicked)
    }

    return <div className='group fixed bottom-10 right-5 p-2 flex items-end justify-end z-30'>

        <button className={`shadow-3xl flex items-center justify-center p-3 rounded-full bg-gradient-to-r from-emerald-700 to-emerald-500 z-50 absolute cursor-pointer`} onClick={handleClick}>
            <svg width="35" height="35"
            className={`h-6 w-6 ${isClicked === true && 'rotate-90'}`}>
                <use href={`${sprite}#menudots`}/>
            </svg>
        </button>

        {/* <FloatBtnItem
            to={'profile'}
            item={'Perfil'}
        /> */}




        {/* <Link to='profile' smooth={true} duration={500}
        className={`absolute w-30 rounded-full text-white font-Quick font-bold justify-center cursor-crosshair ${isClicked ? "transition-all duration-[0.2s] ease-out scale-y-0 group-hover:scale-y-100 group-hover:-translate-x-16 flex p-2 hover:p-3 bg-green-400 scale-100 hover:bg-green-600" : "hidden"}`}>
            Perfil</Link> */}

        {/* <Link to='skills' smooth={true} duration={500}
        className={`absolute w-30 rounded-full text-white font-Quick font-bold justify-center cursor-crosshair ${isClicked ? "transition-all duration-[0.2s] ease-out scale-y-0 group-hover:scale-y-100 group-hover:-translate-x-16 group-hover:-translate-y-15 flex p-2 hover:p-3 bg-green-400 scale-100 hover:bg-green-600" : "hidden"}`}>
            Habilidades</Link>

        <Link to='projects' smooth={true} duration={500}
        className={`absolute w-30 rounded-full text-white font-Quick font-bold justify-center cursor-crosshair ${isClicked ? "transition-all duration-[0.2s] ease-out scale-y-0 group-hover:scale-y-100 group-hover:-translate-x-16 group-hover:-translate-y-30 flex p-2 hover:p-3 bg-green-400 scale-100 hover:bg-green-600" : "hidden"}`}>
            Proyectos</Link>

        <Link to='certificates' smooth={true} duration={500}
        className={`absolute w-30 rounded-full text-white font-Quick font-bold justify-center cursor-crosshair ${isClicked ? "transition-all duration-[0.2s] ease-out scale-y-0 group-hover:scale-y-100 group-hover:-translate-x-16 group-hover:-translate-y-45 flex p-2 hover:p-3 bg-green-400 scale-100 hover:bg-green-600" : "hidden"}`}>
            Certificados</Link> */}

    </div>
}

export default FloatButton