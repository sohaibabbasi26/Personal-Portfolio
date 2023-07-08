import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import Image from 'next/image';
import deved from '../../public/dev-ed-wave.png'

const MainContent = ({ darkMode }) => {

    return (
        <div className={darkMode ? 'dark' : ''}>
            <div className='p-10'>
                <div className='text-center '>
                    <h2 className='text-5xl text-teal-600 py-3 font-medium md:text-6xl '>Sohaib Abbasi</h2>
                    <h3 className='text-2xl py-2 md:text-3xl dark:text-gray-300'>MERN-STACK developer and designer</h3>
                    <p className='text-md leading-6 text-gray-800 py-2 md:text-xl max-w-lg mx-auto dark:text-gray-300'>I am a full-stack MERN-developer and designer, providing my services as a freelancer. Join me down below and let us get going!</p>
                </div>

                <div className='text-5xl flex justify-center gap-10 py-3 text-gray-600 dark:text-teal-600'>
                    <AiFillTwitterCircle />
                    <AiFillLinkedin />
                    <AiFillYoutube />
                </div>

                <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden md:w-100 md:h-100">
                    <Image src={deved} layout="fill" objectFit='cover' />
                </div>
            </div>
        </div>
    )
}

export default MainContent;