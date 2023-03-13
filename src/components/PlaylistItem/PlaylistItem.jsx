function PlaylistItem({playlist, currentSong, index, getCurrentSong}) {
    const millisToMinutes = (millis) => {
        Number(millis)
        let minutes = Math.floor(millis/60000)
        var seconds = ((millis % 60000) / 1000).toFixed(0)

        return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    }
    // console.log(playlist)
    // console.log(currentSong)
    return (
        <div>
            {playlist && currentSong ? (
                <div className = {`song`}> 
                 {/* ${currentSong ? currentSong[0].track.id === playlist.track.id ? "active" : "" : null} */}
            
            <p id ="song-no">0{index + 1}</p>
            <p>{playlist.track.name}</p>
            <p>
                {playlist.track.artists.map((artist, index) => (
                artist.name += " " 
                ))}
            </p>
            <p id = "song-time">{millisToMinutes(playlist.track.duration_ms)}</p>
    
            
            </div>) : (
                
                <p>Code not Showing</p>
            )}
        </div>
        
   
    )
}

export default PlaylistItem
