import axios from "axios";
import { useState, useEffect } from "react";

export default function PostMethod() {
  const [formData, setFormData] = useState({ name: "", email: "", number: "" });
  const [users, setUsers] = useState([]);
  const [loading, setLaoding] = useState(false);
  const [error, setError] = useState(null);

  // form change handler

  const handleFormChange = (e) => {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.name);

    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Validate before post

  const validateForm = () => {
    if (!formData.name.trim()) return "name is equeired";
    if (!formData.email.includes("@")) return "Invalid Email";
  };

  const submitHandle = async (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return <div>Error</div>
    }

    try {
      setLaoding(true);
      setError(null);

      const { data } = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        formData,
        { headers: { "content-type": "application/json" } },
      );

      setUsers(prev => [...prev, data])
      setFormData({ name: "", email: "", number: "" });
    } catch (error) {
      setError(error.response?.data.message || "failed to create user")
    }
    finally{
      setLaoding(false)
    }
  };

  return (
    <>
      <div>Post Method creating new data</div>
      <label htmlFor="name">Name: </label>
      <input
        name="name"
        onChange={handleFormChange}
        type="text"
        value={formData.name}
      />

      <label htmlFor="email">Email: </label>
      <input
        name="email"
        onChange={handleFormChange}
        type="email"
        value={formData.email}
      />

      <button onClick={submitHandle} type="submit" disabled={loading}>{loading ? "creating":"Create User"} </button>
    </>
  );
}
