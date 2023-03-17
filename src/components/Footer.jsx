import logo from "../assets/Logo.svg"
import styles from "../styles/Footer.module.css"

function Footer() {
    return (
        <div className={styles.mainFooter}>
            <img className={styles.img} src={logo} alt="Logo"/>
            <p className={styles.p}>Wawo.ai x Whatever Works, 2023.</p>
            <p className={styles.p}><a href="mailto:contactowawo@gmail.com">contactowawo@gmail.com</a></p>
        </div>
    )
}

export default Footer