'use client'

import { headerItems } from "@/constants/constant"
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";


const Contact: React.FC = () => {
    return (

        <section id={headerItems.contact.page}

            className=" flex flex-col text-center sm:flex-wrap items-center my-40 ">
            
            <h2 className="font-semibold font-mono text-6xl mt-24 my-4 animate-bounce text-slate-900 sm:pl-6 sm:flex-wrap border-b-4 border-gray-300  items-center ">Contact</h2>

            <div className=" flex min-h-32 w-auto items-center bg-cyan-600 px-40 rounded-xl  border-t-4 border-gray-400 border-x-8 border-y-4">
                <MdEmail
                    size={66}
                    className=" pl-7 text-slate-300"
                />
                <p className="font-extrabold pt-2 px-3 border-b-2 border-gray-400  text-xl text-slate-200">amnaqasmi360@gmail.com</p>

            </div>

            <div className=" flex min:h-32 w-auto items-center bg-cyan-600 px-40 rounded-xl  border-t-4 border-gray-400 border-x-8 border-y-4 mt-3">
                <FaPhone
                    size={65}
                    className=" pl-9  text-slate-300"

                />
                <p className="font-extrabold pt-2 px-3 border-b-2 border-gray-400 text-xl text-slate-200">+923342457114</p>
            </div>



        </section>
    )
}
export default Contact;



