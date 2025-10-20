export default function Index() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black to-amber-900/20 blur-3xl"></div>
      
      <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
        <div className="relative w-full max-w-2xl aspect-[3/4] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-transparent to-amber-900/20 blur-3xl"></div>
          
          <div className="relative">
            <svg 
              viewBox="0 0 300 600" 
              className="w-full h-auto max-h-[600px]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="diamondGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#7f1d1d', stopOpacity: 0.8 }} />
                  <stop offset="50%" style={{ stopColor: '#991b1b', stopOpacity: 0.6 }} />
                  <stop offset="100%" style={{ stopColor: '#7f1d1d', stopOpacity: 0.8 }} />
                </linearGradient>
              </defs>
              
              <path
                d="M 150 50 L 250 300 L 150 550 L 50 300 Z"
                fill="none"
                stroke="url(#diamondGradient)"
                strokeWidth="3"
                className="drop-shadow-[0_0_20px_rgba(127,29,29,0.6)]"
              />
            </svg>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-gray-500/60 text-2xl md:text-3xl font-light tracking-[0.3em] text-center px-8">
                Концептуальность искуства
              </h1>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="bg-gradient-to-r from-red-900/80 via-red-800/80 to-red-900/80 backdrop-blur-sm p-6 max-w-4xl mx-auto">
          <h2 className="text-amber-100 text-xl md:text-2xl font-light text-center mb-4">
            Восхищение не предмет визуальный, материальное воплощение
          </h2>
          <p className="text-gray-300 text-sm md:text-base text-center leading-relaxed">
            Данный материал представлен в ознакомительных целях, файл находится под авторскими правами обладателя, копирование повлечёт уголовную ответственность. Хозяин работы
          </p>
          <p className="text-amber-200 text-right mt-2 font-light">
            Алекс Октябрьский
          </p>
        </div>
      </div>
    </div>
  );
}
