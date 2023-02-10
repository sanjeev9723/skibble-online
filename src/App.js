import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Error from "./Pages/Error";
// import Navbar from "./components/Navbar";
// import Header from "./components/Header";
import Login from "./Pages/Login";

import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import SharedLayout from "./Pages/SharedLayout";
import Dashboard from "./Pages/Dashboard";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login setUser={setUser}></Login>} />
          <Route
            path="dashboard"
            element={<Dashboard user={user}></Dashboard>}
          />

          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
