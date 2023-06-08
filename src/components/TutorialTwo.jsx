import styles from "../styles/TutorialTwo.module.css"
import PasoDos from "../assets/Paso2.svg"
import { useSelector } from "react-redux"

function TutorialTwo() {
    const languageRedux = useSelector((state) => state.language)
    return (
        <>
        {
            languageRedux.language === "EN" ?
            <div className={styles.mainTutorial}>
                <div className={styles.childTutorial}>
                    <div>
                        <img className={styles.img} src={PasoDos} alt="Paso1"/>
                    </div>
                    <div className={styles.mainText}>
                        <div className={styles.contentH2}>
                            <h2>2.</h2>
                        </div>
                        <h2 className={styles.h2}>Custom logo design</h2>
                        <p className={styles.p}>Whit this information, we will create<br></br>4 logo options specifically designed<br></br>for your business and its needs.</p>
                    </div>
                </div>
            </div>
            :
            <div className={styles.mainTutorial}>
                <div className={styles.childTutorial}>
                    <div>
                        <img className={styles.img} src={PasoDos} alt="Paso1"/>
                    </div>
                    <div className={styles.mainText}>
                        <div className={styles.contentH2}>
                            <h2>2.</h2>
                        </div>
                        <h2 className={styles.h2}>Diseño personalizado<br></br>de tu logo</h2>
                        <p className={styles.p}>Con esta información, crearemos 4<br></br>opciones de logo específicamente<br></br>para tu negocio y sus necesidades.</p>
                    </div>
                </div>
            </div>

        }
        </>
    )
}

export default TutorialTwo