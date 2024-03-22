"use client"
import React, {useState} from "react"
import Image from "next/image"
import USA from "../../../public/assets/United States of America (US).svg"
import insta from "../../../public/assets/Insta.svg"
import a from "../../../public/assets/a.svg"
import gpay from "../../../public/assets/Group 136188.svg"
import mastercard from "../../../public/assets/Group 136189.svg"
import paypal from "../../../public/assets/Group 136192.svg"
import amex from "../../../public/assets/Group 136193.svg"
import pay from "../../../public/assets/Group 136194.svg"
import opay from "../../../public/assets/Group 136195.svg"
import {ChevronDownIcon} from "@heroicons/react/20/solid"

const Footer = () => {
  const [email, setEmail] = useState<string>()

  const handleOnClick = (e:any, name: string) => {
    let element = document.getElementById(name);
    element && element.classList.toggle("hidden");
  }

  return (
    <div className="flex flex-col p-4 md:p-20 w-full text-white bg-black justify-between mt-10">
      <div className="flex flex-wrap gap-10">
        <div className="lg:w-1/2">
          <p className="text-[20px] font-bold mb-4">BE THE FIRST TO KNOW</p>
          <p className="text-[16px] font-light mb-8">
            Sign up for updates from metta muse
          </p>
          <div className="flex gap-3 md:gap-8 rtl lg:flex-wrap">
            <input
              type="text"
              className="h-[47px] w-5/6 lg:w-1/2 ps-3 text-black"
              placeholder="Enter your e-mail..."
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <button className="border-[0.2px] border-white w-[184px] h-[48px] rounded">
              Subscribe
            </button>
          </div>
        </div>
        <p className="border-[0.5px] text-white w-full md:hidden"></p>
        <div className="text-white flex flex-col gap-2">
          <p className="hidden md:block">CONTACT US</p>
          <p className="md:hidden">CALL US</p>
          <div className="flex md:flex-col flex-wrap gap-2 text-[14px] md:text-[16px]">
            <p>+44 221 133 5360</p>
            <p>costomercare@mettamuse.com</p>
          </div>
          <p className="border-[0.5px] text-white w-full md:hidden my-4"></p>
          <p>CURRENCY</p>
          <p className="flex items-center">
            <Image src={USA} alt="Logo" width={24} height={24} />
            <span className=" color p-2">⟡</span>USD
          </p>
          <p className="hidden md:block text-[12px]">
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>
      <hr color="white" className="mt-4" />
      <div className="flex justify-between mt-4 flex-wrap">
        <div className="text-white flex flex-col gap-3 w-full md:w-auto">
          <div className="flex justify-between items-center w-full sm:hidden">
            <p className="text-[24.75px]">mettā muse</p>
            <button onClick={(e)=>handleOnClick(e, 'mettā_muse')}><ChevronDownIcon className="h-5 w-5 " aria-hidden="true" /></button>
          </div>
          <p className="text-[24.75px] hidden md:block">mettā muse</p>
          <ol id="mettā_muse" className="text-[18px]">
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisan</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compilances Docs</li>
          </ol>
        </div>
        <p className="border-[0.5px] text-white w-full md:hidden my-4"></p>
        <div className="text-white flex flex-col gap-3 w-full md:w-auto">
          <div className="flex justify-between items-center w-full sm:hidden">
            <p className="text-[24.75px]">QUICK LINKS</p>
            <button onClick={(e)=>handleOnClick(e, 'quick_links')}><ChevronDownIcon className="h-5 w-5 " aria-hidden="true" /></button>
          </div>
          <p className="text-[24.75px] hidden md:block">QUICK LINKS</p>
          <ol id="quick_links" className="text-[18px]">
            <li>Orders and Shipping</li>
            <li>Join/login as user</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms and Condition</li>
          </ol>
        </div>
        <p className="border-[0.5px] text-white w-full md:hidden my-4"></p>
        <div className="text-white flex flex-col gap-3 w-full md:w-auto">
          <div className="flex justify-between items-center w-full sm:hidden">
            <p className="text-[24.75px] sm:hidden">FOLLOW US</p>
            <button onClick={(e)=>handleOnClick(e, 'follow')}><ChevronDownIcon className="h-5 w-5 " aria-hidden="true" /></button>
          </div>
          <p className="text-[24.75px] hidden md:block">FOLLOW US</p>
          <ol id="follow" className="text-[18px]">
            <li className="flex gap-2 mt-4">
              <Image src={insta} alt="Logo" width={32} height={32} />
              <Image src={a} alt="Logo" width={32} height={32} />
            </li>
          </ol>
          <p className="border-[0.5px] text-white w-full md:hidden"></p>
          <p className="mt-10 text-[14px] md:text-[20px]">mettā muse Accepts</p>
          <p className="flex gap-1 mt-2 flex-wrap">
            <Image src={gpay} alt="Logo" width={56} height={35} />
            <Image src={mastercard} alt="Logo" width={56} height={35} />
            <Image src={paypal} alt="Logo" width={56} height={35} />
            <Image src={amex} alt="Logo" width={56} height={35} />
            <Image src={pay} alt="Logo" width={56} height={35} />
            <Image src={opay} alt="Logo" width={56} height={35} />
          </p>
        </div>
      </div>
      <div className="flex mt-10 justify-center text-[14px]">
        <p>Copyright © 2023 mettamuse. All rights reserve</p>
      </div>
    </div>
  )
}

export default Footer
