import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex items-start justify-between w-full h-[424px] text-white bg-black  py-16">
      <div className="flex items-center  ">
        <div className="ml-24 ">
          <h1 className=" mb-12 font-bold text-lg ">Parap</h1>
          <div className="space-y-6 text-footer cursor-pointer">
            <p className="hover:text-body">Hakkımızda</p>
            <p className="hover:text-body">Kültür</p>
            <p className="hover:text-body">Kariyer</p>
            <p className="hover:text-body">Blog</p>
            <p className="hover:text-body">TL Yükleme İşlemi</p>
          </div>
        </div>

        <div>
          <div className=" w-[450px] ml-[219px]">
            <h1 className=" mb-12 font-bold text-lg text-white">Destek</h1>

            <div className="flex gap-36">
              <div className="space-y-6 text-footer cursor-pointer">
                <p className="hover:text-body">Bize Ulaşın</p>
                <p className="hover:text-body">Yardım</p>
                <p className="hover:text-body">Sözlük</p>
                <p className="hover:text-body">İptal / İade İşlemleri</p>
                <p className="hover:text-body">Ücretler ve Limitler</p>
              </div>
              <div className="space-y-6 text-footer cursor-pointer">
                <p className="hover:text-body">Bize Ulaşın</p>
                <p className="hover:text-body">Yardım</p>
                <p className="hover:text-body">Sözlük</p>
                <p className="hover:text-body">İptal / İade İşlemleri</p>
                <p className="hover:text-body">Ücretler ve Limitler</p>
              </div>
            </div>
          </div>
        </div>
      </div>

        <div className="flex  flex-col justify-between h-full mr-36">
            <div className=" flex flex-col text-footer text-lg items-center space-y-2">
            <span>destek@parapp.com.tr</span>
            <span>0850 988 88 88</span>
        </div>

        <div className="flex gap-4 cursor-pointer">
            <Image
                src='/socialmedia/Youtube.svg'
                alt=""
                width={32}
                height={32}
            />
            <Image
                src='/socialmedia/Facebook.svg'
                alt=""
                width={32}
                height={32}
            />
            <Image
                src='/socialmedia/instagram.svg'
                alt=""
                width={32}
                height={32}
            />
            <Image
                src='/socialmedia/Linkedin.svg'
                alt=""
                width={32}
                height={32}
            />
            <Image
                src='/socialmedia/Twitter.svg'
                alt=""
                width={32}
                height={32}
            />
        </div>
        </div>
      
    </div>
  );
}
