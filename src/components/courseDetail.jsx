// courseDetail.js

import React from "react";
import NavBar from "./navbar";
import { useParams } from "react-router-dom";

function CourseDetail({ courses }) {
  const { id } = useParams();
  const course = courses.find((course) => course.id === parseInt(id));

  // Existing state for demonstration purposes, you can replace it with the actual state logic
  const [enrolledStudents, setEnrolledStudents] = React.useState(10289);

  // Existing click handler for demonstration purposes, you can replace it with the actual logic
  const handleEnrollClick = () => {
    setEnrolledStudents(enrolledStudents + 1);
  };

  return (
    <>
      <NavBar />
      <div className="bg-gray-200 h-96 flex flex-col w-screen ">
        <div>
          <h1 className="m-3 md:ml-8 md:mt-24 mt-32 md:text-5xl md:tracking-wide text-3xl tracking-normal font-semibold">
            {course.courseTitle}
          </h1>
          <p className="text-xs mt-1 ml-3 md:ml-8">
            Taught In English |{" "}
            <span className="underline hover:text-blue-500">
              20 Language Available
            </span>{" "}
            |
          </p>
          <button
            className="hover:bg-blue-500 text-sm py-3 bg-blue-900 text-white md:mr-[1600px] md:ml-8 mx-3 mt-8 rounded-md"
            onClick={handleEnrollClick}
          >
            Enroll for Free
          </button>
          <p className="ml-3 mt-2 md:mt3 text-xs text-gray-700 hover:text-blue md:ml-8">
            Scholarship Available
          </p>
          <p className="ml-3 md:ml-8 md:mt-3 mt-2 text-xs font-semibold ">
            {enrolledStudents}{" "}
            <span className="text-gray-500 font-light">Students enrolled</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full md:flex-row md:justify-between">
        <div className="ml-3 md:ml-10 mt-3 mb-2">
          <h3 className="text-xl font-semibold">Course</h3>
          <p className="md:w-96 mt-5">{course.courseDescription}</p>
        </div>
        <div className="w-full md:w-px md:h-64 mt-3 h-px bg-gray-300"></div>
        <div className="ml-3 mt-2 mb-2">
          <p>
            Instructor: <b> {course.instructor}</b>
          </p>
          <p className="ml-20 bg-blue-100 mr-52 pl-5 text-blue-900 font-medium rounded-lg text-sm">
            Top Instructor
          </p>
          <p className="md:w-96 md:mr-10 mt-5 md:px-0">
            {course.instructorDescription}
          </p>
        </div>
        <div className="-full md:w-px md:h-64 mt-3 h-px bg-gray-300"></div>
        <div className="ml-3 mt-2 md:mr-20">
          <div className="mb-2">
            <p className="font-semibold">4.8 Stars</p>
            <p className="text-sm text-gray-500">( 3,492 Reviews )</p>
          </div>
          <div className="mb-2">
            <p className="font-semibold">Intermediate Level</p>
            <p className="text-sm text-gray-500">
              Some Related Experience Required
            </p>
          </div>
          <div className="mb-2">
            <p className="font-semibold">{course.totalTime}</p>
          </div>
          <div className="mb-2">
            <p className="font-semibold">Flexible Schedule</p>
            <p className="text-sm text-gray-500">Learn at your own pace</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseDetail;
