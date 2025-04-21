import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [contactMethod, setContactMethod] = useState('email');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!email) {
      setError('Please enter your contact information');
      return;
    }
    
    if (contactMethod === 'email' && !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Reset error if any
    setError('');
    
    // In a real application, you would send this to your backend
    console.log('Submitted:', { contactMethod, email });
    
    // Show success state
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-zinc-800">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="bg-[#121212] rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-5 tracking-tight">
              Join the <span className="text-[#E10600]">Waitlist</span>
            </h2>
            <p className="text-lg text-gray-300">
              Be among the first to experience F1 Zone. Sign up for early access and updates.
            </p>
          </div>
          
          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="mb-6">
                <div className="flex justify-center gap-4 mb-6">
                  <button
                    type="button"
                    className={`py-2 px-4 rounded-full text-sm font-medium transition-all ${
                      contactMethod === 'email' 
                        ? 'bg-[#E10600] text-white' 
                        : 'bg-zinc-700 text-gray-300'
                    }`}
                    onClick={() => setContactMethod('email')}
                  >
                    Email
                  </button>
                  <button
                    type="button"
                    className={`py-2 px-4 rounded-full text-sm font-medium transition-all ${
                      contactMethod === 'telegram' 
                        ? 'bg-[#0090D0] text-white' 
                        : 'bg-zinc-700 text-gray-300'
                    }`}
                    onClick={() => setContactMethod('telegram')}
                  >
                    Telegram
                  </button>
                </div>
                
                <div className="relative">
                  <input
                    type={contactMethod === 'email' ? 'email' : 'text'}
                    placeholder={contactMethod === 'email' ? 'Enter your email' : '@yourusername'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-zinc-900 text-white px-5 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E10600]"
                  />
                  
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#E10600] to-[#0090D0] text-white p-2 rounded-md hover:opacity-90 transition-opacity"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </div>
                
                {error && (
                  <p className="text-red-400 mt-2 text-sm">{error}</p>
                )}
              </div>
              
              <div className="text-center text-sm text-gray-400">
                By signing up, you agree to receive updates about F1 Zone. 
                You can unsubscribe at any time.
              </div>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-16 w-16 text-[#00E54E]" />
              </div>
              <h3 className="text-2xl font-bold mb-3">You're on the Grid!</h3>
              <p className="text-gray-300">
                Thanks for joining our waitlist. We'll notify you when early access becomes available.
              </p>
            </div>
          )}
          
          <div className="mt-10 text-center">
            <p className="text-sm text-gray-400">
              <span className="bg-gradient-to-r from-[#E10600] to-[#0090D0] bg-clip-text text-transparent font-medium">Coming soon to your digital pit lane</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;