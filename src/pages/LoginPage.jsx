import React, { useContext } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import { UserContext } from '../UserContext';
function LoginPage() {
    const [email , setEmail] = useState('');
    const [password, setPassword]=  useState('')
    const [redirect, setRedirect] = useState(false)
    const {user,setUser} = useContext(UserContext)
    async function userLogin(e){
        e.preventDefault();
        try {
            const {data} = await axios.post('/login',{
                email,password
            })
            setUser(data)
            alert('login successful')
            setRedirect(true)
          
        } catch (error) {
            alert(error.message)

        }
        


    }

    if(redirect) {
        return <Navigate to={'/'} />
    }

    return (
        <div className='mt-4 grow flex items-center justify-around'>
            <div className='mb-64'>
                <h1 className='text-4xl text-center mb-4'>Login</h1>
                <form className='max-w-lg mx-auto' onSubmit={userLogin}>
                    <input type="email" name="" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='email.com' />
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' />
                    <button className='primary'>Login</button>

                    <div className='text-center py-2 text-gray-500'>
                        Don't haave an account yet?
                        <Link className='underline text-black' to={'/register'}>Register now</Link>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default LoginPage