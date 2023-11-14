'use client'
import Image from 'next/image';
import foodPanda from "../../public/food-panda.png";
import { usePathname } from 'next/navigation';

const ReactProject = () => {
    const pathname = usePathname();

    return (
        <div className={pathname === '/project/react' ? 'rounded-md mx-5 mt-6 md:mt-0 lg:mt-0 dark:border-none' : 'mx-auto dark:bg-[#16181d] rounded-md border dark:border-none'}>
            <Image src={foodPanda} alt="food panda" width={100} height={100} layout='responsive' className='rounded'></Image>
            <div className='p-4'>
                <h1 className="text-xl font-bold text-center my-4">FoodPanda</h1>
                <div className="flex justify-center gap-x-3 flex-wrap md:h-12 lg:h-12">
                    <p>React</p>
                    <p>Firebase</p>
                    <p>React Router</p>
                    <p>Express</p>
                </div>
                <div className="flex justify-center gap-x-3 my-6">
                    <button className="bg-gray-200 dark:bg-[#16181d] rounded py-1 px-3 font-medium hover:text-green-500 border hover:border-green-500 hover:shadow-md dark:hover:shadow-none">
                        <a href="https://foodpanda-123.netlify.app/" target="_blank">Live Site</a>
                    </button>
                    <button className="bg-gray-200 dark:bg-[#16181d] rounded py-2 px-3 font-medium hover:text-green-500 border hover:border-green-500 hover:shadow-md dark:hover:shadow-none">
                        <a href="https://github.com/Robiul-Haque" target="_blank">Client Side</a>
                    </button>
                    <button className="bg-gray-200 dark:bg-[#16181d] rounded py-2 px-3 font-medium hover:text-green-500 border hover:border-green-500 hover:shadow-md dark:hover:shadow-none">
                        <a href="https://github.com/Robiul-Haque" target="_blank">Server Side</a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReactProject;