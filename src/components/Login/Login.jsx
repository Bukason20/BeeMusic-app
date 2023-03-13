import {loginEndpoint} from "../Spotify"
import style from "./login.module.css"
import Logo from "../images/logo.png"
import MusicBg from "../images/musicBg.png"

function Login() {
    return (
        <div className={style.loginPage}>
            <div className = {style.musicBg}>
                <img src= {MusicBg} alt=""/>
            </div>
            <div className = {style.content}>
                <p className = {style.welcome}>Welcome to</p>
                <div className= {style.logo}>
                    <img src= {Logo} alt="" className = {style.logoImg}/>
                    <h1>BeeMusic</h1>
                </div>
                
                <a href= {loginEndpoint}>
                    <div className= {style.loginBtn}>LOG IN</div>
                </a>
            </div>
            
        </div>
    )
}

export default Login
