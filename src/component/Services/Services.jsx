import React from "react";

const Services = () => {
  return (
    <div className="max-w-container mx-auto pt-[30px] pb-[50px] md:pt-[60px] md:pb-[99px]">
      <div className="text-center">
        <img className="mx-auto" src="assets/element.png" alt="element" />
        <h2 className="text-[#192239] text-[30px] md:text-[48px] font-extrabold font-open">
          Our Services
        </h2>
        <p className=" pt-[15px] pb-[52px] lg:px-[419px] text-[#6C7D93] font-normal text-[18px] leading-[32px] font-paprika">
          We have been providing great flooring solutions service.
        </p>
      </div>

      <div className="flex lg:justify-between justify-around flex-wrap gap-5">
        <div className="md:w-[413px] pt-[52px] pb-[57px] bg-[#EBF7E9] rounded-[20px]">
          <img className="mx-auto" src="assets/service1.png" alt="service1" />
          <h2 className="mt-[28px] mb-[20px] text-[#192239] text-center text-[30px] font-semibold font-open leading-[36px]">
            Marketing strategy
          </h2>
          <p className="w-[257px] mx-auto text-[#6C7D93] text-center font-normal text-[18px] leading-[30px] font-paprika">
            Social Media has changed the way we interact & do business while
            creating
          </p>
          <div className="justify-center flex items-center mt-[20px]">
            <div className="w-[36px] h-[36px] hover:w-[140px]  bg-[#FF7628] opacity-50 absolute ml-[-100px] hover:ml-[0px] duration-1000 rounded-full"></div>
            <button className="text-[#202427] text-[18px] font-open font-bold leading-[24px] ">
              Read more
            </button>
          </div>
        </div>

        <div className="w-[327px] pt-[52px] pb-[57px] rounded-[20px] bg-[#D8EAFF]">
          <img className="mx-auto" src="assets/service2.png" alt="service2" />
          <h2 className="mt-[28px] mb-[20px] text-[#192239] text-center text-[30px] font-semibold font-open leading-[36px]">
            Social Marketing
          </h2>
          <p className="w-[312px] mx-auto text-[#6C7D93] text-center font-normal text-[18px] leading-[30px] font-paprika">
            Social Media has changed the way we interact & do business while
            creating a new avenue.
          </p>
          <div className="justify-center flex items-center mt-[20px]">
            <div className="w-[36px] h-[36px] hover:w-[140px]  bg-[#FF7628] opacity-50 absolute ml-[-100px] hover:ml-[0px] duration-1000 rounded-full"></div>
            <button className="text-[#202427] text-[18px] font-open font-bold leading-[24px] ">
              Read more
            </button>
          </div>
        </div>

        <div className="w-[370px] pt-[52px] pb-[57px] bg-[#EBF7E9] rounded-[20px]">
          <img className="mx-auto" src="assets/service3.png" alt="service3" />
          <h2 className="mt-[28px] mb-[5px] text-[#192239] text-center text-[30px] font-semibold font-open leading-[36px]">
            Content Marketing
          </h2>
          <p className="w-[278px] mx-auto text-[#6C7D93] text-center font-normal text-[18px] leading-[30px] font-paprika">
            Content Marketing is the other fold of online advertisement. If you
            are looking to build
          </p>
          <div className="justify-center flex items-center mt-[5px]">
            <div className="w-[36px] h-[36px] hover:w-[140px]  bg-[#FF7628] opacity-50 absolute ml-[-100px] hover:ml-[0px] duration-1000 rounded-full"></div>
            <button className="text-[#202427] text-[18px] font-open font-bold leading-[24px] ">
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
