import { useContext } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { ProductContext } from "../../../context/ProductContext";

import "./AddCartBtn.css";

const AddCartBtn = () => {
	const { productState } = useContext(ProductContext);
	const { addToCart } = useContext(CartContext);

	return (
		<div className="redButton">
			<Button
				disabled={
					!productState.canAddCart ||
					productState.price === "" ||
					productState.price === null
				}
				onClick={(e) => {
					addToCart(productState);
				}}
			>
				<Link
					className="addToCartLink"
					style={{ textDecoration: "none", color: "white" }}
					to="/cart"
				>
					Add To Cart
				</Link>
			</Button>
		</div>
	);
};

export default AddCartBtn;
