import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ShopLogin from "../components/Shop/ShopLogin";
import Header1 from "../components/Layout/Header1.jsx";

const ShopLoginPage = () => {
  const navigate = useNavigate();
  const { isSeller,isLoading } = useSelector((state) => state.seller);

  useEffect(() => {
    if(isSeller === true){
      navigate(`/dashboard`);
    }
  }, [isLoading,isSeller])
  return (
    <div>
      <Header1 />
        <ShopLogin />
    </div>
  )
}

export default ShopLoginPage