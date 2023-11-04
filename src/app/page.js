import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaServer } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { CiMobile3 } from "react-icons/ci";

const page = () => {
    return (
        <section className="flex flex-col flex-grow px-6 pt-1">
            <h6 className="my-3 text-base font-medium">
                I am currently studying degree(First year). I have 1+ years of experience in
                Web Development.
            </h6>
            <div
                className="flex-grow p-5 mt-5 bg-gray-400 rounded-b-xl "
                style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
            >
                <h4 className="mt-6 text-xl font-semibold tracking-wide">
                    What I am doing
                </h4>
                <div className="grid gap-8 my-8 md:grid-cols-2">
                    <div className='flex items-center p-4 space-x-4 bg-white rounded-lg'>
                        <HiMiniComputerDesktop className='w-12 h-12 text-green-500'></HiMiniComputerDesktop>
                        <div>
                            <h6 className='font-bold'>Frontend Development</h6>
                            <p>I can build beautiful SPA.</p>
                        </div>
                    </div>
                    <div className='flex items-center p-4 space-x-4 bg-white rounded-lg'>
                        <FaServer className='w-12 h-12 text-green-500'></FaServer>
                        <div>
                            <h6 className='font-bold'>Backend Development</h6>
                            <p>Handel server side, mongodb database, using express js.</p>
                        </div>
                    </div>
                    <div className='flex items-center p-4 space-x-4 bg-white rounded-lg'>
                        <AiOutlineApi className='w-12 h-12 text-green-500'></AiOutlineApi>
                        <div>
                            <h6 className='font-bold'>API Development</h6>
                            <p>I can develop REST API using express js.</p>
                        </div>
                    </div>
                    <div className='flex items-center p-4 space-x-4 bg-white rounded-lg'>
                        <CiMobile3 className='w-12 h-12 text-green-500'></CiMobile3>
                        <div>
                            <h6 className='font-bold'>Responsive Design</h6>
                            <p>Make beautiful responsive design.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default page;