import Image from "next/image";

export default function Cashback() {
  return (
    <div className="flex items-center justify-center w-full h-[720px] /h-[650px] /mt-10 dark:bg-bgdark">
      <div className="flex flex-col justify-start w-[1248px] h-[544.48px] //bg-white ">
        <div className="flex flex-col items-center">
          <h1 className=" font-extrabold text-3xl dark:text-white">
            Earn cashback as you spend.
          </h1>
          <p className=" text-body text-xl font-semibold text-center w-[1038px] h-14 mt-10 mb-12 dark:text-white">
            No need to figure out how to earn and spend your cashback. Papara
            Cashback is simple and quick without discount codes or points,
            instant cash rewards.
          </p>
        </div>

        <div className="flex justify-between">
          <Image
            src="/cashback/spotify.png"
            alt="burger king"
            width={300}
            height={312}
          />

          <Image
            src="/cashback/netflix.png"
            alt="burger king"
            width={300}
            height={312}
          />

          <Image
            src="/cashback/carrefour.png"
            alt="burger king"
            width={300}
            height={312}
          />

          <Image
            src="/cashback/bk.png"
            alt="burger king"
            width={300}
            height={312}
          />
        </div>
      </div>
    </div>
  );
}
