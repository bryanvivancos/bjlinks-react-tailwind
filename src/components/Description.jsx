import Socials from '../components/Socials.jsx'

export const Description = () => {
    return (
        <div className='flex flex-col px-4 place-content-center animate-slide-in-top'>
            <h1 className='text-3xl font-extrabold text-white leading-tight mt-1 font-Quick text-center'>
                Bryan Vivanco Silva
            </h1>

            <h2 className='text-white font-Quick text-center'>
                <span>Desarrollador Web </span>
                - Ingeniero Electrónico y de Telecomunicaciones
            </h2>

            <Socials/>
            
        </div>
    )
}
