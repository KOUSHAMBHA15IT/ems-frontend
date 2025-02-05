import React, {useEffect, useState} from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'
const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([]) //to use useState hook returns arrays  with two values : state variable and function that updates the state variable 
    const navigator =useNavigate();
    useEffect(()=> {
       getAllEmployees();
        
    },[])//second one with [] is empty as it has no dependency

    function getAllEmployees(){
        listEmployees().then((response)=>{//then takes promise object
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewEmployee(){
        navigator('/add-employee')
    }

    function updateEmployee(id){
        navigator(`/edit-employee/${id}`)
    }

    function removeEmployee(id){
        deleteEmployee(id).then((response)=>{
            console.log(response.data);
            getAllEmployees();

        }).catch(error => {
            console.error(error);
        })
    }

  return (
    <div className='container'>
        <h2 className='text-center'>List Of Employees</h2>
        <button type="button" className="btn btn-primary" onClick={addNewEmployee}>Add Employee</button>


        <table className='table table-success table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee => 
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>
                                <button className='btn btn-info' onClick={
                                    () => updateEmployee(employee.id)
                                }>Update</button>

                                <button className='btn btn-danger' onClick={
                                    () => removeEmployee(employee.id)
                                }>Delete</button>
                            </td>
                            

                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent