package com.codebee.springboot.repository;

import com.codebee.springboot.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {
    // It will have all crud database methods
}
