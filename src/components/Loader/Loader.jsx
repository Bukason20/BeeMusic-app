import loadImg from "../images/loader1.gif"
import "./loader.css"


function Loader() {
    return (
        <div className = "loader">
            <img src= {loadImg} alt=""/>
            
        </div>
    )
}

export default Loader
