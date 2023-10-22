import Category from "./Category/Category";
import Price from "./Price/Price"
import Colors from "./Colors/Colors"
import React from "react";
import "./Sidebar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Sidebar = ({ handleChange }) => {
	
	return (
		<div>
			<section className="sidebar">
				<div className="logo-container">
					<h1>
						<AiOutlineShoppingCart />
					</h1>
				</div>
                <Category handleChange={handleChange} />
                <Price handleChange={handleChange}/>
                <Colors handleChange={handleChange}/>
			</section>
		</div>
	);
};

export default Sidebar;
