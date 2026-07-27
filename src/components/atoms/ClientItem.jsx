import { memo } from 'react'

const getInitials = (name) =>
    name
        .split(/\s+/)
        .filter(Boolean)
        .map((word) => word[0])
        .slice(0, 2)
        .join('')
        .toUpperCase()

const ClientItem = memo(({ name, industry, logo, url }) => {
    const initials = getInitials(name)
    const Wrapper = url ? 'a' : 'article'
    const linkProps = url
        ? { href: url, target: '_blank', rel: 'noopener noreferrer' }
        : {}

    return (
        <Wrapper
            {...linkProps}
            className='group relative flex flex-col items-center justify-center gap-5 p-8 md:p-10 lg:backdrop-blur-sm rounded-2xl transition-all duration-500 hover:scale-[1.05] overflow-hidden text-center'
            aria-label={url ? `Visitar sitio de ${name}` : name}
        >
            <div className='absolute inset-0 bg-gradient-to-br from-green-600/0 to-green-600/0 transition-all duration-500 pointer-events-none' />

            <div className='relative z-10 size-36 md:size-42 rounded-2xl flex items-center justify-center overflow-hidden transition-transform duration-500'>
                {logo ? (
                    <img
                        src={logo}
                        alt={`Logo de ${name}`}
                        className='max-h-28 md:max-h-30 max-w-[80%] object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300'
                        loading='lazy'
                        decoding='async'
                    />
                ) : (
                    <span className='font-serif italic text-3xl md:text-4xl text-green-600 tracking-wide select-none'>
                        {initials}
                    </span>
                )}
            </div>

            <div className='relative z-10 flex flex-col gap-1.5'>
                <h3 className='text-white text-lg md:text-xl font-medium tracking-wide group-hover:text-green-600 transition-colors duration-300'>
                    {name}
                </h3>
                <span className='text-white/50 text-xs md:text-sm uppercase tracking-[0.2em]'>
                    {industry}
                </span>
            </div>
        </Wrapper>
    )
})

ClientItem.displayName = 'ClientItem'

export default ClientItem
