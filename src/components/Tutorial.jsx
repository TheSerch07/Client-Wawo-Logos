import styles from "../styles/Tutorial.module.css"
import PasoUno from "../assets/Paso1.svg"

function Tutorial() {
    return (
        <div className={styles.mainTutorial}>
            <h1 className={styles.title}>¿Cómo funciona?</h1>
            <div className={styles.childTutorial}>
                <div className={styles.mainText}>
                    <div className={styles.contentH2}>
                        <h2>1.</h2>
                    </div>
                    <h2>Ingresa la información<br></br>de tu empresa</h2>
                    <p className={styles.p}>Cuéntamos qué haces, cómo se llama<br></br>tu empresa, si tienes un eslogan y las<br></br>palabras que mejor la describan.</p>
                </div>
                <div>
                    <img src={PasoUno} alt="Paso1"/>
                </div>
            </div>
        </div>
    )
}

export default Tutorial