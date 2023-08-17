import Image from "next/image";
import { useTheme } from "../contexts/ThemeContext";


export default function DownloadApp() {
  const themeContext = useTheme();

  return (
    <div className="flex justify-center items-center w-full h-[800px] dark:bg-bgdark">
      <div className="flex justify-between w-[1038px] h-[506px]">
        <div className="flex w-[406px] h-full  ">
          <Image src="/download/3d.png" alt="" width={406} height={506} />
        </div>
        <div className=" flex flex-col justify-center">
          <div className="flex flex-col w-[510px] ">
            <h1 className="text-3xl font-extrabold mb-9 dark:text-white">
              Download <span className="text-primary100">Parap</span> mobile
            </h1>
            <p className=" w-[471px] text-xl text-body dark:text-white">
              Manage your money smartly and earn while you spend with just one
              app
            </p>
          </div>

          {themeContext.theme === "dark" ? (
            <div className="flex mt-12">
            <Image
              src="/download/qrcodewhite.svg"
              alt=""
              width={160}
              height={160}
            />

            <div className="flex flex-col justify-between ml-14">
              <Image
                className=""
                src="/download/appstorewhite.svg"
                alt=""
                width={217}
                height={64}
              />

              <Image
                src="/download/playstorewhite.svg"
                alt=""
                width={217}
                height={64}
              />
            </div>
          </div>
          ) : (
            <div className="flex mt-12">
              <Image
                src="/download/qrcode.svg"
                alt=""
                width={160}
                height={160}
              />

              <div className="flex flex-col justify-between ml-14">
                <Image
                  className=""
                  src="/download/appstore.svg"
                  alt=""
                  width={217}
                  height={64}
                />

                <Image
                  src="/download/playstore.svg"
                  alt=""
                  width={217}
                  height={64}
                />
              </div>
            </div>
          )}
          

        </div>
      </div>
    </div>
  );
}
