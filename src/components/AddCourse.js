import React from "react";
import { useState, useRef } from "react";

const AddCourse = ({ onSave }) => {
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
    onSave(newCourse);
      title: title.current.value = " "
      duration: duration.current.value = " "
      author: author.current.value  = " "
      price: price.current.value  = " "
    
  }
  return (
    <div className="container">
      <h5>Add Course</h5>
      <form onSubmit={handleSave}>
        <div class="row p-4">
          <div class="col">
            <input
              ref={title}
              type="text"
              class="form-control"
              placeholder="Course Title"
              aria-label="Course Title "
              required
            />
          </div>
          <div class="col">
            <input
              ref={duration}
              type="number"
              class="form-control"
              placeholder="Course Duration"
              aria-label="Course Duration"
              required
            />
          </div>
          <div class="col">
            <input
              ref={author}
              type="text"
              class="form-control"
              placeholder="Course Author"
              aria-label="Course Author"
              required
            />
          </div>
          <div class="col">
            <input
              ref={price}
              type="number"
              class="form-control"
              placeholder="Course Price"
              aria-label="Course Price"
              required
            />
          </div>
          <div class="col">
            <button class="btn btn-primary">Save course</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCourse;
