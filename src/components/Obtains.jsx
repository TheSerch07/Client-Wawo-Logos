import styles from "../styles/Obtains.module.css"
import Obtain from "./Obtain"

function Obtains() {
    return (
        <div className={styles.mainObtains}>
            <h1 className={styles.title}>¿Qué obtienes?</h1>
            <div className={styles.eachObtain}>
                <div className={styles.obtain}>
                    < Obtain/>
                    < Obtain/>
                    < Obtain/>
                </div>
                <div className={styles.obtain}>
                    < Obtain/>
                    < Obtain/>
                    < Obtain/>
                    < Obtain/>
                </div>
            </div>
        </div>
    )
}

export default Obtains