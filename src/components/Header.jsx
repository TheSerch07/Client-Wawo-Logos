import styles from "../styles/Header.module.css";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../features/language/languageSlice";

function Header({ useStyle }) {
	const dispatch = useDispatch()
	const languageRedux = useSelector((state) => state.language)
	const classes = useStyle ? styles.mainHeader : styles.mainHeaderTwo;
	console.log(languageRedux, "el idioma")

	function changeLanguage(e) {
		e.preventDefault()
		if (languageRedux.language === "EN") {
			dispatch(setLanguage("ES"))
		} else {
			dispatch(setLanguage("EN"))
		}
	}
	
	return (
        <header className={classes}>
			<Link to="/">
				<img className={styles.img} src={logo} alt="LogoWawo" />
			</Link>
			{
				languageRedux.language === "EN" ?
				<button onClick={changeLanguage}>
					Español
				</button>
				:
				<button onClick={changeLanguage}>
					English
				</button>
			}
	    </header>
    )
}

export default Header