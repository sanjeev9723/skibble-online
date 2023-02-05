import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import AddCourse from './components/AddCourse';
import CourseList from './components/CourseList';
import "/node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {

  const [courses, setCourses] = useState([
    {
      id: "random1",
      title : "Html Begginer",
      author: " Sanjeev",
      price : 400,
    },
    {
      id: "random2",
      title : "CSS Begginer",
      author: " Sanjeev",
      price : 500,
    },
  ])
  function handleSaveCourse(newCourse) {
    setCourses([...courses,newCourse])
  }
  return (
    <div className="App">
     <Header/>
     <AddCourse onSave={handleSaveCourse}/>
     <CourseList courses={courses}/>
    </div>
  );
}

export default App;
