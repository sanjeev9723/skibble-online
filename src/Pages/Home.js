import { Link } from "react-router-dom";
import Header from "../components/Header";
import AddCourse from "../components/AddCourse";
import CourseList from "../components/CourseList";
import { useState, createContext } from "react";
import Navbar from "../components/Navbar";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";

export const AppContext = createContext(null);

const Home = () => {
  const [toggleAddCourse, setToggleAddCourse] = useState(false);

  const [courses, setCourses] = useState([
    {
      id: "random1",
      title: "Html Begginer",
      author: " Sanjeev",
      price: 400,
    },
    {
      id: "random2",
      title: "CSS Begginer",
      author: " Sanjeev",
      price: 500,
    },
  ]);
  function editCourse(id) {
    console.log(id);
    // setCourses((course) =>{
    //   return courses.filter((course) => course.id!==id)
    // })
  }
  function deleteCourse(id) {
    // console.log("delete clicked");
    setCourses((course) =>{
      return courses.filter((course) => course.id!==id)
    })
  }
  function toggleAddCourseComponent() {
    setToggleAddCourse(!toggleAddCourse);
  }
  function handleSaveCourse(newCourse) {
    setCourses([...courses, newCourse]);
  }
  return (
    <section className="section">
      <div className="App">
        <AppContext.Provider
          value={{
            courses,
            setCourses,
            handleSaveCourse,
            editCourse,
            deleteCourse,
            toggleAddCourseComponent,
          }}
        >
          {/* <Header /> */}
          <CourseList />
          {toggleAddCourse ? <AddCourse /> : null}
        </AppContext.Provider>
      </div>
    </section>
  );
};

export default Home;
