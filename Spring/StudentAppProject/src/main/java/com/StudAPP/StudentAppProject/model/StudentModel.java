package com.StudAPP.StudentAppProject.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;

@Document(collection ="Student_Data")
public class StudentModel {
	@Id 
	private String _id;
	
	@NotEmpty(message = "Admission Number cannot be empty ")
	private String admission_number;
	
	@NotEmpty(message = "Student Name cannot be empty ")
	@Pattern(regexp="^[A-Za-z \s*]+$",message="Student Name Format is Invalid")
	private String name;
	
	@NotEmpty(message = "Date of Birth cannot be empty ")
    private String dob;
	
	@NotEmpty(message = "Class cannot be empty ")
    private String classnumber;
	
	@NotEmpty(message = "Division cannot be empty ")
    private String division;
	
	@NotEmpty(message = "Gender cannot be empty ")
    private String gender;
    
    
	public StudentModel() {
		super();
	}
	public StudentModel(String _id, String admission_number, String name, String dob, String classnumber,
			String division, String gender) {
		super();
		this._id = _id;
		this.admission_number = admission_number;
		this.name = name;
		this.dob = dob;
		this.classnumber = classnumber;
		this.division = division;
		this.gender = gender;
	}
	public String get_id() {
		return _id;
	}
	public void set_id(String _id) {
		this._id = _id;
	}
	public String getAdmission_number() {
		return admission_number;
	}
	public void setAdmission_number(String admission_number) {
		this.admission_number = admission_number;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getClassnumber() {
		return classnumber;
	}
	public void setClassnumber(String classnumber) {
		this.classnumber = classnumber;
	}
	public String getDivision() {
		return division;
	}
	public void setDivision(String division) {
		this.division = division;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}	
}
