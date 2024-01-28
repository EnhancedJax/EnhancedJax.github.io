
import heroImage from '../img/heroImage.webp';

function BgImg() {
    return (

        <img src={heroImage} className='bg-cover bg-no-repeat bg-gray-400 fixed right-[calc(-34.36169*1rem)] bottom-[calc(-37.666*1rem)] w-[calc(86.3125*1rem)] h-[calc(81.6875*1rem)] transform rotate-12 opacity-10 -z-10' />
    )
}

export default BgImg;