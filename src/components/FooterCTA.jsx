import { LINKEDIN, INSTAGRAM, GITHUB, MAIL } from "../CONTANTS"
import sprite from '../assets/sprite.svg'

const FooterCTA = () => {
    const year = new Date().getFullYear()

    return (
        <section id="contact" className="relative min-h-screen w-full bg-[#0b0f14] flex items-center py-20 md:py-0">
            
            {/* Glow Effect Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-600/20 rounded-full blur-[150px] pointer-events-none"></div>
            
            {/* Main Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
                
                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-20">
                    
                    {/* LEFT SIDE - CTA */}
                    <div className="flex flex-col gap-12 animate-fadeInUp">
                        
                        {/* Main Heading */}
                        <h2 className="text-white font-light text-4xl md:text-6xl leading-[1.1] tracking-tight">
                            Creémos<br/>
                            <span className="italic font-serif">historias </span> 
                            juntos
                        </h2>

                        {/* Email CTA */}
                        <div className="flex flex-col gap-3">
                            <span className="text-white/60 text-xs uppercase tracking-[0.3em]">
                                Contáctame
                            </span>
                            <a 
                                href={`mailto:${MAIL}`}
                                className="text-white text-base md:text-2xl font-light underline decoration-white/30 underline-offset-8 hover:decoration-green-600 hover:tracking-wide transition-all duration-500 w-fit break-all"
                            >
                                {MAIL}
                            </a>
                        </div>
                    </div>

                    {/* RIGHT SIDE - Info Grid */}
                    <div className="grid grid-cols-2 gap-x-8 gap-y-12 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
                        
                        {/* Location */}
                        <div className="flex flex-col gap-2">
                            <span className="text-white/60 text-xs uppercase tracking-wider">
                                Bryan Vivanco Silva
                            </span>
                            <span className="text-white/80 text-sm">
                                Desarrollador WEB | Ingeniero Electrónico y Telecomunicaciones
                            </span>
                        </div>

                        {/* Work Mode */}
                        <div className="flex flex-col gap-2">
                            <span className="text-white/60 text-xs uppercase tracking-wider">       
                                Modo de Trabajo
                            </span>
                            <span className="text-white/80 text-sm">
                                Remoto / Híbrido
                            </span>
                        </div>

                        {/* Availability */}
                        <div className="flex flex-col gap-2">
                            <span className="text-white/60 text-xs uppercase tracking-wider">
                                Disponibilidad
                            </span>
                            <span className="text-white/80 text-sm">
                                Abierto a oportunidades
                            </span>
                        </div>

                        {/* Timezone */}
                        <div className="flex flex-col gap-2">
                            <span className="text-white/60 text-xs uppercase tracking-wider">
                                Ubicación
                            </span>
                            <span className="text-white/80 text-sm">
                                PERÚ
                            </span>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-white/10">
                    
                    {/* Social Links */}
                    <div className="flex items-center gap-6">
                        <a 
                            href={LINKEDIN}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/60 hover:text-green-600 transition-colors duration-300"
                        >
                            <svg className="size-5">
                                <use href={`${sprite}#linkedin`}/>
                            </svg>
                        </a>
                        <a 
                            href={GITHUB}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/60 hover:text-green-600 transition-colors duration-300"
                        >
                            <svg className="size-5">
                                <use href={`${sprite}#github`}/>
                            </svg>
                        </a>
                        <a 
                            href={INSTAGRAM}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/60 hover:text-green-600 transition-colors duration-300"
                        >
                            <svg className="size-5">
                                <use href={`${sprite}#instagram`}/>
                            </svg>
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className="text-white/50 text-xs md:text-sm">
                        © 2020-{year} Desarrollado por Bryan Vivanco.
                    </div>
                </div>
            </div>

            {/* Animations */}
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fadeInUp {
                    animation: fadeInUp 0.8s ease-out forwards;
                    opacity: 0;
                }
            `}</style>
        </section>
    )
}

export default FooterCTA
