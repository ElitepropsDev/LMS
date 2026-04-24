import React, { useContext, useEffect, useState } from 'react';
import Footer from '../../components/student/Footer';
import { assets } from '../../assets/assets';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { AppContext } from '../../context/AppContext';
import { toast } from 'react-toastify';
import humanizeDuration from 'humanize-duration';
import YouTube from 'react-youtube';
import Loading from '../../components/student/Loading';

const CourseDetails = () => {

  const { id } = useParams();

  const [courseData, setCourseData] = useState(null);
  const [playerData, setPlayerData] = useState(null);
  const [isAlreadyEnrolled, setIsAlreadyEnrolled] = useState(false);

  const {
    backendUrl,
    currency,
    userData,
    token,
    calculateChapterTime,
    calculateCourseDuration,
    calculateRating,
    calculateNoOfLectures
  } = useContext(AppContext);

  const fetchCourseData = async () => {

    try {

      const { data } = await axios.get(backendUrl + '/api/course/' + id);

      if (data.success) {
        setCourseData(data.courseData);
      } else {
        toast.error(data.message);
      }

    } catch (error) {
      toast.error(error.message);
    }
  };

  const [openSections, setOpenSections] = useState({});

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const enrollCourse = async () => {

    try {

      if (!userData) {
        return toast.warn('Login to Enroll');
      }

      if (isAlreadyEnrolled) {
        return toast.warn('Already Enrolled');
      }

      const { data } = await axios.post(
        backendUrl + '/api/user/purchase',
        { courseId: courseData._id },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (data.success) {
        const { session_url } = data;
        window.location.replace(session_url);
      } else {
        toast.error(data.message);
      }

    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchCourseData();
  }, []);

  useEffect(() => {
    if (userData && courseData) {
      setIsAlreadyEnrolled(
        userData.enrolledCourses.includes(courseData._id)
      );
    }
  }, [userData, courseData]);

  return courseData ? (
    <>
      <div className="flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 md:pt-20 pt-10 text-left">

        <div className="absolute top-0 left-0 w-full h-section-height -z-1 bg-gradient-to-b from-cyan-100/70"></div>

        <div className="max-w-xl z-10 text-gray-500">

          <h1 className="md:text-course-deatails-heading-large text-course-deatails-heading-small font-semibold text-gray-800">
            {courseData.courseTitle}
          </h1>

          <p className="pt-4 md:text-base text-sm"
            dangerouslySetInnerHTML={{ __html: courseData.courseDescription.slice(0, 200) }}>
          </p>

          <p className='text-sm'>
            Course by <span className='text-blue-600 underline'>
              {courseData.educator.name}
            </span>
          </p>

        </div>

      </div>

      <Footer />
    </>
  ) : <Loading />;
};

export default CourseDetails;