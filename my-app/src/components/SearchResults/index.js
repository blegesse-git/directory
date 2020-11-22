import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <div >
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col" onClick={props.age}>Age</th>
          </tr>
        </thead>
        <tbody>
        {props.results.filter(r=>r.fullName.toLowerCase().includes(props.search.toLowerCase())).map(result => (
          <tr key={result.key}>
            <th scope="row"><img src={result.picture.medium} alt={result.name.first} /></th>
            <td>{result.fullName}</td>
            <td>{result.phone}</td>
            <td>{result.email}</td>
            <td>{result.dob.age}</td>
          </tr>
        ))}
    
        </tbody>
      </table>

    </div>
  )
}

export default SearchResults;