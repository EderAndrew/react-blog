import React, {useState} from 'react'
import '../css/forms.css'
import {Link, withRouter} from 'react-router-dom'
import firebase from '../firebase'

const Register = props => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const registerUser = e => {
        e.preventDefault()
        onRegister()
    }

    const onRegister = async() => {
        try{
            await firebase.register(name, email, password)
            props.history.replace('/dashboard')
        }catch(error){
            alert(error.message)
        }
    }
    return(
        <div>
            <form onSubmit={registerUser}>
                <input 
                    className="inputForms" 
                    type="text" 
                    value={name}
                    onChange={e => setName(e.target.value)}
                    autoFocus autoComplete="off"
                    placeholder="Insert your Name" 
                /><br/>
                <input
                    className="inputForms"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="your_email@email.com"

                /><br/>
                <input 
                    className="inputForms"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Insert your password"

                /><br />
                <div className="btnArea">
                    <button type="submit" className="joinButton">Join</button>
                </div>
                
            </form>
        </div>
    )
}

export default withRouter(Register)