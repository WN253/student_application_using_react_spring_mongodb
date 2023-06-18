import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Dropdown from 'react-dropdown';
import './myform.css';

export default function Student_form1() {


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


  //VALIDATION CODE

  const initialValues = { name: "", dob: "",classno: "",division: "",gender: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    
    const errors = {};
    console.log(name);
    if (!values.name) {
      errors.name = "Student Name is required!";

    } 

    if (!values.dob) {
      errors.dob = "Date of Birth is required";

    }
    if (!values.classno) {
      errors.classno = "Class is required";

    }

    if (!values.division) {
      errors.division = "Division is required!";
   
    }
    if (!values.gender) {
      errors.gender = "Gender is required!";

    }  

    return errors;
  };
 console.log();
  return (
    <div className="container mt-4">
     

      <form onSubmit={handleSubmit}>
        
      
       
          <div className="form-group">
            <label className="mylabel">Admission Number</label>
            <input
              type="text" name="admno" className="form-control" value={`R-${admdata}`} onChange={handleChange} />
          </div>
          

          
          <div className="form-group">
            <label className="mylabel">Student Name</label>
            <input type="text" name="name" className="form-control" value={formValues.name} onChange={handleChange} />
          </div>
          <p>{formErrors.name}</p>
          
          <div className="form-group">
            <label className="mylabel">Date of Birth</label>
            <input type="date" name="dob"  className="form-control" value={formValues.dob} onChange={handleChange} />
          </div>
          <p>{formErrors.dob}</p>

          <div class="form-group" onChange={handleChange}>
               <label class="mylabel">Class </label>
                <select class="form-select"  name="classno">
                  <option value={formValues.classno} selected disabled hidden>Select an Option</option>
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
               <p>{formErrors.classno}</p>

               <div class="form-group" onChange={handleChange}>
                
                <label class="mylabel">Division </label>
               <select class="form-select" name="division">
                 <option value={formValues.division} selected disabled hidden>Select an Option</option>
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
                <p>{formErrors.division}</p>


                <div class="form-group" onChange={handleChange}>
               <label class="mylabel" >Gender</label><br />
                 {/* <div class="form-check form-check-inline">
                 <input class="form-check-input" id="inlineRadio1" type="radio" name="gender" value="Male"/>
                 <label class="form-check-label" for="inlineRadio1">Male</label>
                 </div>
                 <input  type="radio" name="gender" value="Female" />Female  */}
<div>
  <input type="hidden" name="gender" value={formValues.division} />
  
</div>

<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="gender" value="Male" />
  <label class="form-check-label">Male</label>
</div>

<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="gender" value="Female" />
  <label class="form-check-label">Female</label>
</div>

<p>{formErrors.gender}</p>





               </div>

          <div class="d-grid gap-2">
            {/* <button class="btn btn-primary" onClick={save}>Register</button> */}
            <button class="btn btn-primary">Register</button>
          </div> 

          






      </form>
    </div>
  );
}
