import ClientItem from './atoms/ClientItem'

const clients = [
    {
        name: 'Catquiz',
        industry: 'Joyería y Accesorios',
        url: 'https://bio.catquiz.pe',
        logo: '/clientes/CATQUIZ_Logo Blanco.webp'
    },
    {
        name: 'El Chalán',
        industry: 'Heladería',
        url: 'https://elchalan.com.pe',
        logo: '/clientes/el_chalan.webp'
    },
]

const Clients = () => {
    return (
        <section
            id='clients'
            className='w-full py-16 md:py-24 font-Quick text-text-primary bg-black relative z-0!'
        >
            <div className='pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent z-10' />

            <div className='flex flex-col items-center gap-4 mb-12'>
                <span className='pre-header'>Confianza</span>
                <h2 className='section-header'>Mis clientes</h2>
                <p className='text-white/50 text-sm md:text-base text-center max-w-xl px-4 -mt-6'>
                    Empresas que confían en mi trabajo para impulsar su presencia digital.
                </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto'>
                {clients.map((client) => (
                    <div
                        key={client.name}
                        className='md:timeline-view md:animate-range-[entry_10%_contain_20%] md:animate-fade-up'
                    >
                        <ClientItem {...client} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Clients
