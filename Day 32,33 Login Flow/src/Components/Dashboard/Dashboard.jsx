import React from "react"
import { useNavigate } from "react-router-dom"

export default function Dashboard(){
  const navigate = useNavigate()
  function LogOut(){
    localStorage.removeItem("user_id");
    localStorage.removeItem("enctoken")
    navigate("/", {replace:true})
  }
return (
  <>
    <div>
      Good Morning <span>{localStorage.getItem("user_id")}</span>
    </div>
<br />
    <div>DashBoard</div>
<br />
    <button onClick={LogOut}>LogOut</button>
  </>
);
}
