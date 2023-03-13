import { useEffect, useState } from "react"
import { BiLeftArrow, BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi"
import { FaGreaterThan} from "react-icons/fa"
import MusicPlayer from "../music-player/MusicPlayer"
import PlayLists from "../PlayLists/PlayLists"
import Search from "../Search/Search"
import FirstTrend from "../FirstTrend/FirstTrend"
import "./home.css"

function Home({token, playLists, currentSong, setCurrentSong}) {
    const [filterText, setFilterText] = useState("");
    const [searchResults, setSearchResults] =useState([]);

    const filterEvent = (searchTerm) => {
        setFilterText(searchTerm)
        if (searchTerm !== ""){
            const newPlaylist = playLists.filter((playlist) => {
                return Object.values(playlist).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
            })

            setSearchResults(newPlaylist)
            console.log(searchResults)
        }else{
            setSearchResults(playLists)
        }
        // console.log(searchTerm)
    }

    // console.log(searchResults)

    let [activeSong, setActiveSong] = useState({})
    return (
        <div className = "home">
            <div className="home-header">
                <div className="arrows">
                    <BiLeftArrowAlt />
                    <BiRightArrowAlt />  
                </div>
                <Search filterEvent = {filterEvent} filterText ={filterText}/>
            </div>
            <FirstTrend token = {token}/>
            <PlayLists 
                token = {token} 
                playLists = {playLists} 
                filterText = {filterText} 
                searchResults = {searchResults}
                currentSong = {currentSong}
                setCurrentSong = {setCurrentSong}
            />
            
        </div>
    )
}

export default Home
