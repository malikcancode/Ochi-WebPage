import React from "react";

function About() {
  return (
    <div
      className="p-20 bg-[#CDEA68] w-full rounded-tl-3xl rounded-tr-3xl text-black
     "
    >
      <h1 className="font-['Neue_Montreal'] text-5xl leading-[4.3vw] tracking-tight">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>
      <div className="w-full flex gap-5 justify-around border-t-[1px] mt-20 pt-5 border-[#697444]">
        <div className="w1/2 ">
          <h1 className="text-6xl font-light font-['Neue_Montreal']">
            Our approach:
          </h1>
          <button className="flex gap-4 items-center px-6 py-4 bg-zinc-900 mt-9 rounded-[2vw] text-white tracking-widest font-['Neue_Montreal']">
            Read More
            <div className="bg-zinc-100 w-2 h-2 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] bg-center bg-cover bg-[url('https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg')] rounded-2xl"></div>
      </div>
    </div>
  );
}

export default About;
