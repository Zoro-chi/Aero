"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import intelligentFarming from "../public/images/intelligent-farming.png";
import image1 from "../public/images/image1.png";
import image2 from "../public/images/image2.png";
import image3 from "../public/images/image3.png";

const Home = () => {
	const router = useRouter();

	return (
		<div className="App">
			<header className="bg-green-600 p-4">
				<nav className="container mx-auto flex flex-wrap justify-between items-center">
					<div className="text-white text-2xl font-bold">Drone-Agri</div>
					<ul className="flex space-x-4 text-white">
						<li>
							<a href="#home">Home</a>
						</li>
						<li>
							<a href="#gallery">Gallery</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</nav>
			</header>

			<section id="home" className="relative h-screen bg-cover bg-center">
				<Image
					src={intelligentFarming}
					alt="Intelligent Farming"
					layout="fill" // Use fill layout to make the image cover the entire section
					// objectFit="cover" // Ensure the image covers the entire section
					quality={100}
				/>

				<div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
					<h1
						className="text-4xl md:text-6xl font-bold mb-4"
						style={{ marginTop: "30rem" }}
					>
						Revolutionizing Agriculture with Drone Technology
					</h1>
					<p className="text-xl md:text-2xl mb-8">
						Precision Farming for a Sustainable Future
					</p>
					<button
						className="bg-green-600 px-6 py-3 text-lg font-semibold rounded"
						onClick={() => router.push("./pages/dashboard")}
					>
						Get Started
					</button>
				</div>
			</section>

			<section id="gallery" className="py-16 bg-gray-100 text-center px-4">
				<h2 className="text-3xl font-bold mb-8 text-green-600">Gallery</h2>
				<div className="flex flex-wrap justify-center gap-4">
					<Image
						className="w-full md:w-80 h-80 object-cover"
						src={image1}
						alt="drone farming"
						width={300}
						height={300}
						quality={100}
					/>
					<Image
						className="w-full md:w-80 h-80 object-cover"
						src={image2}
						alt="drone farming"
						width={300}
						height={300}
						quality={100}
					/>
					<Image
						className="w-full md:w-80 h-80 object-cover"
						src={image3}
						alt="drone farming"
						width={300}
						height={300}
						quality={100}
					/>
				</div>
			</section>

			<section id="contact" className="py-16 text-center px-4">
				<h2 className="text-3xl font-bold mb-4">Contact Us</h2>
				<p className="max-w-2xl mx-auto text-lg">
					For inquiries, please contact us at{" "}
					<a href="mailto:info@drone-agri.com" className="text-green-600">
						info@drone-agri.com
					</a>
				</p>
			</section>

			<footer className="bg-green-600 p-4 text-center text-white">
				© 2024 Drone-Agri. All rights reserved.
			</footer>
		</div>
	);
};

export default Home;
