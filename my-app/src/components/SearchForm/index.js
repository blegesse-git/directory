import React from "react";
import "./style.css";

function SearchForm(props) {
    return (
      <form className="search">
        <div className="form-group">
          
          <input
            value={props.search}
            onChange={props.handleInputChange}
            type="text"
            className="form-control"
            id= "input"
            placeholder="Type in Employee name to filter"
            name="search"
          />
          
        </div>
      </form>
    );
  }
  
  export default SearchForm;