import Image from "next/image";
import Link from "next/link";
// import { Image } from "next/image";


export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <div className="container h-[70vh] flex mt-10">
        <div className="about-product w-[50%] flex justify-center items-center flex-col p-2 gap-y-4">
          <h2 className="text-black font-bold text-[30px]">The best URL shortner in the web</h2>

          <p className="text-center text-[#0A400C] font-semibold ">We are the most straightfoward URL Shortener in the world. Most of the url shorteners will track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortener</p>

          <div className="flex gap-x-2">
            <Link href={'/shortner'} className="bg-[#8FA31E] font-bold p-3 rounded-[8px] text-white hover:bg-[#556B2F] transition-all cursor-pointer">Try Now</Link>
            <Link href={'/about'} className="bg-[#8FA31E] font-bold p-3 rounded-[8px] text-white hover:bg-[#556B2F] transition-all cursor-pointer">Read More</Link>
          </div>
        </div>

        <div className="display-img w-[50%] relative bg-transparent ">
          <Image className="bg-transparent" alt="an Image of a vector" src={"/vector.png"} fill={true}    />
        </div>
      </div>
    </div>
  );
}
