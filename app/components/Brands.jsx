import Image from "next/image";

export default function Brands() {
  return (
    <div className="flex justify-center items-center w-full h-[400px] dark:bg-bgdark">
      <div className="flex items-center w-[1248px] h-[279px] //bg-secondary100 ">
        <div className=" flex flex-col items-start justify-between w-[527px] h-full mr-20 ">
          <h1 className="text-3xl font-extrabold leading-normal mb-7 dark:text-white">
            Cutting-edge financial solutions tailored for modern businesses
          </h1>
          <p className="text-body text-xl font-semibold leading-normal mb-6 dark:text-white"> 
            Papara Business solutions allow organizations to make hassle-free,
            single-click payouts on web and app with a seamless integration.
          </p>
          <button className="w-[195px] h-12 text-white font-semibold bg-primary100 rounded-md transition-all hover:bg-white hover:border border-primary100 hover:text-primary100 dark:border-none">
            Learn More
          </button>
        </div>

        <div className="flex  justify-between items-center w-[642px] h-full //bg-primary100">
          <Image
            className="relative top-16 "
            src="/brands/Bitaksi.svg"
            alt=""
            width={140}
            height={140}
          />

          <Image
            className="relative bottom-16"
            src="/brands/Yemeksepeti.svg"
            alt=""
            width={140}
            height={140}
          />

          <Image
            className="relative top-16"
            src="/brands/Binance.svg"
            alt=""
            width={140}
            height={140}
          />

          <Image
            className="relative bottom-16"
            src="/brands/Uber.png"
            alt=""
            width={140}
            height={140}
          />

          <Image
            className="relative top-16"
            src="/brands/Yandex.svg"
            alt=""
            width={140}
            height={140}
          />
        </div>
      </div>
    </div>
  );
}
