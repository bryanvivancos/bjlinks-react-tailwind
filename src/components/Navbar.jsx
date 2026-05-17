import { useState, useEffect } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    const menuLinks = [
        { label: 'HOME', href: '#' },
        { label: 'ABOUT ME', href: '#about' },
        { label: 'PROJECTS', href: '#projects' },
        { label: 'CONTACT', href: '#contact' }
    ]

    const handleLinkClick = () => {
        setIsOpen(false)
    }

    return (
        <>
            {/* Fixed Navbar */}
            <nav className='fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6'>
                <div className='relative flex items-center justify-between'>
                    <a href='#' className='hidden md:block hover:text-green-500 transition-all duration-300 text-white text-base md:text-xl tracking-[0.2em] font-light uppercase'>
                        BRYAN VIVANCO
                    </a>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className='absolute left-1/2 -translate-x-1/2 cursor-pointer group flex flex-col items-center gap-1'
                    >
                        <div className='w-24 md:w-32 h-[5px] bg-white/40 rounded-full group-hover:bg-white transition-all duration-300'></div>
                        <span className='text-white/60 text-xs md:text-sm tracking-[0.3em] font-light group-hover:text-white transition-all duration-300'>
                            {isOpen ? 'CLOSE' : 'MENU'}
                        </span>
                    </button>

                    <a
                        href='#contact'
                        className='hidden md:block cursor-pointer hover:text-green-500 transition-all duration-300 text-white text-base md:text-xl tracking-[0.2em] font-light uppercase'
                    >
                        CONTACT
                    </a>
                </div>
            </nav>

            {/* Fullscreen Overlay Menu */}
            <div
                className={`fixed inset-0 z-40 transition-opacity duration-500 ease-in-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                {/* Gradient Background */}
                <div className='absolute inset-0 md:backdrop-blur-2xl bg-black/90 md:bg-black/40'></div>
                <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-green-500/30'></div>

                {/* Menu Content */}
                <div className='relative z-10 flex items-center justify-center min-h-screen'>
                    <nav className='flex flex-col items-center gap-8 md:gap-12'>
                        {menuLinks.map((link, index) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={handleLinkClick}
                                className={`text-white text-4xl md:text-6xl lg:text-7xl font-light uppercase tracking-[0.15em] hover:opacity-70 hover:scale-105 transition-all duration-300 ${isOpen ? 'animate-fadeInUp' : ''
                                    }`}
                                style={{
                                    animationDelay: isOpen ? `${index * 100}ms` : '0ms'
                                }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Animations */}
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translate3d(0, 20px, 0);
                    }
                    to {
                        opacity: 1;
                        transform: translate3d(0, 0, 0);
                    }
                }

                .animate-fadeInUp {
                    animation: fadeInUp 0.4s ease-out forwards;
                    opacity: 0;
                    will-change: transform, opacity;
                }

                @media (prefers-reduced-motion: reduce) {
                    .animate-fadeInUp {
                        animation: none;
                        opacity: 1;
                        transform: none;
                    }
                }
            `}</style>
        </>
    )
}

export default Navbar
