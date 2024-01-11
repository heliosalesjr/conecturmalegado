import React from 'react'
import ReactPlayer from 'react-player'

function VideosCNT() {
  return (
    <div id='videos' className='bg-gradient-to-tr from-emerald-400 via-sky-500 to-purple-600 pt-8 pb-8'>
      <div>
        <div>
            <div className='mx-auto p-4 max-w-5xl'>
                <h1 className='font-bold text-4xl py-4 text-center text-white'>História</h1>
                <p className='text-white text-center py-4'>Mais de 40 mil crianças aprenderam português e matemática com a Conecturma em vários estados e do Brasil. Abaixo você pode conferir os vídeos sobre o trabalho em Viamão, no Rio Grande do Sul, e na comunidade quilombola de Cavalcante, em Goiás, que nos rendeu uma indicação ao prêmio Veja em 2018.</p>
            </div>
        </div>
          <div>
            <div className="mx-auto max-w-5xl pb-12 p-4 lg:mb-0 flex space-x-8 flex-col md:flex-row ">
              <div className="w-full lg:w-1/2">
                <div className="mx-auto my-8 lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg md:my-0">
                  <ReactPlayer url='https://www.youtube.com/watch?v=KiUTgaXf6RU' width="100%" />
                </div>

              </div>
              <div className="w-full lg:w-1/2">
                <div className="mx-auto my-8 lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg md:my-0">
                  <ReactPlayer url='https://www.youtube.com/watch?v=qsHz5pqxE1A' width="100%" />
                </div>
              </div>
            </div>
          </div>
        
      </div>
      
      <div>
        <div>
            <div className='mx-auto p-4 max-w-5xl'>
                <h1 className='font-bold text-4xl py-4 text-center text-white'>Videoclipes</h1>
                <p className='text-white text-center py-4'>Em nosso canal do Youtube você pode acessar os videoclipes produzidos para a Conecturma, com temáticas que vão da língua portuguesa e matemática até temas socioemocionais. Abaixo você pode conhecer nosso vídeo mais popular, que explica o que é um poema, e também um vídeo sobre trava-línguas.</p>
            </div>
        </div>
          <div>
            <div className="mx-auto max-w-5xl pb-12 p-4 lg:mb-0 flex space-x-8 flex-col md:flex-row ">
              <div className="w-full lg:w-1/2">
                <div className="mx-auto my-8 lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg md:my-0">
                  <ReactPlayer url='https://youtu.be/TedJnMYP0vk?si=YQGGauamP20Z2wnX' width="100%" />
                </div>

              </div>
              <div className="w-full lg:w-1/2">
                <div className="mx-auto my-8 lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg md:my-0">
                  <ReactPlayer url='https://youtu.be/vlidi8v0UxQ?si=uayVlonOu7aarKYh' width="100%" />
                </div>
              </div>
            </div>
          </div>
        
      </div>
    </div>
    
  )
}

export default VideosCNT