import React, { useContext, useState } from 'react'
import { UserContext } from '../UserContext'
import { Link, Navigate, useParams } from 'react-router-dom';
import axios from 'axios';
import PlacesPage from './PlacesPage';

function AccountPage() {
  const [redirect, setRedirect] = useState(null)
  const { ready, user, setUser } = useContext(UserContext);
  let { subpage } = useParams();

  if (subpage === undefined) {
    subpage = 'profile'
  }
  if (!ready) {
    return 'Loading.....'
  }
  if (ready && !user && !redirect) {
    return <Navigate to={'/login'} />
  }

  async function logout() {
    await axios.post('/logout');
    setRedirect('/')
    setUser(null);

  }


  function linkClasses(type = null) {
    console.log(subpage)
    let classes = 'inline-flex gap-1 py-2 px-6 rounded-full';
    if (type === subpage) {
      classes += ' bg-primary text-white '
    }else{
      classes+= 'bg-gray-200'
    }
    return classes;
  }
  if (redirect) {
    return <Navigate to={redirect} />
  }


  return (
    <div>
      <nav className='w-full flex justify-center mt-8 gap-2 mb-8'>
        <Link className={linkClasses('profile')} to={'/account'}>
          <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className='h-6 w-6'>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
          My Profile</Link>
        <Link className={linkClasses('bookings')} to={'/account/bookings'}>
          <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className='h-6 w-6'>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
          </svg>
          My bookings</Link>
        <Link className={linkClasses('places')} to={'/account/places'}>
          <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className='h-6 w-6'>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
          </svg>
          My Accomadations</Link>
      </nav>
      {
        subpage === 'profile' && (
          <div className='text-center max-w-lg mx-auto'>
            Logged in as {user.name} ({user.email}) <br />
            <button onClick={logout} className='primary max-w-sm mt-2'>Logout</button>
          </div>
        )
      }

      {
        subpage === 'places' && (<PlacesPage />)
      }
    </div>
  )
}

export default AccountPage