import axios from 'axios';
import React, { Component } from 'react';
import Navbar from "./layout/Navbar2.js";

class Joke extends Component {
	state = {
        joke: ''
      }

      componentDidMount= () =>{
		this.fetchJoke();};
		   fetchJoke = () => {
			axios
				.get('https://icanhazdadjoke.com/', {
					headers: { Accept: 'application/json' },
				})
				.then(res => this.setState(res.data))
				.catch(err => console.log(err));
		};
	

	 
    
    render() {
	return (
		<div>
        <Navbar />
		<div className="mt-4">
			<div className="card">
				<h5 className="card-header">Dad Joke Class</h5>
				<div className="card-body">
					<p className="card-text">{this.state.joke}</p>
					<a className="btn btn-primary text-white" onClick={this.fetchJoke}>
						Get Another Joke
					</a>
				</div>
			</div>
		</div>
		</div>
	);
    }
}

  

export default Joke;

