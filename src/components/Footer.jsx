
const Footer = () => { 
    const year = new Date().getFullYear()

    return (
        <footer className="text-white font-Quick flex flex-col items-center justify-center gap-0 mb-4 mt-10">
            <a href="https://github.com/bryanvivancos/bjlinks-react-tailwind"
            target="_blank">
                <p className="text-sm">
                    © 2020-{year} <span>Desarrollado con ❤️ por Bryan Vivanco</span>
                </p>
            </a>
            <span className="text-sm">Piura - Perú</span>
        </footer>
    )
}

export default Footer;