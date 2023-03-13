import { useEffect, useState } from "react"
import {Link, useLocation} from "react-router-dom"
import "./Sidebar.css"
import {AiFillHome, AiOutlineStar, AiOutlineMenuFold, AiOutlineMenuUnfold} from "react-icons/ai"
import {BiLineChart} from "react-icons/bi"
import {FaUserCircle} from "react-icons/fa"
import {GrFavorite} from "react-icons/gr"
import {MdFavoriteBorder, MdWindow} from "react-icons/md"
import {IoIosPeople} from "react-icons/io"
import {HiMenuAlt2} from "react-icons/hi"
import {RxCalendar, RxCrumpledPaper, RxDisc} from "react-icons/rx"
import Logo from "../images/logo.png"




function Sidebar({token}) {
    const [user, setUser] = useState("")
    const [image, setImage] = useState("")
    const [home, setHome] = useState(false)
    const [trends, setTrends] = useState(false)
    const [feed, setFeed] = useState(false)
    const [news, setNews] = useState(false)
    const [calendar, setCalendar] = useState(false)
    const [events, setEvents] = useState(false)
    const [favSongs, setFavSongs] = useState(false)
    const [artist, setArtist] = useState(false)
    const [albums, setAlbums] = useState(false)

    const location = useLocation()
    const checkLocation = () => {
        if(location.pathname === "/"){
            setHome(true)
        }else{
            setHome(false)
        }
        if(location.pathname === "/trends"){
            setTrends(true)
        }else{
            setTrends(false)
        }
        if(location.pathname === "/feeds"){
            setFeed(true)
        }else{
            setFeed(false)
        }
        if(location.pathname === "/new"){
            setNews(true)
        }else {
            setNews(false)
        }
        if(location.pathname === "/calendar"){
            setCalendar(true)
        }else {
            setCalendar(false)
        }
        if(location.pathname === "/events"){
            setEvents(true)
        }else {
            setEvents(false)
        }
        if(location.pathname === "/favorite-songs"){
            setFavSongs(true)
        }else {
            setFavSongs(false)
        }
        if(location.pathname === "/artist"){
            setArtist(true)
        }else {
            setArtist(false)
        }
        if(location.pathname === "/albums"){
            setAlbums(true)
        }else{
            setAlbums(false)
        }
    }
    useEffect(() => {
        fetch("https://api.spotify.com/v1/me", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
            })
            .then(response => response.json())
            .then(data => setUser(data))

            checkLocation()
    }, [])
    

    // console.log(user.images.length)

    const [active, setActive] = useState(false)
    const [fullNav, setFullNav] = useState(false)

    const activeLink = (e) => {
        if(e.target.classList.contains("link")){
            const links = Array.from(e.target.parentElement.children)

            links.forEach(li => {
                if(li.classList.contains("link")){
                    li.classList.remove("active")
                    if(e.target.classList.contains("link")){
                        e.target.classList.add("active")
                        li.classList.remove("active")
                    }else {
                        e.target.classList.remove("active")
                    }
                }
            })
            
        }
    }

    useEffect(() => {
        checkLocation()
    }, [activeLink])

    const expandNav = (e) => {
        if(e.target.classList.contains("burger2")){
            setFullNav(true)
        }
    }
    const reduceNav = (e) => {
        if(e.target.classList.contains("burger3")){
            setFullNav(false)
        }
    }
    return (
        <div className = {`sidebar ${fullNav && "fullNav"}`}>
            <div className= "burger"><HiMenuAlt2/></div>
            <div className="nav-btns">
                <AiOutlineMenuUnfold className = {!fullNav ? "burger2" : "hide2"} onClick = {expandNav}/>
                <AiOutlineMenuFold className = {fullNav ? "burger3" : "hide3"} onClick = {reduceNav}/>
                
            </div>
            <div className = "logo" >
                <img src={Logo} alt=""/>
                <p><span className="bee">Bee</span>Music</p>
            </div>
            <ul className = "links" onClick = {activeLink}>
                <li className = {`${"link"} ${fullNav && "fullNav"} ${home && "active"}`}>
                    <Link to = "/">
                        <AiFillHome />
                        <span className = {`link-none ${fullNav && "fullNav"} `}>Home</span>  
                    </Link>
                    
                </li>
                <li className = {`${"link"} ${fullNav && "fullNav"} ${trends && "active"}`}>
                    <Link to = "/trends">
                        <BiLineChart />
                        <span className = {`link-none ${fullNav && "fullNav"}`}>Trends</span>
                    </Link>
                </li>
                <li className = {`${"link"} ${fullNav && "fullNav"} ${feed && "active"}`}>
                    <Link to = "/feeds">
                        <RxDisc />
                        <span className = {`link-none ${fullNav && "fullNav"}`}>Feeds</span> 
                    </Link>

                </li>

                <p>Discover</p>
                <li className = {`${"link"} ${fullNav && "fullNav"} ${news && "active"}`}>
                    <Link to = "/new">
                        <MdWindow />
                        <span className = {`link-none ${fullNav && "fullNav"}`}>New and Notable</span>
                    </Link>
                    
                </li>
                <li className = {`${"link"} ${fullNav && "fullNav"} ${calendar && "active"}`}>
                    <Link to = "/calendar">
                        <RxCalendar />
                        <span className = {`link-none ${fullNav && "fullNav"}`}>Release Calendar</span>
                    </Link>
                </li>
                <li className = {`${"link"} ${fullNav && "fullNav"} ${events && "active"}`}>
                    <Link to = "/events">
                        <RxCrumpledPaper />
                        <span className = {`link-none ${fullNav && "fullNav"}`}>Events</span>
                    </Link>
                </li>

                <p>Your Collection</p>
                <li className = {`${"link"} ${fullNav && "fullNav"} ${favSongs && "active"}`}>
                    <Link to = "/favorite-songs">
                        <MdFavoriteBorder />
                        <span className = {`link-none ${fullNav && "fullNav"}`}>Favorite Songs</span>
                    </Link>
                </li>
                <li className = {`${"link"} ${fullNav && "fullNav"} ${artist && "active"}`}>
                    <Link to = "/artist">
                        <IoIosPeople />
                        <span className = {`link-none ${fullNav && "fullNav"}`}>Artist</span>
                    </Link>
                    
                </li>
                <li className = {`${"link"} ${fullNav && "fullNav"}`}>
                    <Link to = "/albums">
                        <AiOutlineStar />
                        <span className = {`link-none ${fullNav && "fullNav"} ${albums && "active"}`}>Albums</span>
                    </Link>
                    
                </li>
            </ul>

            <hr/>
            <div className="user-profile">
                <p>{user.images == undefined || user.images.length == 0 ? <FaUserCircle /> : <img src =  {user.images[0].url}/> }</p>
                <p className = "user-name">{user.display_name}</p>
            </div>
        </div>
    )
}

export default Sidebar

