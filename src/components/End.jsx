import Header from "./Header";
import styles from "../styles/End.module.css"
import ilustracion from "../assets/Ilustracion1.svg";
import { Link } from "react-router-dom";

function End() {
    return (
        <div>
            <Header useStyle={true}/>
            <div className={styles.mainEnd}>
                <div className={styles.childEnd}>
                    <div className={styles.childEndTwo}>
                        <h1 className={styles.h1}>¡Hemos recibido tu solicitud!</h1>
                        <div className={styles.contentP}>
                            <p className={styles.p}>Estamos trabajando en tu logo. En el transcurso del día te estarán llegando a tu correo las opciones personalizadas.</p>
                        </div>
                    </div>
                    <img className={styles.img} src={ilustracion} alt="Ilustacion"/>
                    <Link to="/">
                        <button className={styles.button}>Volver al inicio</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default End