import { Divider } from '@nextui-org/react';
import React from 'react';
import { BiMath } from 'react-icons/bi';
import { GiTeacher } from 'react-icons/gi';
import { MdCastForEducation } from 'react-icons/md';

const FeatureSection = () => {
  return (
    <div id="sobre">
      <div className='max-w-3xl mx-auto'>
        <Divider />

      </div>
      <div className="container mt-12 max-w-7xl mx-auto md:px-6">
        {/* Section: Design Block */}
        <section className="mb-32 text-center">
          <h2 className="mb-16 text-4xl font-bold text-slate-700">
            Impacto
          </h2>
          <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
            <div className="mb-4 md:mb-0">
              <div className="mb-6 inline-block rounded-md bg-gradient-to-tl from-emerald-300 to-sky-300 p-4 text-primary">
                <BiMath className="h-8 w-8 text-white" />
              </div>
              <h5 className="mb-4 text-lg font-bold text-slate-700">Firjan / SESI</h5>
              <p className="text-neutral-700 dark:text-neutral-600 px-4">
              Fomos adotados pelas escolas Firjan SESI do estado do Rio de Janeiro, formando professores e levando a plataforma em suas formas online, mobile e offline para todos seus alunos da faixa etária correspondente.
              </p>
            </div>

            <div className="mb-4 md:mb-0">
              <div className="mb-6 inline-block rounded-md bg-gradient-to-tl from-emerald-300 to-yellow-300 p-4 text-primary">
                <GiTeacher className="h-8 w-8 text-white" />
              </div>
              <h5 className="mb-4 text-lg font-bold text-slate-700">Viamão</h5>
              <p className="text-neutral-700 px-4">
              O município de Viamão, no Rio Grande do Sul, nos adotou como material oficial para toda cidade, onde ainda levamos aplicativos de realidade aumentada e virtual da plataforma.
              </p>
            </div>

            <div className="mb-4 md:mb-0">
              <div className="mb-6 inline-block rounded-md bg-gradient-to-tl from-sky-300 to-purple-300 p-4 text-primary">
                <MdCastForEducation className="h-8 w-8 text-white" />
              </div>
              <h5 className="mb-4 text-lg font-bold text-slate-700">Pandemia</h5>
              <p className="text-neutral-700 dark:text-neutral-600 px-4">
              Durante a pandemia da Covid 19, esta versão gratuita da Conecturma recebeu mais de 400 mil acessos e recebemos diversos relatos de pais e professores usando a plataforma.
              </p>
            </div>
          </div>
        </section>
        

        
      </div>
    
    
    </div>
    
  );
};

export default FeatureSection;
