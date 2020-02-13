import React, {useState, useEffect} from 'react'
import '../css/forms.css'
import {Link, withRouter} from 'react-router-dom'
import firebase from '../firebase'

const Login = props => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        if(firebase.getCurrent()){
            return props.history.replace('dashboard')
        }
    }, [])
    const getIn = (e) => {
        e.preventDefault()
        login()
    }
    const login = async( ) => {
        try{
            await firebase.login(email, password)
            .catch(error => {
                if(error.code === 'auth/user-not-found'){
                    alert('User not exist')
                }else{
                    alert(`Error code: ${error.code}`)
                    return null
                }
            })
            props.history.replace('/dashboard')
        }catch(error){
            alert(error.message)
        }
        
    }
    return(
        <div>
            <form onSubmit={getIn}>
                <input 
                    className="inputForms" 
                    type="email" 
                    autoComplete="off"
                    placeholder="your_email@email.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                /><br/>
                <input 
                    className="inputForms"
                    type="password"
                    autoComplete="off"
                    placeholder="Insert your password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}    
                />
                <div className="forgot">
                    <Link to="/forget-password">Forgot my password</Link>
                </div>
                <div className="btnLogin">
                    <button type="submit" className="joinButton">Login</button>
                </div>
            </form>
        </div>
    )
}

export default withRouter(Login)