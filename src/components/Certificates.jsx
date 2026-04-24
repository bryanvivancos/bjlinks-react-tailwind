import CertificateItem from "./atoms/CertificateItem"

const Certificates = () => { 

    const certificates = [
        {
            url: "https://drive.google.com/file/d/1_cQL2pSuzzV1V_9WS6sKCRLqNsO3D6Vi/view?usp=sharing",
            logo: "platzi",
            from: "Platzi",
            course: "ETL e Ingesta de Datos con Python",
        },
        {
            url: "https://drive.google.com/file/d/1qXr2A-MLvV1EEakO-4hb-C5kgQSaklyt/view?usp=sharing",
            ico: "/universidad_nacional_de_ingenieria_logo_vector.ico",
            from: "Universidad Nacional de Ingenieria - UNI",
            course: "Fundamentos de Gestión de Proyectos bajo el enfoque Scrum",
        },
        {
            url: "https://drive.google.com/file/d/1C6im2EXWFjePTRj7e4r7-ZKzxFRuk9ee/view?usp=sharing",
            ico: "/universidad_nacional_de_ingenieria_logo_vector.ico",
            from: "Universidad Nacional de Ingenieria - UNI",
            course: "Cloud Computing: AWS - Azure - Google Cloud",
        },
        {
            url: "https://drive.google.com/file/d/1DOiJM3XsKc_baPJ2I848DnGbqXqnnbvs/view?usp=sharing",
            logo: "platzi",
            from: "Platzi",
            course: "Curso Fundamentos de Node JS",
        },
        {
            url: "https://drive.google.com/file/d/1y3RMCUB6ECsQ2q52AffRIFzlWK1PXeDb/view?usp=sharing",
            logo: "platzi",
            from: "Platzi",
            course: "Curso de React.js",
        },
        {
            url: "https://drive.google.com/file/d/1HWUNXAzvusH7xV4jZ36yOpyZCdfejkB8/view?usp=sharing",
            logo: "platzi",
            from: "Platzi",
            course: "Web Components con Javascript",
        },
        {
            url: "https://drive.google.com/file/d/1dI9_KsUwhDqZ0SlyLDTcl_A8aWJFN7Pz/view?usp=sharing",
            logo: "platzi",
            from: "Platzi",
            course: "Consumo de API-REST con Javascript",
        },
        {
            url: "https://drive.google.com/file/d/1E7SvIIDxxe9-MIvXdCfREDsPkDZjUidO/view?usp=sharing",
            logo: "platzi",
            from: "Platzi",
            course: "Introduccion al Desarrollo Backend",
        },
        {
            url: "https://drive.google.com/file/d/1Z-uic7TwvXKRslZlmc3grf-6kxoxkIl4/view?usp=sharing",
            logo: "platzi",
            from: "Platzi",
            course: "Javascript: Manipulación del DOM",
        },
        {
            url: "https://drive.google.com/file/d/1_uIvmFr-5gnHRUNZt-9g1iPz8RihqT2P/view?usp=drive_link",
            logo: "certifies",
            from: "IBM",
            course: "Applied Data Science with PYTHON",
        },
        {
            url: "https://drive.google.com/file/d/1IY8a3koFBj9LXOB8GCmOxS-8oduj26Lj/view?usp=sharing",
            logo: "certifies",
            from: "CIETSI - COLEGIO DE INGENIEROS DEL PERU",
            course: "Implementacion de una base de datos con SQL SERVER 2022",
        },
        {
            url: "https://drive.google.com/drive/folders/1EbKWVsqkyQ4OUvZwf5ZEm3F5ON8sV0Zy?usp=sharing",
            logo: "drive",
            from: "Google Drive",
            course: "Más certificados...",
        },
    ]



    
    return <section id="certificates" className="w-full py-16 md:py-24 font-Quick text-text-primary">
        <div className='flex flex-col items-center gap-4 mb-12'>
            <div className='inline-flex items-center gap-2'>
                
                <span className='pre-header'>
                    Formación
                </span>
                
            </div>
            <h2 className="section-header">
                Certificaciones
            </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">

            {
                certificates.map((certificate, index) => {
                    const animation = index % 2 === 0 
                    ? "animate-fade-up"
                    : "animate-fade-up"

                    return (
                        <div
                            key={index}
                            className={`timeline-view animate-range-[entry_10%_contain_20%] ${animation}`}
                        >
                            <CertificateItem {...certificate} />
                        </div>
                    )
                })
            }

        </div>
    </section>
}

export default Certificates
