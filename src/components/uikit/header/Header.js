import React from "react";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
	return (
		<>
			<header className="header">
				<div className="row">
					<div className="cell cell-4">
						<a href="/" className="logo">
							<img src={logo} alt="logo.png" />
						</a>
					</div>
					<div className="cell cell-8">
						<nav>
							<Link to="/">Домой</Link>
						</nav>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
