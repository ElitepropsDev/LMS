import React from "react";
import { Routes, Route, useMatch } from "react-router-dom";
import Navbar from "./components/student/Navbar";
import Home from "./pages/student/Home";
import CourseDetails from "./pages/student/CourseDetails";
import CoursesList from "./pages/student/CoursesList";
import Dashboard from "./pages/educator/Dashboard";
import AddCourse from "./pages/educator/AddCourse";
import MyCourses from "./pages/educator/MyCourses";
import StudentsEnrolled from "./pages/educator/StudentsEnrolled";
import Educator from "./pages/educator/Educator";
import "quill/dist/quill.snow.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Player from "./pages/student/Player";
import MyEnrollments from "./pages/student/MyEnrollments";
import Loading from "./components/student/Loading";
import ProgramPreview from "./components/student/ProgramPreview";
import FeatureHighlights from "./components/student/FeatureHighlights";
import UpcomingSessions from "./components/student/UpcomingSessions";
import OfflineFeatures from "./components/student/OfflineFeatures";
import ProgressTracking from "./components/student/ProgressTracking";
import PricingTrust from "./components/student/PricingTrust";
import Dashbord from "./pages/student/Dashboard";
import JambExam from "./components/student/JambExam";
import Contact from "./components/student/Contact";
import Login from "./components/student/Login";
import AdminDashboard from "./pages/admin/AdminDashboard";

// 🔐 IMPORT PROTECTED ROUTE
import ProtectedRoute from "./components/ProtectedRoute";
import Sidebar from "./components/admin/Sidebar";

const App = () => {
  const isEducatorRoute = useMatch("/educator/*");
  const isAdminRoute = useMatch("/admin/*");

  return (
    <div className="text-default min-h-screen bg-white">
      <ToastContainer />

      {/* Navbar only for student area */}
      {!isEducatorRoute && !isAdminRoute && <Navbar />}

      <Routes>
        {/* 🌍 PUBLIC ROUTES */}
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

        {/* 🔐 PROTECTED STUDENT ROUTES */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashbord />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-enrollments"
          element={
            <ProtectedRoute>
              <MyEnrollments />
            </ProtectedRoute>
          }
        />

        <Route
          path="/player/:courseId"
          element={
            <ProtectedRoute>
              <Player />
            </ProtectedRoute>
          }
        />

        <Route
          path="/loading/:path"
          element={
            <ProtectedRoute>
              <Loading />
            </ProtectedRoute>
          }
        />

        {/* 👨‍🏫 EDUCATOR ROUTES */}
        <Route path="/educator" element={<Educator />}>
          <Route path="" element={<Dashboard />} />
          <Route path="add-course" element={<AddCourse />} />
          <Route path="my-courses" element={<MyCourses />} />
          <Route path="student-enrolled" element={<StudentsEnrolled />} />
        </Route>

        {/* 🛡️ ADMIN LAYOUT */}
        <Route
          path="/admin"
          element={
            <div className="flex min-h-screen">
              <Sidebar />
              <div className="flex-1 bg-gray-50">
                <AdminDashboard />
              </div>
            </div>
          }
        >
          {/* We will add more admin sub-pages here later! */}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
