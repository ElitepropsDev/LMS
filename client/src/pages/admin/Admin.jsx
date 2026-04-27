import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/admin/Sidebar';

const Admin = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar handles its own fixed/static positioning.
        On desktop, it takes its 64px width. 
      */}
      <Sidebar />

      {/* Main Content Area:
        1. flex-1: Takes up the remaining space next to the sidebar.
        2. min-w-0: CRITICAL for flexbox. Prevents a wide table from pushing the whole screen out.
        3. overflow-hidden: Ensures horizontal scrolls happen ONLY inside the table.
      */}
      <div className="flex-1 min-w-0 overflow-hidden">
        {/* Inner Container:
          - p-4: Small padding for mobile.
          - md:p-8: Larger padding for desktop.
          - pt-20: Space at the top for the floating mobile menu button.
          - md:pt-8: Reset top padding on desktop since sidebar is static.
        */}
        <div className="p-4 pt-20 md:p-8 md:pt-8 max-w-7xl mx-auto">
          <Outlet /> 
        </div>
      </div>
    </div>
  );
};

export default Admin;