import Image from "next/image";
import foodPanda from "../../../public/food-panda.png";
import toyWorld from "../../../public/toy-world.png";

const page = () => {
    return (
        <div className="flex justify-center gap-5 mt-10 mx-5">
            <div className="mx-auto dark:bg-[#16181d] rounded-md border dark:border-none">
                <Image src={foodPanda} alt="food panda" className="rounded mx-auto w-full"></Image>
                <h1 className="text-xl font-bold text-center my-4">FoodPanda</h1>
                <div className="flex justify-center gap-x-3 flex-wrap h-12">
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
            <div className="mx-auto dark:bg-[#16181d] rounded-md border dark:border-none">
                <Image src={toyWorld} alt="toy world" className="rounded mx-auto w-full"></Image>
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
            <div className="mx-auto dark:bg-[#16181d] rounded-md border dark:border-none">
                <Image src={toyWorld} alt="toy world" className="rounded mx-auto w-full"></Image>
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

export default page;