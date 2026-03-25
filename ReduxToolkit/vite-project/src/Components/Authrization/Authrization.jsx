import { useState } from "react";
import axios from "axios";

export default function Autherization() {
  const [data, setData] = useState();

  const token = localStorage.getItem("access_token");
  const authrization = async () => {
    try {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/auth/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      Autherization
      {console.log(data.avatar)}
      <button onClick={authrization}>display image</button>
      <img src={data.avatar} alt="" />
    </>
  );
}
