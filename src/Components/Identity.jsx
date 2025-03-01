import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoLinkSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

const Identity = () => {

    const brochureUrl = "https://github.com/akavnsolutechllp/business-development-executive/AKAVNBROCHURE.pdf";
    const servicesUrl = "https://github.com/akavnsolutechllp/business-development-executive/services.pdf";

  return (
    <div className='h-auto w-full flex flex-col justify-center items-center gap-2'>
        <div className='h-36 w-36 bg-white rounded-full flex justify-center items-center text-7xl text-sky-950'>
        <FaUser />
        </div>
        <div className='h-[12vh] w-full text-center text-white flex flex-col justify-start items-center gap-1 mb-2 xl:mb-8 2xl:mb-2'>
            <h1 className='text-4xl font-bold font-poppins'>Vidhi Dalwadi</h1>
            <h2 className='xl:text-lg 2xl:text-xl font-montserrat'>Business Development Executive</h2>
            <h2 className='xl:text-lg 2xl:text-xl font-poppins'>Akavn Solutech LLP</h2>
        </div>
        <div className='w-full h-auto flex justify-center items-center text-4xl text-white gap-4'>
            <a target='_blank' href="https://www.instagram.com/akavnllp"><FaInstagram /></a>
            <a target='_blank' href="https://www.facebook.com/akavnsolutechllp/"><FaFacebook /></a>
            <a target='_blank' href="https://wa.me/+916359193636"><FaWhatsapp /></a>
        </div>
        <div className="h-auto w-full flex justify-center items-center gap-2 mt-4 px-2">
            <a 
            href={brochureUrl} 
            download="AKAVN BROCHURE.PDF"
            className='bg-white/20 border text-sm xl:text-base border-white text-white h-[6vh] w-[60%] flex justify-center items-center rounded-lg font-poppins'>Download Brochure</a>
            <a 
            href={servicesUrl} 
            download="services.pdf"
            className='bg-white/20 border text-sm xl:text-base border-white text-white h-[6vh] w-[60%] flex justify-center items-center rounded-lg font-poppins'>Our Services</a>
        </div>
        <div className="h-auto w-full flex flex-col justify-start items-start  px-2 mt-4">
            <a target='_blank' href='https://akavnsolutechllp.github.io/quick-links/' className='mb-4 text-white text-xl flex justify-start items-center gap-2 underline'>Quick Links <span className='text-2xl'><IoLinkSharp /></span></a>
            <h4 className='text-xl font-semibold text-white'>Location:</h4>
            <a target='_blank' href='https://maps.app.goo.gl/eikSEcxsf77mpq9K6' className='text-white mb-3 font-poppins'>107, First Floor, Shree Ram Akshar Bhavan, Karamsad Rd, Vallabh Vidyanagar, Anand, Gujarat 388120</a>
            <h4 className='text-xl font-semibold text-white'>Call us:</h4>
            <a href='tel:+916359193636' className='text-xl text-white mb-4'>+91 63591 93636</a>
            <h4 className='text-xl font-semibold text-white'>Mail us:</h4>
            <a className='text-lg text-white font-poppins'>akavnsolutechllp1@gmail.com</a>
        </div>
        <div className="h-auto w-full flex justify-center items-center mt-6">
            <p className='text-white text-sm font-montserrat'>akavnsolutechllp © All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Identity;