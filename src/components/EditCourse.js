import { useRef, useContext, useEffect } from "react";
import { AppContext } from "../Pages/Home";
import "./components.css";
const EditCourse = () => {
  const { editActive,handleEditCourse } = useContext(AppContext);
  const title = useRef();
  const duration = useRef();
  const author = useRef();
  const price = useRef();

  useEffect(() => {
    if(editActive==null) return

    title.current.value = editActive.title;
    duration.current.value = editActive.duration;
    author.current.value = editActive.author;
    price.current.value = editActive.price;
  }, [editActive]);

  function handleEdit(e) {
    e.preventDefault();
    const newCourse = {
      id:editActive.id,
      title: title.current.value,
      duration: duration.current.value,
      author: author.current.value,
      price: price.current.value,
    };
    handleEditCourse(newCourse);
  }
  return (
    <div className="sticky-container">
      <div className="container">
        <h5>Edit Course</h5>
        <form onSubmit={handleEdit}>
          <div className="row p-4">
            <div className="col col-lg-6 col-md-6">
              <input
                ref={title}
                type="text"
                className="form-control"
                placeholder="Course Title"
                aria-label="Course Title "
                required
              />
            </div>
            <div className="col col-lg-6 col-md-6">
              <input
                ref={duration}
                type="number"
                className="form-control"
                placeholder="Course Duration"
                aria-label="Course Duration"
                required
              />
            </div>
            <div className="col col-lg-6 col-md-6">
              <input
                ref={author}
                type="text"
                className="form-control"
                placeholder="Course Author"
                aria-label="Course Author"
                required
              />
            </div>
            <div className="col col-lg-6 col-md-6">
              <input
                ref={price}
                type="number"
                className="form-control"
                placeholder="Course Price"
                aria-label="Course Price"
                required
              />
            </div>
            <div className="col col-lg-6 col-md-6">
              <button className="btn btn-primary">Edit course</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCourse;
