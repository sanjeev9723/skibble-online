import { Link, Outlet } from "react-router-dom"
import Header from "../components/Header"
import Navbar from "../components/Navbar"

function SharedLayout() {
  return (
    <div>
        {/* <Navbar/> */}
        <Header/>
        <Outlet/>
      
    </div>
  )
}

export default SharedLayout
