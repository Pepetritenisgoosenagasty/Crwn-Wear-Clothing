import React from 'react'
import SignIn from '../../components/SignIn'
import SignUp from '../../components/SignUp'
import './auth.css'

const SignInSignUpPage = () => {
    return (
        <div className="auth">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInSignUpPage
