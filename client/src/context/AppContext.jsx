import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import humanizeDuration from "humanize-duration";

export const AppContext = createContext();

export const AppContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const currency = import.meta.env.VITE_CURRENCY;

    const navigate = useNavigate();

    // =========================
    // 🔐 AUTH STATE (JWT)
    // =========================
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    const [showLogin, setShowLogin] = useState(false);
    const [isEducator, setIsEducator] = useState(false);

    const [allCourses, setAllCourses] = useState([]);
    const [userData, setUserData] = useState(null);
    const [enrolledCourses, setEnrolledCourses] = useState([]);

    // =========================
    // 🔐 LOGIN / LOGOUT
    // =========================
    const loginUser = (userData, tokenData) => {
        setUser(userData);
        setToken(tokenData);

        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("token", tokenData);
    };

    const logoutUser = () => {
        setUser(null);
        setToken(null);
        setUserData(null);
        setIsEducator(false);
        setEnrolledCourses([]);

        localStorage.removeItem("user");
        localStorage.removeItem("token");
    };

    // =========================
    // 🔐 LOAD AUTH ON START
    // =========================
    useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const savedToken = localStorage.getItem("token");

    if (savedUser && savedToken) {
        setUser(JSON.parse(savedUser));
        setToken(savedToken);
    }
}, []);

    // =========================
    // 🔐 AXIOS AUTH HEADER
    // =========================
    useEffect(() => {
        if (token) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        } else {
            delete axios.defaults.headers.common["Authorization"];
        }
    }, [token]);

    // =========================
    // 📚 COURSES
    // =========================
    const fetchAllCourses = async () => {
        try {
            const { data } = await axios.get(backendUrl + "/api/course/all");

            if (data.success) {
                setAllCourses(data.courses);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    // =========================
    // 👤 USER DATA
    // =========================
    const fetchUserData = async () => {
        try {
            if (!token) return;

            const { data } = await axios.get(
                backendUrl + "/api/user/data"
            );

            if (data.success) {
                setUserData(data.user);

                if (data.user.role === "educator") {
                    setIsEducator(true);
                }
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    // =========================
    // 🎓 ENROLLED COURSES
    // =========================
    const fetchUserEnrolledCourses = async () => {
        try {
            if (!token) return;

            const { data } = await axios.get(
                backendUrl + "/api/user/enrolled-courses"
            );

            if (data.success) {
                setEnrolledCourses(data.enrolledCourses.reverse());
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    // =========================
    // ⏱️ HELPERS
    // =========================
    const calculateChapterTime = (chapter) => {
        let time = 0;
        chapter.chapterContent.forEach((lecture) => {
            time += lecture.lectureDuration;
        });

        return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
    };

    const calculateCourseDuration = (course) => {
        let time = 0;

        course.courseContent.forEach((chapter) => {
            chapter.chapterContent.forEach((lecture) => {
                time += lecture.lectureDuration;
            });
        });

        return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
    };

    const calculateRating = (course) => {
        if (!course.courseRatings || course.courseRatings.length === 0) return 0;

        let total = 0;
        course.courseRatings.forEach(r => total += r.rating);

        return Math.floor(total / course.courseRatings.length);
    };

    const calculateNoOfLectures = (course) => {
        let total = 0;

        course.courseContent.forEach(chapter => {
            if (Array.isArray(chapter.chapterContent)) {
                total += chapter.chapterContent.length;
            }
        });

        return total;
    };

    // =========================
    // 🚀 INIT LOAD
    // =========================
    useEffect(() => {
        fetchAllCourses();
    }, []);

    useEffect(() => {
        if (user && token) {
            fetchUserData();
            fetchUserEnrolledCourses();
        }
    }, [user, token]);

    // =========================
    // 📦 CONTEXT VALUE
    // =========================
    const value = {
        backendUrl,
        currency,
        navigate,

        user,
        setUser,
        token,
        setToken,

        loginUser,
        logoutUser,

        showLogin,
        setShowLogin,

        isEducator,
        setIsEducator,

        allCourses,
        fetchAllCourses,

        userData,
        setUserData,

        enrolledCourses,
        fetchUserEnrolledCourses,

        calculateChapterTime,
        calculateCourseDuration,
        calculateRating,
        calculateNoOfLectures
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};