import React, { useContext, useEffect, useState } from 'react';
import { Database, Plus, Search, Filter, Edit3, Trash2, Loader2, BookOpen } from 'lucide-react';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const QuestionBank = () => {
  const { backendUrl, token } = useContext(AppContext);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchQuestions = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/admin/all-questions', {
        headers: { token }
      });
      if (data.success) {
        setQuestions(data.questions);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) fetchQuestions();
  }, [token]);

  const filteredQuestions = questions.filter(q => 
    q.subject.toLowerCase().includes(searchTerm.toLowerCase()) || 
    q.questionText.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <Loader2 className="animate-spin text-blue-600" size={40} />
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl md:text-3xl font-extrabold text-blue-600 tracking-tight">Question Bank</h1>
          <p className="text-gray-500 text-sm">Manage {questions.length} questions in the system.</p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold px-6 py-3 rounded-2xl shadow-lg shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all w-full md:w-fit">
          <Plus size={20} /> Add New Question
        </button>
      </div>

      {/* Filter & Search */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={20} />
          <input 
            type="text" 
            placeholder="Search questions or subjects..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border border-gray-200 p-4 pl-12 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 transition-all text-gray-800"
          />
        </div>
      </div>

      {/* 📱 MOBILE VIEW: CARD LIST */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {filteredQuestions.map((q) => (
          <div key={q._id} className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm space-y-3">
            <div className="flex justify-between items-start">
              <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-xs font-bold uppercase tracking-wider">
                {q.subject}
              </span>
              <span className={`px-2 py-1 rounded-lg text-[10px] font-bold uppercase ${
                q.difficulty === 'Hard' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'
              }`}>
                {q.difficulty}
              </span>
            </div>
            <p className="text-gray-800 font-medium text-sm line-clamp-2">
              {q.questionText}
            </p>
            <div className="flex gap-2 pt-2 border-t border-gray-50">
              <button className="flex-1 py-2 bg-gray-50 text-gray-600 rounded-xl text-xs font-bold flex items-center justify-center gap-2">
                <Edit3 size={14} /> Edit
              </button>
              <button className="p-2 bg-red-50 text-red-500 rounded-xl">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 💻 DESKTOP VIEW: TABLE */}
      <div className="hidden md:block bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/50 border-b border-gray-100">
              <th className="p-5 text-xs font-bold text-gray-400 uppercase tracking-widest">Question Details</th>
              <th className="p-5 text-xs font-bold text-gray-400 uppercase tracking-widest">Difficulty</th>
              <th className="p-5 text-xs font-bold text-gray-400 uppercase tracking-widest text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredQuestions.map((q) => (
              <tr key={q._id} className="hover:bg-blue-50/30 transition-colors">
                <td className="p-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                      <BookOpen size={20} />
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-gray-800 truncate max-w-md">{q.questionText}</p>
                      <p className="text-xs text-gray-400 uppercase font-semibold">{q.subject}</p>
                    </div>
                  </div>
                </td>
                <td className="p-5">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                    q.difficulty === "Hard" ? "bg-red-100 text-red-600" : 
                    q.difficulty === "Medium" ? "bg-orange-100 text-orange-600" : 
                    "bg-green-100 text-green-600"
                  }`}>
                    {q.difficulty}
                  </span>
                </td>
                <td className="p-5">
                  <div className="flex items-center justify-center gap-2">
                    <button className="p-2 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-all"><Edit3 size={18} /></button>
                    <button className="p-2 rounded-xl bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-all"><Trash2 size={18} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredQuestions.length === 0 && !loading && (
        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200 text-gray-400">
          No questions found. Click "Add New Question" to begin.
        </div>
      )}
    </div>
  );
};

export default QuestionBank;