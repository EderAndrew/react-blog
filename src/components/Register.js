import React from 'react'
import '../css/forms.css'

const Register = props => {
    return(
        <div>
            <form type="submit">
                <input className="inputForms" type="text" placeholder="Insert your Name" /><br/>
                <input className="inputForms" type="email" placeholder="Insert your Email" /><br/>
                <input className="inputForms" type="password" placeholder="Insert your password" /><br />
                <div className="btnArea">
                    <button onSubmit={() => {}} className="joinButton">Join</button>
                </div>
                
            </form>
        </div>
    )
}

export default Register