import React from "react";

const Who = () => {
  return (
    <div className="max-w-container mx-auto flex md:pt-[100px] pb-14 md:pb-[99px]">
      <div className="md:w-3/5 invisible lg:visible">
        <img src="assets/who.png" alt="who" />
      </div>
      <div className="lg:w-2/5 ml-[-25%] lg:ml-0">
        <img src="assets/element.png" alt="element" />
        <div>
          <h2 className="text-[#192239] text-[30px] md:text-[48px] font-extrabold font-open">
            Who We Are
          </h2>
          <p className=" pt-[15px] text-[#6C7D93] font-normal text-[15px] md:text-[18px] leading-[30px] font-paprika">
            We are a Dhaka based Digital Communication Agency committed to
            creating an actionable strategy, online marketing & technology
            solution for our partners. As a multidisciplinary company, we
            operate as a unified,
          </p>
          <p className=" pt-[3px] pb-[22px] text-[#6C7D93] font-normal text-[12px] leading-[30px] font-paprika">
            Join the 10.000+ Companys Trusting
          </p>
          <div className="flex justify-between  mr-3">
            <div>
              <img src="assets/whoicon1.png" alt="whoicon1.png" />
            </div>
            <div>
              <img src="assets/whoicon2.png" alt="whoicon2.png" />
            </div>
            <div>
              <img src="assets/whoicon3.png" alt="whoicon3.png" />
            </div>
          </div>
          <div className="flex justify-between mt-[44px] mr-3">
            <div>
              <img src="assets/whoicon4.png" alt="whoicon4.png" />
            </div>
            <div>
              <img src="assets/whoicon5.png" alt="whoicon5.png" />
            </div>
            <div>
              <img src="assets/whoicon6.png" alt="whoicon6.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Who;
