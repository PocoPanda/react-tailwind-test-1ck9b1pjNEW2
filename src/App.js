import React, { useState, useEffect } from 'react';
import { Sparkles, Heart, ShieldCheck, Coffee, Send, Star, AlertCircle, CheckCircle2 } from 'lucide-react';

const MY_NAME = "Muhammad Hafi"; // 👈 Fixed the typo here!

export default function App() {
  // 🚀 BULLETPROOF FIX: This bypasses broken build tools and forces Tailwind to load directly in the browser!
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.tailwindcss.com';
    document.head.appendChild(script);
  }, []);

  const [formState, setFormState] = useState({
    name: '',
    social: '',
    toxicTrait: '',
    pizzaScenario: '',
    communicationStyle: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 text-center space-y-6 transform animate-in fade-in zoom-in duration-500">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Application Received!</h2>
          <p className="text-gray-600 text-lg">
            Thanks for applying, {formState.name || 'future bestie'}! Your application is currently under review by the Friendship Committee ({MY_NAME}). If you pass the initial vibe check, you'll be contacted shortly.
          </p>
          <button 
            onClick={() => setIsSuccess(false)}
            className="mt-8 w-full py-4 px-6 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-pink-200 font-sans">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white border-b border-slate-200">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 text-pink-700 font-medium text-sm mb-8">
            <Sparkles className="w-4 h-4" />
            <span>Now Accepting Applications for 2026</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            Seeking New <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Best Friends</span> for {MY_NAME}.
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Due to recent management restructuring (realizing my old friends were inconsiderate and selfish), several highly-coveted positions have opened up in {MY_NAME}'s inner circle.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Column: Requirements & Info */}
        <div className="lg:col-span-5 space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Star className="text-yellow-500 w-8 h-8" />
              The Ideal Candidate
            </h2>
            <div className="space-y-6">
              <RequirementCard 
                icon={<ShieldCheck className="w-6 h-6 text-emerald-500" />}
                title="Emotionally Available"
                desc="Doesn't leave messages on read for 4 days and then reply with 'omg just seeing this'."
              />
              <RequirementCard 
                icon={<Heart className="w-6 h-6 text-rose-500" />}
                title="Actually Considerate"
                desc="Asks how I'm doing and actually listens to the answer instead of waiting to talk about themselves."
              />
              <RequirementCard 
                icon={<Coffee className="w-6 h-6 text-amber-500" />}
                title="Low Maintenance, High Quality"
                desc="Down for late-night drives, coffee dates, or just sitting in silence scrolling on our phones together."
              />
            </div>
          </div>

          <div className="bg-indigo-50 rounded-3xl p-8 border border-indigo-100">
            <h3 className="font-bold text-xl mb-4 flex items-center gap-2 text-indigo-900">
              <AlertCircle className="w-5 h-5 text-indigo-600" />
              Disclaimer
            </h3>
            <p className="text-indigo-800 leading-relaxed text-sm">
              This is a serious position. Flakes, energy vampires, and people who only text when they need a favor need not apply. Perks of the job include unmatched loyalty, elite meme sharing, and someone who will actually hype you up in the group chat.
            </p>
          </div>
        </div>

        {/* Right Column: Application Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Official Application</h2>
              <p className="text-slate-300">Please fill out truthfully. Background checks (Instagram audits) will be conducted.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="p-8 space-y-8">
              
              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 block">Full Name / Nickname</label>
                  <input 
                    required
                    type="text" 
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all outline-none"
                    placeholder="Ali.."
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 block">Social Media Handle (IG/TikTok)</label>
                  <input 
                    required
                    type="text" 
                    name="social"
                    value={formState.social}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all outline-none"
                    placeholder="@bestie_vibes"
                  />
                </div>
              </div>

              {/* Questionnaire */}
              <div className="space-y-6 pt-6 border-t border-slate-100">
                <h3 className="font-bold text-xl text-slate-900">Vibe Check Questionnaire</h3>

                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700 block">
                    1. Scenario: I text you "I have tea 🍵". What is your expected response time?
                  </label>
                  <div className="space-y-2">
                    {['Immediately, I am dropping everything.', 'Within the hour.', 'Sometime today.', 'Tomorrow (Immediate disqualification)'].map((option) => (
                      <label key={option} className="flex items-center p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
                        <input 
                          type="radio" 
                          name="communicationStyle" 
                          value={option}
                          required
                          onChange={handleInputChange}
                          className="w-4 h-4 text-purple-600 focus:ring-purple-500 border-gray-300" 
                        />
                        <span className="ml-3 text-slate-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700 block">
                    2. We are sharing a pizza. There is one slice left. You:
                  </label>
                  <select 
                    required
                    name="pizzaScenario"
                    value={formState.pizzaScenario}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all outline-none appearance-none"
                  >
                    <option value="" disabled>Select an honest answer...</option>
                    <option value="ask">Ask if I want it first (Green Flag)</option>
                    <option value="split">Suggest we split it (Acceptable)</option>
                    <option value="take">Take it without asking (Selfish, do not select)</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700 block">
                    3. What is your biggest toxic trait? (Be honest, I can fix you)
                  </label>
                  <textarea 
                    required
                    name="toxicTrait"
                    value={formState.toxicTrait}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all outline-none resize-none"
                    placeholder="E.g., I apologize to inanimate objects when I bump into them..."
                  ></textarea>
                </div>
              </div>

              {/* Submit */}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-xl flex items-center justify-center gap-2 text-white font-bold text-lg transition-all shadow-lg hover:shadow-xl ${
                  isSubmitting 
                    ? 'bg-slate-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-[1.02]'
                }`}
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    Submit Application
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
              
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}

// Helper Component
function RequirementCard({ icon, title, desc }) {
  return (
    <div className="flex gap-4 group">
      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-bold text-slate-900 mb-1">{title}</h4>
        <p className="text-slate-600 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
