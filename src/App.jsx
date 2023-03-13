import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Feeds from "./components/Feeds/Feeds";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import PlayLists from "./components/PlayLists/PlayLists";
import Shortcut from "./components/Shortcuts/Shortcut";
import Sidebar from "./components/SideBar/Sidebar";
import { setClientToken } from "./components/Spotify";
import Trend from "./components/Trends/Trend";
import New from "./components/New/New"
import Calendar from "./components/Calendar/Calendar"
import Events from "./components/Events/Events"
import FavSongs from "./components/FavSongs/FavSongs"
import Artists from "./components/Artists/Artists"
import Albums from "./components/Albums/Albums"

function App() {
  const [token, setToken] = useState("")
  const [playLists, setPlayLists] = useState(null)
  const [error, setError] = useState(null)
  const [filterText, setFilterText] = useState("");
  const [searchResults, setSearchResults] =useState([]);
  
  useEffect(() => {
    const token = window.localStorage.getItem("token")
    const hash = window.location.hash
    window.location.hash = ""
    if(!token && hash){
      const userToken = hash.split("&")[0].split("=")[1]
      window.localStorage.setItem("token", userToken)
      setToken(userToken)
      setClientToken(userToken)
    }else {
      setToken(token)
      setClientToken(token)
    }
    fetch("https://api.spotify.com/v1/playlists/45hDYdBXHehwWGM0aLMoLc/tracks?limit=50&offset=0", {
      method: "GET",
      headers: {
          Authorization: `Bearer ${token}`
      }
      })
      .then(response => response.json())
      .then(data => {
          localStorage.setItem("playlists", JSON.stringify(data.items))
          setPlayLists(JSON.parse(localStorage.getItem("playlists"))) 
      })
      .catch(err => setError(err))
  }, [])

  return (!token ?
    <Login /> :

    <Router>
      <Sidebar token = {token}/>
        <div className="app-contents">
          <Switch>
            <Route exact path = "/">
              <Home 
                token = {token}  
                playLists ={playLists} 
              />
            </Route>
            <Route path = "/trends">
              <Trend />
            </Route>
            <Route path = "/feeds">
              <Feeds />
            </Route>
            <Route path = "/new">
            <New />
            </Route>
            <Route path = "/calendar">
            <Calendar />
            </Route>
            <Route path = "/events">
            <Events />
            </Route>
            <Route path = "/favorite-songs">
            <FavSongs />
            </Route>
            <Route path = "/artist">
            <Artists />
            </Route>
            <Route path = "/albums">
            <Albums />
            </Route>
          </Switch>
          <Shortcut token = {token} />
        </div> 
       
    </Router>
  )
}

export default App
