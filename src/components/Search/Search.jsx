import { BiSearch } from "react-icons/bi"
import styles from "./search.module.css"

function Search({filterEvent, filterText}) {
    return (
        <div className = {styles.searcdh}>
            {/* <BiSearch /> */}
           <input type="search" name="" placeholder = "Search Playlist" onKeyUp = {(e) => filterEvent(e.target.value)} defaultValue = {filterText}/> 
        </div>
    )
}

export default Search
