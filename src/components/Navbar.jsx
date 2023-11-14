'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
    const pathname = usePathname();
    const [activeItem, setActiveItem] = useState('');

    useEffect(() => {
        if (pathname === '/') {
            setActiveItem('About');
        } else if (pathname === '/project' || pathname === '/project/react' || pathname === '/project/mern' || pathname === '/project/next') {
            setActiveItem('Project');
        } else if (pathname === '/resume') {
            setActiveItem('Resume');
        }
    }, [pathname]);

    return (
        <nav className="flex items-center justify-between px-6 py-3 my-3">
            <span className="text-xl font-bold text-green-500 border-b-4 border-green-500 md:text-2xl">{activeItem}</span>
            <ul className="flex gap-6 text-lg font-medium">
                {
                    activeItem !== 'About' && <li className="hover:text-green-500">
                        <Link href={'/'} onClick={() => setActiveItem('About')}>About</Link>
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