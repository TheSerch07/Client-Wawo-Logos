import styles from "../styles/Header.module.css";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

function Header({ useStyle }) {

	const classes = useStyle ? styles.mainHeader : styles.mainHeaderTwo;

	return (
        <header className={classes}>
			<Link to="/">
				<img className={styles.img} src={logo} alt="LogoWawo" />
			</Link>
	    </header>
    )
}

export default Header