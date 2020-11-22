import React, { Component } from "react";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";
import Header from "./Header"
import API from "../utils/API";

class SearchResultsContainer extends Component {
    state = {
        search: "",
        results: [],
        order: false
    };
    

    componentDidMount() {
        this.getEmployee()
       
    }

    age = () => {
        
        const {results, order} = this.state
        // if(this.state.order) {
        //     arr = this.state.results.sort((a,b)=> a.dob.age - b.dob.age) 
        // } else {
        //     arr = this.state.results.sort((a,b)=> b.dob.age - a.dob.age) 
        // }
        // const arr = order ? results.sort((a,b)=> a.dob.age - b.dob.age) : results.sort((a,b)=> b.dob.age - a.dob.age) 
        const arr2 = results.sort((a,b)=> order ? a.dob.age - b.dob.age : b.dob.age - a.dob.age)
        this.setState({results: arr2, order: !order})

    }

    
        
    

    handleInputChange = event  => {
        const value = event.target.value
        const name = event.target.name
        
        this.setState({
            [name]: value,
            // results: arr
        })
    }

    getEmployee = () => {
        API.getEmployee().then(res => 
            this.setState({ results: res.data.results.map(d=> ({...d, fullName: d.name.first + " " + d.name.last}))}))
        .catch(err => console.log(err));
        

    }

    render() {
        const {results, search} = this.state
        return (
            <div>
                <Header/>
                <SearchForm 
                value={search}
                handleInputChange={this.handleInputChange}
                />
                <SearchResults age={this.age}  search= {search} results= {results}/>

            </div>
        )
    }
};
export default SearchResultsContainer;

