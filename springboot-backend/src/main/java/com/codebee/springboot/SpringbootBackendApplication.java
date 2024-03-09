package com.codebee.springboot;

import com.codebee.springboot.model.Employee;
import com.codebee.springboot.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootBackendApplication implements ApplicationRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}

	@Autowired
	private EmployeeRepository employeeRepository;


	@Override
	public void run(ApplicationArguments args) throws Exception {
		System.out.println("Hey, your applications is still running..!!!");

//		Employee emp= new Employee();
//		emp.setFirstName("Hari");
//		emp.setLastName("M V");
//		emp.setEmailId("Hari@gmail.com");
//		employeeRepository.save(emp);
//
//		Employee emp1= new Employee();
//		emp1.setFirstName("John");
//		emp1.setLastName("Cena");
//		emp1.setEmailId("john@gmail.com");
//		employeeRepository.save(emp1);
	}
}
