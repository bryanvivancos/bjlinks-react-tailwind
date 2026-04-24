import { Link } from 'react-scroll'

const FloatBtnItem = ( {to,item,onClick } ) => {
    console.log("render")
    return <Link to={to} smooth={true} duration={500} onClick={onClick}
    className={`w-full h-full text-lg rounded-2xl text-text-primary font-Quick font-bold justify-center items-center cursor-crosshair flex p-2 hover:p-3 bg-float-btn-bg hover:bg-float-btn-hover`}>
        {item}</Link>

}

export default FloatBtnItem