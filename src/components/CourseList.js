import React, { useContext } from "react";
import Course from "./Course";
import { AppContext } from "../Pages/Home";

const CourseList = ( ) => {
  const { courses} = useContext(AppContext);

    
  return (
    <div className="container">
      <div className="row">
        {courses.map((course, index) => {
          return (
            <div key={index} className="col col-lg-4 col-md-6 col-sm-12">
            <Course key={index}  course={course} />
          </div>
          );
       
        })}
      </div>
    </div>
  );
};

export default CourseList;
