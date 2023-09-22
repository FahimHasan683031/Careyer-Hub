

const Banner = () => {
    return (
        <div className="flex gap-6 text-black my-8 items-center justify-between">
            <div>
                <h1 className="text-[60px] font-bold">One Step <br />Closer To Your <br /> <span className="text-[#7E90FE]">Dream Job</span></h1>
                <p className="text-lg mb-8 w-[500px] text-gray-500"> Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <a className="bg-gradient-to-r my-7 from-[#7E90FE] to-[#9873FF] text-white px-4 py-2 rounded-md ">Get Started</a>
            </div>
            <div className="">
                <img className=" w-[70%] ml-auto" src="/src/assets/images/user.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;