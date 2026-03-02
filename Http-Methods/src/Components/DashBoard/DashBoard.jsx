import { useState, useEffect } from "react";
import axios from "axios";

export default function DashBoard() {
  const [getApiResponse, setGetApiResponse] = useState([]);

  const getVar = async () => {
    try {
      const params = { _limit: 10 };
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/todos`,
        { params },
      );

      setGetApiResponse(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  function LoopData() {
    return getApiResponse.map((objData) => {
      return (
        <>
          <div>
            <h5>
              {objData.title} -
              {objData.completed ? "Completed" : "NotCompleted"}
            </h5>
          </div>
        </>
      );
    });
  }

console.log(getVar());


  return (
    <>
      <button onClick={LoopData}>Get Api Response</button>

      <button></button>
      <button></button>
      <button></button>
    </>
  );
}
