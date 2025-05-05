import { Link } from 'react-scroll'

const FloatBtnItem = ( {to,item} ) => {
    return <Link to={to} smooth={true} duration={500}
    className={`absolute w-30 rounded-full text-white font-Quick font-bold justify-center cursor-crosshair`}>
        {item}</Link>

}

export default FloatBtnItem