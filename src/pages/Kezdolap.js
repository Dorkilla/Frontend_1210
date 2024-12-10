import React, {useContext} from 'react'
import AuthContext from '../contexts/AuthContext'

function Kezdolap() {
    const {user}=useContext(AuthContext)
    console.log(user)
  return (
    <div>
        Kezdolap
        {user}
    </div>
  )
}

export default Kezdolap