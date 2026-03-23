import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";
import JambExam from "../../components/student/JambExam";
import {
  waecMathsQuestions,
  waecPhysicsQuestions,
  waecEnglishQuestions,
  waecBiologyQuestions,
} from "../../data/waecQuestions";

const Dashboard = () => {
  const { navigate } = useContext(AppContext);
  // Track active tab - default is 'courses'
  const [activeTab, setActiveTab] = useState("courses");
  const [isExamActive, setIsExamActive] = useState(false);

  const [activeExamData, setActiveExamData] = useState(null); // To store the selected questions
  const [examTitle, setExamTitle] = useState(""); // To show "WAEC Physics" or "JAMB Maths"
  const [selectedWaecSubject, setSelectedWaecSubject] = useState(null);

  const courses = [
    {
      id: 1,
      title: "Mathematics",
      level: "SSS 3",
      progress: 75,
      lessons: 12,
      category: "Science",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmPkJnI9pfo5WaAUgcfece76KjxPmMI0fbJQ&s",
    },
    {
      id: 2,
      title: "English Language",
      level: "SSS 3",
      progress: 40,
      lessons: 10,
      category: "General",
      image:
        "data:image/jpeg;base64,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",
    },
    {
      id: 3,
      title: "Physics",
      level: "SSS 3",
      progress: 10,
      lessons: 15,
      category: "Science",
      image:
        "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 4,
      title: "Civic Education",
      level: "SSS 2",
      progress: 0,
      lessons: 8,
      category: "General",
      image:
        "https://civicsforlife.org/wp-content/uploads/2023/05/AdobeStock_593648417-scaled.jpeg",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-50">
      {/* 1. Sidebar */}
      <div className="w-full md:w-64 bg-white border-r border-slate-200 flex flex-col">
        <div className="p-6 border-b border-slate-100 hidden md:block">
          <p className="text-xs font-black text-blue-600 uppercase tracking-widest">
            Student Portal
          </p>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <button
            onClick={() => setActiveTab("courses")}
            className={`w-full flex items-center gap-3 px-4 py-3 transition-all font-bold ${activeTab === "courses" ? "bg-sky-50 text-sky-600 border-r-4 border-sky-600" : "text-slate-600 hover:bg-slate-100"}`}
          >
            <span>📚</span> My Courses
          </button>
          <button
            onClick={() => setActiveTab("offline")}
            className={`w-full flex items-center gap-3 px-4 py-3 transition-all font-medium ${activeTab === "offline" ? "bg-sky-50 text-sky-600 border-r-4 border-sky-600" : "text-slate-600 hover:bg-slate-100"}`}
          >
            <span>⬇️</span> Offline Library
          </button>
          <button
            onClick={() => setActiveTab("exams")}
            className={`w-full flex items-center gap-3 px-4 py-3 transition-all font-medium ${activeTab === "exams" ? "bg-sky-50 text-sky-600 border-r-4 border-sky-600" : "text-slate-600 hover:bg-slate-100"}`}
          >
            <span>📝</span> Mock Exams
          </button>
          <button
            onClick={() => setActiveTab("leaderboard")}
            className={`w-full flex items-center gap-3 px-4 py-3 transition-all font-medium ${activeTab === "leaderboard" ? "bg-sky-50 text-sky-600 border-r-4 border-sky-600" : "text-slate-600 hover:bg-slate-100"}`}
          >
            <span>🏆</span> Leaderboard
          </button>
        </nav>
      </div>

      {/* 2. Main Content Area */}
      <div className="flex-1 p-6 md:p-10">
        {activeTab === "courses" && (
          <>
            {/* Welcome Header - Exactly as requested */}
            <div className="bg-gradient-to-r from-sky-500 to-blue-600 p-8 mb-10 shadow-lg">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                  <h1 className="text-2xl md:text-3xl font-black text-white">
                    Welcome back, Scholar! 🎓
                  </h1>
                  <p className="text-sky-100 mt-1">
                    You have 3 lessons to finish this week for your WAEC prep.
                  </p>
                </div>
                <button className="bg-white text-blue-600 px-6 py-2 font-bold text-sm shadow-md hover:bg-sky-50 active:scale-95 transition-all">
                  Resume Last Lesson
                </button>
              </div>
            </div>

            {/* Stats Grid - Exactly as requested */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              <div className="bg-white p-5 border-b-4 border-sky-500 shadow-sm">
                <p className="text-slate-400 text-xs font-bold uppercase">
                  Data Saved
                </p>
                <h3 className="text-2xl font-black text-slate-800">1.2 GB</h3>
              </div>
              <div className="bg-white p-5 border-b-4 border-green-500 shadow-sm">
                <p className="text-slate-400 text-xs font-bold uppercase">
                  Completed
                </p>
                <h3 className="text-2xl font-black text-slate-800">
                  8 Lessons
                </h3>
              </div>
              <div className="bg-white p-5 border-b-4 border-orange-500 shadow-sm">
                <p className="text-slate-400 text-xs font-bold uppercase">
                  Mock Score
                </p>
                <h3 className="text-2xl font-black text-slate-800">72%</h3>
              </div>
              <div className="bg-white p-5 border-b-4 border-purple-500 shadow-sm">
                <p className="text-slate-400 text-xs font-bold uppercase">
                  Days to JAMB
                </p>
                <h3 className="text-2xl font-black text-slate-800">45 Days</h3>
              </div>
            </div>

            {/* Course Section - Exactly as requested */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-black text-slate-800 uppercase tracking-tight">
                Active Subjects
              </h2>
              <button className="text-blue-600 font-bold text-sm hover:underline">
                View All
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white border border-slate-200 group hover:border-sky-400 transition-all shadow-sm"
                >
                  <div className="h-40 overflow-hidden relative border-b border-slate-100">
                    {/* Actual Subject Image */}
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Sharp Overlay Badge */}
                    <div className="absolute top-0 left-0 bg-blue-600 text-white text-[10px] font-black px-3 py-1 uppercase tracking-tighter">
                      {course.category}
                    </div>

                    {/* Subtle gradient for text readability if needed */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-black text-slate-800 text-lg">
                        {course.title}
                      </h3>
                      <span className="text-[10px] bg-slate-100 px-2 py-1 font-bold text-slate-500">
                        {course.level}
                      </span>
                    </div>
                    <div className="mt-4">
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span className="text-slate-500">
                          {course.progress}% Completed
                        </span>
                        <span className="text-slate-400">
                          {course.lessons} Lessons
                        </span>
                      </div>
                      <div className="w-full bg-slate-100 h-2">
                        <div
                          className="bg-sky-500 h-full transition-all duration-500"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <button className="w-full mt-6 py-3 border-2 border-slate-800 text-slate-800 font-black text-xs uppercase hover:bg-slate-800 hover:text-white transition-all">
                      Continue Learning
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Placeholder Views for other tabs */}
        {activeTab === "offline" && (
          <div className="space-y-8 animate-fadeIn">
            {/* Storage Management Header */}
            <div className="bg-white border-2 border-slate-800 p-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-[8px_8px_0px_0px_rgba(30,41,59,1)]">
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-black text-slate-800 uppercase italic tracking-tighter">
                  Your Offline Vault 💾
                </h2>
                <p className="text-slate-500 text-sm mt-1 font-medium">
                  Study anywhere, even without a single kilobyte of data.
                </p>
              </div>

              {/* Storage Indicator */}
              <div className="w-full md:w-64">
                <div className="flex justify-between text-[10px] font-black uppercase mb-2">
                  <span className="text-slate-400">Storage Used</span>
                  <span className="text-blue-600">1.2 GB / 5.0 GB</span>
                </div>
                <div className="w-full bg-slate-100 h-4 border border-slate-200">
                  <div
                    className="bg-blue-600 h-full transition-all duration-700"
                    style={{ width: "24%" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Downloaded Content List */}
            <div className="bg-white border border-slate-200">
              <div className="p-5 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
                <h4 className="font-black text-slate-800 text-xs uppercase tracking-widest">
                  Downloaded Lessons
                </h4>
                <button className="text-[10px] font-black text-red-500 uppercase hover:underline">
                  Clear All
                </button>
              </div>

              <div className="divide-y divide-slate-100">
                {[
                  {
                    id: 1,
                    title: "Quadratic Equations - Part 1",
                    subject: "Mathematics",
                    size: "45MB",
                    type: "Video",
                  },
                  {
                    id: 2,
                    title: "Photosynthesis Explained",
                    subject: "Biology",
                    size: "12MB",
                    type: "PDF",
                  },
                  {
                    id: 3,
                    title: "English: Oral Communication",
                    subject: "English",
                    size: "82MB",
                    type: "Video",
                  },
                  {
                    id: 4,
                    title: "Past Questions: JAMB 2024",
                    subject: "General",
                    size: "5MB",
                    type: "PDF",
                  },
                ].map((item) => (
                  <div
                    key={item.id}
                    className="p-5 flex items-center justify-between hover:bg-slate-50 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-slate-100 flex items-center justify-center font-bold text-slate-400">
                        {item.type === "Video" ? "🎬" : "📄"}
                      </div>
                      <div>
                        <h5 className="font-bold text-slate-800 text-sm">
                          {item.title}
                        </h5>
                        <p className="text-[10px] text-slate-400 font-black uppercase">
                          {item.subject} • {item.size}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button className="px-6 py-2 bg-slate-800 text-white font-black text-[10px] uppercase hover:bg-black transition-all">
                        Play {item.type}
                      </button>
                      <button className="p-2 border border-slate-200 text-slate-300 hover:text-red-500 hover:border-red-500 transition-all">
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Empty State / Tip */}
            <div className="p-6 bg-sky-50 border-l-4 border-sky-400">
              <div className="flex gap-4">
                <span className="text-xl">💡</span>
                <div>
                  <p className="text-sm font-bold text-sky-800">
                    Pro-Tip for Rural Areas
                  </p>
                  <p className="text-xs text-sky-600 mt-1">
                    Download your lessons when you visit the city or find a
                    strong 4G signal. Once saved, they stay here forever!
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "exams" && (
          <div className="space-y-8 animate-fadeIn">
            {/* Exam Header */}
            <div className="bg-white border-l-8 border-orange-500 p-8 shadow-sm">
              <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tighter">
                CBT Practice Center
              </h2>
              <p className="text-slate-500 font-medium mt-1">
                Boost your speed and accuracy. Select a past question paper to
                begin.
              </p>
            </div>

            {/* Exam Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* JAMB Card */}
              <div className="bg-white border-2 border-slate-800 shadow-[8px_8px_0px_0px_rgba(30,41,59,1)] p-6">
                <div className="flex justify-between items-start mb-6">
                  <span className="bg-orange-100 text-orange-600 text-[10px] font-black px-3 py-1 uppercase">
                    Unified Tertiary Matriculation
                  </span>
                  <span className="text-slate-400 font-bold text-xs">
                    2026 Ready
                  </span>
                </div>
                <h3 className="text-xl font-black text-slate-800 mb-2">
                  Full JAMB Mock (4 Subjects)
                </h3>
                <p className="text-slate-500 text-sm mb-6">
                  180 Questions • 2 Hours • Use of English, Maths, Physics,
                  Chemistry
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={() => setIsExamActive(true)}
                    className="flex-1 bg-blue-600 text-white py-3 font-black text-xs uppercase hover:bg-blue-700 transition-all"
                  >
                    Start Exam
                  </button>
                  <button className="px-4 py-3 border-2 border-slate-200 text-slate-400 hover:border-slate-800 hover:text-slate-800 transition-all">
                    📂
                  </button>
                </div>
              </div>

              {/* WAEC Card */}
              {/* WAEC Card */}
              <div className="bg-white border-2 border-slate-800 shadow-[8px_8px_0px_0px_rgba(30,41,59,1)] p-6">
                <div className="flex justify-between items-start mb-6">
                  <span className="bg-blue-600 text-white text-[10px] font-black px-3 py-1 uppercase italic">
                    WAEC 2026
                  </span>
                </div>

                <h3 className="text-xl font-black text-slate-800 mb-2">
                  WAEC Past Questions
                </h3>
                <p className="text-slate-500 text-sm mb-6 font-medium">
                  Practicing {selectedWaecSubject || "Core Subjects"}
                </p>

                {!selectedWaecSubject ? (
                  /* Subject Grid */
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { name: "Mathematics", data: waecMathsQuestions }, // 👈 Make sure this is waecMathsQuestions
                      { name: "Physics", data: waecPhysicsQuestions },
                      { name: "English", data: waecEnglishQuestions },
                      { name: "Biology", data: waecBiologyQuestions },
                    ].map((sub) => (
                      <button
                        key={sub.name}
                        onClick={() => {
                          // This ensures the CORRECT data is sent to the exam engine
                          setActiveExamData(sub.data);
                          setExamTitle(`WAEC ${sub.name} Mock`);
                          setIsExamActive(true);
                        }}
                        className="py-3 border-2 border-slate-100 font-black uppercase hover:bg-slate-800 hover:text-white transition-all"
                      >
                        {sub.name}
                      </button>
                    ))}
                  </div>
                ) : (
                  /* Start Action */
                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => setIsExamActive(true)}
                      className="w-full bg-blue-600 text-white py-4 font-black text-xs uppercase hover:bg-blue-700 shadow-[4px_4px_0px_0px_rgba(30,41,59,1)]"
                    >
                      Start {selectedWaecSubject} Exam
                    </button>
                    <button
                      onClick={() => setSelectedWaecSubject(null)}
                      className="text-[10px] font-black text-slate-400 uppercase hover:text-red-500 underline"
                    >
                      Change Subject
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Recent Results Table */}
            <div className="bg-white border border-slate-200 overflow-hidden">
              <div className="p-4 border-b border-slate-100 bg-slate-50">
                <h4 className="font-black text-slate-800 text-xs uppercase tracking-widest">
                  Recent Performance
                </h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="text-[10px] uppercase text-slate-400 border-b border-slate-100">
                      <th className="p-4 font-bold">Exam Type</th>
                      <th className="p-4 font-bold">Date</th>
                      <th className="p-4 font-bold">Score</th>
                      <th className="p-4 font-bold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm font-medium text-slate-600">
                    <tr className="border-b border-slate-50 hover:bg-slate-50 transition-all">
                      <td className="p-4">JAMB Practice (Maths)</td>
                      <td className="p-4">Mar 22, 2026</td>
                      <td className="p-4 font-bold text-green-600">32/40</td>
                      <td className="p-4">
                        <span className="bg-green-100 text-green-600 px-2 py-0.5 text-[10px] font-bold">
                          PASSED
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-all">
                      <td className="p-4">WAEC English Prep</td>
                      <td className="p-4">Mar 18, 2026</td>
                      <td className="p-4 font-bold text-orange-600">45/100</td>
                      <td className="p-4">
                        <span className="bg-orange-100 text-orange-600 px-2 py-0.5 text-[10px] font-bold">
                          NEEDS IMPROVEMENT
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === "leaderboard" && (
          <div className="space-y-8 animate-fadeIn">
            {/* Top 3 Podium Card */}
            <div className="bg-slate-900 p-8 text-white shadow-xl flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="max-w-xs text-center md:text-left">
                <h2 className="text-3xl font-black uppercase italic tracking-tighter">
                  The Hall of Fame 🏆
                </h2>
                <p className="text-slate-400 text-sm mt-2 font-medium">
                  Top students based on Mock Exam scores and Lesson consistency.
                </p>
              </div>

              {/* Current User Rank Card */}
              <div className="bg-white/10 backdrop-blur-md p-6 border border-white/20 w-full md:w-auto min-w-[200px] text-center">
                <p className="text-[10px] font-black uppercase text-sky-400 tracking-widest mb-1">
                  Your Standing
                </p>
                <h3 className="text-4xl font-black italic">#124</h3>
                <p className="text-xs text-slate-400 mt-2 font-bold">
                  Top 15% in Nigeria
                </p>
              </div>
            </div>

            {/* Leaderboard Table */}
            <div className="bg-white border border-slate-200 overflow-hidden shadow-sm">
              <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                <h4 className="font-black text-slate-800 text-xs uppercase tracking-widest">
                  National Rankings
                </h4>
                <div className="flex gap-2">
                  <button className="text-[10px] font-bold px-3 py-1 bg-slate-200 text-slate-600 uppercase">
                    Weekly
                  </button>
                  <button className="text-[10px] font-bold px-3 py-1 bg-blue-600 text-white uppercase">
                    All-Time
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="text-[10px] uppercase text-slate-400 border-b border-slate-100">
                      <th className="p-5 font-bold w-16 text-center">Rank</th>
                      <th className="p-5 font-bold">Student Name</th>
                      <th className="p-5 font-bold">Location</th>
                      <th className="p-5 font-bold text-right">Points (XP)</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm font-medium text-slate-700">
                    {[
                      {
                        rank: 1,
                        name: "Olawale Adeyemi",
                        location: "Lagos",
                        xp: "12,450",
                        color: "text-orange-500",
                      },
                      {
                        rank: 2,
                        name: "Chiamaka Okoro",
                        location: "Enugu",
                        xp: "11,820",
                        color: "text-slate-400",
                      },
                      {
                        rank: 3,
                        name: "Musa Ibrahim",
                        location: "Kano",
                        xp: "10,900",
                        color: "text-orange-800",
                      },
                      {
                        rank: 4,
                        name: "Aisha Bello",
                        location: "Abuja",
                        xp: "9,750",
                        color: "text-slate-500",
                      },
                      {
                        rank: 5,
                        name: "Tunde Ednut",
                        location: "Oyo",
                        xp: "9,200",
                        color: "text-slate-500",
                      },
                    ].map((student) => (
                      <tr
                        key={student.rank}
                        className={`border-b border-slate-50 hover:bg-sky-50 transition-all ${student.rank === 124 ? "bg-sky-50" : ""}`}
                      >
                        <td
                          className={`p-5 text-center font-black ${student.color}`}
                        >
                          {student.rank === 1
                            ? "🥇"
                            : student.rank === 2
                              ? "🥈"
                              : student.rank === 3
                                ? "🥉"
                                : student.rank}
                        </td>
                        <td className="p-5">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-slate-200 font-black text-[10px] flex items-center justify-center text-slate-500">
                              {student.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </div>
                            <span className="font-bold">{student.name}</span>
                          </div>
                        </td>
                        <td className="p-5 text-slate-400 text-xs font-bold">
                          {student.location}, Nigeria
                        </td>
                        <td className="p-5 text-right font-black text-blue-600">
                          {student.xp}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Footer link */}
              <div className="p-4 bg-slate-50 text-center border-t border-slate-100">
                <button className="text-[11px] font-black text-slate-500 uppercase hover:text-blue-600 transition-all">
                  Load More Rankings ↓
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {isExamActive && <JambExam onClose={() => setIsExamActive(false)} />}
    </div>
  );
};

export default Dashboard;
