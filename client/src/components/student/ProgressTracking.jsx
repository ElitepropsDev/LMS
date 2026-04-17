import React from "react";

const ProgressTracking = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-blue-50">
      <div className="max-w-6xl mx-auto px-7 flex flex-col md:flex-row items-center gap-16">
        {/* Left Side: Visual Dashboard Piece */}
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <div className="relative">
            {/* Decorative circles */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50"></div>

            <div className="relative bg-white p-6 rounded-[2rem] shadow-xl border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-bold text-gray-800">Learning Progress</h4>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  Weekly Report
                </span>
              </div>

              {/* Progress Bars */}
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-xs font-bold mb-2">
                    <span className="text-gray-500 uppercase">
                      Mathematics Progress
                    </span>
                    {/* <span className="text-blue-600">85%</span> */}
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    {/* <div className="w-[85%] h-full bg-blue-500 rounded-full"></div> */}
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-bold mb-2">
                    <span className="text-gray-500 uppercase">
                      Physics Progress
                    </span>
                    {/* <span className="text-cyan-500">70%</span> */}
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    {/* <div className="w-[70%] h-full bg-cyan-400 rounded-full"></div> */}
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-bold mb-2">
                    <span className="text-gray-500 uppercase">
                      English Progress
                    </span>
                    {/* <span className="text-indigo-500">92%</span> */}
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    {/* <div className="w-[92%] h-full bg-indigo-500 rounded-full"></div> */}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-50 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <p className="text-xs text-gray-500 font-medium">
                  Progress automatically visible on parent dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Text */}
        <div className="w-full md:w-1/2 order-1 md:order-2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Keep Parents<span className="text-blue-600"> Updated.</span>
          </h2>
          <p className="text-gray-500 mt-6 text-lg leading-relaxed">
            Learning is a shared journey — parents can track student progress in real time.
          </p>

          <ul className="mt-8 space-y-4 text-left inline-block md:block">
            {[
              " Progress Updates — Regular updates on learning performance.",
              " Learning Milestones —Track goals and achievements as modules are completed.",
              "  Completion Tracking — See finished modules and learning progress clearly. ",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-gray-700 font-medium"
              >
                <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 aspect-square">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProgressTracking;
