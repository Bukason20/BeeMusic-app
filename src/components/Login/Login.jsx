import {loginEndpoint} from "../Spotify"
import style from "./login.module.css"
import Logo from "../images/logo.png"

function Login() {
    return (
        <div className={style.loginPage}>
            <div>
                <p>Welcome to</p>
                <div className="logo">
                    <img src= {Logo} alt=""/>
                    <h1>BeeMusic</h1>
                </div>
                
            </div>
            <a href= {loginEndpoint}>
                <div className= {style.loginBtn}>LOG IN</div>
            </a>
        </div>
    )
}

export default Login
