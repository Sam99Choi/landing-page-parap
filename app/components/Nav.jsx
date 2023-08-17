/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { BsBrightnessHigh, BsMoon } from "react-icons/Bs"
import { useTheme } from "../contexts/ThemeContext";

export default function Nav() {
const themeContext = useTheme();

const handleThemeTogle = () => {
  if(themeContext) {
    themeContext.setTheme(themeContext.theme === 'dark' ? 'light' : 'dark' );
  }
}

  return (
    <nav className="flex items-center justify-center w-full h-24 px-24 py-6 transition-all  dark:bg-bgdark ">
      <div className="flex  w-[1248px]">
        <img
          className="flex items-center dark:text-white"
          src="./logo.png"
          width={48}
          height={48}
          alt=""
        />
        <p className="flex items-center font-extrabold text-3xl ml-3 text-body dark:text-white ">Parap</p>
        <ul className="flex pb-1 ml-10 gap-8 font-bold">
          <li className="flex items-end text-primary100">
            <button className="flex items-center gap-1">
              Personal
              <svg className="stroke-primary100  dark:stroke-primary100 dark:fill-bgdark" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.47 10.74L12 14.26L15.53 10.74" stroke=""  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </button>
          </li>
          <li className="flex items-end text-body dark:text-white">
            <button className="flex items-center gap-1">
              Business
              <svg className=" stroke-body dark:stroke-white  dark:fill-bgdark" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.47 10.74L12 14.26L15.53 10.74" stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
                
            </button>
          </li>
        </ul>
        <div className="flex flex-1 justify-end items-center gap-6">
          <button className="flex w-20 h-10 items-center justify-center rounded-md text-primary100 border border-primary100 font-bold text hover:text-white hover:bg-primary100 transition-all  dark:bg-bgdark dark:text-white dark:border-white dark:hover:text-black dark:hover:bg-white">
            <a href="#">Log in</a>{" "}
          </button>
          <button className="flex w-20 h-10 items-center justify-center text-white rounded-md bg-secondary100 font-bold hover:text-secondary100 hover:bg-white border border-secondary100 transition-all dark:border-none">
            <a href="#">Sing Up</a>{" "}
          </button>
          <button  className="flex items-center justify-center h-10 w-10 font-bold rounded-md bg-gradient-to-r from-secondary100 to-primary100  transition-all ease-in duration-300  dark:text-white dark:bg-gradient-to-r dark:from-primary100 dark:to-secondary100">
            {themeContext.theme === "dark" ? (<BsBrightnessHigh size={30} onClick={handleThemeTogle}/>) : (<BsMoon size={22} onClick={handleThemeTogle} className="" />)}       
          </button>
        </div>
      </div>
    </nav>
  );
}

/*
bandeira
<Image src="/bandeira.svg" alt="" width={20} height={20} />
            <p>English</p>
            
            
            <svg className="stroke-body dark:stroke-white dark:fill-bgdark" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.47 10.74L12 14.26L15.53 10.74" stroke=""   stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>


*/


