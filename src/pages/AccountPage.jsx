import React, { useContext } from 'react'
import { UserContext } from '../UserContext'
import { Navigate } from 'react-router-dom';

function AccountPage() {
  const {ready,setReady,user} = useContext(UserContext);
  if(!ready) {
    return 'Loading.....'
  }

  
  if(ready && !user){
    return <Navigate to={'/login'} />
  }


  return (
    <div>account page for {user?.name}</div>
  )
}

export default AccountPage