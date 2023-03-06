import styles from "../styles/Header.module.css"
import logo from "../assets/Logo.svg"

function Header() {
    console.log(styles)
	
	return (
        <header className={styles.mainHeader}>
			<img src={logo} alt="LogoWawo" />
		{/* <a id="logo-header" href="#">
			<span class="site-name">FranciscoAMK</span>
			<span class="site-desc">Diseño web / WordPress / Tutoriales</span>
		</a>

		<nav>
			<ul>
				<li><a href="#">Inicio</a></li>
				<li><a href="#">Acerca de</a></li>
				<li><a href="#">Contacto</a></li>
			</ul>
		</nav> */}
	    </header>
    )
}

export default Header