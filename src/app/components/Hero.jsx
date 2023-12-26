import React from 'react';

function Hero() {
  return (
    <section className="bg-gray-800 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-8xl font-extrabold text-transparent">
            Conecturma
            
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Parágrafo CNT.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            

            <a
              className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              href="/about"
            >
              Saiba mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
