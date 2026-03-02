import axios from "axios";
import { useEffect, useState } from "react";

export default function GetMethod() {
  const [getApiResponse, setGetApiResponse] = useState([]);

  useEffect(() => {
    getVar();
  }, []);
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

  return (
    <>
      <div>Get Method and adding limit query to fetch only first 10</div>
      <div>{LoopData()}</div>
    </>
  );
}
