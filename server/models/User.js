import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true, select: false },

    role: {
        type: String,
        // 🛡️ Admin role remains included as per your previous code
        enum: ["student", "educator", "admin"], 
        default: "student"
    },

    imageUrl: { type: String, default: "" },

    // --- NEW STUDENT PROFILE FIELDS ---
    // Added as optional so existing logins don't break
    gender: { type: String, default: "" },
    schoolName: { type: String, default: "" },
    location: { type: String, default: "" },
    track: { type: String, default: "" },
    level: { type: String, default: "" },
    examStatus: { type: String, default: "" },
    phoneNumber: { type: String, default: "" },
    isProfileComplete: { type: Boolean, default: false }, 
    // ----------------------------------

    enrolledCourses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course'
        }
    ],
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;