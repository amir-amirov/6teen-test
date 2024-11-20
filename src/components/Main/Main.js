import { useState } from "react";
import "./Main.css";

const Main = () => {

	const [token, setToken] = useState(localStorage.getItem("token"))
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	const handleLoad = () => {
		fetch("http://localhost:3000/api/foods", {
			method: "GET",
			headers: {
			  "Authorization": `Bearer ${token}`,  // Include the token in the Authorization header
			  "Content-Type": "application/json"
			}
		  })
			.then(response => {
			  if (!response.ok) {
				throw new Error("Failed to fetch data");
			  }
			  return response.json();
			})
			.then(data => {
			  console.log("Food data:", data);
			})
			.catch(error => {
			  console.error("Error:", error);
			});	
	}

	return (
		<div className="main_container">
			<nav className="navbar">
				<h1>fakebook</h1>
				<button className="white_btn" onClick={handleLogout}>
					Logout
				</button>
				<button className="white_btn" onClick={handleLoad}>
					Load data
				</button>
			</nav>
		</div>
	);
};

export default Main;