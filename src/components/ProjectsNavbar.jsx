'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const ProjectsNavbar = () => {
    const pathname = usePathname();
    const [activeItem, setActiveItem] = useState('');

    useEffect(() => {
        if (pathname === '/project/react') {
            setActiveItem('react');
        } else if (pathname === '/project/mern') {
            setActiveItem('mern');
        } else if (pathname === '/project/next') {
            setActiveItem('next');
        }
    }, [pathname]);

    return (
        <nav>
            <ul className="flex justify-center gap-x-8 font-medium">
                <li><Link href="/project/react" onClick={() => setActiveItem('react')} className={activeItem === 'react' ? 'text-green-500' : ''}>React</Link></li>
                <li><Link href="/project/mern" onClick={() => setActiveItem('mern')} className={activeItem === 'mern' ? 'text-green-500' : ''}>MERN</Link></li>
                <li><Link href="/project/next" onClick={() => setActiveItem('next')} className={activeItem === 'next' ? 'text-green-500' : ''}>Next</Link></li>
            </ul>
        </nav>
    );
};

export default ProjectsNavbar;