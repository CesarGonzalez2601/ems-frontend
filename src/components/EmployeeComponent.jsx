import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createEmployee } from "../services/EmployeeService";
const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const [errors, setErrors] = useState({
        firstName:'',
        lastName:'',
        email:''
    })


    const navigator = useNavigate();

    const handleFirstName = (e) => setFirstName(e.target.value);
    
    const handleLastName = (e) => 
        setLastName(e.target.value);
    

    const handleEmail = (e) => 
        setEmail(e.target.value);
    

    function saveEmployee(e){
        e.preventDefault();
    
        
        if(validateForm()){
            const employee = {firstName, lastName, email}
            createEmployee(employee).then((response) =>{
                console.log(response.data);
                navigator('/employees')
            })
        }


        
    }

    function validateForm(){
        let valid = true;

        const errorsCopy = {... errors}

        if(firstName.trim()){
            errorsCopy.firstName = '';
        }else{
            errorsCopy.firstName = 'First name is requiered';
            valid = false;
        }

        if(lastName.trim()){
            errorsCopy.lastName = '';
        }else{
            errorsCopy.lastName = 'Last name is requiered';
            valid = false;
        }

        if(email.trim()){
            errorsCopy.email = '';
        }else{
            errorsCopy.email = 'Email name is requiered';
            valid = false;
        }

        setErrors(errorsCopy);

        return valid;
    }
    return (
        <div className="container">
            <br></br>
            <br></br>
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h2 className="text-center">Add Employee</h2>
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-2">
                                <label className="form-label">First Name:</label>
                                <input
                                    type="text"
                                    placeholder="Enter employee first name"
                                    name="firstName"
                                    value={firstName}
                                    className={`form-control ${errors.firstName ? 'is-invalid': ''}`}
                                    onChange={handleFirstName}
                                    >
                                    </input>
                                    {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Last Name:</label>
                                <input
                                    type="text"
                                    placeholder="Enter employee last name"
                                    name="lastName"
                                    value={lastName}
                                    className={`form-control ${errors.lastName ? 'is-invalid': ''}`}
                                    onChange={handleLastName}
                                    >
                                    </input>
                                    {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">email:</label>
                                <input
                                    type="text "
                                    placeholder="Enter employee email"
                                    name="email"
                                    value={email}
                                    className={`form-control ${errors.email ? 'is-invalid': ''}`}
                                    onChange={handleEmail}
                                    >
                                    </input>
                                    {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                            </div>
                            <button className="btn btn-success" onClick={saveEmployee}>Add</button>
                        </form>
                    </div>
                </div>

            </div>

        </div>
    )

}

export default EmployeeComponent

