import React, { useState, useEffect } from 'react';
import { jambMathsQuestions } from '../../data/jambQuestions';

const JambExam = ({ onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds
  const [showResults, setShowResults] = useState(false);
const [score, setScore] = useState(0);

  // Timer Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleSelect = (option) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: option });
  };


const calculateResult = () => {
  let totalCorrect = 0;
  jambMathsQuestions.forEach((q, index) => {
    if (selectedAnswers[index] === q.correctAnswer) {
      totalCorrect++;
    }
  });
  setScore(totalCorrect);
  setShowResults(true);
};
  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col font-sans">
      
      {/* Header - CBT Style */}
      <div className="bg-slate-900 text-white p-4 flex justify-between items-center border-b-4 border-orange-500">
        <div className="flex items-center gap-4">
          <span className="bg-orange-500 text-white px-3 py-1 font-black text-xs uppercase italic">JAMB CBT</span>
          <h2 className="font-bold text-sm hidden md:block">Mathematics Mock 2026</h2>
        </div>
        
        <div className="text-center">
          <p className="text-[10px] uppercase font-black text-slate-400">Time Remaining</p>
          <p className={`text-xl font-black ${timeLeft < 300 ? 'text-red-500 animate-pulse' : 'text-sky-400'}`}>
            {formatTime(timeLeft)}
          </p>
        </div>

        <button onClick={onClose} className="text-xs font-bold border border-slate-700 px-4 py-2 hover:bg-white hover:text-black transition-all">
          QUIT EXAM
        </button>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Main Question Area */}
        <div className="flex-1 p-6 md:p-12 overflow-y-auto bg-slate-50">
          <div className="max-w-3xl mx-auto bg-white border-2 border-slate-800 p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
            <p className="text-xs font-black text-blue-600 mb-2 uppercase tracking-widest">Question {currentQuestion + 1} of {jambMathsQuestions.length}</p>
            <h3 className="text-xl font-bold text-slate-800 mb-8 leading-relaxed">
              {jambMathsQuestions[currentQuestion].question}
            </h3>

            <div className="space-y-4">
              {jambMathsQuestions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleSelect(option)}
                  className={`w-full text-left p-4 border-2 transition-all font-bold ${
                    selectedAnswers[currentQuestion] === option 
                    ? 'border-blue-600 bg-blue-50 text-blue-700' 
                    : 'border-slate-100 hover:border-slate-300 bg-white text-slate-600'
                  }`}
                >
                  <span className="mr-4 inline-block w-8 h-8 bg-slate-100 text-center leading-8 border border-slate-200">
                    {String.fromCharCode(65 + index)}
                  </span>
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Question Navigator (Sidebar) */}
        <div className="w-64 bg-white border-l border-slate-200 p-6 hidden lg:block">
          <h4 className="text-[10px] font-black uppercase text-slate-400 mb-4 tracking-widest text-center">Questions Overview</h4>
          <div className="grid grid-cols-5 gap-2">
            {jambMathsQuestions.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentQuestion(i)}
                className={`w-10 h-10 text-[10px] font-black border-2 transition-all ${
                  currentQuestion === i ? 'border-blue-600 text-blue-600' : 
                  selectedAnswers[i] ? 'bg-green-500 border-green-500 text-white' : 'border-slate-100 text-slate-400'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Controls */}
      <div className="bg-white border-t border-slate-200 p-4 flex justify-between items-center shadow-lg">
        <button 
          disabled={currentQuestion === 0}
          onClick={() => setCurrentQuestion(prev => prev - 1)}
          className="px-8 py-3 bg-slate-800 text-white font-black text-xs uppercase disabled:opacity-20"
        >
          Previous
        </button>

        {currentQuestion === jambMathsQuestions.length - 1 ? (
          <button 
  onClick={calculateResult}
  className="px-12 py-3 bg-green-600 text-white font-black text-xs uppercase hover:bg-green-700 active:scale-95 transition-all"
>
  Submit Exam
</button>
        ) : (
          <button 
            onClick={() => setCurrentQuestion(prev => prev + 1)}
            className="px-12 py-3 bg-blue-600 text-white font-black text-xs uppercase"
          >
            Next Question
          </button>
        )}
      </div>
      {showResults && (
  <div className="fixed inset-0 bg-slate-900/90 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
    <div className="bg-white w-full max-w-md border-t-8 border-blue-600 shadow-2xl p-8 text-center">
      <h2 className="text-3xl font-black text-slate-800 uppercase italic tracking-tighter mb-2">Exam Finished!</h2>
      <p className="text-slate-400 font-bold text-xs uppercase mb-8">Official JAMB Mock Scorecard</p>
      
      {/* Score Circle */}
      <div className="inline-block relative mb-8">
        <div className={`w-32 h-32 rounded-full border-8 flex flex-col items-center justify-center ${score >= 15 ? 'border-green-500' : 'border-red-500'}`}>
          <span className="text-4xl font-black text-slate-800">{score}</span>
          <span className="text-[10px] font-bold text-slate-400 uppercase">out of 30</span>
        </div>
      </div>

      {/* Pass/Fail Message */}
      <div className="mb-8">
        <h3 className={`text-xl font-black uppercase ${score >= 15 ? 'text-green-600' : 'text-red-600'}`}>
          {score >= 15 ? 'Excellent Work, Scholar! 🏆' : 'Keep Practicing! 📚'}
        </h3>
        <p className="text-slate-500 text-sm mt-2">
          {score >= 25 ? "You're ready for the 300+ club!" : score >= 15 ? "You're on the right track for admission." : "Go back to your courses and review the topics."}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3">
        <button 
          onClick={onClose}
          className="w-full bg-blue-600 text-white py-4 font-black text-xs uppercase hover:bg-blue-700 transition-all shadow-[4px_4px_0px_0px_rgba(30,41,59,1)]"
        >
          Return to Dashboard
        </button>
        <button 
          onClick={() => { setShowResults(false); setCurrentQuestion(0); setSelectedAnswers({}); setTimeLeft(3600); }}
          className="w-full border-2 border-slate-800 text-slate-800 py-4 font-black text-xs uppercase hover:bg-slate-50 transition-all"
        >
          Retake Exam
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default JambExam;