import Image from "next/image";
import html from '../../../public/html.png';
import css from '../../../public/css.png';
import bootstrap from '../../../public/bootstrap.png';
import tailwind from '../../../public/tailwind-css.png';
import javascript from '../../../public/javascript.png';
import react from '../../../public/react-js.png';
import express from '../../../public/express-js.png';
import mongo from '../../../public/mongo-db.png';
import node from '../../../public/node-js.png';
import next from '../../../public/next-js.png';

const page = () => {
    return (
        <div className="px-6 py-2">
            {/* //! Education & Experience */}
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h5 className="my-3 text-2xl font-bold">Education</h5>
                    <div className="">
                        <h5 className="my-2 text-xl font-bold">
                            Computer Science Engineering
                        </h5>
                        <p className="font-semibold">Academy of Technology (2017-2021)</p>
                        <p className="my-3">
                            I am currently pursuing B.tech in Computer Science Engineering
                            from Academy of Technology
                        </p>
                    </div>
                </div>
                <div>
                    <h5 className="my-3 text-2xl font-bold">Experience</h5>
                    <div className="">
                        <h5 className="my-2 text-xl font-bold">Software Developer Jr.</h5>
                        <p className="font-semibold">Tata Consultancy Services</p>
                        <p className="my-3">I do not know why I am doing this job</p>
                    </div>
                </div>
            </div>

            {/*Languages & Tools */}
            <div className="grid gap-9 md:grid-cols-2">
                <div>
                    <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
                    <div className="my-2">
                        <div className="flex justify-between items-center my-3 rounded-full border dark:bg-dark-300 dark:bg-black-500">
                            <div className="flex items-center px-4 py-1 rounded-full w-1/2 bg-gradient-to-r from-green to-blue-500">
                                <Image src={html} alt="HTML" width={25} height={25}></Image>
                                <span className="ml-3 text-black">HTML</span>
                            </div>
                            <span className="mr-4">50%</span>
                        </div>
                        <div className="flex justify-between items-center my-3 rounded-full border dark:bg-dark-300 dark:bg-black-500">
                            <div className="flex items-center px-4 py-1 rounded-full w-2/5 bg-gradient-to-r from-green to-blue-500">
                                <Image src={css} alt="HTML" width={25} height={25}></Image>
                                <span className="ml-3 text-black">CSS</span>
                            </div>
                            <span className="mr-4">40%</span>
                        </div>
                        <div className="flex justify-between items-center my-3 rounded-full border dark:bg-dark-300 dark:bg-black-500">
                            <div className="flex items-center px-4 py-1 rounded-full w-3/5 bg-gradient-to-r from-green to-blue-500">
                                <Image src={bootstrap} alt="HTML" width={20} height={20}></Image>
                                <span className="ml-3 text-black">BOOTSTRAP</span>
                            </div>
                            <span className="mr-4">60%</span>
                        </div>
                        <div className="flex justify-between items-center my-3 rounded-full border dark:bg-dark-300 dark:bg-black-500">
                            <div className="flex items-center px-4 py-1 rounded-full w-1/2 bg-gradient-to-r from-green to-blue-500">
                                <Image src={tailwind} alt="HTML" width={25} height={25}></Image>
                                <span className="ml-3 text-black">TAILWIND</span>
                            </div>
                            <span className="mr-4">50%</span>
                        </div>
                        <div className="flex justify-between items-center my-3 rounded-full border dark:bg-dark-300 dark:bg-black-500">
                            <div className="flex items-center px-4 py-1 rounded-full w-1/2 bg-gradient-to-r from-green to-blue-500">
                                <Image src={javascript} alt="HTML" width={25} height={25}></Image>
                                <span className="ml-3 text-black">JAVASCRIPT</span>
                            </div>
                            <span className="mr-4">50%</span>
                        </div>
                        <div className="flex justify-between items-center my-3 rounded-full border dark:bg-dark-300 dark:bg-black-500">
                            <div className="flex items-center px-4 py-1 rounded-full w-3/5 bg-gradient-to-r from-green to-blue-500">
                                <Image src={react} alt="HTML" width={25} height={25}></Image>
                                <span className="ml-3 text-black">REACT JS</span>
                            </div>
                            <span className="mr-4">60%</span>
                        </div>
                        <div className="flex justify-between items-center my-3 rounded-full border dark:bg-dark-300 dark:bg-black-500">
                            <div className="flex items-center px-4 py-1 rounded-full w-1/4 bg-gradient-to-r from-green to-blue-500">
                                <Image src={express} alt="HTML" width={20} height={20}></Image>
                                <span className="ml-3 text-black">EXPRESS</span>
                            </div>
                            <span className="mr-4">20%</span>
                        </div>
                        <div className="flex justify-between items-center my-3 rounded-full border dark:bg-dark-300 dark:bg-black-500">
                            <div className="flex items-center px-4 py-1 rounded-full w-1/3 bg-gradient-to-r from-green to-blue-500">
                                <Image src={mongo} alt="HTML" width={20} height={20}></Image>
                                <span className="ml-3 text-black">MONGODB</span>
                            </div>
                            <span className="mr-4">30%</span>
                        </div>
                        <div className="flex justify-between items-center my-3 rounded-full border dark:bg-dark-300 dark:bg-black-500">
                            <div className="flex items-center px-4 py-1 rounded-full w-1/6 bg-gradient-to-r from-green to-blue-500">
                                <Image src={node} alt="HTML" width={30} height={30}></Image>
                                <span className="ml-3 text-black">NODE</span>
                            </div>
                            <span className="mr-4">10%</span>
                        </div>
                        <div className="flex justify-between items-center my-3 rounded-full border dark:bg-dark-300 dark:bg-black-500">
                            <div className="flex items-center px-4 py-1 rounded-full w-2/5 bg-gradient-to-r from-green to-blue-500">
                                <Image src={next} alt="HTML" width={25} height={25}></Image>
                                <span className="ml-3 text-black">NEXT JS</span>
                            </div>
                            <span className="mr-4">40%</span>
                        </div>
                    </div>
                </div>

                <div>
                    <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
                    <div className="my-2">
                        {/* {tools.map((tool, i) => (
                            <Bar value={tool} key={i} />
                        ))} */}
                        progress bar
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;