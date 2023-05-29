import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import MyCart from "./MyCart/MyCart";
import OrderSummary from "./OrderSummary/OrderSummary";

import "./CartPage.css";

const CartPage = () => {
	const { totalQuantity } = useContext(CartContext);

	return (
		<div className="Cart-Page">
			<div className="redButton">
				<h1 className="Cart-title">
					My Cart ({totalQuantity})
				</h1>
			</div>
			<div className="Cart-Content">
				<MyCart />
				<OrderSummary />
			</div>
		</div>
	);
};

export default CartPage;
