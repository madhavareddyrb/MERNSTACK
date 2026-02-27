import { useEffect, useState } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";

export default function GetMethod() {
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos",
        {
          params: { _limit: 10 },
        },
      );

      setUserData(data);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  function displayData() {
    return userData.map(function (usersData) {
      return (
        <>
          <div>
            <p>
              {usersData.id}.{usersData.title} -{" "}
              {usersData.completed ? "Completed" : "Not Completed"}
            </p>
          </div>
        </>
      );
    });
  }

function searchFilter(){
  if(userData.includes(search)){
    return userData
  }
}

  if (loading) return 'Loading """"';
  if (error)
    return (
      <>
        "NetWork Error"{" "}
        <button>
          <a href="http://localhost:5173/">Retry</a>
        </button>
      </>
    );
  return (
    <>
      <h3>Get Method</h3>
      <search>
        <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} />
        {console.log(search)
        }
        <button type="submit" onClick={searchFilter}>Search</button>
      </search>
      <div>{displayData()}</div>

      <button onClick={fetchUsers}>BUtton</button>
    </>
  );
}
