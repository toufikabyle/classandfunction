import React, { useState, useEffect } from 'react';
import Navbar from "./layout/Navbar.js";
import axios from 'axios';

export default function Joke() {
	const [joke, setJoke] = useState('');

	useEffect(() => {
		fetchJoke();
	}, []);

	const fetchJoke = () => {
		axios
			.get('https://icanhazdadjoke.com/', {
				headers: { Accept: 'application/json' },
			})
			.then(res => setJoke(res.data))
			.catch(err => console.log(err));
	};

	return (
		<div>
		<Navbar />
		<div className="mt-4">
			<div className="card">
				<h5 className="card-header">Dad Joke Function</h5>
				<div className="card-body">
					<p className="card-text">{joke.joke}</p>
					<a className="btn btn-primary text-white" onClick={fetchJoke}>
						Get Another Joke
					</a>
				</div>
			</div>
		</div>
		</div>
	);
}
