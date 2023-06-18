package com.StudAPP.StudentAppProject.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.StudAPP.StudentAppProject.model.StudentModel;


@Repository
public interface StudentRepository extends MongoRepository<StudentModel,String> {

}
