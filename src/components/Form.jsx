import { BiArrowBack } from "react-icons/bi";
import styles from "../styles/Form.module.css";

function Form() {

    console.log(BiArrowBack)
    return(
        <div className={styles.mainForm}>
            <div className={styles.childForm}>
                <button><BiArrowBack /> Atrás</button>
                <div>
                    <h1>Cuéntanos más</h1>
                    <p>Queremos conocer tu empresa. Cuéntanos de qué se trata, cual es su razón de ser y qué productos o servicios ofrece.</p>
                </div>
                <textarea className={styles.input} placeholder="Cuéntanos más de tu empresa"/>
                <button>Siguiente paso</button>
            </div>
        </div>
    )
}

export default Form