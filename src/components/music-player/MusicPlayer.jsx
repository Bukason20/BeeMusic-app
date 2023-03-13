import {MdFavoriteBorder} from "react-icons/md"
import {FiMusic, FiRepeat} from "react-icons/fi"
import {IoIosResize} from "react-icons/io"
import {AiFillFastForward, AiFillFastBackward} from "react-icons/ai"
import {BsFillPauseCircleFill, BsFillPlayCircleFill, BsShuffle} from "react-icons/bs"
import {BiVolumeFull, BiVolumeLow} from "react-icons/bi"
import "./music-player.css"
import { useState, useRef, useEffect } from "react"

function MusicPlayer({currentSong, playLists, currentIndex, getCurrentSong,play, pause}) {
    const [isPlay, setIsPlay] = useState(false);
    // const [pause, setPause] = useState(true);
    // const [audioSrc, setAudioSrc] = useState(currentSong ? currentSong[0].track.preview_url : null)
    // let [audioSrc, setAudioSrc] = useState()
    // useEffect(() => {
    //     setAudioSrc(currentSong ? currentSong[0].track.preview_url : null)
    // }, [currentSong])

    // console.log(audioSrc)
    // const songAudio = useRef(new Audio(audioSrc) )
    // const playMusic = () => {
    //     // --timer
    //     setPause(false)
    //     setPlay(true)
    //     songAudio.current.play()
    // }

    const audioSrc = currentSong ? currentSong.track.preview_url : ""

    const audioRef = useRef(new Audio(playLists[0].track.preview_url))
    console.log(audioRef)

    const playMusic = () => {
            // --timer
            // setPause(false)
            // setPlay(true)
            // if()
            audioRef.current.play()

        }

    const pauseMusic = () => {
        // setPause(true)
        // setPlay(false)
        // songAudio.pause()
    }
    const playPrevious =() => {

    }

    const playNext = () => {

    }

    return (
        <div className = "music-player">
            <div className="player-utils">
                <div className="first-utils">
                    <button >
                        <MdFavoriteBorder />
                    </button>
                    <button>
                        <FiMusic/>
                    </button>
                    <button>
                        <IoIosResize />
                    </button>
                    
                </div>

                <div className="second-utils">
                    <FiRepeat />
                    <AiFillFastBackward />
                    <div className="play-pause">
                        <button className= {pause ? "" : ""} onClick = {playMusic}>
                            <BsFillPlayCircleFill/>
                        </button>
                        <button  className= {play ? "" : "pause"} onClick = {pauseMusic}>
                        
                            <BsFillPauseCircleFill/>
                        </button>  
                    </div>
                    <AiFillFastForward />
                    <BsShuffle />
                </div>

                <div className="volume">
                    <BiVolumeLow />
                    <BiVolumeFull />
                </div>
            </div>
           
        </div>
    )
}

export default MusicPlayer
