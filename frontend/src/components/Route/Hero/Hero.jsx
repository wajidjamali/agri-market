import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import Banner from "./farming.jpg";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[85vh] 600px:min-h-[90vh] ml-[1.5%] 
    rounded-xl mt-12 w-[97%] bg-cover ${styles.noramlFlex} `}
      style={{ backgroundImage: "url(https://img.hotimg.com/farming3.jpeg)" }}
    >
      <div className={`${styles.section} w-[70%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-white font-[600] capitalize`}
        >
          Don't Miss Amazing Deal
        </h1>
        <p className='pt-5 text-[16px] font-[Poppins] font-[400] text-white'>
          Save up to 50% off on your first order
        </p>
        <Link to='/products' className='inline-block'>
          <div className={`${styles.button} mt-5`}>
            <span className='text-[#fff] font-[Poppins] text-[18px]'>
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
