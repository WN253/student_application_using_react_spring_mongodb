package com.StudAPP.StudentAppProject.Services;

import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.StudAPP.StudentAppProject.model.StudentModel;
import com.StudAPP.StudentAppProject.repository.StudentRepository;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.ConstraintViolationException;
import jakarta.validation.Validator;

@Service
public class StudentService {

	@Autowired
	private Validator validator;
	
	@Autowired
	private StudentRepository My_Repository;
	
	//Insert
	public String save(StudentModel Students) {
   
        Set<ConstraintViolation<StudentModel>> violations = validator.validate(Students);
        
        //Validation
        if (!violations.isEmpty()) {
            StringBuilder sb = new StringBuilder();
            for (ConstraintViolation<StudentModel> constraintViolation : violations) {
                sb.append(constraintViolation.getMessage());
            }
            throw new ConstraintViolationException("Error occurred: " + sb.toString(), violations);
        }

        My_Repository.save(Students);       
        return "Added Student Successfully ";
    }
	

	//VIEW
	public Iterable<StudentModel> listAll() {
		
		return this.My_Repository.findAll();
	}

	
}
