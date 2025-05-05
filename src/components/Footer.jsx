
const Footer = () => { 
    const year = new Date().getFullYear()

    return (
        <footer className="text-white font-Quick flex flex-col items-center justify-center gap-0 mb-2">
            <a href="https://github.com/bryanvivancos/bjlinks-react-tailwind"
            target="_blank">
                <p className="text-sm">
                    © 2020-{year} <span>Desarrollado por Bryan Vivanco</span>
                </p>
            </a>
            <span className="text-sm">Piura - Perú</span>
        </footer>
    )
}

export default Footer;