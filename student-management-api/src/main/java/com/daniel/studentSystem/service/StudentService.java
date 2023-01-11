package com.daniel.studentSystem.service;

import com.daniel.studentSystem.model.Student;
import org.springframework.stereotype.Service;

import java.util.List;


public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
//    public Student deleteStudent(Student student);

}
