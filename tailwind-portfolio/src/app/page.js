"use client"

import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import MainContent from '@/components/MainContent'
import SecondPage from '@/components/secondPage'
import ThirdPage from '@/components/ThirdPage'
import { useState } from 'react'
import { BsFillMoonStarsFill } from 'react-icons/bs'


export default function Home() {

  const [darkMode, setDarkMode] = useState(false);

  const darkModeHandler = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Sohaib Abbasi - Portfolio</title>
      </Head>

      <div className="lg:px-40 md:px-20 min-h-screen dark:bg-gray-900">
        <div>
          <nav className='flex justify-between mx-0 '>
            <h1 className='text-xl font-burtons dark:text-white ml-5 my-5'>SOHAIBDEV</h1>
            <ul className=' flex justify-between mr-5 my-5'>
              <li><a href='#' className='text-2xl dark:text-white'><BsFillMoonStarsFill onClick={darkModeHandler} /></a></li>
              <li><a href='#' className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-10 py-2 border-none rounded-lg ml-4'>Resume</a></li>
            </ul>
          </nav>
        </div>
        <MainContent darkMode={darkMode} />
        <SecondPage darkMode={darkMode} />
        <ThirdPage darkMode={darkMode} />
      </div>
    </div>
  )
}
