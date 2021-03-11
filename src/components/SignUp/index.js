import React, { useState } from 'react'
import FormInput from '../FormInput'
import CustomButton from '../CustomButton'
import { auth, createUserProfileDocument } from '../../firebase/firebase';

import './signup.css'

const SignUp = () => {
   const [users, setUsers] = useState({ displayName: '', email: '', password: '', confirmPassword: ''});

   const { displayName,email,password,confirmPassword} = users;


   const handleSubmit = async event => {
       event.preventDefault();

       if(password !== confirmPassword) {
           alert("Password does not match");
           return;
       }

       try {
           const { users } = await auth.createUserWithEmailAndPassword(email, password);

         await  createUserProfileDocument(users, {displayName});

         setUsers({ displayName: '', email: '', password: '', confirmPassword: ''});
       } catch (error) {
           
       }
   }


   const handleChange = (event) => {

       const { name, value} = event.target;
       setUsers({...users, [name]: value})
   }

   console.log(users)

    return (
        <div className="sign-up">
        <h2 className="title">I don`t have an account</h2>
        <span>Sigup with your email and password</span>
        <form onSubmit={handleSubmit}>
           <FormInput type="text" 
                      name="displayName" 
                      defaultValue={displayName} 
                      onChange={handleChange} 
                      label="Display Name" 
                      required/>

            <FormInput type="email" 
                      name="email" 
                      defaultValue={email} 
                      onChange={handleChange} 
                      label="Email" 
                      required/>

            <FormInput type="password" 
                      name="password" 
                      defaultValue={password} 
                      onChange={handleChange} 
                      label="Password" 
                      required/>

            <FormInput type="password" 
                      name="confirmPassword" 
                      defaultValue={confirmPassword} 
                      onChange={handleChange} 
                      label="Confirm Password" 
                      required/>

             <CustomButton type="submit"> SIGNUP</CustomButton>         
        </form>
            
        </div>
    )
}

export default SignUp
