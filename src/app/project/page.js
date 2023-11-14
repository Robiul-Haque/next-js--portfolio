import MernProject from "@/components/MernProject";
import NextProject from "@/components/NextProject";
import ReactProject from "@/components/ReactProject";

const page = () => {
    return (
        <div className="flex justify-center flex-wrap md:flex-wrap lg:flex-nowrap gap-3 m-6 md:m-4 lg:m-4">
            <ReactProject></ReactProject>
            <MernProject></MernProject>
            <NextProject></NextProject>
        </div>
    );
};

export default page;