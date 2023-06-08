import styles from "../styles/Tutorial.module.css"
import PasoUno from "../assets/Paso1.svg"
import { useSelector } from "react-redux"

function Tutorial() {
    const languageRedux = useSelector((state) => state.language)
    return (
        <>
        {
            languageRedux.language === "EN" ?
            <div className={styles.mainTutorial}>
                <h1 className={styles.title}>How does it work?</h1>
                <div className={styles.childTutorial}>
                    <div className={styles.mainText}>
                        <div className={styles.contentH2}>
                            <h2>1.</h2>
                        </div>
                        <h2 className={styles.h2}>Enter your brand's information</h2>
                        <p className={styles.p}>Tell us what you do, what your company or brand name is, if you have a slogan, and the keywords that best describe it.</p>
                    </div>
                    <div  className={styles.contentImg}>
                        <img className={styles.img} src={PasoUno} alt="Paso1"/>
                    </div>
                </div>
            </div>
            :
            <div className={styles.mainTutorial}>
                <h1 className={styles.title}>¿Cómo funciona?</h1>
                <div className={styles.childTutorial}>
                    <div className={styles.mainText}>
                        <div className={styles.contentH2}>
                            <h2>1.</h2>
                        </div>
                        <h2 className={styles.h2}>Ingresa la información de tu empresa</h2>
                        <p className={styles.p}>Cuéntamos qué haces, cómo se llama tu empresa, si tienes un eslogan y las palabras que mejor la describan.</p>
                    </div>
                    <div  className={styles.contentImg}>
                        <img className={styles.img} src={PasoUno} alt="Paso1"/>
                    </div>
                </div>
            </div>
        }
        </>
    )
}

export default Tutorial