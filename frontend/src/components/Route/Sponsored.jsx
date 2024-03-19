import React from "react";
import styles from "../../styles/styles";

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-6 px-5 mb-12 cursor-pointer rounded-xl`}
    >
      <div className='flex justify-between w-full'>
        <div className='flex items-start'>
          <img
            src='https://t3.ftcdn.net/jpg/04/80/41/12/360_F_480411229_PRNvoioG7xG7i5ejgSJptBHc96RO8pLc.jpg'
            alt=''
            style={{ width: "130px", objectFit: "contain" }}
          />
        </div>
        <div className='flex items-start'>
          <img
            src='https://img.freepik.com/free-vector/hand-drawn-flat-design-farmers-market-logo_23-2149337484.jpg?size=338&ext=jpg&ga=GA1.1.98259409.1709078400&semt=ais'
            style={{ width: "130px", objectFit: "contain" }}
            alt=''
          />
        </div>
        <div className='flex items-start'>
          <img
            src='https://t3.ftcdn.net/jpg/04/79/73/52/360_F_479735241_O3jHvE8zCMZTr0BdL7DPIKV102GvNBcD.jpg'
            style={{ width: "130px", objectFit: "contain" }}
            alt=''
          />
        </div>
        <div className='flex items-start'>
          <img
            src='https://thumbs.dreamstime.com/b/agriculture-logo-template-design-icon-sign-symbol-farm-nature-ecology-80131409.jpg'
            style={{ width: "130px", objectFit: "contain" }}
            alt=''
          />
        </div>
        <div className='flex items-start'>
          <img
            src='https://thumbs.dreamstime.com/b/agriculture-logo-template-design-icon-sign-symbol-agriculture-logo-template-design-icon-sign-symbol-vector-flat-design-118484132.jpg'
            style={{ width: "130px", objectFit: "contain" }}
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
