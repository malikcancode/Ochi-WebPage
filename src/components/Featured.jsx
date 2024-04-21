import { motion, useAnimation } from "framer-motion";
import { Power4 } from "gsap/all";

function Featured() {
  const cards = [useAnimation(), useAnimation()];

  const handlehover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handlehoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-10">
        <h2 className="text-6xl font-['momcake'] tracking-wider font-light">
          Featured Projects
        </h2>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-20">
          <motion.div
            onHoverStart={() => handlehover(0)}
            onHoverEnd={() => handlehoverEnd(0)}
            className="card-container relative  w-1/2 h-[70vh]  mt-10 "
          >
            <h1
              className="absolute overflow-hidden
            flex text-7xl z-[9] text-[#fff] leading-none tracking-tight left-full font-semibold -translate-x-1/2 top-1/2 -translate-y-1/2"
            >
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.01 }}
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-lg overflow-hidden">
              <img
                className="w-full h-auto object-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handlehover(1)}
            onHoverEnd={() => handlehoverEnd(1)}
            className="card-container rounded-lg w-1/2 h-[70vh] mt-10 relative"
          >
            <div className="card w-full h-full rounded-lg overflow-hidden ">
              <h1 className="absolute flex overflow-hidden text-7xl z-[9] text-[#fff] leading-none tracking-tight right-full font-semibold translate-x-1/2 top-1/2 -translate-y-1/2">
                {"VISE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.01,
                    }}
                    key={index}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-auto object-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
