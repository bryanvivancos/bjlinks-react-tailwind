import { DESCRIPTION } from "../CONTANTS";

const Footer = () => { 
    const year = new Date().getFullYear()

    return (
        <footer className="text-white font-Quick flex flex-col items-center justify-center gap-0 mb-4 mt-10">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                    <p className="text-xs text-justify text-balance">
                        {DESCRIPTION}
                    </p>
                </div>
                <div>
                    <h3>Enlaces de interes</h3>
                    <a href="">
                        Instagram
                    </a>
                    <a href="">
                        Whatsapp
                    </a>
                    <a href="">
                        LinkedIn
                    </a>
                    <a href="">
                        Github
                    </a>
                    
                </div>
            </div>

            <a href="https://github.com/bryanvivancos/bjlinks-react-tailwind"
            target="_blank">
                <p className="text-sm text-center">
                    © 2020-{year} <span>Desarrollado con ❤️ por Bryan Vivanco</span>
                </p>
            </a>
            <span className="text-sm">Piura - Perú</span>
        </footer>
    )
}

export default Footer;
