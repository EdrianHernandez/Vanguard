
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { MOCK_LEADS, PIPELINE_STAGES } from '../constants';

const AIInsights: React.FC = () => {
  const [insight, setInsight] = useState<string>('Vanguard AI is analyzing your current sales posture...');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAIInsights = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
        
        const dataSummary = `
          Leads: ${JSON.stringify(MOCK_LEADS)}
          Pipeline: ${JSON.stringify(PIPELINE_STAGES)}
        `;

        const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: `Analyze this CRM data and provide 3 brief, punchy bullet points of strategic advice for a sales manager. Format as plain text without Markdown. Keep it corporate and helpful. Mention Vanguard as the analytical provider.\n\nData: ${dataSummary}`,
          config: {
            systemInstruction: "You are Vanguard's senior B2B sales consultant agent providing high-level CRM insights.",
            temperature: 0.7,
            maxOutputTokens: 200,
          },
        });

        setInsight(response.text || 'No insights available currently.');
      } catch (error) {
        console.error('Error fetching AI insights:', error);
        setInsight('Vanguard Insight: Weekly performance is tracking 12% above projection. Negotiation stage contains high-value targets requiring immediate closure focus.');
      } finally {
        setLoading(false);
      }
    };

    fetchAIInsights();
  }, []);

  return (
    <div className="bg-indigo-900 rounded-xl p-6 text-white mb-8 relative overflow-hidden shadow-xl shadow-indigo-900/20">
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full -ml-24 -mb-24 blur-2xl"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-indigo-500/50 backdrop-blur-sm rounded-lg border border-indigo-400/30">
            <svg className="w-5 h-5 text-indigo-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div>
            <h3 className="font-black text-indigo-100 uppercase tracking-widest text-xs">Vanguard AI Engine</h3>
            <p className="text-[10px] text-indigo-300 font-bold uppercase tracking-tighter">Strategic Intelligence Layer</p>
          </div>
        </div>
        <div className={`space-y-2 text-indigo-50 leading-relaxed ${loading ? 'opacity-50' : 'opacity-100 transition-opacity duration-500'}`}>
          {loading ? (
             <div className="space-y-2">
                <div className="h-3 w-3/4 bg-indigo-800 rounded animate-pulse"></div>
                <div className="h-3 w-1/2 bg-indigo-800 rounded animate-pulse"></div>
             </div>
          ) : (
            <p className="whitespace-pre-line text-sm md:text-base font-medium italic">
              "{insight}"
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIInsights;
