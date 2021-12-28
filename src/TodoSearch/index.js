import React from "react";
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue, loading}){

    const onSearchValueChange = (event) =>{
        setSearchValue(event.target.value);
    }
    return (
      <React.Fragment>
          <input
              className={"TodoSearch"} placeholder={"... buscar ..."}
              value={searchValue}
              onChange={onSearchValueChange}
              disabled={loading}
          />
      </React.Fragment>
    );
}

export { TodoSearch };