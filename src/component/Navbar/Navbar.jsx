import React, { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div className="border-b-[2px] border-white fixed w-full">
      <div className="max-w-container mx-auto ">
        <div className="flex items-center justify-between mx-2">
          <div>
            <img src="assets/Logo.svg" alt="logo" />
          </div>

          <div className="flex justify-end">
            <div className="md:hidden" onClick={handleClick}>
              {show == true ? (
                <RxCross1 className="text-3xl text-secondary" />
              ) : (
                <AiOutlineBars className="text-3xl text-secondary" />
              )}
            </div>

            <div>
              <ul
                className={`md:flex py-2 md:gap-x-2 lg:gap-x-5 text-black bg-green-500 md:bg-opacity-0 z-10 justify-end duration-300 font-pop font-semibold text-bold text-center absolute md:static w-full top-[-160px] ${
                  show
                    ? "top-[65px] md:top-[210px] w-full left-0"
                    : "top-[-225px] left-0"
                }`}
              >
                <div className="flex justify-center items-center">
                  <li className="hover:text-[#FF7628]">
                    <a href="#">Home</a>
                  </li>
                  <IoIosArrowDown />
                </div>
                <div className='flex justify-center items-center'>
                    <li className='hover:text-[#FF7628]'><a href="#">About</a></li>
                    <IoIosArrowDown />
                  </div>
                  <div className='flex justify-center items-center'>
                    <li className='hover:text-[#FF7628]'><a href="#">Service</a></li>
                    <IoIosArrowDown />
                  </div>
                  <div className='flex justify-center items-center'>
                    <li className='hover:text-[#FF7628]'><a href="#">Portfolio</a></li>
                    <IoIosArrowDown />
                  </div>
                  <div className='flex justify-center items-center'>
                    <li className='hover:text-[#FF7628]'><a href="#">Price</a></li>
                    <IoIosArrowDown />
                  </div>
                  <div className='flex justify-center items-center'>
                    <li className='hover:text-[#FF7628]'><a href="#">Blog</a></li>
                    <IoIosArrowDown />
                  </div>
                <button className="lg:ml-[73px] text-[18px] font-semibold text-[#FFF] py-[14px] px-[28px] bg-[#FF7628] rounded-[100px]">
                  Contact Us
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// import React from 'react';
// import { IoIosArrowDown } from "react-icons/io";

// const Navbar = () => {
//   return (
//     <div className='py-[15px] fixed w-full'>
//       <div className='max-w-container mx-auto'>
//         <div className='flex items-center'>
//             <div className='w-1/4'>
//                <img src="assets/Logo.svg" alt="logo" />
//             </div>
//             <div className='w-3/4'>
//               <ul className='flex justify-end gap-x-[41px] items-center font-open  font-semibold text-[16px] text-[#000]'>
//                   <div className='flex items-center'>
//                     <li className='hover:text-[#FF7628]'><a href="#">Home</a></li>
//                     <IoIosArrowDown />
//                   </div>
                  // <div className='flex items-center'>
                  //   <li className='hover:text-[#FF7628]'><a href="#">About</a></li>
                  //   <IoIosArrowDown />
                  // </div>
                  // <div className='flex items-center'>
                  //   <li className='hover:text-[#FF7628]'><a href="#">Service</a></li>
                  //   <IoIosArrowDown />
                  // </div>
                  // <div className='flex items-center'>
                  //   <li className='hover:text-[#FF7628]'><a href="#">Portfolio</a></li>
                  //   <IoIosArrowDown />
                  // </div>
                  // <div className='flex items-center'>
                  //   <li className='hover:text-[#FF7628]'><a href="#">Price</a></li>
                  //   <IoIosArrowDown />
                  // </div>
                  // <div className='flex items-center'>
                  //   <li className='hover:text-[#FF7628]'><a href="#">Blog</a></li>
                  //   <IoIosArrowDown />
                  // </div>
//                   <button className='ml-[73px] text-[18px] font-semibold text-[#FFF] py-[14px] px-[28px] bg-[#FF7628] rounded-[100px]'>Contact Us</button>

//               </ul>
//             </div>
//         </div>
//       </div>
//     </div>

//   )
// }

// export default Navbar
