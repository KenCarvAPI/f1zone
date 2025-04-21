import React from 'react';
import { Bot, LineChart, Navigation, Trophy } from 'lucide-react';
import { features } from '../data/features';

const FeatureSection: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-zinc-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Race-Day Ready <span className="text-[#E10600]">Features</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            F1 Zone delivers a comprehensive suite of tools designed to enhance your Formula One experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Feature 1 */}
          <div className="feature-card">
            <div className="flex items-start">
              <div className="mr-5 bg-gradient-to-br from-[#E10600] to-[#ff6b00] p-3 rounded-xl">
                <Bot className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">AI-Powered Race Tools</h3>
                <p className="text-gray-300 mb-4">
                  Stay ahead of the competition with real-time insights, strategy predictions, and personalized alerts.
                </p>
                <ul className="space-y-2">
                  {features.aiTools.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-[#E10600] rounded-full mr-2"></span>
                      <span className="text-gray-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Feature 2 */}
          <div className="feature-card">
            <div className="flex items-start">
              <div className="mr-5 bg-gradient-to-br from-[#0090D0] to-[#00E1FF] p-3 rounded-xl">
                <Navigation className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Live Race Navigation</h3>
                <p className="text-gray-300 mb-4">
                  Navigate through every twist and turn with intuitive race tracking and detailed visualizations.
                </p>
                <ul className="space-y-2">
                  {features.raceNavigation.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-[#0090D0] rounded-full mr-2"></span>
                      <span className="text-gray-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Feature 3 */}
          <div className="feature-card">
            <div className="flex items-start">
              <div className="mr-5 bg-gradient-to-br from-[#FFF200] to-[#FFB800] p-3 rounded-xl">
                <LineChart className="h-8 w-8 text-zinc-900" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">On-Chain Betting Experience</h3>
                <p className="text-gray-300 mb-4">
                  Put your F1 knowledge to the test with secure, transparent prediction markets.
                </p>
                <ul className="space-y-2">
                  {features.betting.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-[#FFF200] rounded-full mr-2"></span>
                      <span className="text-gray-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Feature 4 */}
          <div className="feature-card">
            <div className="flex items-start">
              <div className="mr-5 bg-gradient-to-br from-[#E10600] to-[#0090D0] p-3 rounded-xl">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Premium Fan Rewards</h3>
                <p className="text-gray-300 mb-4">
                  Earn exclusive rewards, digital collectibles, and special access through your engagement.
                </p>
                <ul className="space-y-2">
                  {features.rewards.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-gradient-to-r from-[#E10600] to-[#0090D0] rounded-full mr-2"></span>
                      <span className="text-gray-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <a href="#token" className="inline-flex items-center justify-center bg-gradient-to-r from-[#E10600] to-[#0090D0] text-white font-medium py-3 px-8 rounded-md transition-all shadow-lg hover:shadow-red-500/20">
            <span>Learn About $ZONE Token</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;