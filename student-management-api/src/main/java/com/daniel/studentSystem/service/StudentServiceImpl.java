package com.daniel.studentSystem.service;

import com.daniel.studentSystem.model.Student;
import com.daniel.studentSystem.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

//    @Override
//    public Student deleteStudent(Student student) {
//        return studentRepository.deleteById(student.getId());
//    }
}
