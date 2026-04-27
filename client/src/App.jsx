import React from "react";
import { Routes, Route, useMatch } from "react-router-dom";
import "quill/dist/quill.snow.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

// --- STUDENT COMPONENTS ---
import Navbar from "./components/student/Navbar";
import Loading from "./components/student/Loading";
import Login from "./components/student/Login";
import Home from "./pages/student/Home";
import CourseDetails from "./pages/student/CourseDetails";
import CoursesList from "./pages/student/CoursesList";
import Player from "./pages/student/Player";
import MyEnrollments from "./pages/student/MyEnrollments";
import Dashbord from "./pages/student/Dashboard";
import Contact from "./components/student/Contact";
import JambExam from "./components/student/JambExam";

// --- MARKETING/INFO COMPONENTS ---
import ProgramPreview from "./components/student/ProgramPreview";
import FeatureHighlights from "./components/student/FeatureHighlights";
import UpcomingSessions from "./components/student/UpcomingSessions";
import OfflineFeatures from "./components/student/OfflineFeatures";
import ProgressTracking from "./components/student/ProgressTracking";
import PricingTrust from "./components/student/PricingTrust";

// --- EDUCATOR PAGES ---
import Educator from "./pages/educator/Educator";
import Dashboard from "./pages/educator/Dashboard";
import AddCourse from "./pages/educator/AddCourse";
import MyCourses from "./pages/educator/MyCourses";
import StudentsEnrolled from "./pages/educator/StudentsEnrolled";

// --- ADMIN PAGES ---
import Admin from "./pages/admin/Admin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageUsers from "./pages/admin/ManageUsers";
import CourseManager from "./pages/admin/CourseManager";
import QuestionBank from "./pages/admin/QuestionBank";
import Settings from "./pages/admin/Settings";

// --- SECURITY ---
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const isEducatorRoute = useMatch("/educator/*");
  const isAdminRoute = useMatch("/admin/*");

  return (
    <div className="text-default min-h-screen bg-white">
      <ToastContainer />

      {/* Hide Student Navbar if we are in Educator or Admin panels */}
      {!isEducatorRoute && !isAdminRoute && <Navbar />}

      <Routes>
        {/* ==========================================
            🌍 PUBLIC ROUTES
           ========================================== */}
        <Route path="/" element={<Home />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/course-list" element={<CoursesList />} />
        <Route path="/course-list/:input" element={<CoursesList />} />
        <Route path="/program-preview" element={<ProgramPreview />} />
        <Route path="/feature-highlights" element={<FeatureHighlights />} />
        <Route path="/upcomingsessions" element={<UpcomingSessions />} />
        <Route path="/offline-features" element={<OfflineFeatures />} />
        <Route path="/progress-tracking" element={<ProgressTracking />} />
        <Route path="/pricing-trust" element={<PricingTrust />} />
        <Route path="/jambexam" element={<JambExam />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

        {/* ==========================================
            🔐 PROTECTED STUDENT ROUTES
           ========================================== */}
        <Route path="/dashboard" element={<ProtectedRoute><Dashbord /></ProtectedRoute>} />
        <Route path="/my-enrollments" element={<ProtectedRoute><MyEnrollments /></ProtectedRoute>} />
        <Route path="/player/:courseId" element={<ProtectedRoute><Player /></ProtectedRoute>} />
        <Route path="/loading/:path" element={<ProtectedRoute><Loading /></ProtectedRoute>} />

        {/* ==========================================
            👨‍🏫 EDUCATOR ROUTES
           ========================================== */}
        <Route path="/educator" element={<ProtectedRoute><Educator /></ProtectedRoute>}>
          <Route path="" element={<Dashboard />} />
          <Route path="add-course" element={<AddCourse />} />
          <Route path="my-courses" element={<MyCourses />} />
          <Route path="student-enrolled" element={<StudentsEnrolled />} />
        </Route>

        {/* ==========================================
            🛡️ ADMIN ROUTES (THE BOSS ZONE)
           ========================================== */}
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute allowedRole="admin">
              <Admin />
            </ProtectedRoute>
          }
        >
          {/* Nested routes inside Admin.jsx layout */}
          <Route path="" element={<AdminDashboard />} />
          <Route path="users" element={<ManageUsers />} />
          <Route path="courses" element={<CourseManager />} />
          <Route path="exams" element={<QuestionBank />} />
          <Route path="settings" element={<Settings />} />
        </Route>

      </Routes>
    </div>
  );
};

export default App;