import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<RegisterPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/home" element={<RegisterPage />} />
				<Route path="/genres" element={<RegisterPage />} />
				<Route path="/carousel" element={<RegisterPage />} />
				<Route path="/dashboard" element={<RegisterPage />} />
				<Route path="/movies" element={<RegisterPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
