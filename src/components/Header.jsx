import styles from "../styles/Header.module.css"
import logo from "../assets/Logo.svg"

function Header({ useStyle }) {

	const classes = useStyle ? styles.mainHeader : styles.mainHeaderTwo;
	console.log(classes)

	return (
        <header className={classes}>
			<img src={logo} alt="LogoWawo" />
	    </header>
    )
}

export default Header