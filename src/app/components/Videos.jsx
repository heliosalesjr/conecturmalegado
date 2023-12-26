import React from 'react'
import ReactPlayer from 'react-player'

function VideosCNT() {
  return (
    <>
    <div className='bg-blue-700'>
        <div className='mx-auto p-4 max-w-5xl'>
            <h1 className='font-bold text-5xl py-4 text-center text-white'>História</h1>
            <p className='text-white text-center py-4'>Mais de 40 mil crianças aprenderam português e matemática com a Conecturma em vários estados e do Brasil. Abaixo você pode conferir os vídeos sobre o trabalho em Viamão, no Rio Grande do Sul, e na comunidade quilombola de Cavalcante, em Goiás, que nos rendeu uma indicação ao prêmio Veja em 2018.</p>
        </div>
    </div>
      
      <div className="mx-auto bg-blue-700 pb-12 p-4 lg:mb-0 flex space-x-8 flex-col md:flex-row">
        <div className="w-full lg:w-1/2">
          <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
            <ReactPlayer url='https://www.youtube.com/watch?v=KiUTgaXf6RU' width="100%" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
            <ReactPlayer url='https://www.youtube.com/watch?v=qsHz5pqxE1A' width="100%" />
          </div>
        </div>
      </div>
    </>
  )
}

export default VideosCNT