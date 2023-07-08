import { BsFillMoonStarsFill } from 'react-icons/bs'
import { useState } from 'react';


const Navbar = () => {

    const [darkMode, setDarkMode] = useState(false);

    const darkModeHandler = () => {
        setDarkMode(!darkMode);
    }
    return (
        <div className={darkMode ? 'dark' : ''}>
            <nav className='flex justify-between m-5'>
                <h1 className='text-xl font-burtons'>SOHAIBDEV</h1>
                <ul className=' flex justify-between'>
                    <li><a href='#' className='text-2xl'><BsFillMoonStarsFill onClick={darkModeHandler} /></a></li>
                    <li><a href='#' className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-10 py-2 border-none rounded-lg ml-4'>Resume</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;