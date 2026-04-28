import User from "../models/User.js";
import Course from "../models/Course.js"; 
import Question from "../models/Question.js";

export const getAdminDashboardData = async (req, res) => {
    try {
        const [totalStudents, totalEducators, totalCourses, recentUsers] = await Promise.all([
            User.countDocuments({ role: 'student' }),
            User.countDocuments({ role: 'educator' }),
            Course.countDocuments({}),
            User.find({}).select("-password").sort({ createdAt: -1 }).limit(5) 
        ]);

        res.json({
            success: true,
            stats: {
                totalStudents,
                totalEducators,
                totalCourses,
                recentUsers
            }
        });

    } catch (error) {
        console.error("Admin Dashboard Error:", error);
        res.json({ success: false, message: error.message });
    }
};

// --- NEW: Get Detailed Student Profiles ---
export const getStudentProfiles = async (req, res) => {
    try {
        // Fetches only students who marked their profile as complete
        const profiles = await User.find({ 
            role: 'student', 
            isProfileComplete: true 
        }).select('-password').sort({ updatedAt: -1 });

        res.json({ success: true, profiles });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

// Add a single question
export const addQuestion = async (req, res) => {
    try {
        const { subject, questionText, options, explanation, difficulty } = req.body;
        const newQuestion = new Question({ subject, questionText, options, explanation, difficulty });
        await newQuestion.save();
        res.json({ success: true, message: "Question added to bank" });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

// Get questions (with optional subject filter)
export const getQuestions = async (req, res) => {
    try {
        const { subject } = req.query;
        const filter = subject ? { subject } : {};
        const questions = await Question.find(filter).sort({ createdAt: -1 });
        res.json({ success: true, questions });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

// Get all students for the "Manage Students" page
export const getAllStudents = async (req, res) => {
    try {
        const students = await User.find({ role: 'student' }).select('-password').sort({ createdAt: -1 });
        res.json({ success: true, students });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message });
    }
};

// Change a user's role (Promote/Demote)
export const updateUserRole = async (req, res) => {
    try {
        const { userId, newRole } = req.body;
        await User.findByIdAndUpdate(userId, { role: newRole });
        res.json({ success: true, message: `User role updated to ${newRole}` });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message });
    }
};

// Get all courses with Educator details
export const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find({})
            .populate('educator', 'name email')
            .sort({ createdAt: -1 });

        res.json({ success: true, courses });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message });
    }
};

// Delete a course (Admin Power)
export const deleteCourse = async (req, res) => {
    try {
        const { courseId } = req.body;
        await Course.findByIdAndDelete(courseId);
        res.json({ success: true, message: "Course deleted successfully" });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message });
    }
};