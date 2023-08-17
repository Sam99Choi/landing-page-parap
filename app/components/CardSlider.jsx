import Image from "next/image";
import { useState, useEffect } from "react";

export default function CardSlider({
  children: cards,
  autoSlide = false,
  autoSlideInterval = 2300,
}) {
  const [card, setCurr] = useState(0);

  const prev = () =>
    setCurr((card) => (card === 0 ? cards.length - 1 : card - 1));
  const next = () =>
    setCurr((card) => (card === cards.length - 1 ? 0 : card + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="flex flex-col justify-start items-center overflow-hidden relative h-auto">
      <div
        className="flex h-auto mb-5 w-5/12 justify-between items-center gap-4  transition-transform ease-out duration-500 "
        style={{ transform: `translateX(-${card * 100}%)` }}
      >
        {cards}
      </div>

      <div className="absolute inset-0 flex items-center justify-between p[-30px]">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow /bg-branco /text-cinza-h2 "
        >
          <svg
            className="stroke-body dark:stroke-white"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.4938 4.52625L8.27428 10.7458C7.53976 11.4803 7.53976 12.6823 8.27428 13.4168L14.4938 19.6364"
              stroke=""
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        


        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-branco text-cinza-h2 hover:bg-cinza hover:text-preto"
        >
          <svg
            className="stroke-body dark:stroke-white"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.91 19.92L15.43 13.4C16.2 12.63 16.2 11.37 15.43 10.6L8.91 4.07996"
              stroke=""
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
          
          
      </div>
      <div className="flex /mt-4 items-end justify-center gap-2">
              {cards.map((_, i) => (
                <div
                  key={i}
                  className={`
              transition-all w-3 h-3 bg-body rounded-full 
              ${card === i ? "p-2" : "bg-opacity-50"}
            `}
                />
              ))}
            </div>
    </div>
  );
}

/*
<div className="flex items-center justify-center gap-2">
              {cards.map((_, i) => (
                <div
                  key={i}
                  className={`
              transition-all w-3 h-3 bg-body rounded-full 
              ${card === i ? "p-2" : "bg-opacity-50"}
            `}
                />
              ))}
            </div>



                    <div className="flex justify-center item-center mt-14">
          <button onClick={prev}>
            <svg
              className="stroke-[#292D32] dark:stroke-white"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.4938 4.52625L8.27428 10.7458C7.53976 11.4803 7.53976 12.6823 8.27428 13.4168L14.4938 19.6364"
                stroke=""
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button >


  <div className="flex">
  
  <button onClick={next}>
    <svg
      className="stroke-[#292D32] dark:stroke-white"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.91 19.92L15.43 13.4C16.2 12.63 16.2 11.37 15.43 10.6L8.91 4.07996"
        stroke=""
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
</div>
*/
