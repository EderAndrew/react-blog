import React, { lazy, Suspense } from 'react'
import '../css/forms.css'

const Register = lazy(() => import('./Register'))
const Login = lazy(() => import('./Login'))

const FormComponent = props => {

    return(
        <div className="containerForm">
            <div>
                <h1>{props.onToggle ? 'Register':'Login'}</h1>
                <Suspense fallback={<h2>Loading...</h2>}>
                    {props.onToggle ? <Register /> : <Login /> }
                </Suspense>
            </div>
        </div>
    )
}

export default FormComponent