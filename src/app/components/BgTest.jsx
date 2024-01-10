import React from 'react';

const BgTest = ({ hideOverlay, ...props }) => {
  return (
    <div className="relative z-0 overflow-hidden h-screen">
      <div className="absolute inset-0 z-0">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-transparent rounded-br-3xl" style={{ mixBlendMode: 'saturation' }} />
        <div className="absolute inset-0 bg-gradient-to-tr from-violet-300 to-transparent rounded-tl-3xl" style={{ mixBlendMode: 'saturation' }} />
        <div className="absolute inset-0 bg-gradient-to-bl from-purple-300 to-transparent rounded-tr-3xl" style={{ mixBlendMode: 'saturation' }} />
        <div className="absolute inset-0 bg-gradient-to-bl from-red-300 to-transparent rounded-bl-3xl" style={{ mixBlendMode: 'saturation' }} />
      </div>
      {!hideOverlay && (
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-white via-transparent to-transparent" style={{ mixBlendMode: 'overlay', opacity: '0.3' }}></div>
      )}
      {/* Text Content */}
      <div className="relative z-20 text-white">
        <h1 className="text-4xl font-bold">Exemplo de texto com gradiente</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Curabitur euismod nulla nec velit blandit.</p>
        {/* ... */}
      </div>
    </div>
  );
};

export default BgTest;
