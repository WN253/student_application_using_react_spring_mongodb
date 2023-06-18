import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

import './myform.css';

export default function Student_form() {

const[admdata,setlastadm]=useState([]);

//ADMISSION NUMBER GENERATION
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
    console.log(Object.keys(formErrors).length);
    setIsSubmit(true);
  };

  useEffect(() => {
  
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      save(formValues); //if no error is found then call this function to send to spring
    }
    }, [formErrors]);

  //CHECKING IF VALUE IS EMPTY AND VALID
  const validate = (values) => {
    
    const errors = {};
    const regex = /^[A-Za-z \s*]+$/ig;

    if (!values.name) {
      errors.name = "Student Name is required!";
    }else if (!regex.test(values.name)) {
      errors.name = "Enter Student Name in Valid format!";
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


  //Sending Value to Spring
  function save(formValues)
    {
        
      try
      {
        axios.post("http://localhost:8080/student-application/save",
      {
        admission_number: admdata,
        name: formValues.name,
        dob: formValues.dob,
        classnumber: formValues.classno,
        division: formValues.division,
        gender: formValues.gender,
     
      });
        window.location.reload();
        alert("Student Registation Successfully");
      }
      catch(err)
      {
        alert("User Registation Failed");
      }
    }
    
  //Form
  return (
    <div className="container mt-4">

      <form onSubmit={handleSubmit}>
          
          <div className="form-group">
            <label className="mylabel">Admission Number</label>
            <input type="text" name="admno" className="form-control" value={`R-${admdata}`} onChange={handleChange} />
          </div>
          <p></p>
          
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
          </div>
          <p>{formErrors.classno}</p>

          <div class="form-group" onChange={handleChange}>
                <label class="mylabel">Division </label>
                <select class="form-select" name="division">
                  <option value={formValues.division} selected disabled hidden>Select an Option</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
               </select>
          </div>
          <p>{formErrors.division}</p>

          <div class="form-group" onChange={handleChange}>
            <label class="mylabel" >Gender</label><br />
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
            <button class="btn btn-primary">Register</button>
          </div> 
      </form>
    </div>
  );
}
