import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoLinkSharp } from "react-icons/io5";

const Identity = () => {

    const pdfurl = ""

  return (
    <div className='h-auto w-full flex flex-col justify-center items-center gap-2'>
        <div className='h-36 w-36 bg-white rounded-full'>

        </div>
        <div className='h-[12vh] w-full text-center text-white flex flex-col justify-start items-center gap-1 mb-2'>
            <h1 className='text-4xl'>Vidhi Dalwadi</h1>
            <h2 className=''>Business Development Executive</h2>
            <h2>Akavn Solutech LLP</h2>
        </div>
        <div className='w-full h-auto flex justify-center items-center text-4xl text-white gap-4'>
            <a href=""><FaInstagram /></a>
            <a href=""><FaFacebook /></a>
            <a href=""><FaWhatsapp /></a>
        </div>
        <div className="h-auto w-full flex justify-center items-center gap-2 mt-4 px-2">
            <a className='bg-white/20 border border-white text-white h-[6vh] w-[60%] flex justify-center items-center rounded-lg'>Download Brochure</a>
            <a className='bg-white/20 border border-white text-white h-[6vh] w-[60%] flex justify-center items-center rounded-lg'>Our Services</a>
        </div>
        <div className="h-auto w-full flex flex-col justify-start items-start  px-2 mt-4">
            <a href='https://akavnsolutechllp.github.io/quick-links/' className='mb-4 text-white text-xl flex justify-start items-center gap-2 underline'>Quick Links <span className='text-2xl'><IoLinkSharp /></span></a>
            <h4 className='text-xl font-semibold text-white'>Location:</h4>
            <a href='https://maps.app.goo.gl/eikSEcxsf77mpq9K6' className='text-white mb-3'>107, First Floor, Shree Ram Akshar Bhavan, Karamsad Rd, Vallabh Vidyanagar, Anand, Gujarat 388120</a>
            <h4 className='text-xl font-semibold text-white'>Call us:</h4>
            <a href='tel:+916359193636' className='text-xl text-white mb-4'>6359193636</a>
            <h4 className='text-xl font-semibold text-white'>Mail us:</h4>
            <a className='text-lg text-white'>akavnsolutechllp1@gmail.com</a>
        </div>
        <div className="h-auto w-full flex justify-center items-center mt-6">
            <p className='text-white text-sm'>akavnsolutechllp © All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Identity;