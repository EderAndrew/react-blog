import React, {useState} from 'react'
import '../css/dashboard.css'
import {Link, withRouter} from 'react-router-dom'

const Dashboard = () => {
    const [title, setTitle] = useState('')
    const [image, setImage] = useState(null)
    const [postBody, setPostBody] = useState('')

    return(
        <div className="dashboard">
            <div className="panel">
                <div className="userArea">
                    <img src={require('../assets/img/user.png')} />
                </div>
                <div className="configArea">
                    <Link to={"/user-config"}><img src={require('../assets/img/gear.png')} /></Link>
                </div>
                <div className="box">
                    <h2>Name</h2>
                    <ul>
                        <Link to={"/dashboard"}><li>New Post</li></Link>
                        <Link to={"/dashboard/my-posts"}><li>My Posts</li></Link>
                        <Link to={"/dashboard/posts"}><li>Other Posts</li></Link>
                    </ul>
                    <button>Exit</button>
                </div>
            </div>
            <div className="center">
                <h1>New Post</h1>
                <form>
                    <label>Title</label>
                    <input 
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        autoFocus autoComplete="off"
                    />
                    <div className="imgArea">
                        <div className="imgBtn">
                            <label>Image Post</label>
                            <button>Select Image</button>
                        </div>
                        <div className="images">
                            <img src={require("../assets/img/photo.png")} />
                        </div>
                    </div>
                    <label>Post</label>
                    <textarea></textarea>
                    <button className="publish">Publish</button>
                </form>
            </div>
            <div className="posts">
                ...
            </div>
        </div>
    )
}

export default withRouter(Dashboard)