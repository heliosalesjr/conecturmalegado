import React from 'react';

const Hero3 = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/cnt1.png)' }}>
      <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-44 sm:px-6 lg:flex lg:items-center lg:px-8">
        <div className="max-w-xl   text-slate-600">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            <strong className="text-transparent font-black bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 text-6xl pt-20"> Conecturma </strong>
          </h1>

          <p className="mt-4 max-w-lg text-md">
            A Conecturma é uma plataforma transmídia de aprendizagem para crianças de 3 a 11 anos de idade que foi desenvolvida pela edtech Edufuturo de 2013 até 2019. Aqui disponibilizamos uma versão simplificada da experiência que criamos para ajudar pais e professores a ensinar matemática, língua portuguesa e habilidades socioemocionais para suas crianças.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#sobre"
              className="block w-full rounded bg-violet-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-pink-500 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Saiba mais
            </a>

            <a
              href="#jogo"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-violet-600 shadow hover:text-pink-500 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Jogo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3;
