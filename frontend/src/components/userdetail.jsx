import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetail = (props) => {
    const { id } = useParams();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
  
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://127.0.0.1:8000/api/users");
        
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      setTimeout(() => {
        fetchData();
      }, 1000);
    }, []);

    let correctId = id-1
    let singleUser = users[correctId];

    if (loading) return <div><p className="status"  style={{fontSize:"60px"}}>Loading...</p></div>;
    if (error) return <p className="status error">{error}</p>;
  
    return <>
    <div style={{margin:"20px"}}>
      <h1>{props.pagetype} Page</h1>
      <p><strong>ID:</strong> {singleUser.id}</p>
      <p><strong>Name:</strong> {singleUser.name}</p>
      <p><strong>Email:</strong> {singleUser.email}</p>
      <p><strong>Description:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia saepe, itaque velit vitae consectetur vel quis laudantium, eum debitis animi voluptas accusantium veritatis nesciunt alias quod assumenda iure, excepturi nostrum.</p>
    </div>
    </>;
  };
  
  export default UserDetail;
  