"useClient";
import { motion as m } from "framer-motion";
import noNameLogo from "@/assets/logos/osmgpt-noname.png";
import Image from "next/image";
import RunningSvg from "@/assets/animatingsvg/run";

export default function SplashWindow() {
  const title = "Geoinsight";
  return (
    <div className="fixed top-0 left-0 z-20 bg-[#F6F8FB]  text-white w-screen h-screen flex flex-col items-center justify-center">
      <div className="image-cover w-fit h-[35%] overflow-hidden flex items-center gap-4">
        <m.div
          initial={{ transform: 'translateX(100%)', opacity: 0 }}
          animate={{ transform: 'translateX(0%)', opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4"
        >
          <div className="flex items-center gap-8">
            <img
              src="https://imgs.search.brave.com/rW5qRpMYJIeGUROhD3lMAh0E-ZfWvlr92eBuR2VNV9M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dW5pdmVyc2l0eWth/cnQuY29tLy9Db250/ZW50L3VwbG9hZC9h/ZG1pbi91djB2czJo/Zi5oenYucG5n"
              alt="osm gpt logo"
              width={240}
              height={240}
              className="object-contain max-h-[240px] w-[240px] h-[240px]"
              style={{ background: 'transparent' }}
            />
            <span className="text-6xl text-gray-400 font-bold mx-4">|</span>
            <img
              src="https://i.ibb.co/7xxF6JZP/Logo-noback.png"
              alt="Partner Logo"
              width={240}
              height={240}
              className="object-contain max-h-[240px] w-[240px] h-[240px]"
              style={{ background: 'transparent' }}
            />
          </div>
        </m.div>
      </div>
      <div className="content text-gray-700 text-center flex flex-col items-center justify-center">
        <div className="title flex items-center gap-1">
          {title.split("").map((item, index) => (
            <div key={index} className=" overflow-hidden h-fit">
              <m.p
                initial={{ transform: "translateX(100%)" }}
                animate={{ transform: "translateX(0%)" }}
                transition={{ duration: 0.5, delay: 0.15 * index }}
                key={index}
                className="text-[6rem] font-semibold leading-none"
              >
                {item}
              </m.p>
            </div>
          ))}
        </div>
        <div className=" overflow-hidden h-fit">
          <m.p
            initial={{ transform: "translateY(100%)" }}
            animate={{ transform: "translateY(0%)" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-[1.5rem] font-semibold"
          >
            Easily Discover World Treasures
          </m.p>
        </div>
        <RunningSvg className="opacity-100 w-[16px]" />
        <m.small exit={{ opacity: 0 }}>Just a moment please...</m.small>
        {/* <Image src={githubLogo} alt="github logo" /> */}
      </div>
    </div>
  );
}
