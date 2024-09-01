import React from "react";

const Banner = () => {
  return (
  <div className="bg-banner bg-contain md:pt-[301px] pt-[150px] pl-5 lg:pl-0 pb-10 md:pb-[207px] bg-no-repeat">
      
      <div className="max-w-container mx-auto">
        <div className="font-extrabold lg:w-[686px] font-open">
          <img src="assets/element.png" alt="" />
          <h1 className="text-[30px] md:text-[72px] ">
            We Are Digitals <span className="text-[#FF7628]">Marketing</span>{" "}
            Agency
          </h1>
        </div>
        <div className="lg:w-[571px]">
          <p className="mt-[20px] mb-[32px] text-[#6C7D93] text-[15px] md:text-[20px] leading-[36px] font-paprika">
            Use customer data to build great and solid product experiences that
            convert. Digital marketing’s development has changed the way brands
            and businesses use technology for marketing.
          </p>
          <button className=' md:text-[20px] text-[15px] font-bold text-[#FFF] md:py-[20px] py-[10px] px-[20px] md:px-[40px] bg-[#FF7628] rounded-[100px]'>get free quoto</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
