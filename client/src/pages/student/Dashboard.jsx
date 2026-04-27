import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";

const Dashboard = () => {
  const { navigate, logoutUser } = useContext(AppContext);

  // Existing States
  const [activeTab, setActiveTab] = useState("courses");

  // --- NEW STATES FOR ONBOARDING & DRAWER ---
  const [hasEnrolled, setHasEnrolled] = useState(false);
  const [isProfileComplete, setIsProfileComplete] = useState(false);
  const [hasDoneQuestionnaire, setHasDoneQuestionnaire] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterDifficulty, setFilterDifficulty] = useState("All");
  const [filterDuration, setFilterDuration] = useState("All");

  const dummyLibrary = [
    {
      id: "py-101",
      title: "Intro to Python",
      category: "Digital Skills",
      duration: "6 hours",
      lessons: "4 lessons",
      description:
        "Master the basics of indentation, loops, and logic for automation.",
      price: "₦xxx",
      isLive: true,
      badge: "Popular",
    },
    {
      id: "calc-202",
      title: "Calculus Concepts for STEM",
      category: "STEM",
      duration: "10 hours",
      lessons: "8 lessons",
      description:
        "Deep dive into limits and derivatives for engineering students.",
      price: "₦xxx",
      isLive: true,
      badge: "New",
    },
    {
      id: "ai-303",
      title: "AI for Learning: Risks & Rewards",
      category: "STEM",
      duration: "4 hours",
      lessons: "3 lessons",
      description:
        "How to use LLMs effectively without losing critical thinking skills.",
      price: "₦4xxx",
      isLive: true, // Coming Soon
    },
    {
      id: "web-404",
      title: "Web Design Essentials",
      category: "Digital Skills",
      duration: "12 hours",
      lessons: "10 lessons",
      description:
        "Build responsive layouts using modern CSS and design principles.",
      price: "₦xxx",
      isLive: true, // Coming Soon
    },
  ];
  const filteredModules = dummyLibrary.filter((course) => {
    const matchCat =
      filterCategory === "All" || course.category === filterCategory;
    const matchDiff =
      filterDifficulty === "All" || course.difficulty === filterDifficulty;

    // Basic duration logic (you can adjust the hours to match your needs)
    const hours = parseInt(course.duration);
    let durLabel = "Short";
    if (hours >= 10) durLabel = "Long";
    else if (hours >= 5) durLabel = "Medium";

    const matchDur = filterDuration === "All" || durLabel === filterDuration;

    return matchCat && matchDiff && matchDur;
  });

  return (
    <div className="relative flex flex-col md:flex-row min-h-screen bg-slate-50">
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
            className={`w-full flex items-center gap-3 px-4 py-3 transition-all font-bold ${activeTab === "offline" ? "bg-sky-50 text-sky-600 border-r-4 border-sky-600" : "text-slate-600 hover:bg-slate-100"}`}
          >
            <span>🏛️</span> Course Library
          </button>

          <button
            onClick={() => setActiveTab("exams")}
            className={`w-full flex items-center justify-between gap-3 px-4 py-3 transition-all font-bold ${activeTab === "exams" ? "bg-sky-50 text-sky-600 border-r-4 border-sky-600" : "text-slate-600 hover:bg-slate-100"}`}
          >
            <div className="flex items-center gap-3">
              <span>📝</span> Exams
            </div>
            <span className="text-[7px] bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded font-black uppercase tracking-tighter">
              Soon
            </span>
          </button>

          <button
            onClick={() => setActiveTab("resources")}
            className={`w-full flex items-center justify-between gap-3 px-4 py-3 transition-all font-bold ${activeTab === "resources" ? "bg-sky-50 text-sky-600 border-r-4 border-sky-600" : "text-slate-600 hover:bg-slate-100"}`}
          >
            <div className="flex items-center gap-3">
              <span>📂</span> Resources
            </div>
            <span className="text-[7px] bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded font-black uppercase tracking-tighter">
              Soon
            </span>
          </button>

          <button
            onClick={() => {
              localStorage.removeItem("token"); // or your auth key
              navigate("/login");
            }}
            className={`w-full flex items-center gap-3 px-4 py-3 transition-all font-bold text-red-600 hover:bg-red-50`}
          >
            <span>🚪</span> Logout
          </button>
        </nav>
      </div>

      {/* 2. Main Content Area */}
      <div className="flex-1 p-6 md:p-10">
        {activeTab === "courses" && (
          <>
            {hasEnrolled && enrolledCourses?.length > 0 ? (
              <div className="grid grid-cols-3 gap-2 md:gap-6 animate-fadeIn">
                {enrolledCourses.map((course) => (
                  <div
                    key={course.id}
                    className="p-2 mb-5 md:p-5 bg-white border border-blue-100 rounded-lg md:rounded-xl shadow-sm shadow-blue-50 hover:shadow-md hover:border-blue-300 transition-all relative overflow-hidden flex flex-col justify-between group"
                  >
                    {/* Subtle Background Accent */}
                    <div className="absolute top-0 right-0 w-8 h-8 bg-sky-50 rounded-bl-full -z-0 opacity-50"></div>

                    <div className="relative z-10">
                      <span className="bg-sky-100 text-blue-600 text-[6px] md:text-[8px] font-black px-1.5 md:px-2 py-0.5 rounded-sm uppercase tracking-wider">
                        {course.category}
                      </span>

                      <h3 className="text-[9px] md:text-base font-black mt-2 text-slate-800 uppercase leading-tight line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {course.title}
                      </h3>
                    </div>

                    <div className="mt-3 md:mt-6 space-y-1 md:space-y-2 relative z-10">
                      <div className="flex justify-between items-end">
                        <p className="text-[6px] md:text-[8px] font-bold text-slate-400 uppercase tracking-tighter">
                          Progress
                        </p>
                        <p className="text-[6px] md:text-[8px] font-black text-blue-500">
                          12%
                        </p>
                      </div>

                      {/* Progress Bar: Blue & Sky themed */}
                      <div className="w-full bg-sky-50 h-1 md:h-1.5 rounded-full overflow-hidden border border-blue-50">
                        <div className="bg-blue-500 h-full w-[12%] rounded-full"></div>
                      </div>

                      <button className="w-full mt-3 py-1.5 md:py-2 bg-blue-500 text-white font-black text-[7px] md:text-[10px] uppercase tracking-widest rounded-md hover:bg-blue-600 shadow-sm shadow-blue-200 transition-all active:scale-95">
                        Continue
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-20 text-center border-4 border-dashed border-slate-200">
                <p className="text-slate-400 font-black uppercase tracking-widest italic text-xs">
                  No active modules yet.
                </p>
              </div>
            )}

            {/* Welcome Header */}
            <div className="bg-gradient-to-r from-sky-500 to-blue-600 p-8 mb-10 shadow-lg">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                  <h1 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter">
                    Welcome to your dashboard! 🎓
                  </h1>
                  <p className="text-sky-100 mt-2 font-medium">
                    Start your learning journey by exploring available modules.
                    <br />
                    {!hasEnrolled && (
                      <span className="text-rose-200 block mt-1 font-black italic">
                        You haven't enrolled in any modules yet.
                      </span>
                    )}
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab("offline")}
                  className="bg-white text-blue-600 px-8 py-4 font-black text-xs uppercase tracking-widest shadow-xl hover:bg-sky-50 active:scale-95 transition-all whitespace-nowrap"
                >
                  Go to Course Library
                </button>
              </div>
            </div>

            {/* Onboarding Section */}
            {/* step1 */}
            {(!isProfileComplete || !hasDoneQuestionnaire || !hasEnrolled) && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-slate-200 mb-10 bg-white shadow-sm">
                <div
                  className={`p-6 border-b md:border-b-0 md:border-r border-slate-200 ${isProfileComplete ? "bg-slate-50 opacity-60" : ""}`}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">
                      Step 01
                    </span>
                    {isProfileComplete && (
                      <span className="text-green-600 font-bold text-[10px] uppercase">
                        Done ✓
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-black text-blue-500 mt-2 italic">
                    Complete Profile
                  </h3>
                  <p className="text-slate-500 text-[11px] mt-2 mb-4 leading-relaxed">
                    Add your School, Age, and Parent contact details.
                  </p>
                  {!isProfileComplete && (
                    <button
                      onClick={() => setIsDrawerOpen(true)}
                      className="w-full py-2 bg-blue-500 text-white font-black text-[10px] uppercase tracking-tighter hover:bg-blue-600 transition-all"
                    >
                      Add Details
                    </button>
                  )}
                </div>
                {/* step2 */}
                <div
                  className={`p-6 border-b md:border-b-0 md:border-r border-slate-200 ${hasDoneQuestionnaire ? "bg-slate-50 opacity-60" : ""}`}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">
                      Step 02
                    </span>
                    {hasDoneQuestionnaire && (
                      <span className="text-green-600 font-bold text-[10px] uppercase">
                        Done ✓
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-black text-blue-500 mt-2 italic">
                    Learning Goals
                  </h3>
                  <p className="text-slate-500 text-[11px] mt-2 mb-4 leading-relaxed">
                    Tell us about your learning goals via Google Form.
                  </p>

                  {!hasDoneQuestionnaire && (
                    <div className="space-y-2">
                      {/* 1. THE EXTERNAL LINK */}
                      <a
                        href="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform"
                        target="_blank"
                        rel="noreferrer"
                        className="block w-full py-2 text-center border-2 border-blue-500 text-blue-500 font-black text-[10px] uppercase tracking-tighter hover:bg-blue-600 hover:text-white transition-all"
                      >
                        Open Questionnaire ↗
                      </a>

                      {/* 2. THE CONFIRMATION BUTTON */}
                      <button
                        onClick={() => {
                          setHasDoneQuestionnaire(true);
                          alert(
                            "Awesome! We will verify your submission shortly.",
                          );
                        }}
                        className="w-full py-2 bg-blue-600 text-white font-black text-[9px] uppercase tracking-widest hover:bg-blue-700 transition-all"
                      >
                        I have submitted the form
                      </button>
                    </div>
                  )}
                </div>
                {/* step3 */}
                <div
                  className={`p-6 bg-slate-50 flex flex-col justify-center ${hasEnrolled ? "opacity-60" : ""}`}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">
                      Step 03
                    </span>
                    {hasEnrolled && (
                      <span className="text-green-600 font-bold text-[10px] uppercase">
                        Done ✓
                      </span>
                    )}
                  </div>

                  <h3
                    className={`text-lg font-black mt-2 italic ${!isProfileComplete || !hasDoneQuestionnaire ? "text-slate-400" : "text-slate-800"}`}
                  >
                    Explore Modules
                  </h3>
                  <p className="text-slate-400 text-[11px] mt-2 mb-4">
                    Final step to start learning.
                  </p>

                  {/* Only unlock this button if Step 1 and 2 are done */}
                  {!isProfileComplete || !hasDoneQuestionnaire ? (
                    <button
                      disabled
                      className="w-full py-2 bg-gray-200 text-gray-400 font-black text-[10px] uppercase cursor-not-allowed border-2 border-transparent"
                    >
                      Locked
                    </button>
                  ) : (
                    <button
                      onClick={() => setActiveTab("offline")}
                      className="w-full py-2 bg-blue-600 text-white font-black text-[10px] uppercase tracking-tighter hover:bg-slate-900 transition-all border-2 border-blue-600 hover:border-slate-900 shadow-md animate-pulse"
                    >
                      Browse Library →
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              <div className="bg-white p-5 border-b-4 border-sky-500 shadow-sm">
                <p className="text-slate-400 text-xs font-bold uppercase">
                  Enrolled
                </p>
                <h3 className="text-2xl font-black text-slate-800">0</h3>
              </div>
              <div className="bg-white p-5 border-b-4 border-green-500 shadow-sm">
                <p className="text-slate-400 text-xs font-bold uppercase">
                  Completed
                </p>
                <h3 className="text-2xl font-black text-slate-800">0</h3>
              </div>
              <div className="bg-white p-5 border-b-4 border-orange-500 shadow-sm">
                <p className="text-slate-400 text-xs font-bold uppercase">
                  Progress
                </p>
                <h3 className="text-2xl font-black text-slate-800">0%</h3>
              </div>
              <div className="bg-white p-5 border-b-4 border-purple-500 shadow-sm">
                <p className="text-slate-400 text-xs font-bold uppercase">
                  Certificates
                </p>
                <h3 className="text-2xl font-black text-slate-800">0</h3>
              </div>
            </div>
          </>
        )}

        {/* Course Library */}

        {activeTab === "offline" && (
          <div className="animate-fadeIn pb-20">
            {/* 1. HEADER */}
            {/* <div className="mb-10">
              <h2 className="text-3xl font-black text-blue-600 uppercase tracking-tighter">
                Subscription Catalog
              </h2>
              <div className="h-1 w-20 bg-blue-500 mt-2"></div>
              <p className="text-slate-500 font-bold text-[10px] uppercase tracking-widest mt-4">
                Explore our specialized modules
              </p>
            </div> */}

            {/* --- FILTER & SORTING BAR --- */}
            <div className="bg-white border border-blue-100 p-4 md:p-6 rounded-2xl shadow-sm mb-10">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-black text-blue-600 uppercase tracking-tighter italic">
                    Subscription Catalog
                  </h2>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                    Refine by your learning goals
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full lg:w-auto">
                  {/* Category Filter */}
                  <div className="space-y-1">
                    <label className="text-[9px] font-black text-blue-500 uppercase ml-1">
                      Category
                    </label>
                    <select
                      onChange={(e) => setFilterCategory(e.target.value)}
                      className="w-full lg:w-40 p-3 bg-sky-50 border border-blue-100 rounded-xl font-bold text-[11px] text-slate-700 outline-none focus:border-blue-400 transition-all appearance-none"
                    >
                      <option value="All">All Types</option>
                      <option value="STEM">STEM</option>
                      <option value="Digital Skills">Digital Skills</option>
                      <option value="Practical Skills">Practical Skills</option>
                    </select>
                  </div>

                  {/* Difficulty Filter */}
                  <div className="space-y-1">
                    <label className="text-[9px] font-black text-blue-500 uppercase ml-1">
                      Difficulty
                    </label>
                    <select
                      onChange={(e) => setFilterDifficulty(e.target.value)}
                      className="w-full lg:w-40 p-3 bg-sky-50 border border-blue-100 rounded-xl font-bold text-[11px] text-slate-700 outline-none focus:border-blue-400 transition-all appearance-none"
                    >
                      <option value="All">All Levels</option>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                  </div>

                  {/* Duration Filter */}
                  <div className="space-y-1">
                    <label className="text-[9px] font-black text-blue-500 uppercase ml-1">
                      Duration
                    </label>
                    <select
                      onChange={(e) => setFilterDuration(e.target.value)}
                      className="w-full lg:w-40 p-3 bg-sky-50 border border-blue-100 rounded-xl font-bold text-[11px] text-slate-700 outline-none focus:border-blue-400 transition-all appearance-none"
                    >
                      <option value="All">Any Length</option>
                      <option value="Short">Short (&lt; 5hrs)</option>
                      <option value="Medium">Medium (5-10hrs)</option>
                      <option value="Long">Long (10hrs+)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. COURSE GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredModules.map((course) => (
                <div
                  key={course.id}
                  className={`flex flex-col bg-white border border-blue-100 rounded-xl overflow-hidden transition-all duration-300 ${course.isLive ? "shadow-md shadow-blue-100 hover:shadow-xl hover:shadow-blue-200 border-blue-200" : "opacity-60 grayscale"}`}
                >
                  {/* Top Section / Badge */}
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex justify-between items-center mb-4">
                      <span
                        className={`text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-widest ${course.category === "STEM" ? "bg-blue-100 text-blue-600" : "bg-sky-100 text-sky-600"}`}
                      >
                        {course.category}
                      </span>
                      {course.badge && (
                        <span className="text-[8px] font-bold bg-amber-100 text-amber-600 px-2 py-1 rounded">
                          {course.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-black text-slate-800 leading-tight mb-2">
                      {course.title}
                    </h3>

                    <p className="text-slate-500 text-xs font-medium leading-relaxed mb-4">
                      {course.description}
                    </p>

                    {/* Metadata (Duration & Difficulty) */}
                    {/* Update this section in your Metadata Row */}
                    <div className="flex gap-3 mt-auto pt-4">
                      <div className="flex items-center gap-1">
                        <span className="text-[10px] text-blue-500">⏱</span>
                        <span className="text-[9px] font-bold text-slate-400 uppercase">
                          {course.duration}
                        </span>
                      </div>
                      {/* ADDED THIS FOR LESSONS */}
                      <div className="flex items-center gap-1 border-l border-slate-100 pl-3">
                        <span className="text-[10px] text-blue-500">📖</span>
                        <span className="text-[9px] font-bold text-slate-400 uppercase">
                          {course.lessons}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Pricing & CTA */}
                  <div className="px-5 py-4 bg-sky-50 border-t border-blue-50 flex items-center justify-between">
                    <div>
                      <p className="text-[7px] font-black text-blue-400 uppercase tracking-widest">
                        Pay per module
                      </p>
                      <p className="text-base font-black text-blue-600">
                        {course.isLive ? course.price : "TBD"}
                      </p>
                    </div>

                    {course.isLive ? (
                      <button
                        onClick={() => {
                          // 1. Check if the course ID is already in our list
                          const isAlreadyEnrolled = enrolledCourses.some(
                            (c) => c.id === course.id,
                          );

                          if (isAlreadyEnrolled) {
                            // 2. Alert if they try to add it again
                            alert("You are already enrolled in this module.");
                          } else {
                            // 3. If new, add to array and update status
                            setEnrolledCourses([...enrolledCourses, course]);
                            setHasEnrolled(true);
                            alert(
                              `Successfully Subscribed to ${course.title}!`,
                            );
                          }

                          // 4. Always redirect back to the main courses tab
                          setActiveTab("courses");
                        }}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg font-black text-[10px] uppercase tracking-tighter hover:bg-blue-600 shadow-lg shadow-blue-200 transition-all active:scale-95"
                      >
                        Subscribe & Start
                      </button>
                    ) : (
                      <span className="text-[10px] font-black text-slate-400 uppercase italic">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* --- UPCOMING ROADMAP FOOTNOTE --- */}
            <div className="mt-20 relative overflow-hidden rounded-3xl bg-gradient-to-b from-sky-50 to-white border border-blue-100 p-8 md:p-12">
              {/* Decorative Background Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-200/20 rounded-full blur-3xl -ml-32 -mb-32"></div>

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
                  <div className="max-w-md">
                    <span className="bg-blue-600 text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg shadow-blue-200">
                      Future Roadmap
                    </span>
                    <h3 className="text-2xl font-black text-slate-800 mt-4 uppercase italic leading-tight">
                      Modules in the{" "}
                      <span className="text-blue-600">STEM Lab</span>
                    </h3>
                    <p className="text-slate-500 text-xs font-medium mt-2 leading-relaxed">
                      Our team is currently developing these high-impact
                      modules. Subscribe to our newsletter to get notified when
                      they go live.
                    </p>
                  </div>

                  <div className="hidden md:block">
                    <div className="flex -space-x-4">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-12 h-12 rounded-full border-4 border-white bg-sky-100 flex items-center justify-center text-blue-500 font-black text-xs"
                        >
                          0{i}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Upcoming Course Chips */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { title: "AI for Learning: Risks & Rewards", icon: "🤖" },
                    { title: "Digital Marketing Bootcamp", icon: "📈" },
                    { title: "Calculus Concepts for Beginners", icon: "📐" },
                    { title: "Web Design Essentials", icon: "🌐" },
                    { title: "STEM Prep Foundations", icon: "🧪" },
                  ].map((module, index) => (
                    <div
                      key={index}
                      className="group flex items-center gap-4 p-4 bg-white/60 backdrop-blur-md border border-blue-50 rounded-2xl hover:border-blue-400 hover:bg-white transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                        {module.icon}
                      </div>
                      <div>
                        <h4 className="text-[11px] font-black text-slate-700 uppercase leading-snug group-hover:text-blue-600">
                          {module.title}
                        </h4>
                        <p className="text-[9px] font-bold text-blue-400 uppercase tracking-widest mt-0.5">
                          Coming Soon
                        </p>
                      </div>
                    </div>
                  ))}

                  {/* "And More" Card */}
                  <div className="flex items-center justify-center p-4 border-2 border-dashed border-blue-100 rounded-2xl">
                    <p className="text-[10px] font-black text-blue-300 uppercase tracking-widest italic">
                      + More in development
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Exams View */}
      {activeTab === "exams" && (
        <div className="flex flex-col items-center justify-center min-h-[50vh] md:min-h-[70vh] w-full py-10 md:py-0 animate-fadeIn">
          <div className="w-20 h-20 bg-sky-50 rounded-full flex items-center justify-center text-4xl mb-4 shadow-sm shadow-blue-100">
            📝
          </div>
          <h2 className="text-2xl font-black text-slate-800 uppercase italic">
            Exams Portal
          </h2>
          <p className="text-blue-500 font-bold text-xs uppercase tracking-widest mt-2">
            Coming Soon to your Dashboard
          </p>
        </div>
      )}

      {/* Resources View */}
      {activeTab === "resources" && (
        <div className="flex flex-col items-center justify-center min-h-[50vh] md:min-h-[70vh] w-full py-10 md:py-0 animate-fadeIn">
          <div className="w-20 h-20 bg-sky-50 rounded-full flex items-center justify-center text-4xl mb-4 shadow-sm shadow-blue-100">
            📂
          </div>
          <h2 className="text-2xl font-black text-slate-800 uppercase italic">
            Learning Resources
          </h2>
          <p className="text-blue-500 font-bold text-xs uppercase tracking-widest mt-2">
            PDFs & Guides Coming Soon
          </p>
        </div>
      )}

      {/* --- SLIDE-OVER DRAWER COMPONENT --- */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-[999] overflow-hidden">
          {/* Backdrop with a softer blue-tinted blur */}
          <div
            className="absolute inset-0 bg-blue-900/40 backdrop-blur-md transition-opacity"
            onClick={() => setIsDrawerOpen(false)}
          ></div>

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <div className="w-screen max-w-md">
              {/* Main Card: Blue border-t, rounded, and white bg */}
              <div className="flex flex-col bg-white shadow-2xl shadow-blue-200 rounded-3xl border-t-8 border-blue-500 animate-fadeIn overflow-hidden">
                {/* Header: Sky 50 background */}
                <div className="p-8 bg-sky-50 border-b border-blue-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-black text-blue-600 uppercase italic tracking-tighter">
                        Step 01: Profile Data
                      </h2>
                      <div className="h-1 w-10 bg-blue-400 mt-1 rounded-full"></div>
                    </div>
                    <button
                      onClick={() => setIsDrawerOpen(false)}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-slate-400 hover:text-red-500 hover:shadow-md transition-all font-bold"
                    >
                      ✕
                    </button>
                  </div>
                </div>

                {/* Form Body */}
                <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-white">
                  <div className="space-y-4">
                    <label className="block text-[10px] font-black uppercase text-blue-500 tracking-widest ml-1">
                      Academic Info
                    </label>
                    <input
                      type="text"
                      placeholder="School / College Name"
                      className="w-full p-4 bg-sky-50/50 border-2 border-blue-50 rounded-xl focus:border-blue-500 focus:bg-white outline-none font-bold text-sm transition-all text-slate-700 placeholder:text-slate-300"
                    />
                    <div className="relative">
                      <select className="w-full p-4 bg-sky-50/50 border-2 border-blue-50 rounded-xl focus:border-blue-500 focus:bg-white outline-none font-bold text-sm appearance-none text-slate-700 transition-all">
                        <option>Select Grade / Level</option>
                        <option>SSS 1</option>
                        <option>SSS 2</option>
                        <option>SSS 3</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-blue-500 font-bold">
                        ↓
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-blue-50">
                    <label className="block text-[10px] font-black uppercase text-blue-400 tracking-widest ml-1">
                      Guardian / Parent Contact
                    </label>
                    <input
                      type="text"
                      placeholder="Guardian Full Name"
                      className="w-full p-4 bg-sky-50/50 border-2 border-blue-50 rounded-xl focus:border-blue-500 focus:bg-white outline-none font-bold text-sm transition-all text-slate-700 placeholder:text-slate-300"
                    />
                    <input
                      type="text"
                      placeholder="WhatsApp / Phone Number"
                      className="w-full p-4 bg-sky-50/50 border-2 border-blue-50 rounded-xl focus:border-blue-500 focus:bg-white outline-none font-bold text-sm transition-all text-slate-700 placeholder:text-slate-300"
                    />
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="p-8 bg-sky-50 border-t border-blue-100">
                  <button
                    onClick={() => {
                      setIsProfileComplete(true);
                      setIsDrawerOpen(false);
                      alert("Profile Updated! Step 1 is now complete.");
                    }}
                    className="w-full py-5 bg-blue-600 text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200 transition-all active:scale-[0.98]"
                  >
                    Save & Complete Step 1
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
