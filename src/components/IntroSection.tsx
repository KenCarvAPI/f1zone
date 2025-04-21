import React from 'react';

const IntroSection: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-800">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E10600] to-[#0090D0]">
            The Ultimate Home for F1 Fans
          </span>
        </h2>
        
        <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
          F1 Zone brings fans closer to the sport with a suite of AI-powered tools, 
          live race navigation, and premium prediction markets – all powered by $ZONE.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {/* Card 1 */}
          <div className="bg-zinc-900 p-6 rounded-xl shadow-lg transform transition-transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-br from-[#E10600] to-[#ff6b00] rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold">01</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Digital Pit Crew</h3>
            <p className="text-gray-400">
              AI-powered insights and analysis during every race weekend.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-zinc-900 p-6 rounded-xl shadow-lg transform transition-transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-br from-[#0090D0] to-[#00E1FF] rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold">02</span>
            </div>
            <h3 className="text-xl font-bold mb-2">On-Chain Experience</h3>
            <p className="text-gray-400">
              Prediction markets and trading for the ultimate race day engagement.
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-zinc-900 p-6 rounded-xl shadow-lg transform transition-transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FFF200] to-[#FFB800] rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold text-zinc-900">03</span>
            </div>
            <h3 className="text-xl font-bold mb-2">$ZONE Powered</h3>
            <p className="text-gray-400">
              Access exclusive features and benefits with the $ZONE token.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;