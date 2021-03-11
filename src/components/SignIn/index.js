import React, { useState } from 'react';
import  FormInput from "../FormInput";
import CustomButton from "../CustomButton"
import { auth,signInWithGoogle } from '../../firebase/firebase'
import './signin.css';

const SignIn = () => {
    const [login, setLogin] = useState({email: '', password: ''})

    // Reset form on submit
    const handleSubmit = async (e) => {
        e.preventDefault()
         

         const { email, password} = login;
         try {
            await auth.signInWithEmailAndPassword(email, password); 
           setLogin({email: '', password: ''}) 
         } catch (error) {
             console.log(error.message)
         }
    }

    // Form change
    const handleChange = (e) => {
        const {name, value} = e.target;

        setLogin({...login, [name]: value })
    }

    console.log(login)
    return (
        <div className="sign-in">
            <h2 className="title">I already have an account</h2>
            <span>Sigin with your email and password</span>
            
            <form onSubmit={handleSubmit}>
               <FormInput type="email" name="email" defaultValue={login.email} handleChange={handleChange} label="Email" required/>

               <FormInput type="password" name="password" defaultValue={login.password} handleChange={handleChange} label="Password" required/>

               <div className="buttons">
               <CustomButton type="submit"> Sign In </CustomButton>
               <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In with Google </CustomButton>
               </div>
            </form>
        </div>
    )
}

export default SignIn
