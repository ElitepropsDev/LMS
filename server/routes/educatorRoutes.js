import express from 'express'
import {
    addCourse,
    educatorDashboardData,
    getEducatorCourses,
    getEnrolledStudentsData,
    updateRoleToEducator
} from '../controllers/educatorController.js';

import upload from '../configs/multer.js';
import { protect, protectEducator } from '../middlewares/authMiddleware.js';

const educatorRouter = express.Router()

// 🔐 MUST BE LOGGED IN TO BECOME EDUCATOR
educatorRouter.get('/update-role', protect, updateRoleToEducator)

// 🔐 ONLY EDUCATORS CAN ACCESS BELOW

educatorRouter.post(
  '/add-course',
  protect,
  protectEducator,
  upload.single('image'),
  addCourse
)

educatorRouter.get('/courses', protect, protectEducator, getEducatorCourses)

educatorRouter.get('/dashboard', protect, protectEducator, educatorDashboardData)

educatorRouter.get('/enrolled-students', protect, protectEducator, getEnrolledStudentsData)

export default educatorRouter;