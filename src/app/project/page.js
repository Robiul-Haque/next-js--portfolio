'use client'
import MernProject from "@/components/MernProject";
import NextProject from "@/components/NextProject";
import ReactProject from "@/components/ReactProject";
import { motion } from "framer-motion";

const page = () => {
    // const fadeInUp = {
    //     initial: {
    //         opacity: 0,
    //         y: 90
    //     },
    //     animate: {
    //         opacity: 1,
    //         y: 0
    //     }
    // }

    // const stagger = {
    //     initial: {},
    //     animate: {
    //         transition: {
    //             staggerChildren: 0.1
    //         }
    //     }
    // }
    // variants={stagger} initial="initial" animate="animate"

    return (
        <div className="flex justify-center flex-wrap md:flex-wrap lg:flex-nowrap gap-3 m-6 md:m-4 lg:m-4">
            <ReactProject></ReactProject>
            <MernProject></MernProject>
            <NextProject></NextProject>
        </div>
    );
};

export default page;