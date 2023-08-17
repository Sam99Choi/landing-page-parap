/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import Nav from "./components/Nav";
import FirstPage from "./components/FirstPage";
import CardPresentation from "./components/CardPresentation";
import AppPresentation from "./components/AppPresentation";
import Cashback from "./components/Cashback";
import Brands from './components/Brands';
import DownloadApp from "./components/DownloadApp"
import Footer from './components/Footer'
import Image from "next/image";
import { ThemeProvider } from "./contexts/ThemeContext";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="">
        <Nav />
        <FirstPage />
        <CardPresentation />
        <AppPresentation />
        <Cashback/>
        <Brands/>
        <DownloadApp/>
        <Footer/>
      </div>
    </ThemeProvider>
  );
}
/*
<Image
        src="../cards/black.png"
        alt=""
        className="flex w-[217.19px] h-[355.5px]"
      />

 <Carousel autoSlide={true}>
      {cards.map((card, index) => (
        <div key={index}>
          <Image 
            src={card} 
            alt="cartão" 
            width={217} 
            height={355} />
        </div>
      ))}     
    </Carousel>      


    <div className="flex flex-col justify-between  h-full bg-body">
              <div className="flex flex-col justify-between">
                <div className="flex">
                  <div className="w-[330px] h-[76px] mr-6 space-y-3">
                    <h2 className="font-extrabold text-2xl">Save Money</h2>
                    <p className="text-body">
                      Open saving account,save money regularly.
                    </p>
                  </div>
                  <Image
                    scr="./public/icons/cashback.svg"
                    alt="cashback"
                    width={68}
                    height={68}
                  />
                </div>
                <div className="flex">
                  <div className="w-[330px] h-[76px] mr-6 space-y-3">
                    <h2 className="font-extrabold text-2xl">Request money</h2>
                    <p className="text-body">
                      Select a contact, set the amount, add your message, and
                      send your request.
                    </p>
                  </div>
                  <Image
                    scr="./public/icons/cashback.svg"
                    alt="cashback"
                    width={68}
                    height={68}
                  />
                </div>
                <div className="flex">
                  <div className="w-[330px] h-[76px] mr-6 space-y-3">
                    <h2 className="font-extrabold text-2xl">
                      Pay & Receive Payments with QR
                    </h2>
                    <p className="text-body">
                      Make payments by scanning a QR code. Share your QR code to
                      receive instant payments.
                    </p>
                  </div>
                  <Image
                    scr="./public/icons/cashback.svg"
                    alt="cashback"
                    width={68}
                    height={68}
                  />
                </div>
              </div>
            </div>
*/
