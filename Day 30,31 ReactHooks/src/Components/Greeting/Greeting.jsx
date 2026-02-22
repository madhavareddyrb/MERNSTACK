import { useState } from "react";

function Greeting() {
  const [userName, setUserName] = useState("chestha");
  function handleuserName(e) {
    // console.log(e);
    setUserName(e.target.value);
  }
  function handleusername(e){
    return setUserName("")
  }

  return (
    <>
      <h3>Hello {userName} 👋🏻</h3>
      <input type="text" value={userName} onChange={handleuserName} />
      <button onClick={handleusername}>Clear</button>
    </>
  );
}

export default Greeting;
