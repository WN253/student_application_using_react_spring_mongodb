package com.StudAPP.StudentAppProject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.StudAPP.StudentAppProject.Services.StudentService;
import com.StudAPP.StudentAppProject.model.StudentModel;
import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("student-application/")
public class StudentController {

	//calling service
	@Autowired 
	private StudentService My_Services;
	
	
	//Inserting
	@PostMapping(value = "/save")
	private String saveStudent(@Valid @RequestBody StudentModel enteringvalue) 
	{
		return My_Services.save(enteringvalue);
	}
	
	//Viewing
	@GetMapping(value = "/getall")
	public Iterable<StudentModel>getStudents() 
	{
		return My_Services.listAll();
	}
	
	
}
