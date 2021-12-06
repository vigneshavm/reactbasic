import React, { useState } from "react";
import "./SearchBar.css";
//import SearchIcon from '@material-ui/icons/Search';

const SearchBar = ({placeholder, data}) => {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");


const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
        console.log("The Job name is -> ",value.jobName);
        return value.jobName.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
        setFilteredData([]);
      } else {
        setFilteredData(newFilter);
      }
}
const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const selectedSearchData = () => {
      console.log("You selected the data")
  }

return (
<div className="search">
    <div className="searchInput">
        <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter}></input>
    </div>

    {filteredData.length !=0 && (
        <div className="dataResult" onSelect={selectedSearchData}>
        {filteredData.slice(0,15).map((value, key) => {
            return (
     <p>{value.jobName}</p>

            )
        }) }
    </div>
    ) }
    
</div>
);
}

export default SearchBar;