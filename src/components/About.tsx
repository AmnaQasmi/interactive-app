'use client'
import { headerItems } from "@/constants/constant";
import Image from "next/image";
import { userInfo } from "@/constants/constant";
const About: React.FC = () => {
    return (
        <section id={headerItems.about.page}
            className="h-screen flex flex-col text-center justify-center mx-7 pl-9 items-center md:flex-row md:text-start sm:text-center mt-96 lg:mt-0">

            <div className="mt-96 lg:mt-72">

                <div className="  md:w-2/3  lg:w-50 min:mt-96">
                    <h1 className="text-6xl min:text-4xl font-mono font-semibold  text-slate-900 animate-bounce min:mt-auto">About Me</h1>
                    <h2 className='text-2xl mt-2 font-semibold md:text-3xl text-gray-900  font-serif border-t-4 border-gray-300 '>
                        Get To Know !
                    </h2>
                    <p
                        className="[&>p]:mt-3 me-7 font-serif font-bold text-slate-800 text-xl sm:text-sm "
                        dangerouslySetInnerHTML={{ __html: userInfo.about }} />
                </div>
            </div>
            <div className="flex flex-col items-start pt-48 lg:w-2/3">
                <div className='items-center min-w-11 min-h-min my-7 sm:mt-32 min:[pl-24] pr-20 lg:w-auto ml-24'>
                    <Image
                        src={userInfo.picture}
                        alt='dp'
                        height={300}
                        width={300}
                        className="mb-12 rounded-full shadow-2xl"

                    />

                </div>
                <div className=" pb-80 mb-80 lg:pb-10 lg:mb-0 sm:m-0 items-center">
                    {
                        userInfo.skills.id.map((skills: string, index: number) => (
                            <span
                                key={index}
                                className={"bg-cyan-600 bg-gradient-to-r hover:from-cyan-600 hover:to-gray-400 m-2 p-2  rounded-md inline-block text-sm font-serif font-semibold text-gray-100 cursor-default mb-14 shadow-xl "}>
                                {skills}
                            </span>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
export default About;