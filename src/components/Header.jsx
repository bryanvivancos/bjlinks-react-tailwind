import { DIGITAL_CARD } from '../CONTANTS'
import sprite from '../assets/sprite.svg'
import '../styles/App.css'

const Header = () => {
    return (
            <header id='profile' className='flex flex-col justify-center items-center mb-8 mt-4'>
                <div className='relative '>
                    <img src='/IMG-20230911-WA0113.webp' alt="imagen de bryan web" 
                    className='h-50 md:h-80 object-cover mask-radial-at-center mask-radial-from-65% mask-radial-to-70% animate-slide-in-top mt-4 '
                    />   
                    <a className={`bg-emerald-800 text-emerald-300 size-16 md:size-20 flex items-center justify-center rounded-full hover:scale-120 transition-transform absolute bottom-0 right-2 md:right-4`} 
                        href={DIGITAL_CARD}
                        title={`Tarjeta digital`}
                        target='_blank'
                        >
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='size-10 md:size-14 m-2'>
                                <use href={`${sprite}#idbadge`}/>
                            </svg>
                        </a>
                </div>
                {/* <h3 className='text-emerald-300 font-mono border border-emerald-900 rounded-full shadow-sm flex items-center justify-center px-3 py-1 bg-emerald-900/80 -mt-4 z-10 tracking-wider cursor-crosshair animate-slide-in-top'>
                    @bryanvivancos
                </h3> */}

                <h1 className='text-3xl font-extrabold text-white leading-tight mt-1 font-Quick text-center'>
                    Bryan Josue Vivanco Silva
                </h1>

                <h2 className='text-white font-Quick text-center'>
                    <span>Desarrollador Web </span>
                    - Ingeniero Electrónico y de Telecomunicaciones
                </h2>
            </header>
    )
}

export default Header
