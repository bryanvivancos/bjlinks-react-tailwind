import Navbar from './Navbar'
import TiltImage from './atoms/TiltImage'

const MARQUEE_WORDS = ['BRYAN', 'BRYAN', 'BRYAN', 'BRYAN']

const wordClass = 'm-0 pr-[0.7em] text-[18vw] md:text-[9vw] font-black leading-none tracking-tighter text-white/[0.04] whitespace-nowrap select-none'

const Hero = () => {
    return (
        <section id='hero' className='relative w-full min-h-screen overflow-x-clip'>

            <Navbar />

            {/* Giant Background Text */}
            <div
                className='hero-marquee-mask pointer-events-none absolute inset-x-0 top-[38%] z-0 -translate-y-1/2 overflow-hidden md:top-[42%]'
            >
                <div className='hero-marquee flex w-max'>
                    {[0, 1].map((group) => (
                        <div key={group} className='flex shrink-0' aria-hidden={group === 1 || undefined}>
                            {MARQUEE_WORDS.map((word, index) => (
                                group === 0 && index === 0 ? (
                                    <h1 key={index} className={wordClass}>{word}</h1>
                                ) : (
                                    <span key={index} className={wordClass}>{word}</span>
                                )
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className='relative z-10 flex flex-col items-center justify-center min-h-screen px-6 md:px-12 pt-24 pb-32'>

                {/* Central Image */}
                <div className='relative w-full max-w-[280px] md:max-w-[340px] mb-8 md:mb-12'>
                    <div className='relative z-10 aspect-[4/5] rounded-xl shadow-2xl group'>
                        <TiltImage
                            src='/IMG-20230911-WA0113.webp'
                            alt='Bryan Vivanco Silva'
                        />
                    </div>
                </div>

                {/* Description Text */}
                <div className='max-w-2xl text-center px-4'>
                    <h2 className='text-white text-2xl md:text-3xl font-bold tracking-[0.15em] md:tracking-[0.20em] font-light uppercase leading-relaxed'>
                        Bryan Vivanco Silva
                    </h2>
                    <p className='text-white/50 text-sm md:text-base tracking-[0.25em] md:tracking-[0.3em] font-light uppercase leading-relaxed'>
                        Desarrollador Web - Ingeniero Electrónico y de Telecomunicaciones
                    </p>
                </div>
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
