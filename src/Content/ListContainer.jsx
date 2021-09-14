import React, { Component } from 'react';
import Cards from '../Components/Cards';

const url = `https://www.omdbapi.com/?i=tt3896198&apikey=3c86e97`

export default class ListContainer extends Component {

    constructor(){
        super();
        this.state = {
            peli : [],
            searchTerm: 'Batman'
        }
    }
    

  async componentDidMount () {
    const {searchTerm} = this.state;

        const res = await fetch(`${url}&s=${searchTerm}`);
        const {Search} = await res.json();
        console.log(Search) 
        this.setState({peli:Search})
    }

    render() { 
        const handlerOnsubmit = async (e) => {
            e.preventDefault();
            const {searchTerm} = this.state;

            const res = await fetch(`${url}&s=${searchTerm}`);
            const {Search} = await res.json();
            console.log(Search) 
            this.setState({peli:Search})
        }

        return(
        <div className="">
            <form onSubmit={handlerOnsubmit}>
                <input type="text"
                name="searchTerm"
                className="form-control"
                placeholder="Search"
                autoFocus
                value={this.state.searchTerm}
                onChange={(e)=>this.setState({searchTerm: e.target.value})}
                />
            </form>

            <div className="container row row-cols-1 row-cols-md-4 g-4 py-5 text-center ms-5">
                {
                    this.state.peli.map((movie,index) =>{
                        return (
                           <Cards key={`${movie}-${index}`}
                                  movies={movie}
                           />   
                        )
                    })
                }
            </div>
        </div>
        )
    }
}