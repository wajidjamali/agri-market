import React from "react";
import { useNavigate } from "react-router-dom";
import { brandingData, categoriesData } from "../../../static/data";
import styles from "../../../styles/styles";

const Categories = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={`${styles.section} hidden sm:block`}>
        <div
          className={`branding my-12 flex justify-between w-full shadow-sm bg-white p-5 rounded-md`}
        >
          {brandingData &&
            brandingData.map((i, index) => (
              <div className='flex items-start' key={index}>
                {i.icon}
                <div className='px-3'>
                  <h3 className='font-bold text-sm md:text-base'>{i.title}</h3>
                  <p className='text-xs md:text-sm'>{i.Description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div
        className={`${styles.section} bg-white p-6 rounded-lg mb-12`}
        id='categories'
      >
        <div
          className='grid grid-cols-1 gap-[5px] md:grid-cols-2 rounded-md md:gap-[10px] lg:grid-cols-4 lg:gap-[20px] 
        xl:grid-cols-5 xl:gap-[30px]'
        >
          {categoriesData &&
            categoriesData.map((i) => {
              const handleSubmit = (i) => {
                navigate(`/products?category=${i.title}`);
              };
              return (
                <div className='flex flex-wrap justify-between'>
                  <div
                    className='w-full h-full border border-[#6eb726] bg-[#eeffdf] p-5 rounded-md flex items-center justify-between cursor-pointer'
                    key={i.id}
                    onClick={() => handleSubmit(i)}
                  >
                    <img
                      src={i.image_Url}
                      className='w-[100px] h-14 rounded-md object-cover'
                      alt=''
                    />
                    <h5 className={`text-[18px] mx-3 leading-[1.3]`}>
                      {i.title}
                    </h5>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Categories;
