'use client'
import Image from 'next/image';
import toyWorld from "../../public/toy-world.png";
import { usePathname } from 'next/navigation';

const MernProject = () => {
    const pathname = usePathname();

    return (
        <div className={pathname === '/project/mern' ? 'rounded-md mx-5 mt-6 md:mt-0 lg:mt-0 dark:border-none' : 'mx-auto dark:bg-[#16181d] rounded-md border dark:border-none'}>
            <Image src={toyWorld} alt="toy world" width={100} height={100} layout='responsive' className='rounded'></Image>
            <div className='p-4'>
                <h1 className="text-xl font-bold text-center my-4">Toy World</h1>
                <div className="flex justify-center gap-x-3 flex-wrap">
                    <p>React</p>
                    <p>Firebase</p>
                    <p>React Router</p>
                    <p>Express</p>
                    <p>Mongo DB</p>
                </div>
                <div className="flex justify-center gap-x-3 my-6">
                    <button className="bg-gray-200 dark:bg-[#16181d] rounded py-1 px-3 font-medium hover:text-green-500 border hover:border-green-500 hover:shadow-md dark:hover:shadow-none">
                        <a href="https://toy-world.netlify.app/" target="_blank">Live Site</a>
                    </button>
                    <button className="bg-gray-200 dark:bg-[#16181d] rounded py-2 px-3 font-medium hover:text-green-500 border hover:border-green-500 hover:shadow-md dark:hover:shadow-none">
                        <a href="https://github.com/Robiul-Haque/toy-marketplace-client-side" target="_blank">Client Side</a>
                    </button>
                    <button className="bg-gray-200 dark:bg-[#16181d] rounded py-2 px-3 font-medium hover:text-green-500 border hover:border-green-500 hover:shadow-md dark:hover:shadow-none">
                        <a href="https://github.com/Robiul-Haque/toy-marketplace-server-side" target="_blank">Server Side</a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MernProject;