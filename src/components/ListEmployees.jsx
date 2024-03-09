import React, { useEffect, useState } from "react";
import employeeServiceInstance from "../services/EmployeeService";
import { Link } from "react-router-dom";

const ListEmployee = () => {

    const [emps, setEmps] = useState([]);

    useEffect(() => {
        getAllEmployees();
    }, []);
    
    // making this as reusable code
    const getAllEmployees = () => {
        employeeServiceInstance.getAllEmployees().then((response) => {
            setEmps(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    }

    const deleteEmployee = (id) => {
        employeeServiceInstance.deleteEmployee(id).then((res) => {
            getAllEmployees(); // once data is deleted fresh data should render
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="container">
            <h2 className="text-center">List Of Employees</h2>
            <div>
                <Link to="/add-emp" className="btn btn-primary mb-2">Add Employee</Link>
            </div>
            <div>
                <table className="table table-bordered table-striped ">
                    <thead className="text-center">
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email Id</th>
                        <th colSpan={2}>Actions</th>
                    </thead>
                    <tbody className="text-center">
                        {emps.map(
                            emp =>
                                <tr key={emp.id}>
                                    <td>{emp.id}</td>
                                    <td>{emp.firstName}</td>
                                    <td>{emp.lastName}</td>
                                    <td>{emp.emailId}</td>
                                    <td>
                                        <Link to={`/edit-emp/${emp.id}`} className="btn btn-info">Update</Link>
                                        <button className="btn btn-danger" onClick={()=>{deleteEmployee(emp.id)}} style={{marginLeft:"10px"}}>Delete</button>
                                    </td>
                                   
                                </tr>
                        )}
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default ListEmployee;