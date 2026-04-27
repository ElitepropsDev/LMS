import express from 'express';
// Combine all imports into one single line
import { getAdminDashboardData, 
    getAllStudents, 
    updateUserRole, 
    getAllCourses,  
    deleteCourse 
} from '../controllers/adminController.js';
import authAdmin from '../middlewares/authAdmin.js'; 
import { addQuestion, getQuestions } from '../controllers/adminController.js';


const adminRouter = express.Router();

// Dashboard Route
adminRouter.get('/dashboard-data', authAdmin, getAdminDashboardData);

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