import { FOOTER_DESCRIPTION, LINKEDIN, INSTAGRAM, GITHUB } from "../CONTANTS";
import sprite from '../assets/sprite.svg';

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className="w-full bg-bg-secondary border-t border-border py-16 md:py-20">
            <div className="w-full max-w-7xl mx-auto px-6 md:px-12">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                    <div className="flex flex-col items-center md:items-start gap-6">
                        <div className="flex items-center gap-4">
                            <img src="/IMG-20230911-WA0113.webp" alt="bryan image"
                                loading="lazy"
                                decoding="async"
                                className="rounded-full w-16 h-16 border-2 border-border" />
                            <div>
                                <h3 className="text-text-primary font-Quick font-bold text-lg">Bryan Vivanco</h3>
                                <p className="text-text-muted text-sm">Desarrollador Web</p>
                            </div>
                        </div>
                        <p className="text-text-secondary text-sm max-w-md">
                            {FOOTER_DESCRIPTION}
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-start gap-4">
                        <h3 className="text-text-primary font-Quick font-bold text-lg">Enlaces de interés</h3>
                        <div className="flex flex-col gap-3">

                            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors flex items-center gap-2 text-sm">
                                <svg className="size-5">
                                    <use href={`${sprite}#linkedin`} />
                                </svg> LinkedIn
                            </a>
                            <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors flex items-center gap-2 text-sm">
                                <svg className="size-5">
                                    <use href={`${sprite}#github`} />
                                </svg> Github
                            </a>
                            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors flex items-center gap-2 text-sm">
                                <svg className="size-5">
                                    <use href={`${sprite}#instagram`} />
                                </svg> Instagram
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <a href="https://github.com/bryanvivancos/bjlinks-react-tailwind"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted hover:text-accent transition-colors text-sm">
                        © 2020-{year} Desarrollado con ❤️ por Bryan Vivanco
                    </a>
                    <span className="text-text-muted text-sm">Piura - Perú 🇵🇪</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
