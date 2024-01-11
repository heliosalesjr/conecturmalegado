
import React from 'react';
import { FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-white pt-4 sm:pt-10 lg:pt-12">
      <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col items-center pt-6">

        <h1 className="text-transparent font-black bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 text-3xl p-10">
             Conecturma 
          </h1>
          {/* Social */}
          <div className="flex gap-4">
            <a href="https://www.youtube.com/conecturma" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
              <FaYoutube className="h-12 w-12 pb-4" />
            </a>
            
          </div>

        </div>

        {/* Copyright */}
        <div className="py-4 text-center text-sm text-slate-400">Esta versão da Conecturma é mantida pelo trabalho voluntário dos desenvolvedores Hélio Sales Jr. e Allan Kovac.</div>
        <div className="pb-8 text-center text-sm text-gray-400">© 2024 - Todos os direitos reservados.</div>
      </footer>
    </div>
  );
};

export default Footer;
