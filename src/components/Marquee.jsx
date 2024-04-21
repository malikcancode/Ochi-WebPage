import { motion } from "framer-motion";

function Marquee() {
  return (
    <>
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed=".1"
        className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#224D44] "
      >
        <div className="text border-t-2 p-5 border-b-2 border-zinc-400 flex overflow-hidden whitespace-nowrap">
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
            className="text-[15vw] leading-none  uppercase tracking-tighter font-semibold -mb-4 font-['Founders_Grotesk_X-Condensed'] pr-7"
          >
            we are ochi
          </motion.h1>
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
            className="text-[15vw] leading-none tracking-tighter uppercase font-['Founders_Grotesk_X-Condensed'] -mb-4 font-semibold pr-7"
          >
            we are ochi
          </motion.h1>
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
            className="text-[15vw] leading-none  tracking-tighter  uppercase font-['Founders_Grotesk_X-Condensed'] -mb-4 font-semibold pr-7"
          >
            we are ochi
          </motion.h1>
        </div>
      </div>
    </>
  );
}

export default Marquee;
