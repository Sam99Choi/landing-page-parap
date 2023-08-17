/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useTheme } from "../contexts/ThemeContext";

export default function FirstPage() {
    const ThemeContext = useTheme();



  return (
    <div className="flex justify-center items-center w-full h-[649px] //h-[649px] px-24 transition-all  dark:bg-bgdark">
      <div className="flex items-center justify-center w-[1248px] h-[574.23px]">
        <div className="flex flex-col items-start justify-center w-1/2 h-full space-y-6 ">
          <h1 className="font-extrabold text-5xl leading-snug dark:text-white ">
            Managing your money has never been easier.
          </h1>
          <p className="text-xl text-body leading-normal dark:text-white ">
            Welcome to Parap, the new era of mobile money. We accompany you
            every step of the way. We provide powerful tools to track your
            income.
          </p>
          <p className="text-xl text-body leading-normal dark:text-white ">
            We help you take the necessary steps to achieve your financial
            goals. value
          </p>
          <div className="">
            <button className="flex justify-center items-center mt-5 w-[195px] h-12 rounded-md font-semibold text-white bg-primary100 transition-all hover:bg-white hover:border border-primary100 hover:text-primary100 dark:border-none">
              Open an acount
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-1/2 h-[700px]  //bg-primary100">
          <Image 
            className=" z-10 w-[448px] h-[560px]" 
            src="/mockup.png" 
            alt=""
            width={448}
            height={559} 
          />
          <Image 
            className="absolute w-1/2 [532px] h-[700px]" 
            src="/background.png" 
            alt=""
            width={532}
            height={574} 
          />
        </div>
      </div>
    </div>
  );
}
