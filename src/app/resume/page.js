"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import html from "../../../public/html.png";
import css from "../../../public/css.png";
import bootstrap from "../../../public/bootstrap.png";
import tailwind from "../../../public/tailwind-css.png";
import javascript from "../../../public/javascript.png";
import react from "../../../public/react-js.png";
import express from "../../../public/express-js.png";
import mongo from "../../../public/mongo-db.png";
import next from "../../../public/next-js.png";
import figma from "../../../public/figma.png";
import xd from "../../../public/adobe-xd.png";
import firebase from "../../../public/firebase.png";
import circle from "../../../public/circle.png";

const page = () => {
  const variants = {
    initial: {
      opacity: 0,
      y: 60,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  const htmlMotion = {
    initial: {
      width: 0,
    },
    animate: {
      width: 260,
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  const cssMotion = {
    initial: {
      width: 0,
    },
    animate: {
      width: 220,
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  const bootstrapMotion = {
    initial: {
      width: 0,
    },
    animate: {
      width: 300,
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  const tailwindMotion = {
    initial: {
      width: 0,
    },
    animate: {
      width: 200,
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  const javascriptMotion = {
    initial: {
      width: 0,
    },
    animate: {
      width: 240,
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  const reactMotion = {
    initial: {
      width: 0,
    },
    animate: {
      width: 300,
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  const expressMotion = {
    initial: {
      width: 0,
    },
    animate: {
      width: 130,
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  const mongodbMotion = {
    initial: {
      width: 0,
    },
    animate: {
      width: 150,
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  const nextMotion = {
    initial: {
      width: 0,
    },
    animate: {
      width: 200,
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  const figmaMotion = {
    initial: {
      width: 0,
    },
    animate: {
      width: 260,
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  const xdMotion = {
    initial: {
      width: 0,
    },
    animate: {
      width: 220,
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  const firebaseMotion = {
    initial: {
      width: 0,
    },
    animate: {
      width: 300,
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  const framerMotion = {
    initial: {
      width: 0,
    },
    animate: {
      width: 120,
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  const tanStuckMotion = {
    initial: {
      width: 0,
    },
    animate: {
      width: 150,
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  const hookFormMotion = {
    initial: {
      width: 0,
    },
    animate: {
      width: 170,
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  const reactRouterMotion = {
    initial: {
      width: 0,
    },
    animate: {
      width: 180,
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  const jwtMotion = {
    initial: {
      width: 0,
    },
    animate: {
      width: 260,
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  const swiperMotion = {
    initial: {
      width: 0,
    },
    animate: {
      width: 240,
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="px-6 py-2">
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={variants} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">HSC (2021-2023)</h5>
            <p className="font-semibold">Bangladesh Open University</p>
          </div>
        </motion.div>
        <motion.div variants={variants} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">No job experience yet</h5>
            <p className="font-semibold">
              Build some projects and portfolio with MERN and NEXT JS
            </p>
          </div>
        </motion.div>
      </div>
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            <div className="flex justify-between items-center my-3 rounded-full bg-gray-200 dark:bg-[#16181d]">
              <motion.div
                variants={htmlMotion}
                initial="initial"
                animate="animate"
                className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-500"
              >
                <Image src={html} alt="HTML" width={25} height={25}></Image>
                <span className="ml-3 text-black">HTML</span>
              </motion.div>
              {/* <span className="mr-4">50%</span> */}
            </div>
            <div className="flex justify-between items-center my-3 rounded-full bg-gray-200 dark:bg-[#16181d]">
              <motion.div
                variants={cssMotion}
                initial="initial"
                animate="animate"
                className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-500"
              >
                <Image src={css} alt="HTML" width={25} height={25}></Image>
                <span className="ml-3 text-black">CSS</span>
              </motion.div>
              {/* <span className="mr-4">40%</span> */}
            </div>
            <div className="flex justify-between items-center my-3 rounded-full bg-gray-200 dark:bg-[#16181d]">
              <motion.div
                variants={bootstrapMotion}
                initial="initial"
                animate="animate"
                className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-500"
              >
                <Image
                  src={bootstrap}
                  alt="HTML"
                  width={20}
                  height={20}
                ></Image>
                <span className="ml-3 text-black">BOOTSTRAP</span>
              </motion.div>
              {/* <span className="mr-4">60%</span> */}
            </div>
            <div className="flex justify-between items-center my-3 rounded-full bg-gray-200 dark:bg-[#16181d]">
              <motion.div
                variants={tailwindMotion}
                initial="initial"
                animate="animate"
                className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-500"
              >
                <Image src={tailwind} alt="HTML" width={25} height={25}></Image>
                <span className="ml-3 text-black">TAILWIND</span>
              </motion.div>
              {/* <span className="mr-4">50%</span> */}
            </div>
            <div className="flex justify-between items-center my-3 rounded-full bg-gray-200 dark:bg-[#16181d]">
              <motion.div
                variants={javascriptMotion}
                initial="initial"
                animate="animate"
                className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-500"
              >
                <Image
                  src={javascript}
                  alt="HTML"
                  width={25}
                  height={25}
                ></Image>
                <span className="ml-3 text-black">JAVASCRIPT</span>
              </motion.div>
              {/* <span className="mr-4">50%</span> */}
            </div>
            <div className="flex justify-between items-center my-3 rounded-full bg-gray-200 dark:bg-[#16181d]">
              <motion.div
                variants={reactMotion}
                initial="initial"
                animate="animate"
                className="flex items-center px-4 py-1 rounded-full w-3/5 bg-gradient-to-r from-green to-blue-500"
              >
                <Image src={react} alt="HTML" width={25} height={25}></Image>
                <span className="ml-3 text-black">REACT JS</span>
              </motion.div>
              {/* <span className="mr-4">60%</span> */}
            </div>
            <div className="flex justify-between items-center my-3 rounded-full bg-gray-200 dark:bg-[#16181d]">
              <motion.div
                variants={expressMotion}
                initial="initial"
                animate="animate"
                className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-500"
              >
                <Image src={express} alt="HTML" width={20} height={20}></Image>
                <span className="ml-3 text-black">EXPRESS</span>
              </motion.div>
              {/* <span className="mr-4">20%</span> */}
            </div>
            <div className="flex justify-between items-center my-3 rounded-full bg-gray-200 dark:bg-[#16181d]">
              <motion.div
                variants={mongodbMotion}
                initial="initial"
                animate="animate"
                className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-500"
              >
                <Image src={mongo} alt="HTML" width={20} height={20}></Image>
                <span className="ml-3 text-black">MONGODB</span>
              </motion.div>
              {/* <span className="mr-4">30%</span> */}
            </div>
            <div className="flex justify-between items-center my-3 rounded-full bg-gray-200 dark:bg-[#16181d]">
              <motion.div
                variants={nextMotion}
                initial="initial"
                animate="animate"
                className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-500"
              >
                <Image src={next} alt="HTML" width={25} height={25}></Image>
                <span className="ml-3 text-black">NEXT JS</span>
              </motion.div>
              {/* <span className="mr-4">40%</span> */}
            </div>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            <div className="flex justify-between items-center my-3 rounded-full bg-gray-200 dark:bg-[#16181d]">
              <motion.div
                variants={figmaMotion}
                initial="initial"
                animate="animate"
                className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-500"
              >
                <Image src={figma} alt="HTML" width={25} height={25}></Image>
                <span className="ml-3 text-black">FIGMA</span>
              </motion.div>
              {/* <span className="mr-4">50%</span> */}
            </div>
            <div className="flex justify-between items-center my-3 rounded-full bg-gray-200 dark:bg-[#16181d]">
              <motion.div
                variants={xdMotion}
                initial="initial"
                animate="animate"
                className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-500"
              >
                <Image src={xd} alt="HTML" width={25} height={25}></Image>
                <span className="ml-3 text-black">ADOBE XD</span>
              </motion.div>
              {/* <span className="mr-4">50%</span> */}
            </div>
            <div className="flex justify-between items-center my-3 rounded-full bg-gray-200 dark:bg-[#16181d]">
              <motion.div
                variants={firebaseMotion}
                initial="initial"
                animate="animate"
                className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-500"
              >
                <Image src={firebase} alt="HTML" width={15} height={15}></Image>
                <span className="ml-3 text-black">FIREBASE</span>
              </motion.div>
              {/* <span className="mr-4">70%</span> */}
            </div>
            <div className="flex justify-between items-center my-3 rounded-full bg-gray-200 dark:bg-[#16181d]">
              <motion.div
                variants={framerMotion}
                initial="initial"
                animate="animate"
                className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-500"
              >
                <Image src={circle} alt="HTML" width={15} height={15}></Image>
                <span className="ml-3 text-black">FRAMER</span>
              </motion.div>
              {/* <span className="mr-4">50%</span> */}
            </div>
            <div className="flex justify-between items-center my-3 rounded-full bg-gray-200 dark:bg-[#16181d]">
              <motion.div
                variants={tanStuckMotion}
                initial="initial"
                animate="animate"
                className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-500"
              >
                <Image src={circle} alt="HTML" width={15} height={15}></Image>
                <span className="ml-3 text-black">TAN STACK</span>
              </motion.div>
              {/* <span className="mr-4">50%</span> */}
            </div>
            <div className="flex justify-between items-center my-3 rounded-full bg-gray-200 dark:bg-[#16181d]">
              <motion.div
                variants={hookFormMotion}
                initial="initial"
                animate="animate"
                className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-500"
              >
                <Image src={circle} alt="HTML" width={15} height={15}></Image>
                <span className="ml-3 text-black">HOOK FORM</span>
              </motion.div>
              {/* <span className="mr-4">50%</span> */}
            </div>
            <div className="flex justify-between items-center my-3 rounded-full bg-gray-200 dark:bg-[#16181d]">
              <motion.div
                variants={reactRouterMotion}
                initial="initial"
                animate="animate"
                className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-500"
              >
                <Image src={circle} alt="HTML" width={15} height={15}></Image>
                <span className="ml-3 text-black">REACT ROUTER</span>
              </motion.div>
              {/* <span className="mr-4">50%</span> */}
            </div>
            <div className="flex justify-between items-center my-3 rounded-full bg-gray-200 dark:bg-[#16181d]">
              <motion.div
                variants={jwtMotion}
                initial="initial"
                animate="animate"
                className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-500"
              >
                <Image src={circle} alt="HTML" width={15} height={15}></Image>
                <span className="ml-3 text-black">JWT</span>
              </motion.div>
              {/* <span className="mr-4">60%</span> */}
            </div>
            <div className="flex justify-between items-center my-3 rounded-full bg-gray-200 dark:bg-[#16181d]">
              <motion.div
                variants={swiperMotion}
                initial="initial"
                animate="animate"
                className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-500"
              >
                <Image src={circle} alt="HTML" width={15} height={15}></Image>
                <span className="ml-3 text-black">SWIPER JS</span>
              </motion.div>
              {/* <span className="mr-4">40%</span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
