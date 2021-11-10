import React from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import './Button.css'

function Button({title}) {

    const history = useHistory()

    const goTo = () => {
        return history.push('/list')
    }

    return (
        <div className="btn-container">
            <a className="btn__start" onClick={() => goTo()}>
                <p>{title}</p>
                <img className="icon" src="https://img.icons8.com/ios/50/000000/arrow.png"/>
            </a>
            
        </div>
    )
}

export default Button
