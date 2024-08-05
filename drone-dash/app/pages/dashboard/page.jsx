"use client";

import { useState } from "react";
import Link from "next/link";

const Dashboard = () => {
	const [file, setFile] = useState(null);
	const [data, setData] = useState(null);

	const handleFileChange = (e) => {
		setFile(e.target.files[0]);
	};

	const handleUpload = async () => {
		if (!file) return;

		// Simulate file processing and data extraction
		setTimeout(() => {
			setData({
				ndvi: "0.75", // Simulated NDVI value
				areas: [
					{ name: "Field 1", health: "Good" },
					{ name: "Field 2", health: "Moderate" },
					{ name: "Field 3", health: "Poor" },
				],
			});
		}, 2000);
	};

	return (
		<div className="App">
			<header className="bg-green-600 p-4">
				<nav className="container mx-auto flex flex-wrap justify-between items-center">
					<div className="text-white text-xl font-bold">Drone-Agri</div>
					<div className="text-white text-2xl font-bold">Dashboard</div>
					<ul className="flex space-x-4 text-white">
						<li>
							<Link href="/">
								<span>Home</span>
							</Link>
						</li>
					</ul>
				</nav>
			</header>

			<section
				id="upload"
				className="relative h-screen bg-gray-100 text-center px-4 py-16"
			>
				<h2 className="text-3xl font-bold mb-8 text-green-600">
					Upload Drone Data
				</h2>
				<input
					type="file"
					onChange={handleFileChange}
					className="mb-4 px-6 py-3 text-lg text-black"
				/>
				<button
					onClick={handleUpload}
					className="bg-green-600 px-6 py-3 text-lg font-semibold rounded text-white"
				>
					Upload and Process
				</button>

				{/* Dashboard */}
				{data && (
					<section
						id="dashboard"
						className="mt-16 bg-white shadow-lg rounded p-8"
					>
						<h3 className="text-2xl font-bold mb-4 text-green-600">
							Dashboard
						</h3>
						<p className="text-lg mb-4">NDVI Value: {data.ndvi}</p>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
							{data.areas.map((area, index) => (
								<div key={index} className="bg-gray-200 p-4 rounded">
									<h4 className="text-xl font-semibold">{area.name}</h4>
									<p className="text-lg">Health: {area.health}</p>
								</div>
							))}
						</div>
					</section>
				)}
			</section>

			<footer className="bg-green-600 p-4 text-center text-white">
				© 2024 Drone-Agri. All rights reserved.
			</footer>
		</div>
	);
};

export default Dashboard;
