import AddCourse from "../components/AddCourse";
import CourseList from "../components/CourseList";
import { useState, createContext } from "react";
import EditCourse from "../components/EditCourse";

export const AppContext = createContext(null);

const Home = () => {
  const [toggleAddCourse, setToggleAddCourse] = useState(false);
  const [editActive, setEditActive] = useState(null);
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
  function editCourse(course) {
    console.log(course);
    setEditActive(course);
  }
  function handleEditCourse(updatedCourse) {
    const copyCourses = [...courses];
    copyCourses.filter((course, index) => {
      if (course.id === updatedCourse.id) {
        copyCourses.splice(index, 1, updatedCourse);
      }
    });

    setCourses([...copyCourses]);
  }
  function deleteCourse(id) {
    // console.log("delete clicked");
    setCourses((course) => {
      return courses.filter((course) => course.id !== id);
    });
  }
  function toggleAddCourseComponent() {
    setToggleAddCourse(!toggleAddCourse);
  }
  function handleSaveCourse(newCourse) {
    if (editActive != null) {
      return;
    }
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
            editActive,
            setEditActive,
            handleEditCourse,
          }}
        >
          {/* <Header /> */}
          <CourseList />
          {toggleAddCourse ? <AddCourse /> : null}
          <EditCourse />
        </AppContext.Provider>
      </div>
    </section>
  );
};

export default Home;
