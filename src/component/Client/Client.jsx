import React from "react";

const Client = () => {
  return (
    <div className="max-w-container mx-auto flex pt-[100px] pb-[99px]">
      <div className="flex flex-wrap justify-center gap-[30px]">
        <div className="w-[360px] pt-[25px] pb-[40px] duration-1000 rounded-[20px]">
          <img src="assets/element.png" alt="" />
          <div>
            <h2 className="text-[#192239] text-[48px] font-extrabold font-open">
              Client Review
            </h2>
            <p className="w-[331px] pt-[15px] text-[#6C7D93] font-normal text-[18px] leading-[30px] font-paprika">
              people use digital devices instead of visiting physical shops,
              digital marketing campaigns are becoming more prevalent and
              efficient.
            </p>
          </div>
        </div>
        <div className="w-[360px] pt-[25px] pb-[40px] hover:bg-[#D8EAFF] duration-1000 rounded-[20px]">
          <p className="w-[331px] pt-[15px] pl-[40px] pr-[51px] text-[#6C7D93] font-normal text-[18px] leading-[30px] font-paprika">
            Content Marketing is the other fold of online advertisement. If you
            are looking to build. digital marketing campaigns are becoming more
            prevalent and efficient.
          </p>
          <div className="flex pl-[40px] mt-[9px] pr-[51px]">
            <div>
              <img src="assets/clint.png" alt="" />
            </div>
            <div>
              <h2 className="text-[#192239] mb-[8px] text-[24px] font-semibold font-open">
                Jane Cooper
              </h2>
              <p className=" text-[#6C7D93] font-normal text-[18px] leading-[30px] font-open">
                Fashion Designer
              </p>
            </div>
          </div>
        </div>

        <div className="w-[360px] pt-[25px] pb-[40px] hover:bg-[#D8EAFF] duration-1000 rounded-[20px]">
          <p className="w-[331px] pt-[15px] pl-[40px] pr-[51px] text-[#6C7D93] font-normal text-[18px] leading-[30px] font-paprika">
            Content Marketing is the other fold of online advertisement. If you
            are looking to build. digital marketing campaigns are becoming more
            prevalent and efficient.
          </p>
          <div className="flex pl-[40px] mt-[9px] pr-[51px]">
            <div>
              <img src="assets/clint.png" alt="" />
            </div>
            <div>
              <h2 className="text-[#192239] mb-[8px] text-[24px] font-semibold font-open">
                Eleanor Pena
              </h2>
              <p className=" text-[#6C7D93] font-normal text-[18px] leading-[30px] font-open">
                Architecture
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
