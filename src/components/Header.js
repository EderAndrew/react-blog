import React from 'react'
import '../css/header.css'

const Header = (props) => {
    return(
        <div>
            <header>
                <h1>Project Blog ReactJS</h1>
                <button onClick={props.onChangeForm}>{props.title}</button>
            </header>
        </div>
    )
}

export default Header