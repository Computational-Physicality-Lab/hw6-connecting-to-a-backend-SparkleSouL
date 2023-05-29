import { Link } from "react-router-dom";
import { Nav } from "reactstrap";

import "./NavBar.css";

const NavBar = (props) => {
	return (
		<div>
			<Nav className="Nav">
				<Link to="/t-shirts">T-SHIRTS</Link>
				<Link to="/not-found">HOODIES</Link>
				<Link to="/not-found">CREATE YOUR OWN</Link>
				<Link to="/not-found">ABOUT US</Link>
				<Link to="/login">Log in</Link>
			</Nav>
		</div>
	);
};

export default NavBar;