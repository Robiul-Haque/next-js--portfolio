'use client'
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import foodPanda from "../../../public/food-panda.png";
import toyWorld from "../../../public/toy-world.png";
import danceZone from "../../../public/dance-zone.png";

// export const metadata = {
//     title: "Project"
// }

const page = () => {
    const stagger = {
        initial: {},
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const fadeInUp = {
        initial: {
            opacity: 0,
            y: 90
        },
        animate: {
            opacity: 1,
            y: 0
        }
    }

    return (
        <motion.div className="flex justify-center flex-wrap md:flex-wrap lg:flex-nowrap gap-3 m-6 md:m-4 lg:m-4" variants={stagger} initial="initial" animate="animate">
            <motion.div variants={fadeInUp} className="mx-auto dark:bg-[#16181d] rounded-md border dark:border-none">
                <Image src={danceZone} alt="toy world" width={100} height={100} layout='responsive' className='rounded'></Image>
                <div className='p-4'>
                    <h1 className="text-xl font-bold text-center my-4">Dance Zone</h1>
                    <div className="flex justify-center gap-x-3 flex-wrap">
                        <p>React</p>
                        <p>Firebase</p>
                        <p>React Router</p>
                        <p>Tailwind</p>
                        <p>Express</p>
                        <p>Mongo DB</p>
                        <p>Tan Stack Query</p>
                    </div>
                    <div className="flex justify-center flex-wrap gap-x-3 my-6">
                        <button className="bg-gray-200 dark:bg-[#16181d] rounded py-1 px-2 my-2 font-medium hover:text-green-500 border hover:border-green-500 hover:shadow-md dark:hover:shadow-none">
                            <Link href="https://dance-zone.netlify.app/" target="_blank">Live Site</Link>
                        </button>
                        <button className="bg-gray-200 dark:bg-[#16181d] rounded py-2 px-2 my-2 font-medium hover:text-green-500 border hover:border-green-500 hover:shadow-md dark:hover:shadow-none">
                            <Link href="https://github.com/Robiul-Haque/dance-zone-client-side" target="_blank">Client Side</Link>
                        </button>
                        <button className="bg-gray-200 dark:bg-[#16181d] rounded py-2 px-2 my-2 font-medium hover:text-green-500 border hover:border-green-500 hover:shadow-md dark:hover:shadow-none">
                            <Link href="https://github.com/Robiul-Haque/dance-zone-server-side" target="_blank">Server Side</Link>
                        </button>
                    </div>
                </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="mx-auto dark:bg-[#16181d] rounded-md border dark:border-none">
                <Image src={toyWorld} alt="toy world" width={100} height={100} layout='responsive' className='rounded'></Image>
                <div className='p-4'>
                    <h1 className="text-xl font-bold text-center my-4">Toy World</h1>
                    <div className="flex justify-center gap-x-3 flex-wrap">
                        <p>React</p>
                        <p>Firebase</p>
                        <p>React Router</p>
                        <p>Bootstrap</p>
                        <p>Express</p>
                        <p>Mongo DB</p>
                    </div>
                    <div className="flex justify-center flex-wrap gap-x-3 my-6">
                        <button className="bg-gray-200 dark:bg-[#16181d] rounded py-1 px-2 my-2 font-medium hover:text-green-500 border hover:border-green-500 hover:shadow-md dark:hover:shadow-none">
                            <Link href="https://toy-world.netlify.app/" target="_blank">Live Site</Link>
                        </button>
                        <button className="bg-gray-200 dark:bg-[#16181d] rounded py-2 px-2 my-2 font-medium hover:text-green-500 border hover:border-green-500 hover:shadow-md dark:hover:shadow-none">
                            <Link href="https://github.com/Robiul-Haque/toy-world-client-side" target="_blank">Client Side</Link>
                        </button>
                        <button className="bg-gray-200 dark:bg-[#16181d] rounded py-2 px-2 my-2 font-medium hover:text-green-500 border hover:border-green-500 hover:shadow-md dark:hover:shadow-none">
                            <Link href="https://github.com/Robiul-Haque/toy-world-server-side" target="_blank">Server Side</Link>
                        </button>
                    </div>
                </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="mx-auto dark:bg-[#16181d] rounded-md border dark:border-none">
                <Image src={foodPanda} alt="food panda" width={100} height={100} layout='responsive' className='rounded'></Image>
                <div className='p-4'>
                    <h1 className="text-xl font-bold text-center my-4">Food Panda</h1>
                    <div className="flex justify-center gap-x-3 flex-wrap md:h-12 lg:h-12">
                        <p>React</p>
                        <p>Firebase</p>
                        <p>React Router</p>
                        <p>React Bootstrap</p>
                        <p>Express</p>
                    </div>
                    <div className="flex justify-center flex-wrap gap-x-3 my-6">
                        <button className="bg-gray-200 dark:bg-[#16181d] rounded py-1 px-2 my-2 font-medium hover:text-green-500 border hover:border-green-500 hover:shadow-md dark:hover:shadow-none">
                            <Link href="https://foodpanda-123.netlify.app/" target="_blank">Live Site</Link>
                        </button>
                        <button className="bg-gray-200 dark:bg-[#16181d] rounded py-2 px-2 my-2 font-medium hover:text-green-500 border hover:border-green-500 hover:shadow-md dark:hover:shadow-none">
                            <Link href="https://github.com/Robiul-Haque/food-panda-client-side" target="_blank">Client Side</Link>
                        </button>
                        <button className="bg-gray-200 dark:bg-[#16181d] rounded py-2 px-2 my-2 font-medium hover:text-green-500 border hover:border-green-500 hover:shadow-md dark:hover:shadow-none">
                            <Link href="https://github.com/Robiul-Haque/food-panda-server-side" target="_blank">Server Side</Link>
                        </button>
                    </div>
                </div>
            </motion.div>
        </motion.div >
    );
};

export default page;