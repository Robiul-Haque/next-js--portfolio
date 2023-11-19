'use client'
import MernProject from "@/components/MernProject";
import NextProject from "@/components/NextProject";
import ReactProject from "@/components/ReactProject";
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
            y: 90
        },
        animate: {
            opacity: 1,
            y: 0
        }
    }

    return (
        <motion.div className="flex justify-center flex-wrap md:flex-wrap lg:flex-nowrap gap-3 m-6 md:m-4 lg:m-4" variants={stagger} initial="initial" animate="animate">
            <motion.div variants={fadeInUp}>
                <ReactProject></ReactProject>
            </motion.div>
            <motion.div variants={fadeInUp}>
                <MernProject></MernProject>
            </motion.div>
            <motion.div variants={fadeInUp}>
                <NextProject></NextProject>
            </motion.div>
        </motion.div >
    );
};

export default page;