import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";

function Landing() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen bg-zinc-900 pt-1"
    >
      <div className="textstructure mt-20 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <>
              <div className="masker text-white mx-5 relative">
                <div className="w-fit flex items-end">
                  {index === 1 && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "9vw" }}
                      transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                      className="mr-1 w-[8vw] rounded-md h-[5vw] relative top-[0.8vw]"
                    >
                      <img
                        className="w-[8vw] h-[5vw] bg-cover border-[2px] border-[#CDEA68]"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj_O6EA5BUww3EJn9MvOWXjytJRgZS0curXA&usqp=CAU"
                        alt=""
                      />
                    </motion.div>
                  )}
                  <h1
                    className="pt-[2vw] uppercase text-[8vw] font-semibold 
                  leading-[4vw] tracking-tight font-['momcake']"
                  >
                    {item}
                  </h1>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="border-t-2 bg-zinc-900 mt-20 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-white text-md tracking-wide capitalize text-md"
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-3">
          <div className="bg-zinc-700 rounded-full font-light tracking-wide py-2 px-4 text-white border-[1px] uppercase">
            start the project
          </div>
          <div className="rounded-full bg-zinc-700 w-10 h-10 border-[1px] flex items-center justify-center">
            <span className="rotate-[45deg]">
              <FaArrowUpLong color="white" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
