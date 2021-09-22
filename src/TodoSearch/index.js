import React from "react";
import './TodoSearch.css';
import {TodoContext} from "../TodoContext";

function TodoSearch(){
    const {searchValue, setSearchValue} = React.useContext(TodoContext);

    const onSearchValueChange = (event) =>{
        setSearchValue(event.target.value);
    }
    return (
      <React.Fragment>
          <input
              className={"TodoSearch"} placeholder={"... buscar ..."}
              value={searchValue}
              onChange={onSearchValueChange}
          />
      </React.Fragment>
    );
}

export { TodoSearch };