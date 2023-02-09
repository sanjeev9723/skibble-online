import React, { useContext } from "react";
import { AppContext } from "../Pages/Home";

const Course = ({ course, courseIndex }) => {
  const { editCourse, deleteCourse, toggleAddCourseComponent } =
    useContext(AppContext);
  return (
    <div className="container">
      <div className="card">
        <img
          src="https://import.cdn.thinkific.com/702588/courses/2003953/qRAHI6CKRUCNK4IcueDS_thumnail.png"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{course.title}</h5>

          <div className="card">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Duration <b> {course.duration}4hrs</b>{" "}
              </li>
              <li className="list-group-item">
                Author <b>{course.author}</b>
              </li>
            </ul>
          </div>

          <a className="btn btn-primary">Buy for {course.price}</a>
          <a
            className="btn"
            onClick={() => {
              editCourse(course.id);
              toggleAddCourseComponent();
            }}
          >
            Edit
          </a>
          <a className="btn" 
          onClick={ () =>{
            deleteCourse(course.id)
        }}>
            Delete{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Course;
