import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({ children }) => {
	const [results, setResults] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [searchTerm, setSearchTerm] = useState("JS Mastery");

	// /videos, /search, /images
	const getResults = async (type) => {
		setIsLoading(true);

		const response = await fetch(`${baseUrl}${type}`, {
			method: "GET",
			headers: {
				"x-user-agent": "desktop",
				// "x-proxy-location": "US",
				"x-rapidapi-host": "google-search3.p.rapidapi.com",
				"x-rapidapi-key": "a86e2d1716msh47f5380eb0b2403p11dfe9jsnc976d49121c1",
			},
		});

		const data = await response.json();

		if (type.includes("/news")) {
			setResults(data.entries);
		} else if (type.includes("/images")) {
			setResults(data.image_results);
		} else {
			setResults(data.results);
		}

		setIsLoading(false);
	};

	return (
		<ResultContext.Provider
			value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
		>
			{children}
		</ResultContext.Provider>
	);
};

export const useResultContext = () => useContext(ResultContext);
