import styles from "../styles/TutorialThree.module.css"
import PasoTres from "../assets/Paso3.svg"

function TutorialThree() {
    return (
        <div className={styles.mainTutorial}>
            <div className={styles.childTutorial}>
                <div className={styles.mainText}>
                    <div className={styles.contentH2}>
                        <h2>3.</h2>
                    </div>
                    <h2 className={styles.h2}>Obten editables y<br></br>versión en alta calidad</h2>
                    <p className={styles.p}>Si te gusta alguno de los 4 diseños de logo, puedes comprar sus editables y versión en alta calidad.</p>
                </div>
                <div>
                    <img className={styles.img} src={PasoTres} alt="Paso1"/>
                </div>
            </div>
        </div>
    )
}

export default TutorialThree