import React, { useState, useEffect } from 'react';
import { Trophy, Calendar, TrendingUp, ExternalLink, AlertCircle } from 'lucide-react';

interface Market {
  id: string;
  title: string;
  category: 'championship' | 'race' | 'entertainment';
  outcomes: string[];
  prices: string[];
  volume: string;
  expiryDate: string;
  polymarketUrl: string;
}

const PredictionMarkets: React.FC = () => {
  const [markets, setMarkets] = useState<Market[]>([]);
  const [activeCategory, setActiveCategory] = useState<'championship' | 'race' | 'entertainment'>('championship');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMarkets = async () => {
      try {
        // Simulated market data
        const mockMarkets: Market[] = [
          {
            id: '1',
            title: "2025 F1 Drivers' Championship Winner",
            category: 'championship',
            outcomes: ['Max Verstappen', 'Lewis Hamilton', 'Charles Leclerc'],
            prices: ['1.45', '3.20', '6.50'],
            volume: '250000',
            expiryDate: '2025-12-31',
            polymarketUrl: 'https://polymarket.com/event/f1-championship-2025'
          },
          {
            id: '2',
            title: 'Miami GP 2025 Winner',
            category: 'race',
            outcomes: ['Max Verstappen', 'Sergio Perez', 'Field'],
            prices: ['1.65', '4.20', '3.50'],
            volume: '125000',
            expiryDate: '2025-05-15',
            polymarketUrl: 'https://polymarket.com/event/miami-gp-2025'
          },
          {
            id: '3',
            title: 'Lewis Hamilton to Announce Retirement in 2025',
            category: 'entertainment',
            outcomes: ['Yes', 'No'],
            prices: ['3.50', '1.40'],
            volume: '75000',
            expiryDate: '2025-12-31',
            polymarketUrl: 'https://polymarket.com/event/hamilton-retirement-2025'
          }
        ];

        setMarkets(mockMarkets);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching markets:', error);
        setIsLoading(false);
      }
    };

    fetchMarkets();
  }, []);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'championship':
        return <Trophy className="h-6 w-6 text-[#FFF200]" />;
      case 'race':
        return <Calendar className="h-6 w-6 text-[#E10600]" />;
      case 'entertainment':
        return <TrendingUp className="h-6 w-6 text-[#0090D0]" />;
      default:
        return null;
    }
  };

  const getTimeRemaining = (expiryDate: string) => {
    const remaining = new Date(expiryDate).getTime() - new Date().getTime();
    const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    return `${days} days`;
  };

  return (
    <section className="py-24 bg-zinc-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            F1 Prediction <span className="text-[#E10600]">Markets</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Trade on Formula One outcomes with real-time market data powered by Polymarket.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12 space-x-4">
          {['championship', 'race', 'entertainment'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category as any)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? 'bg-[#E10600] text-white'
                  : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
              }`}
            >
              <div className="flex items-center space-x-2">
                {getCategoryIcon(category)}
                <span className="capitalize">{category}</span>
              </div>
            </button>
          ))}
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#E10600] mx-auto"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {markets
              .filter((market) => market.category === activeCategory)
              .map((market) => (
                <div
                  key={market.id}
                  className="bg-zinc-800 rounded-xl p-6"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{market.title}</h3>
                    {getCategoryIcon(market.category)}
                  </div>

                  <div className="space-y-3 mb-6">
                    {market.outcomes.map((outcome, index) => (
                      <div
                        key={outcome}
                        className="flex justify-between items-center bg-zinc-700 p-3 rounded-lg"
                      >
                        <span>{outcome}</span>
                        <span className="font-mono text-[#FFF200]">
                          {market.prices[index]}x
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
                    <span>Volume: ${Number(market.volume).toLocaleString()}</span>
                    <span>Expires in: {getTimeRemaining(market.expiryDate)}</span>
                  </div>

                  <a
                    href={market.polymarketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-[#E10600] to-[#0090D0] text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity"
                  >
                    <span>Trade on Polymarket</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              ))}
          </div>
        )}

        <div className="mt-12 bg-zinc-800 p-6 rounded-xl max-w-2xl mx-auto">
          <div className="flex items-center space-x-3 text-[#FFF200]">
            <AlertCircle className="h-5 w-5" />
            <h4 className="font-semibold">Connect Wallet to Trade</h4>
          </div>
          <p className="mt-2 text-gray-300">
            Connect your Web3 wallet to start trading on Polymarket. Make sure you're on the Polygon network.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PredictionMarkets;