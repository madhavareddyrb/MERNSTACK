import { useState, useEffect } from "react";
import "./RestaurantList.css";
import { NavLink } from "react-router-dom";
import "./RestaurantList.css"
export default function RestaurantList() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      if (!response.ok) {
        setError("no api response");
      }else{
        "Response Success"
      }
      const data = await response.json();
      setUserData(data);
    } catch (err) {
      setError("Failed to load");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading Restaurants</p>
  if (error) return <p>{error}</p>

  return (
    <>
      <h3>Featch Restarant Data</h3>
      <div>

      </div>
      <div className="list">
        {userData.map((product, index) => {
          return (
            <>
              <div className="card-list">
                <p>{product.email} </p>
                <p>{product.name}</p>
                <p>{product.phone}</p>
              </div>
            </>
          );
          
        })}
        
        <NavLink className="navLink" to="/login">Login</NavLink>
      </div>
    </>
  );
}

/*
Interview questions — answer these in code comments inside your file 
Q: What does finally guarantee that try alone does not? 

ANS: finally gurantee that it will return something if status if success or fail


Q: What does response.ok check? 
ANS: it checks th status of fetch(api) and ok means success


*/
