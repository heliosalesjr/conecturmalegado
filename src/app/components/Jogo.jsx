import React from 'react'

function Jogo() {
  return (
    <div id="jogo" className='hidden sm:flex items-center justify-center h-screen bg-blue-100'>
      <iframe src="./jogo/iframe.html" width="1000px" height="600px"></iframe>
    </div>
  )
}

export default Jogo