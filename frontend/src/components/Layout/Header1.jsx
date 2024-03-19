import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/styles";
import { categoriesData, productData } from "../../static/data";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import DropDown from "./DropDown";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import Cart from "../cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import { RxCross1 } from "react-icons/rx";
import Logo from "../../Assests/img/Logo1.png";

const Header = ({ activeHeading }) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { isSeller } = useSelector((state) => state.seller);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const { allProducts } = useSelector((state) => state.products);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={`${styles.section}`}>
        <div className='hidden 800px:h-[50px] 800px:my-[10px] 800px:flex items-center justify-between'>
          {/* Logo .......................................................................................................*/}
          <div className='w-[80px] mb-[0%]'>
            <Link to='/'>
              <img src={Logo} alt='' />
            </Link>
          </div>
        </div>
      </div>

      {/* ............Mobile header................................................................................................. */}
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        }w-full h-[60px] bg-[#fff] z-50 top-0 left-0 shadow-sm 800px:hidden`}
      >
        <div className='w-full flex items-center justify-between'>
          <Link to='/'>
            <img
              src={Logo}
              alt=''
              className='cursor-pointer w-[60px] mx-[30px] h-[60px]'
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
