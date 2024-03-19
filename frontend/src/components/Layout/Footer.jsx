import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  footercompanyLinks,
  footerProductLinks,
  footerSupportLinks,
  footerContactLinks,
} from "../../static/data";
import Logo from "../../Assests/img/Logo1.png";

const Footer = () => {
  return (
    <div className=' text-gray-800'>
      <div className='md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#86d538] py-3'>
        <h1 className='md:text-3xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/3'>
          <span className='text-[#f0e662]'>Subscribe</span> us for get News{" "}
          Events and Offers
        </h1>
        <div>
          <input
            type='text'
            required
            placeholder='Enter your email...'
            className='text-gray-800 sm:w-72 w-full mr-1 lg:mb-0 mb-4 py-2 rounded-l px-2 focus:outline-none'
          />
          <button className='bg-[#3abc5d] hover:bg-teal-500 duration-300 px-5 py-2 rounded-r-md text-white md:w-auto w-full'>
            Submit
          </button>
        </div>
      </div>

      <div className='grid grid-cols-1 border border-b-[#6eb726] sm:gird-cols-3 sm:grid-cols-4 gap-1 sm:px-20 px-1 py-12 sm:text-center'>
        <ul className='text-center sm:text-start lg:px-[80px]'>
          <h1 className='mb-1 font-bold'>Companny</h1>
          {footerProductLinks.map((link, index) => (
            <li key={index}>
              <Link
                className='text-white-400 hover:text-[#6eb726] duration-300
          text-sm cursor-pointer leading-6'
                to={link.link}
              >
                {link.name}{" "}
              </Link>
            </li>
          ))}{" "}
        </ul>

        <ul className='text-center sm:text-start lg:px-[50px]'>
          <h1 className='mb-1 font-semibold'>Shop</h1>
          {footercompanyLinks.map((link, index) => (
            <li key={index}>
              <Link
                className='text-white-400 hover:text-[#6eb726] duration-300
            text-sm cursor-pointer leading-6'
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}{" "}
        </ul>

        <ul className='text-center sm:text-start lg:px-[30px]'>
          <h1 className='mb-1 font-semibold'>Contact</h1>
          {footerContactLinks.map((link, index) => (
            <li key={index}>
              <Link
                className='text-white-400 hover:text-[#6eb726] duration-300
            text-sm cursor-pointer leading-6'
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}{" "}
        </ul>

        <ul className='px-1 text-center sm:text-start flex sm:block flex-col items-center'>
          <img src={Logo} className='w-[50%] ml-10' alt='' /> <br />
          <p>
            The Farming elements needeed to create beautiful green environment.
          </p>
          <div className='flex items-center ml-[30px] mt-[20px]'>
            <AiFillFacebook size={25} className='cursor-pointer' />
            <AiOutlineTwitter
              size={25}
              style={{ marginLeft: "25px", cursor: "pointer" }}
            />
            <AiFillInstagram
              size={25}
              style={{ marginLeft: "25px", cursor: "pointer" }}
            />
            <AiFillYoutube
              size={25}
              style={{ marginLeft: "25px", cursor: "pointer" }}
            />
          </div>
        </ul>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-black text-sm pb-2'>
        <span>© 2024 AgriMarket. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <div className='sm:block flex items-center justify-center w-sm'>
          <img src='https://img.hotimg.com/payment-method.png' alt='' />
        </div>
      </div>
    </div>
  );
};

export default Footer;
