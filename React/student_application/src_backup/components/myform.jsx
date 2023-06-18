import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Dropdown from 'react-dropdown';
import './myform.css';

export default function Student_form() {

  // const[Id,setAdmissionNo]=useState('');
  const[adm,setAdmissionNo]=useState('');
  const[name,setStudentName]=useState('');
  const[dob,setDob]=useState('');
  const[classno,setClassNo]=useState('');
  const[division,setDivision]=useState('');
  const[gender,setGender]=useState('');
  const[admdata,setlastadm]=useState([]);

  
  

    async function save(event)
    {
        
    try
        {
         await axios.post("http://localhost:8080/student-application/save",
        {
          admission_number: admdata,
          name: name,
          dob: dob,
          classnumber: classno,
          division: division,
          gender: gender,
       
        });
          alert("Student Registation Successfully");
          // setId("");
          // setAdmissionNo("");
          // setStudentName("");
          // setDob("");
          // setClassNo("");
          // setDivision("");
          // setGender("");
          // Load();
        }
    catch(err)
        {
          alert("User Registation Failed");
        }
   }
   useEffect(() => {
    (async () => await Load())();
      }, []);
   async function  Load()
   {
     const result = await axios.get(
         "http://localhost:8080/student-application/getall");
         
         const temp=result.data[result.data.length-1];
         let int="001";
         if(result.data.length > 0){
          let int=parseFloat(temp.admission_number)+1;
          let int2=int.toString().padStart(3,'0')
          setlastadm(int2);
         }
         else{
          setlastadm(int);
        }
         
   }
   
  //  {admdata.map((adm1,index) => {
  //   let temp=adm1.admission_number;
  //   console.log(adm1.admission_number);
  //  })}



  
  // const optionsDivision = [
  //   {label:"A",value:"A"},
  //   {label:"B",value:"B"},
  //   {label:"C",value:"C"},
  //   {label:"D",value:"D"}
  // ];
  // const defaultOption = optionsDivision[0];
 
   
 
    return (
        <div>
        <h1><b>STUDENT DETAILS</b></h1>
        <div class="container mt-4">
           <form onsubmit="return validateForm()" class="main-form">
              
               <div class="form-group">
                 <label class="mylabel">Admission Number</label>
                 <input type="text" class="form-control" id="studentname" value={`R-${admdata}`} onChange={(event) =>
                {
                  setAdmissionNo(event.target.value)
                }
                }/>
               </div>


               <div class="form-group">
                 <label class="mylabel">Student Name</label>
                 <input type="text" class="form-control" id="studentname" value={name} onChange={(event) =>
                {
                  setStudentName(event.target.value)
                }
                }/>
               </div>


               <div class="form-group">
                 <label  class="mylabel">Date of Birth</label>
                 <input  type="date" class="form-control" id="studentname" value={dob} onChange={(event) =>
                {
                  setDob(event.target.value)
                }
                }/>
               </div>

               
               <div class="form-group" onChange={(event) =>setClassNo(event.target.value)}>
               <label class="mylabel">Class </label>
                <select class="form-select"  id="class">
                  <option value="none" selected disabled hidden>Select an Option</option>
                  <option value="I">I</option>
                  <option value="II">II</option>
                  <option value="III">III</option>
                  <option value="IV">IV</option>
                  <option value="V">V</option>
                  <option value="VI">VI</option>
                  <option value="VII">VII</option>
                  <option value="VIII">VIII</option>
                  <option value="IX">IX</option>
                  <option value="X">X</option>
                  <option value="XI">XI</option>
                  <option value="XII">XI</option>
                </select>

                 {/* <label>Class</label>
                 <input  type="text" value={classno} onChange={(event) =>
                {
                  setClassNo(event.target.value)
                }
                }/> */}
               </div>
               <div class="form-group" onChange={(event) =>setDivision(event.target.value)}>
                
               <label class="mylabel">Division </label>
              <select class="form-select" id="division">
                <option value="none" selected disabled hidden>Select an Option</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
              </select>
      

                 {/* <input  type="text" value={division} onChange={(event) =>
                {
                  setDivision(event.target.value)
                }
                }/> */}
               </div>
               
               <div class="form-group" onChange={(event) =>setGender(event.target.value)}>
               <label class="mylabel" >Gender</label><br />
                 {/* <div class="form-check form-check-inline">
                 <input class="form-check-input" id="inlineRadio1" type="radio" name="gender" value="Male"/>
                 <label class="form-check-label" for="inlineRadio1">Male</label>
                 </div>
                 <input  type="radio" name="gender" value="Female" />Female  */}

                
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="gender" id="inlineRadio1" value="Male" />
  <label class="form-check-label">Male</label>
</div>

<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="gender" id="inlineRadio2" value="Female" />
  <label class="form-check-label">Female</label>
</div>



               </div>


               <div class="d-grid gap-2">
               <button class="btn btn-primary" onClick={save}>Register</button>
               </div>   

             </form>
           </div>
           
           </div>
           
    );
  }
