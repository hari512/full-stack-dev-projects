package com.codebee.springboot.controller;

import com.codebee.springboot.exeption.ResourceNotFoundException;
import com.codebee.springboot.model.Employee;
import com.codebee.springboot.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")  // it can be * or we can set  origins = {"http://localhost:3000/"}
@RestController
@RequestMapping("/api/v1/employees")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;
    @GetMapping
    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }

    //create employee
    @PostMapping("/create")
    @CrossOrigin(origins = "http://localhost:3000")
    public Employee createEmployee( @RequestBody Employee emp){
        return employeeRepository.save(emp);
    }

    //build get by id

    @GetMapping("/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable long id) throws ResourceNotFoundException {
        Employee emp= employeeRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Employee not exist with id:" + id));

        return ResponseEntity.ok(emp);
    }

    //update emp REST API

    @PutMapping("/update/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable long id,@RequestBody Employee empDetails) throws ResourceNotFoundException {
         Employee emp=employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Employee not exist with id:" + id));

         emp.setFirstName(empDetails.getFirstName());
         emp.setLastName(empDetails.getLastName());
         emp.setEmailId(empDetails.getEmailId());

         employeeRepository.save(emp);
         return ResponseEntity.ok(emp);
    }

    //Building delete REST API
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id) throws ResourceNotFoundException {
        Employee emp= employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Employee not exist with id:" + id));
        employeeRepository.delete(emp);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
