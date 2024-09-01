import React from "react";

const Process = () => {
  return (
    <div className="max-w-container mx-auto pt-[60px] pb-[99px]">
      <div className="text-center">
        <img className="mx-auto" src="assets/element.png" alt="element" />
        <h2 className="text-[#192239] text-[48px] font-extrabold font-open">
          Our creative process.
        </h2>
        <p className=" pt-[15px] pb-[52px] lg:px-[340px] text-[#6C7D93] font-normal text-[18px] leading-[32px] font-paprika">
          We provide digital experience services to startups and small
          businesses.
        </p>
      </div>
      <div>
        <div className="flex lg:justify-between  justify-center flex-wrap">
          <div className="py-[58px] w-[350px] md:w-[570px] h-[324px]">
            <div className="pt-[27px] w-[350px] md:w-[465px] pl-[40px] pb-[20px] bg-[#EBF7E9] rounded-[20px]">
              <div className="ml-[16px] flex items-center mt-[20px]">
                <div className="w-[36px] h-[36px]  bg-[#FF7628] opacity-50 absolute ml-[-20px] rounded-full"></div>
                <button className="text-[#202427] text-[18px] font-open font-bold leading-[24px] ">
                  Step-1
                </button>
              </div>
              <h2 className="text-[#192239] mt-[22px] mb-[20px] text-[30px] font-semibold font-open">
                Global SEO Research
              </h2>
              <p className="md:w-[350px] text-[#6C7D93] font-normal text-[18px] leading-[30px] font-roboto">
                Practical tools and features make it easier to build and manage
                your site.
              </p>
            </div>
          </div>
          <div>
            <div className="md:w-[570px] w-[350px] h-[324px] bg-[#C4C4C4] rounded-[20px]"></div>
          </div>
        </div>

        <div className="flex lg:justify-between justify-center  flex-wrap-reverse">
          <div>
            <div className="md:w-[570px] w-[350px] h-[324px] bg-[#C4C4C4] rounded-[20px]"></div>
          </div>
          <div className="py-[58px] w-[350px] md:w-[465px] flex justify-end md:h-[324px]">
            <div className="pt-[27px] w-[350px] md:w-[465px] pl-[40px] pb-[20px] md:pb-[207px] bg-[#D8EAFF] rounded-[20px]">
              <div className="ml-[16px] flex items-center mt-[20px]">
                <div className="w-[36px] h-[36px]  bg-[#FF7628] opacity-50 absolute ml-[-20px] rounded-full"></div>
                <button className="text-[#202427] text-[18px] font-open font-bold leading-[24px] ">
                  Step-2
                </button>
              </div>
              <h2 className="text-[#192239] mt-[22px] mb-[20px] text-[30px] font-semibold font-open">
                Social media integration
              </h2>
              <p className="md:w-[350px] text-[#6C7D93] font-normal text-[18px] leading-[30px] font-roboto">
                Practical tools and features make it easier to build and manage
                your site.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-between flex-wrap">
          <div className="py-[58px] w-[350px] md:w-[465px] mb-10 h-[324px]">
            <div className="pt-[27px] w-[350px] md:w-[465px] pl-[40px] pb-[20px] bg-[#EBF7E9] rounded-[20px]">
              <div className="ml-[16px] flex items-center mt-[20px]">
                <div className="w-[36px] h-[36px]  bg-[#FF7628] opacity-50 absolute ml-[-20px] rounded-full"></div>
                <button className="text-[#202427] text-[18px] font-open font-bold leading-[24px] ">
                  Step-3
                </button>
              </div>
              <h2 className="text-[#192239] mt-[22px] mb-[20px] text-[30px] font-semibold font-open">
                Launching the Application
              </h2>
              <p className="w-[300px] md:w-[350px] text-[#6C7D93] font-normal text-[18px] leading-[30px] font-roboto">
                Practical tools and features make it easier to build and manage
                your site.
              </p>
            </div>
          </div>
          <div>
            <div className="md:w-[570px] w-[350px] h-[324px] bg-[#C4C4C4] rounded-[20px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
