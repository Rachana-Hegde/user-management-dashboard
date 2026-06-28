import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";

function SearchBar({ value, onChange }) {

    return (

        <div className="search-box">

            <FaSearch className="search-icon"/>

            <input
                type="text"
                placeholder="Search users..."
                value={value}
                onChange={onChange}
            />

        </div>

    );

}

export default SearchBar;