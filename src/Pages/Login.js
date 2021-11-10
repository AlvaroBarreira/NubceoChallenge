import { useEffect } from 'react';
import { useHistory } from 'react-router';

import LoginForm from '../Components/LoginForm/LoginForm'

function Login() {

    const history = useHistory()

    const token = localStorage.getItem('token')
  
    useEffect(() => {
        if (token) return history.push('/home')
    }, [history, token])

    return (
        <LoginForm />
    )
}

export default Login
