'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
    const pathname = usePathname();
    const [activeItem, setActiveItem] = useState('');

    useEffect(() => {
        if (pathname === '/') {
            setActiveItem('Home');
        } else if (pathname === '/project') {
            setActiveItem('Project');
        } else if (pathname === '/resume') {
            setActiveItem('Resume');
        }
    }, [pathname]);

    return (
        <nav className="flex items-center justify-between px-5 py-3 my-3">
            <span className="text-xl font-bold text-green-500 border-b-4 border-green-500 md:text-2xl">{activeItem}</span>
            <ul className="flex gap-6 text-lg font-medium">
                {
                    activeItem !== 'Home' && <li className="hover:text-green-500">
                        <Link href={'/'} onClick={() => setActiveItem('Home')}>Home</Link>
                    </li>
                }
                {
                    activeItem !== 'Project' && <li className="hover:text-green-500">
                        <Link href={'/project'} onClick={() => setActiveItem('Project')}>Project</Link>
                    </li>
                }
                {
                    activeItem !== 'Resume' && <li className="hover:text-green-500">
                        <Link href={'/resume'} onClick={() => setActiveItem('Resume')}>Resume</Link>
                    </li>
                }
            </ul>
        </nav>
    );
};

export default Navbar;