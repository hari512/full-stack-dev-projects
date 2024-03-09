import React, { useEffect, useState } from 'react'
import {useNavigate, Link, useParams} from 'react-router-dom'
import employeeServiceInstance from '../services/EmployeeService';

export const AddEmployee = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  
  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();
    const emp = { firstName, lastName, emailId }

    if (id) {
      employeeServiceInstance.updateEmployee(id, emp).then((res) => {
        navigate('/');
      }).catch(error => {
        console.log(error);
      })
      
    } else {
      employeeServiceInstance.createEmployee(emp).then((res) => {
        console.log(res.data);
        navigate('/');
      }).catch(error => {
        console.log(error);
      })
    }
    }

    

  useEffect(() => {
    if (id) {
      employeeServiceInstance.getEmployeeById(id).then((res) => {
        console.log(res.data);
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setEmailId(res.data.emailId);
      }).catch(error => {
        console.log(error);
      });
    }
  }, [id]); // Included 'id' in the dependency array

  const title = () => {
    if (id) {
      return <h2 className='text-center'>Update Employee</h2>
    } else {
      return <h2 className='text-center'>Add Employee</h2>
    }
  }
  return (
    <div>
      <br /><br />
      <div className='container'>
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {
              title()
            }

            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className='form-label'>First Name :</label>
                  <input type="text" placeholder='Enter First Name' name='firstName' className='form-control' value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
                </div>
                <div className="form-group mb-2">
                  <label className='form-label'>Last Name :</label>
                  <input type="text" placeholder='Enter Last Name' name='lastName' className='form-control' value={lastName} onChange={(e)=>setLastName(e.target.value)} />
                </div>
                <div className="form-group mb-2">
                  <label className='form-label'>Email Id :</label>
                  <input type="text" placeholder='Enter email id' name='emailId' className='form-control' value={emailId} onChange={(e)=>setEmailId(e.target.value)} />
                </div>

                <button className='btn btn-success' onClick={(e) => saveOrUpdateEmployee(e)}> Submit </button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
