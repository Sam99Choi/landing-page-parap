import Image from "next/image";
//import iPhone from '/appIcons/iPhone.png'

export default function AppPresentation() {
  return (
    <div>
      <div className="flex justify-center items-center w-full  h-[940px] /h-[800px] dark:bg-bgdark ">
        <div className="flex flex-col w-[1240px] h-[712px] //bg-secondary100">
          <div className="flex flex-col justify-top items-center w-full h-48 ">
            <div className="flex justify-center items-center w-full h-24">
              <h1 className="flex justify-center items-center w-[560px] text-center //bg-primary100 font-extrabold text-4xl dark:text-white ">
                Enjoy your financial freedom with a single app.
              </h1>
            </div>
            <h2 className="w-52 h-7 m-8 font-semibold text-xl text-body dark:text-white">
              All you need is <span className="text-primary100">Parap</span>
            </h2>
          </div>

          <div className="flex justify-between w-full h-full items-center mt-5 //bg-primary100 ">
            <div className="flex flex-col justify-around h-full //bg-primary100">
              <div className="flex ">
                <div className="w-[360px] h-[76px] mr-6 //space-y-3">
                  <h2 className="font-extrabold text-2xl  dark:text-white">Open an account</h2>
                  <p className="text-body dark:text-textdark">
                    Open your account in just few clicks, anywhere, anytime.
                  </p>
                </div>
                <Image
                  src="./appicons/user-account.svg"
                  alt="user logo"
                  width={68}
                  height={68}
                />
              </div>
              <div>
                <div className="flex  ">
                  <div className="w-[360px] h-[76px] mr-6">
                    <h2 className="font-extrabold text-2xl  dark:text-white">Spend debt free</h2>
                    <p className="text-body dark:text-textdark">
                      Know where your money goes. Track your spendings with
                      charts in real time.
                    </p>
                  </div>
                  <Image
                    src="./appicons/send-money-circle.svg"
                    alt="send money"
                    width={68}
                    height={68}
                  />
                </div>
              </div>
              <div>
                <div className="flex  ">
                  <div className="w-[330px] h-[76px] mr-12">
                    <h2 className="font-extrabold text-2xl dark:text-primary100">Earn cashback</h2>
                    <p className="text-body  dark:text-textdark">
                      Earn instant cashback as you spend. No minimum spending
                      limits or complicated rules.
                    </p>
                  </div>
                  <Image
                    src="/appicons/cashback.png"
                    alt="cashback"
                    width={72}
                    height={68}
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center w-[300px] h-[500px] ">
              <Image
                className="z-10"
                src="/appicons/iPhone.png"
                alt="iPhone"
                width={250}
                height={500}
              />
              <Image
                className="absolute"
                src="/appicons/bg.png"
                alt="iPhone"
                width={400}
                height={10}
              />
            </div>

            <div className="flex flex-col justify-around h-full //bg-primary100">
              <div className="flex w-full items-end">
                <Image
                  src="./appicons/save-money-circle.svg"
                  alt="cashback"
                  width={68}
                  height={68}
                />
                <div className="w-[360px] h-[76px] ml-6 //space-y-2">
                  <h2 className="font-extrabold text-2xl dark:text-white">Save Money</h2>
                  <p className="text-body dark:text-textdark">
                    Open saving account,save money regularly.
                  </p>
                </div>
              </div>
              <div>
                <div className="flex  ">
                  <Image
                    src="./appicons/request-circle.svg"
                    alt="cashback"
                    width={68}
                    height={68}
                  />
                  <div className="w-[360px] h-[76px] ml-6 //space-y-2">
                    <h2 className="font-extrabold text-2xl dark:text-white">Request money</h2>
                    <p className="text-body dark:text-textdark">
                      Select a contact, set the amount, add your message, and
                      send your request.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex  ">
                  <Image
                    src="./appicons/qr-circle.svg"
                    alt="QRcode"
                    width={68}
                    height={68}
                  />
                  <div className=" w-[360px] h-[76px] ml-6 //space-y-2">
                    <h2 className="font-extrabold text-2xl dark:text-white">
                      Pay & Receive Payments with QR
                    </h2>
                    <p className="text-body dark:text-textdark">
                      Make payments by scanning a QR code. Share your QR code to
                      receive instant payments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
