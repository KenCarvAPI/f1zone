import React, { useState } from 'react';
import { Coins, PlusCircle, Lock, Globe } from 'lucide-react';

const TokenSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = ['What is $ZONE?', 'What it Unlocks', 'How to Get $ZONE'];
  
  const tabContent = [
    {
      title: 'The Ultimate F1 Fan Token',
      description: 'The $ZONE token is the official digital currency of the F1 Zone platform. It\'s designed to enhance your engagement with the sport you love while providing real utility within our ecosystem.',
      icon: <Coins className="h-12 w-12 text-[#FFF200]" />,
      bulletPoints: [
        'Blockchain-based token with real utility',
        'Governance rights in the F1 Zone ecosystem',
        'Deflationary tokenomics model',
        'Built on industry-standard blockchain technology'
      ]
    },
    {
      title: 'Exclusive Access & Features',
      description: 'Your $ZONE tokens unlock premium features, exclusive content, and special privileges across the F1 Zone platform.',
      icon: <Lock className="h-12 w-12 text-[#0090D0]" />,
      bulletPoints: [
        'Premium AI race analysis and predictions',
        'Exclusive video content and interviews',
        'Priority access to new features',
        'Higher limits on prediction markets'
      ]
    },
    {
      title: 'Simple Ways to Join',
      description: 'Getting your hands on $ZONE tokens is straightforward. Multiple options are available to suit your preferences.',
      icon: <Globe className="h-12 w-12 text-[#E10600]" />,
      bulletPoints: [
        'Purchase directly through our platform (coming soon)',
        'Earn through platform participation and engagement',
        'Receive rewards for referring other F1 fans',
        'Special airdrops for early adopters'
      ]
    }
  ];

  return (
    <section id="token" className="py-24 bg-[url('https://images.pexels.com/photos/5119412/pexels-photo-5119412.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center bg-fixed">
      <div className="bg-zinc-900/90 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              The <span className="text-[#FFF200]">$ZONE</span> Token
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Powering the future of Formula One fan engagement and on-chain experiences.
            </p>
          </div>
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-10 gap-2">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`py-2 px-4 md:px-6 rounded-full text-sm font-medium transition-all ${
                  activeTab === index 
                    ? 'bg-gradient-to-r from-[#E10600] to-[#0090D0] text-white' 
                    : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
                }`}
                onClick={() => setActiveTab(index)}
              >
                {tab}
              </button>
            ))}
          </div>
          
          {/* Tab Content */}
          <div className="bg-zinc-800/80 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="bg-zinc-900 p-6 rounded-xl">
                {tabContent[activeTab].icon}
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">
                  {tabContent[activeTab].title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {tabContent[activeTab].description}
                </p>
                
                <ul className="space-y-3">
                  {tabContent[activeTab].bulletPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <PlusCircle className="h-5 w-5 text-[#FFF200] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <a href="#contact" className="inline-flex items-center justify-center bg-[#FFF200] text-zinc-900 font-bold py-3 px-8 rounded-md transition-all shadow-lg hover:bg-[#FFB800]">
              <span>Get Early Access</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenSection;