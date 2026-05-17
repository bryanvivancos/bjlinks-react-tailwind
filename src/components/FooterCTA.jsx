import { LINKEDIN, INSTAGRAM, GITHUB, MAIL } from "../CONTANTS"
import sprite from '../assets/sprite.svg'

const FooterCTA = () => {
    const year = new Date().getFullYear()

    return (
        <section id="contact" className="relative min-h-screen w-full bg-[#0b0f14] flex items-center py-20 md:py-0">

            {/* fade a los laterales  */}
            <div className="hidden md:block pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-10" />

            <div className="hidden md:block pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />

            {/* fin de fade a los laterales  */}

            {/* fade superior */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent z-10" />

            {/* Glow Effect Background - Optimized for mobile */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-green-600/15 rounded-full blur-[80px] md:blur-[150px] pointer-events-none"></div>

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto max-md:py-10 px-10 md:px-26">

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-20">

                    {/* LEFT SIDE - CTA */}
                    <div className="flex flex-col gap-12 animate-fadeInUp">

                        {/* Main Heading */}
                        <h2 className="text-white font-light text-4xl md:text-6xl leading-[1.1] tracking-tight">
                            Hagamos<br />
                            realidad<br />
                            tu <span className="italic font-serif"> idea.</span>
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
                                <use href={`${sprite}#linkedin`} />
                            </svg>
                        </a>
                        <a
                            href={GITHUB}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/60 hover:text-green-600 transition-colors duration-300"
                        >
                            <svg className="size-5">
                                <use href={`${sprite}#github`} />
                            </svg>
                        </a>
                        <a
                            href={INSTAGRAM}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/60 hover:text-green-600 transition-colors duration-300"
                        >
                            <svg className="size-5">
                                <use href={`${sprite}#instagram`} />
                            </svg>
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className="text-white/50 text-xs md:text-sm">
                        © 2020-{year} Desarrollado por Bryan Vivanco.
                    </div>
                </div>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />

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
