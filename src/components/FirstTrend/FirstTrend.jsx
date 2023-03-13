import { useEffect, useState } from "react"
import "./firstTrend.css"
import Fire from "../images/fire.png"
import {FaGreaterThan} from "react-icons/fa"
import Loader from "../Loader/Loader"

function FirstTrend({token}) {
    const [newRelease, setNewRelease] = useState(null)
    const [error, setError] = useState()

    const getNewRelease = () => {
        fetch("https://api.spotify.com/v1/browse/new-releases?country=NG&limit=1&offset=0", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
            })
            .then(response => response.json())
            .then(data => {
                localStorage.setItem("newRelease", JSON.stringify(data.albums.items))
                setNewRelease(JSON.parse(localStorage.getItem("newRelease")))
            })
            .catch(err => setError(err))
    }

    useEffect(() => {
        getNewRelease()
    }, [])
    
    return (
        <div>
            <div className="first-trend">
                <div className="hot">
                    <p>What's hot</p>
                    <img src= {Fire} alt=""/>
                </div> 
                <div className="trending">
                    <h1>Trending</h1>
                    <p className = "more">
                        More
                        <FaGreaterThan />
                    </p>
                </div>
                {newRelease ? (
                    <div className = "track-details">
                        <p className = "artist">
                            {newRelease[0].artists.map((artist, index) => (
                            artist.name += " " 
                            ))}
                        </p>
                        <p className = "trend-song">{newRelease[0].name}</p>
                        <div className="btns">
                            <button className = "first-trend-play">PLAY</button>
                            <button className = "first-trend-follow">FOLLOW</button>
                        </div>
                        </div>
                ): <Loader />}
            </div>
                 
        </div>
    )
}

export default FirstTrend
