import Navbar from './Navbar'
import TiltImage from './atoms/TiltImage'

const Hero = () => {
    return (
        <section id='hero' className='relative w-full min-h-screen bg-black overflow-hidden'>
            
            <Navbar />

            {/* Giant Background Text */}
            <div className='absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden'>
                <h1 className='text-[20vw] md:text-[18vw] font-black tracking-tighter text-white/[0.04] whitespace-nowrap select-none'>
                    BRYAN VIVANCO
                </h1>
            </div>

            {/* Main Content */}
            <div className='relative z-10 flex flex-col items-center justify-center min-h-screen px-6 md:px-12 pt-24 pb-32'>
                
                {/* Central Image */}
                <div className='w-full max-w-[280px] md:max-w-[340px] lg:max-w-[380px] mb-8 md:mb-12'>
                    <div className='relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl group'>
                        <TiltImage 
                            src='/IMG-20230911-WA0113.webp' 
                            alt='Bryan Vivanco Silva' 
                        />
                    </div>
                </div>

                {/* Description Text */}
                <div className='max-w-2xl text-center px-4'>
                    <p className='text-white/50 text-sm md:text-base tracking-[0.25em] md:tracking-[0.3em] font-light uppercase leading-relaxed'>
                        Desarrollador Web - Ingeniero Electrónico y de Telecomunicaciones
                    </p>
                </div>
            </div>

            {/* CTA Button - Bottom Right */}
            <div className='absolute bottom-8 right-6 md:bottom-12 md:right-12 z-20'>
                <a 
                    href='#projects'
                    className='inline-block bg-white text-black px-6 md:px-8 py-3 md:py-4 rounded-full text-xs md:text-sm font-medium tracking-wide uppercase hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl'
                >
                    VIEW PROJECTS
                </a>
            </div>

            {/* Fade-in Animation */}
            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                #hero > div:nth-child(3) {
                    animation: fadeIn 0.8s ease-out;
                }
            `}</style>
        </section>
    )
}

export default Hero
