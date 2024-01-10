import React from 'react';

function Creditos() {
  return (
    <div className='bg-slate-200 py-8'>
      <div className='max-w-7xl mx-auto p-16 flex justify-center items-center'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Coluna para a imagem */}
          <div className='md:col-span-1'>
            <img
              className='object-cover h-full w-full rounded-lg shadow-xl'
              src='/conecturma1.jpg'
              alt='Descrição da Imagem'
            />
          </div>
          {/* Coluna para o texto */}
          <div className='md:col-span-2 bg-pink-500 rounded-lg shadow-xl'>
            <h1 className='pt-8 px-8 text-3xl font-semibold text-white'>Créditos</h1>
            <p className='p-8 text-white'>
              A plataforma Conecturma foi concebida pela Edufuturo, uma startup de tecnologia educacional, durante o período de 2013 a 2019. Com investimento da Vox Capital e colaborações com renomadas instituições educacionais, como o Instituto de Pesquisas Computacionais da UFRJ, foram desenvolvidas soluções inovadoras. O material oferecido nesta plataforma é disponibilizado sem fins lucrativos, visando compartilhar uma parte do extenso trabalho desenvolvido, que pode ser valioso para crianças, pais e educadores.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Creditos;
