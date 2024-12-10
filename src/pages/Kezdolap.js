import React, {useContext} from 'react'
import AuthContext from '../contexts/AuthContext'

function Kezdolap() {
    const {user}=useContext(AuthContext)
    console.log(user)
  return (
    <div>
        <p>Kezdolap</p>
        <p>{user ? user.name : "Nincs bejelentkezett felhasználó"}</p>
    </div>
  )
}

export default Kezdolap