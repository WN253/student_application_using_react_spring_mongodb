import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import './mytable.css';

export default function Student_table() {

const[Users,setUsers]=useState([]);

useEffect(() => {
  (async () => await Load())();
    }, []);

  async function  Load()
  {
     const result = await axios.get(
         "http://localhost:8080/student-application/getall");
         const sortedUsers=result.data.sort((a,b)=>a.name.localeCompare(b.name))
         setUsers(sortedUsers);
        }
  // const sorted=Users.sort((a,b) => {
  //   const isReverse = (sortType === 'asc')? 1:-1;
  //   return isReverse*a.name.localeCompare(b.name)
  // });
    return (
        <div>
        <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Admission Number</th>
            <th>Student Name</th>
            <th>Date of Birth</th>
            <th>Class</th>
            <th>Division</th>
            <th>Gender</th>
          </tr>
        </thead>  

    
         
        {Users.map(function(user)
        {
          
          return(
          <tbody key={user._id}>
            <tr>
                <td>R-{user.admission_number}</td>
                <td>{user.name}</td>
                <td>{user.dob}</td>
                <td>{user.classnumber}</td>
                <td>{user.division}</td>
                <td>{user.gender}</td>        
            </tr>
        </tbody>
        );
        })}
        
        </table>
        </div>
    );
  }
  