import React from 'react'
import '../css/forms.css'

const Login = props => {
    return(
        <div>
            <form>
                <input className="inputForms" type="email" placeholder="Insert your Email" /><br/>
                <input className="inputForms" type="password" placeholder="Insert your password" />
                <div className="forgot">
                    <a href="#">Forgot my password</a>
                </div>
                <div className="btnLogin">
                    <button className="joinButton">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login