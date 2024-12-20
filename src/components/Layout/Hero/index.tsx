import ava from "../../../assets/img/ava.jpeg";
import Typewriter from "typewriter-effect";
import { motion } from "motion/react";

const Hero = () => {
  const iAm = "I'm";
  const myName = "Alvienas;";
  const way = ">";
  const titles = [
    "Software Engineer",
    "Fullstack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Mobile Developer",
    "Designer",
    "Video Editor",
    "React JS",
    "Next JS",
    "Express JS",
    "React Native",
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Adobe Premiere Pro",
    "Capcut",
  ];

  return (
    <div className="bg-gray-900">
      <div className="mx-auto container text-center min-h-screen md:h-screen items-center md:text-left text-white grid grid-cols-1 md:grid-cols-2">
        <motion.div
          className="p-4 md:p-0 md:order-2"
          animate={{ opacity: [0, 1], y: [-50, 0] }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.img
            src={ava}
            alt="alvienas"
            className="md:w-2/3 md:mx-auto rounded-full"
            animate={{ scale: [0.8, 1] }}
            transition={{ duration: 1 }}
          />
        </motion.div>

        <motion.div
          className="mx-auto md:order-1"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div>
            <motion.div
              className="flex"
              animate={{ y: [50, 0], opacity: [0, 1] }}
            >
              <h3 className="text-4xl md:text-5xl text-center font-bold mr-3">
                Hi,
              </h3>
              <h3 className="text-4xl md:text-5xl text-center font-bold mr-3">
                {iAm}
              </h3>
              <h3 className="text-4xl md:text-5xl text-center font-bold neon-text">
                {myName}
              </h3>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div>
              <h3 className="text-3xl md:text-4xl text-center md:text-left mb-60 md:mb-0 mr-2 VT323">
                {way}
              </h3>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl text-center md:text-left mb-60 md:mb-0 VT323">
                <Typewriter
                  options={{
                    strings: titles,
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </h3>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
