import React from "react";


const Course =({course}) => {
    return(
        <div className="container">
        <div className="card" >
            <img       src="https://import.cdn.thinkific.com/702588/courses/2003953/qRAHI6CKRUCNK4IcueDS_thumnail.png"
            className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{course.title}</h5>
              
              <div className="card" >
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Duration <b> {course.duration}4hrs</b> </li>
                  <li className="list-group-item">Author <b>{course.author}</b></li>
    
                </ul>
              </div>
    
              <a className="btn btn-primary">Buy for {course.price}</a>
              
            </div>
          </div>
    </div>
    )

}

export default Course;