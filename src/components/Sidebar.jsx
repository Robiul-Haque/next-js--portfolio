'use client'
import Image from 'next/image';
import { FaDownload, FaGithub, FaLinkedin, FaLocationDot } from 'react-icons/fa6';

const Sidebar = () => {
    return (
        <div className='text-center'>
            <Image src="/robiul.jpg" alt="Robiul Photo" width={100} height={100} className='mx-auto rounded-full h-28 w-28' />
            <h3 className='my-4 text-3xl font-medium'>
                <span className='text-green-500'>Robiul</span> Haque
            </h3>
            <p className='px-2 py-1 my-3 bg-gray-200 rounded-full'>Web Developer</p>
            <a href='#' target='_blank' download='name' className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full gap-x-2'>
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
            <div className='py-4 my-5 bg-gray-200' style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
                <address className='flex items-center justify-center gap-x-2'>
                    <i><FaLocationDot /></i> Faridpur, Bangladesh
                </address>
                <p className='my-2'>robiulcoc420@gmail.com</p>
                <p className='my-2'> +088 01893187274</p>
            </div>
            <button className='w-8/12 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-400' onClick={() => window.open('mailto:robiulcoc420@gmail.com')}>Email Me</button>
            <button className='w-8/12 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-400'>Toggle Theme</button>
        </div>
    );
};

export default Sidebar;