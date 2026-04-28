import express from 'express';
import { 
    getAdminDashboardData, 
    getAllStudents, 
    updateUserRole, 
    getAllCourses,  
    deleteCourse,
    addQuestion, 
    getQuestions,
    getStudentProfiles // <-- Imported the new function
} from '../controllers/adminController.js';
import authAdmin from '../middlewares/authAdmin.js'; 

const adminRouter = express.Router();

// Dashboard Route
adminRouter.get('/dashboard-data', authAdmin, getAdminDashboardData);

// --- NEW: Student Profiles Route ---
adminRouter.get('/student-profiles', authAdmin, getStudentProfiles);

// Manage Students Routes
adminRouter.get('/all-students', authAdmin, getAllStudents);
adminRouter.post('/update-role', authAdmin, updateUserRole);

// Course Management Routes
adminRouter.get('/all-courses', authAdmin, getAllCourses);
adminRouter.post('/delete-course', authAdmin, deleteCourse);

// Question Bank Routes
adminRouter.post('/add-question', authAdmin, addQuestion);
adminRouter.get('/all-questions', authAdmin, getQuestions);

export default adminRouter;