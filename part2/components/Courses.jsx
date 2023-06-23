import React from "react";
import Course from "./Course.jsx";

const Courses = ({courses}) => (
    courses.map(course =>
        <Course key={course.id} course={course}  />
    )
)


export default Courses