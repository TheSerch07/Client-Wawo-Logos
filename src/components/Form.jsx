import { BiArrowBack } from "react-icons/bi";
import styles from "../styles/Form.module.css";

function Form() {

    console.log(BiArrowBack)
    return(
        <div className={styles.mainForm}>
            <button><BiArrowBack /> Atrás</button>
            <h1>Cuéntanos más</h1>
            <p>Queremos conocer tu empresa. Cuéntanos de qué se trata, cual es su razón de ser y qué productos o servicios ofrece.</p>
            <input type="text" placeholder="Cuéntanos más de tu empresa"/>
            <button>Siguiente paso</button>
        </div>
    )
}

export default Form