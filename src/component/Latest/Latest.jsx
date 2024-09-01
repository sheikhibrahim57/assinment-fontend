import React from "react";

const Latest = () => {
  return (
    <div className="max-w-container mx-auto pt-[80px] pb-[99px]">
      <div className="text-center">
        <img className="mx-auto" src="assets/element.png" alt="element" />
        <h2 className="text-[#192239] text-[48px] font-extrabold font-open">
          Our Latest Blog
        </h2>
        <p className=" pt-[15px] pb-[52px] lg:px-[340px] text-[#6C7D93] font-normal text-[18px] leading-[32px] font-paprika">
          We provide digital experience services to startups and small
          businesses.
        </p>
      </div>

      <div className="flex justify-center gap-2 lg:justify-between flex-wrap">
        <div className="w-[370px]">
          <img className="rounded-t-[20px]" src="assets/our.png" alt="" />
          <div className="pl-[30px] bg-[#fff] border-[1px] border-t-0 border-[#EFEFEF] rounded-b-[20px]">
            <p className="w-[223px] pt-[30px] text-[24px] font-medium mb-[16px]">
              How to Be Ahead of Stock Changes
            </p>
            <p>By John - 5 Comments</p>
            <div className="ml-[16px] mb-[35px] flex items-center mt-[20px]">
              <div className="w-[36px] h-[36px]  bg-[#FF7628] opacity-50 absolute ml-[-20px] rounded-full"></div>
              <button className="text-[#202427] text-[18px] font-open font-bold leading-[24px] ">
                Read more
              </button>
            </div>
          </div>
        </div>
        <div className="w-[370px]">
          <img className="rounded-t-[20px]" src="assets/our.png" alt="" />
          <div className="pl-[30px] bg-[#fff] border-[1px] border-t-0 border-[#EFEFEF] rounded-b-[20px]">
            <p className="w-[223px] pt-[30px] text-[24px] font-medium mb-[16px]">
              How to Be Ahead of Stock Changes
            </p>
            <p>By John - 5 Comments</p>
            <div className="ml-[16px] mb-[35px] flex items-center mt-[20px]">
              <div className="w-[36px] h-[36px]  bg-[#FF7628] opacity-50 absolute ml-[-20px] rounded-full"></div>
              <button className="text-[#202427] text-[18px] font-open font-bold leading-[24px] ">
                Read more
              </button>
            </div>
          </div>
        </div>
        <div className="w-[370px]">
          <img className="rounded-t-[20px]" src="assets/our.png" alt="" />
          <div className="pl-[30px] bg-[#fff] border-[1px] border-t-0 border-[#EFEFEF] rounded-b-[20px]">
            <p className="w-[223px] pt-[30px] text-[24px] font-medium mb-[16px]">
              How to Be Ahead of Stock Changes
            </p>
            <p>By John - 5 Comments</p>
            <div className="ml-[16px] mb-[35px] flex items-center mt-[20px]">
              <div className="w-[36px] h-[36px]  bg-[#FF7628] opacity-50 absolute ml-[-20px] rounded-full"></div>
              <button className="text-[#202427] text-[18px] font-open font-bold leading-[24px] ">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
