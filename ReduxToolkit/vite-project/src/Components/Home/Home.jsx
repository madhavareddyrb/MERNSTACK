import { NavLink } from "react-router-dom"
import Login from "../Login/Login"

export default function Home(){
  return(<>
  <h2>HOme Page</h2>
  <NavLink to="/login">Login</NavLink>
  </>)
}