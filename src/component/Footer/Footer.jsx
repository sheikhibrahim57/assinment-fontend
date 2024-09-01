import React from "react";

const Footer = () => {
  return (
    <div className="pt-[140px] pb-[57px]">
      <div className="max-w-container mx-auto ">
        <div className="md:flex gap-x-[93px]">
          <div className="md:w-2/5">
            <img src="assets/Logo.svg" alt="logo" />
            <p className="mt-[20px] mb-[32px] text-[#6C7D93] text-[18px] leading-[36px] font-open">
              Install any demo or template with a single click. You can mix and
              match all the demos & templates. Every demo can be turned into one
              or multi-page.
            </p>
          </div>
          <div className="md:w-3/5 flex justify-between flex-wrap">
            <div>
              <h3 className="font-open font-semibold leading-[33px] text-[24px] text-[#413F45]">Features</h3>
              <ul className="gap-[30px]">
                <li className="mt-[48px] font-open font-semibold leading-[33px] text-[20px] text-[#6C7D93]">Home</li>
                <li className="mt-[30px] font-open font-semibold leading-[33px] text-[20px] text-[#6C7D93]">About</li>
                <li className="mt-[30px] font-open font-semibold leading-[33px] text-[20px] text-[#6C7D93]">Benifit</li>
                <li className="mt-[30px] font-open font-semibold leading-[33px] text-[20px] text-[#6C7D93]">Pricing</li>
                <li className="mt-[30px] font-open font-semibold leading-[33px] text-[20px] text-[#6C7D93]">Blog</li>
              </ul>
            </div>
            <div>
              <h3 className="font-open font-semibold leading-[33px] text-[24px] text-[#413F45]">Products</h3>
              <ul className="gap-[30px]">
                <li className="mt-[48px] font-open font-semibold leading-[33px] text-[20px] text-[#6C7D93]">Task Management</li>
                <li className="mt-[30px] font-open font-semibold leading-[33px] text-[20px] text-[#6C7D93]">Company growth</li>
                <li className="mt-[30px] font-open font-semibold leading-[33px] text-[20px] text-[#6C7D93]">Time tracking</li>
              </ul>
            </div>
            <div className="mt-[50px] md:mt-0">
              <h3 className="font-open font-semibold leading-[33px] text-[24px] text-[#413F45]">Support</h3>
              <ul className="gap-[30px]">
                <li className="mt-[48px] font-open font-semibold leading-[33px] text-[20px] text-[#6C7D93]">Customer service</li>
                <li className="mt-[30px] font-open font-semibold leading-[33px] text-[20px] text-[#6C7D93]">Accessibility</li>
                <li className="mt-[30px] font-open font-semibold leading-[33px] text-[20px] text-[#6C7D93]">Contact us</li>
                
              </ul>
            </div>
          </div>
        </div>
        <div className="md:flex justify-between mt-[80px] text-[18px] text-[#6C7D93]">
            <div className="mb-4 md:mb-0">
                <p>@2024 Innovate.All rights reserved.</p>
            </div>
            <div className="flex gap-[60px]">
                <p>Privacy policy</p>
                <p>Terms & condition</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
