import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold border-b-4 border-black pb-2">
        Admin Control Center
      </h1>
      <p className="mt-4 text-lg">Welcome, Boss. This is where you will manage your LMS.</p>
      
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* These are just placeholder boxes for now */}
        <div className="border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-yellow-400">
          <h2 className="font-black text-xl">Total Students</h2>
          <p className="text-4xl font-bold">0</p>
        </div>
        
        <div className="border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-green-400">
          <h2 className="font-black text-xl">Courses</h2>
          <p className="text-4xl font-bold">0</p>
        </div>

        <div className="border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-blue-400">
          <h2 className="font-black text-xl">Questions</h2>
          <p className="text-4xl font-bold">0</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;