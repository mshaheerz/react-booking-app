import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
function RegisterPage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function registerUser(e) {
        e.preventDefault()
        try {
                 await axios.post('/register',{
            name,
            email,
            password

        });
        } catch (error) {
            alert('reg filed')
        }
   

        alert('registration success now you can login')

    }


    return (
        <div className='mt-4 grow flex items-center justify-around'>
            <div className='mb-64'>
                <h1 className='text-4xl text-center mb-4'>Register</h1>
                <form className='max-w-lg mx-auto' onSubmit={registerUser}>
                    <input type="text" name="" value={name} onChange={(e)=>setName(e.target.value)} placeholder='john Doe'/>
                    <input type="email" name="" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='email.com' />
                    <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)} />
                    <button className='primary'>Register</button>

                    <div className='text-center py-2 text-gray-500'>
                        Alrady a member?
                        <Link className='underline text-black' to={'/login'}>Login</Link>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default RegisterPage