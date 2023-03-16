import styles from "../styles/Obtains.module.css"
import Obtain from "./Obtain"
import OpcionesLogo from "../assets/OpcionesLogo.svg"

function Obtains() {
    return (
        <div className={styles.mainObtains}>
            <h1 className={styles.title}>¿Qué obtienes?</h1>
            <div className={styles.eachObtain}>
                <div className={styles.obtain}>
                    < Obtain price="Gratis"/>
                    < Obtain price="Gratis" img={OpcionesLogo}/>
                    < Obtain price="Gratis"/>
                </div>
                <div className={styles.obtain}>
                    < Obtain price="Pago" />
                    < Obtain price="Pago" />
                    < Obtain price="Pago" />
                    < Obtain price="Pago" />
                </div>
            </div>
        </div>
    )
}

export default Obtains