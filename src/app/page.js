'use client'
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaServer } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { CiMobile3 } from "react-icons/ci";
import { motion } from "framer-motion";

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
            y: 60
        },
        animate: {
            opacity: 1,
            y: 0
        }
    }

    return (
        <section className="flex flex-col flex-grow px-6 pt-1">
            <h6 className="my-3 text-base font-medium">
                I am currently studying degree(First year). I have 1+ years of experience in
                Web Development.
            </h6>
            <div className="flex-grow p-5 mt-5 bg-gray-200 rounded-b-xl dark:bg-black" style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}>
                <h4 className="mt-6 text-xl font-semibold tracking-wide">
                    What I am doing
                </h4>
                <motion.div className="grid gap-8 my-8 md:grid-cols-2" variants={stagger} initial="initial" animate="animate" exit="exit">
                    <motion.div className='flex items-center p-4 space-x-4 bg-white rounded-lg dark:bg-[#16181d]' variants={fadeInUp}>
                        <HiMiniComputerDesktop className='w-12 h-12 text-green-500'></HiMiniComputerDesktop>
                        <div className="dark:text-white">
                            <h6 className='font-bold'>Frontend Development</h6>
                            <p>I can build beautiful SPA.</p>
                        </div>
                    </motion.div>
                    <motion.div className='flex items-center p-4 space-x-4 bg-white rounded-lg dark:bg-[#16181d]' variants={fadeInUp}>
                        <FaServer className='w-10 h-10 text-green-500 me-2'></FaServer>
                        <div className="dark:text-white">
                            <h6 className='font-bold'>Backend Development</h6>
                            <p>Handel server side, mongodb database, using express js.</p>
                        </div>
                    </motion.div>
                    <motion.div className='flex items-center p-4 space-x-4 bg-white rounded-lg dark:bg-[#16181d]' variants={fadeInUp}>
                        <AiOutlineApi className='w-11 h-11 text-green-500'></AiOutlineApi>
                        <div className="dark:text-white">
                            <h6 className='font-bold'>API Development</h6>
                            <p>I can develop REST API using express js.</p>
                        </div>
                    </motion.div>
                    <motion.div className='flex items-center p-4 space-x-4 bg-white rounded-lg dark:bg-[#16181d]' variants={fadeInUp}>
                        <CiMobile3 className='w-12 h-12 text-green-500'></CiMobile3>
                        <div className="dark:text-white">
                            <h6 className='font-bold'>Responsive Design</h6>
                            <p>Make beautiful responsive design.</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default page;