import { motion as m } from "framer-motion";
import githubLogo from "@/assets/icons/github-icon.png";
import noNameLogo from "@/assets/logos/osmgpt-noname.png";
import Image from "next/image";
import RunningSvg from "@/assets/animatingsvg/run";

export default function AppCard() {
  return (
    <div className="flex flex-col items-center gap-1 justify-center h-[30%]">
      <div className="image-cover w-fit h-[35%] flex items-center gap-4">
        <div className="image w-full h-full flex items-center gap-8">
          <img
            src="https://imgs.search.brave.com/rW5qRpMYJIeGUROhD3lMAh0E-ZfWvlr92eBuR2VNV9M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dW5pdmVyc2l0eWth/cnQuY29tLy9Db250/ZW50L3VwbG9hZC9h/ZG1pbi91djB2czJo/Zi5oenYucG5n"
            alt="logo"
            width={120}
            height={120}
            className="object-contain max-h-[120px] w-[120px] h-[120px]"
            style={{ background: 'transparent' }}
          />
          <span className="text-3xl text-gray-400 font-bold mx-2">|</span>
          <a
            href="https://aiventislabs.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://i.ibb.co/7xxF6JZP/Logo-noback.png"
              alt="Partner Logo"
              width={120}
              height={120}
              className="object-contain max-h-[120px] w-[120px] h-[120px]"
              style={{ background: 'transparent' }}
            />
          </a>
        </div>
      </div>
      <div className="content text-gray-700 text-center flex flex-col items-center justify-center">
        <m.div
          initial={{ gap: "4px" }}
          animate={{ gap: "0px" }}
          className="title flex items-center gap-1"
        >
          <div className="overflow-hidden h-fit">
            <m.p
              initial={{ scale: 1.75 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="font-semibold leading-none text-[1.5rem]"
            >
              Geoinsight
            </m.p>
          </div>
        </m.div>
        <div className=" overflow-hidden h-fit">
          <m.p
            initial={{ scale: 1.75 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="text-[.8rem] font-normal"
          >
            Easily Discover World Treasures
          </m.p>
        </div>
        
        <m.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, display: "hidden" }}
          //   className="loading"
        >
          <RunningSvg className="opacity-100 w-[16px]" />
        </m.div>
        <m.small animate={{ opacity: 0, display: "hidden" }}>
          Just a moment please...
        </m.small>
      </div>
    </div>
  );
}
