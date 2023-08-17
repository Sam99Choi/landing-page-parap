/* eslint-disable @next/next/no-img-element */
import CardSlider from "./CardSlider"
import Image from "next/image";

const cards = [
   {
    id: 1,
    img: "/cards/gray.png",
   },
   {
    id: 2,
    img: "/cards/msb.png",
   }, 
   {
    id: 3,
    img: "/cards/rose.png",
   }, 
   {
    id: 4,
    img: "/cards/black.png",
   }, 
   {
    id: 5,
    img: "/cards/teal.png"
   }, 
  ]
  
  /*
     "/cards/rose.png",
    "/cards/teal.png"
    "/cards/black.png",
  */

export default function CardPresentation() {
  return (
    <div className=" flex items-center justify-center w-full h-[624px]   dark:bg-bgdark">
      <div className="flex items-center justify-center w-[1248px] h-[500px] /h-[401.7px] //bg-secondary100">
        <div className="flex  items-center justify-center h-full ">
          <div className="flex items-start w-full  h-auto max-w-[650px] mr-[97px] pt-8 /bg-primary100">
            <CardSlider autoSlide={true}>
                {cards.map((card) => (
                  <img src={card.img} key={card.id} alt="cartão"  />
                ))}
              </CardSlider>
          </div>

          <div className="flex justify-between flex-col w-[511px]  h-[400px] /h-[365px] space-y-5   //bg-secondary100">
            <h2 className="font-extrabold text-3xl leading-normal dark:text-white">
              The simplicity of the debit card with credit card rewards we
              combined.
            </h2>
            <p className="text-body text-xl font-semibold leading-normal dark:text-white  ">
              Spend your available balance with Parap Card.No overdrafts, no
              overspending. Track your spendings in real time.
            </p>
            <p className="text-body text-xl font-semibold dark:text-white ">No more card fees!</p>
            <div className="pt-10">
              <button className="flex justify-center items-center mt-5 w-[195px] h-12 rounded-md font-semibold text-white bg-primary100 transition-all  hover:bg-white hover:border border-primary100 hover:text-primary100 dark:border-none">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
