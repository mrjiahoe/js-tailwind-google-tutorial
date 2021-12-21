import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Results } from "./Results";

export const RoutesTo = () => {
	return (
		<div className="p-4">
			{/* <Navigate from="/" to="/search" /> */}
			<Routes>
				<Route path="/search" element={<Results />} />
				<Route path="/images" element={<Results />} />
				<Route path="/news" element={<Results />} />
				<Route path="/videos" element={<Results />} />
			</Routes>
		</div>
	);
};
