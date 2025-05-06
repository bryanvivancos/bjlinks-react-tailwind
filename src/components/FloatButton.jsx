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

    return <div className='fixed bottom-10 right-5 p-2 flex items-end justify-end z-30'>

        <button className={`shadow-3xl flex items-center justify-center p-3 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-500 z-50 absolute cursor-pointer`} onClick={handleClick}>
            <svg width="35" height="35"
            className={`h-6 w-6 transition-all duration-200 ease-out ${isClicked ? 'rotate-90' : 'rotate-0'}`}>
                <use href={`${sprite}#menudots`}/>
            </svg>
        </button>


        {/* {isClicked && ( */}
            <div className={`flex flex-col gap-1 mb-5 mr-12 p-4 items-center justify-center
            rounded-3xl z-40 transition-all duration-300 ease-out origin-bottom-right transform ${isClicked ? 'scale-100 opacity-100 translate-x-0 pointer-events-auto' : 'scale-0 opacity-0 translate-x-10 pointer-events-none'}`}>
                
                <FloatBtnItem 
                    to="profile" 
                    item="Perfil" 
                    onClick={()=> setIsClicked(false)}/>
                
                <FloatBtnItem 
                    to="skills" 
                    item="Habilidades" 
                    onClick={()=> setIsClicked(false)} />
                
                <FloatBtnItem 
                    to="projects" 
                    item="Proyectos" 
                    onClick={()=> setIsClicked(false)}/>
                
                <FloatBtnItem 
                    to="certificates" 
                    item="Certificados" 
                    onClick={()=> setIsClicked(false)}/>
            </div>
        {/* )} */}

    </div>
}

export default FloatButton