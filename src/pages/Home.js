import React,{lazy, Suspense, useState} from 'react'
import '../css/home.css'


const Header = lazy(() => import('../components/Header'))
const FormComponent = lazy(() => import('../components/FormComponent'))

const Home = () => {
    const [bTitle, setBTitle] = useState('Login')
    const [toggle, setToggle] = useState(true)

    const toggleForm = () => {
        if(toggle){
            setBTitle('Register')
            setToggle(false)
        }
        if(!toggle){
            setBTitle('Login')
            setToggle(true)
        }
    }

    return(
        <div className="container">
            <Suspense fallback={<h2>Loading...</h2>}>
                <Header onChangeForm={toggleForm} title={bTitle}/>
                <FormComponent onToggle={toggle} />
            </Suspense>
            <div className="message">
                <h2>Post your Ideas and Share</h2>
            </div>
            <div className="footer">
                <p>Developed by Andrew - 2020</p>
            </div>
        </div>
    )
}

export default Home