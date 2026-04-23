const About = () => {
    return (
        <section id='about' className='relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center py-20 md:py-32'>
            
            {/* Gradient Blur Background - Top Left (Blue/Purple) */}
            <div className='absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-600/30 via-brown-600/20 to-transparent blur-[120px] rounded-full'></div>
            
            {/* Gradient Blur Background - Center (Orange/Red) */}
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-green-600/40 via-green-600/20 to-transparent blur-[150px] rounded-full'></div>
            
            {/* Gradient Blur Background - Bottom Right (Blue) */}
            <div className='absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-blue-600/30 via-brown-600/20 to-transparent blur-[120px] rounded-full'></div>

            {/* Content Container */}
            <div className='relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12'>
                
                <div className='flex items-center font-Quick justify-center gap-1 mb-8 text-green-600 tracking-[0.5em] font-bold'>ABOUT</div>

                {/* Small Decorative Dots */}
                {/* <div className='flex items-center justify-center gap-1 mb-8'>
                    <div className='w-1.5 h-1.5 rounded-full bg-orange-500'></div>
                    <div className='w-1.5 h-1.5 rounded-full bg-orange-500'></div>
                    <div className='w-1.5 h-1.5 rounded-full bg-orange-500'></div>
                    <div className='w-1.5 h-1.5 rounded-full bg-orange-500'></div>
                </div> */}

                {/* Main Text Content */}
                <div className='text-center space-y-8'>
                    <h2 className='text-white text-lg md:text-xl lg:text-2xl font-light leading-relaxed tracking-wide px-4 uppercase'>
                        {' '}
                        <span className='font-normal'>DESARROLLADOR WEB</span>{' '} e Ingeniero Electrónico y Telecomunicaciones Colegiado. 
                        Con +4 años de experiencia construyendo aplicaciones web y soluciones end-to-end. Experiencia desarrollando sistemas full-stack utilizando React, Node.js, Python y SQL, abarcando desde interfaces de usuario hasta APIs y gestión de datos en la nube. 
                    </h2>
                </div>

                {/* CTA Button */}
                {/* <div className='flex justify-center mt-12'>
                    <a 
                        href='#resume'
                        className='inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-sm font-medium tracking-wider uppercase transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105'
                    >
                        MORE ABOUT ME
                    </a>
                </div> */}
            </div>
        </section>
    )
}

export default About
