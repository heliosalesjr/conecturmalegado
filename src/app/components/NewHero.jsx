import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div>
      <section className="">
        <div className="relative px-6  sm:px-14 bg-slate-200 pt-[60px] pb-[60px] lg:pt-[110px]">
            
          <div className="max-w-7xl mx-auto container ">
            <div className="flex flex-wrap">
              <div className="px-8 lg:w-5/12">
                <div className="">
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 75 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.25 }}
                  >
                    <h1 className="text-transparent font-black bg-clip-text bg-gradient-to-r from-emerald-400 via-orange-300 via-blue-500 to-purple-600 text-6xl pt-20">
                      CONECTURMA <br />{" "}
                      
                    </h1>
                  </motion.div>
                  <motion.div
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1 }}
                  >
                    <div>
                      <p className="text-slate-700 mb-8 max-w-[480px] text-base pt-8">
                      A Conecturma foi uma plataforma transmídia de aprendizagem para crianças de 3 a 11 anos de idade desenvolvida pela edtech Edufuturo de 2013 até 2019. Aqui disponibilizamos uma versão simplificada da experiência que criamos para ajudar pais e professores a ensinar matemática, língua portuguesa e habilidades socioemocionais para suas crianças.

                      </p>
                    </div>

                    <ul className="flex flex-wrap items-center">
                      <li>
                        <a
                          href={`/posts`}
                          className="bg-blue-500  inline-flex items-center justify-center rounded-lg py-4 px-6 text-center text-base font-normal text-white hover:bg-opacity-90 sm:px-10 lg:px-8 xl:px-10"
                        >
                          Saiba mais
                        </a>
                      </li>

                      <li className="px-8">
                        <a
                          href={`/posts`}
                          className="bg-white border border-slate-700 inline-flex items-center justify-center rounded-lg py-4 px-6 text-center text-base font-normal text-slate-700 hover:bg-slate-100 sm:px-10 lg:px-8 xl:px-10"
                          
                        >
                          Jogo
                        </a>
                      </li>
                      
                    </ul>
                  </motion.div>
                  
                </div>
              </div>
              <div className="hidden px-4 lg:block lg:w-1/12"></div>
              <div className="w-full px-4 lg:w-6/12">
                <div className="lg:ml-auto lg:text-right">
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, x: 50, filter: "blur(8px)" },
                      visible: { opacity: 1, x: 0, filter: "blur(0px)" },
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative z-10 inline-block pt-11 lg:pt-0"
                  >
                    <img
                      src='/cnt.png'
                      alt="hero"
                      className="max-w-[500px] lg:ml-auto rounded-l-[20%] rounded-br-[5%]"
                    />
                    
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;