import styles from "../styles/Header.module.css"
import logo from "../assets/Logo.svg"

function Header() {
    console.log(styles)
	
	return (
        <header className={styles.mainHeader}>
			<img src={logo} alt="LogoWawo" />
	    </header>
    )
}

export default Header