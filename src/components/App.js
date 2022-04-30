import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Header from "./uikit/header/Header";

function App() {
	return (
		<BrowserRouter>
			<div className="container">
				<Header />
			</div>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
