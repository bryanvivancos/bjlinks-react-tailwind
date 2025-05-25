import CertificateItem from "./atoms/CertificateItem"

const Certificates = () => { 
    
    return <div id="certificates" className="mb-8 font-Quick text-white">
        <h2 className="flex justify-center mb-4 text-xl font-bold font-Quick">
            Certificados
        </h2>

        <div className="flex flex-col gap-2">
            <CertificateItem 
                url={"https://drive.google.com/file/d/1DOiJM3XsKc_baPJ2I848DnGbqXqnnbvs/view?usp=sharing"}
                logo="platzi" 
                from="Platzi" 
                course="Curso Fundamentos de Node JS"/>

            <CertificateItem 
                url={"https://drive.google.com/file/d/1y3RMCUB6ECsQ2q52AffRIFzlWK1PXeDb/view?usp=sharing"}
                logo="platzi" 
                from="Platzi" 
                course="Curso de React.js"/>

            <CertificateItem 
                url={"https://drive.google.com/file/d/1HWUNXAzvusH7xV4jZ36yOpyZCdfejkB8/view?usp=sharing"}
                logo="platzi" 
                from="Platzi" 
                course="Web Components con Javascript" />

            <CertificateItem 
                url={"https://drive.google.com/file/d/1dI9_KsUwhDqZ0SlyLDTcl_A8aWJFN7Pz/view?usp=sharing"}
                logo="platzi" 
                from="Platzi" 
                course="Consumo de API-REST con Javascript" />
            
            <CertificateItem 
                url={"https://drive.google.com/file/d/1E7SvIIDxxe9-MIvXdCfREDsPkDZjUidO/view?usp=sharing"}
                logo="platzi" 
                from="Platzi" 
                course="Introduccion al Desarrollo Backend" />
            
            <CertificateItem 
                url={"https://drive.google.com/file/d/1Z-uic7TwvXKRslZlmc3grf-6kxoxkIl4/view?usp=sharing"}
                logo="platzi" 
                from="Platzi" 
                course="Javascript: Manipulación del DOM" />
            
            <CertificateItem 
                url={"https://drive.google.com/file/d/1_uIvmFr-5gnHRUNZt-9g1iPz8RihqT2P/view?usp=drive_link"}
                logo="certifies" 
                from="IBM" 
                course="Applied Data with PYTHON" />
            
            <CertificateItem 
                url={"https://drive.google.com/file/d/1IY8a3koFBj9LXOB8GCmOxS-8oduj26Lj/view?usp=sharing"}
                logo="certifies" 
                from="CIETSI - COLEGIO DE INGENIEROS DEL PERU" 
                course="Implementacion de una base de datos con SQL SERVER 2022" />
            
            <CertificateItem 
                url={"https://drive.google.com/drive/folders/1EbKWVsqkyQ4OUvZwf5ZEm3F5ON8sV0Zy?usp=sharing"}
                logo="drive" 
                from="Google Drive" 
                course="Más certificados..." />

        </div>
    </div>
}

export default Certificates