import React from "react";
import {  useRef,useContext } from "react";
import { AppContext } from "../Pages/Home";

const AddCourse = () => {
  const {handleSaveCourse  } = useContext(AppContext);
  const title = useRef();
  const duration = useRef();
  const author = useRef();
  const price = useRef();

  function handleSave(e) {
    e.preventDefault();
    const newCourse = {
      id: "SKIB" + Math.round(Math.random() * 999),
      title: title.current.value,
      duration: duration.current.value,
      author: author.current.value,
      price: price.current.value,
    };
    handleSaveCourse(newCourse);
      title.current.value = " ";
       duration.current.value = " ";
       author.current.value  = " ";
       price.current.value  = " ";
    
  }
  return (
    <div className="container">
      <h5>Add Course</h5>
      <form onSubmit={handleSave}>
        <div className="row p-4">
          <div className="col">
            <input
              ref={title}
              type="text"
              className="form-control"
              placeholder="Course Title"
              aria-label="Course Title "
              required
            />
          </div>
          <div className="col">
            <input
              ref={duration}
              type="number"
              className="form-control"
              placeholder="Course Duration"
              aria-label="Course Duration"
              required
            />
          </div>
          <div className="col">
            <input
              ref={author}
              type="text"
              className="form-control"
              placeholder="Course Author"
              aria-label="Course Author"
              required
            />
          </div>
          <div className="col">
            <input
              ref={price}
              type="number"
              className="form-control"
              placeholder="Course Price"
              aria-label="Course Price"
              required
            />
          </div>
          <div className="col">
            <button 
            className="btn btn-primary">Save course</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCourse;
