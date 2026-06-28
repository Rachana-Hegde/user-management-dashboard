import "./Toolbar.css";

import { FaFilter, FaPlus } from "react-icons/fa";

import SearchBar from "../SearchBar/SearchBar";

function Toolbar({
    searchTerm,
    onSearch,
    onFilter,
    onAddUser
}){

    return(

        <div className="toolbar">

            <SearchBar
                value={searchTerm}
                onChange={onSearch}
            />

            <div className="toolbar-buttons">

                <button
                    className="filter-btn"
                    onClick={onFilter}
                >

                    <FaFilter/>

                    Filter

                </button>

                <button
                    className="add-btn"
                    onClick={onAddUser}
                >

                    <FaPlus/>

                    Add User

                </button>

            </div>

        </div>

    )

}

export default Toolbar;