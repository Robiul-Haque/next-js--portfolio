'use client'
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react'
import { FaDownload, FaGithub, FaLinkedin, FaLocationDot, FaMoon } from 'react-icons/fa6';
import { BsFillSunFill } from 'react-icons/bs';

const Sidebar = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted) {
        return null
    }

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    return (
        <div className='text-center'>
            <Image src="/robiul.jpg" alt="Robiul Photo" width={100} height={100} className='mx-auto rounded-full h-28 w-28' />
            <h3 className='my-4 text-3xl font-medium'>
                <span className='text-green-500'>Robiul</span> Haque
            </h3>
            <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:text-white dark:bg-[#16181d]'>Web Developer</p>
            <a href='#' target='_blank' download='name' className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full gap-x-2 dark:text-white dark:bg-[#16181d]'>
                <i><FaDownload /></i> Download Resume
            </a>
            <div className='flex items-center justify-center w-9/12 mx-auto text-green-500 gap-x-5 md:w-full'>
                <a href="https://github.com/" target='_blank'>
                    <i><FaGithub className='w-8 h-8 cursor-pointer' /></i>
                </a>
                <a href="https://www.linkedin.com/feed/">
                    <i><FaLinkedin className='w-8 h-8 cursor-pointer' /></i>
                </a>
            </div>
            <div className='py-4 my-6 ms-[-1rem] me-[-1rem] bg-gray-200 dark:text-white dark:bg-[#16181d] dark:ms-0 dark:me-0 dark:rounded-lg'>
                <address className='flex items-center justify-center gap-x-2'>
                    <i><FaLocationDot /></i> Faridpur, Bangladesh
                </address>
                <p className='my-2'>robiulcoc420@gmail.com</p>
                <p className='my-2'> +088 01893187274</p>
            </div>
            <button className='w-8/12 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-400' onClick={() => window.open('mailto:robiulcoc420@gmail.com')}>Email Me</button>
            <button onClick={toggleTheme} className='w-8/12 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-400 mx-auto'>{theme === 'light' ? <p className='flex justify-center items-center gap-3'>Dark UI <FaMoon></FaMoon></p> : <p className='flex justify-center items-center gap-3'>Light UI <BsFillSunFill></BsFillSunFill></p>}</button>
        </div>
    );
};

export default Sidebar;