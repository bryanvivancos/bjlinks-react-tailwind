import { Link } from 'react-scroll'

const FloatBtnItem = ( {to,item,onClick } ) => {
    console.log("render")
    return <Link to={to} smooth={true} duration={500} onClick={onClick}
    className={`w-full h-full text-lg rounded-2xl text-white font-Quick font-bold justify-center items-center cursor-crosshair flex p-2 hover:p-3 bg-yellow-600 hover:bg-yellow-800`}>
        {item}</Link>

}

export default FloatBtnItem