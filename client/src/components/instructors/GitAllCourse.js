/* eslint-disable */
import React from "react";
import CourseItem from "./CourseItem";

export default function GitAllCourse({ courses }) {
  return courses.map((course) => {
    return (
      <div
        style={{
          border: " 1px solid black",
          width: "100%",
          display: "flex",
          flexdirection: "column",
          flexWrap: "wrap",
        }}
      >
        <CourseItem course={course} Key={course.id}></CourseItem>
      </div>
    );
  });
}
