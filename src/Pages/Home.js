import { Link } from "react-router-dom";
import Header from "../components/Header";
import AddCourse from "../components/AddCourse";
import CourseList from "../components/CourseList";
import { useState, createContext } from "react";
 import Navbar from "../components/Navbar";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css"

export const AppContext = createContext(null);

const Home = () => {
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
  function handleSaveCourse(newCourse) {
    setCourses([...courses, newCourse]);
  }
  return (
    <section className="section">
      <div className="App">
        <AppContext.Provider value={{ courses, setCourses, handleSaveCourse }}>
          {/* <Header /> */}
          <AddCourse />
          <CourseList />
        </AppContext.Provider>
      </div>
    </section>
  );
};

export default Home;
