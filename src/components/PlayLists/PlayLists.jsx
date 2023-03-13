import { useEffect, useRef, useState } from "react";
import Loader from "../Loader/Loader";
import MusicPlayer from "../music-player/MusicPlayer";
import PlaylistItem from "../PlaylistItem/PlaylistItem";
import "./playlists.css"

function PlayLists({token, playLists, filterText, searchResults}) {
    const [active, setActive] = useState()
    const [error, setError] = useState(null)
    const [currentSong, setCurrentSong] = useState(playLists ? playLists[0].track: "")
    const getCurrentIndex =  function() {
        currentSong ? currentSong.map(song => {
            playLists.map((playlist, index) => {
                if(song.track.name == playlist.track.name){
                    setCurrentIndex(index)
                }
            })
        }) : null
    }
    
    const getCurrentSong = function(id){
        setCurrentSong(playLists.filter((playlist) => id == playlist.track.id))
        getCurrentIndex()
        
    }
    console.log(currentSong)

    
    
    if(filterText.length >= 1 && searchResults.length === 0) {
        return (
            <p>No match</p>
        )
    }

    return (
        <div className="playlist-section">
            <div className="playlist-section-head">
                <h1 className = "title">My Playlist</h1>
                <p className = "show-all">show All</p>
            </div>
            
            {playLists ? (
                <div className="playlist-items">
                <div className="playlist-items-head">
                    <p id = "song-no">#</p>
                    <p>TITLE</p>
                    <p>ARTIST</p>
                    <p id = "song-time">TIME</p>
                </div>
                <div className="playlist-songs">
                   {playLists.map((playlist, index) => (
                       <PlaylistItem 
                            key = {index}
                            index = {index}
                            playlist = {playlist}
                            getCurrentSong = {getCurrentSong}
                            currentSong = {currentSong}
                       />
                    ))} 
                </div>
                
            </div>
            ) : <Loader />}
            <MusicPlayer 
                currentSong = {currentSong}
                playLists = {playLists} 
                // currentIndex = {currentIndex}  
                getCurrentSong = {getCurrentSong}
            />
        </div> 
        
    )
}

export default PlayLists

// {filterText.length < 1 &  ?  playLists.map((playlist, index) => (
//     playlist.track &&
//     <PlaylistItem 
//         key = {index}
//         index = {index} 
//         onClick = {() => getCurrentSong(playlist.track.id)}
//         plalylist = {playlist} 
//         currentSong = {currentSong}
//     />
// )): searchResults.map((playlist, index) => {
//         return (
//             <div className = {`song ${currentSong ? currentSong[0].track.id === playlist.track.id ? "active" : "" : null} `}>
//             <p id ="song-no">0{index + 1}</p>
//             <p>{playlist.track.name}</p>
//             <p>
//                 {playlist.track.artists.map((artist, index) => (
//                 artist.name += " " 
//                 ))}
//             </p>
//             <p id = "song-time">{millisToMinutes(playlist.track.duration_ms)}</p>
//         </div> 
//         )
// })}
