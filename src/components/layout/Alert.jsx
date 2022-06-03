import React from 'react'
import {useContext} from 'react'
import AlertContext from '../../context/alert/AlertContext'

function Alert() {
    const {alert} = useContext(AlertContext)
  return (
    alert!==null && (
        <p className="flex items-start mb-4 space-x-2 items-center">
            {alert.type==='error' && (<h4>X</h4>)}
            <p className="flex-1 text-base font-semibold leading-7">
                <strong>{alert.msg}</strong>
            </p>
        </p>
    )
  )
}

export default Alert