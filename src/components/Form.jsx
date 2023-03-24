import { BiArrowBack } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
import styles from "../styles/Form.module.css";
import { useNavigate } from "react-router-dom";

function Form({ componenteAnterior }){

    // console.log(clickback)
    const navigate = useNavigate()

    // function componenteAnterior(component) {
    //     if (component === 1) {
    //         navigate("/")
    //     }
    // }
    return(
        <div className={styles.mainForm}>
            <div className={styles.childForm}>
                <button onClick={componenteAnterior} className={styles.button}><BiArrowBack size={30}/> Atrás</button>
                <div className={styles.contenText}>
                    <h1 className={styles.h1}>Cuéntanos más</h1>
                    <p className={styles.p}>Queremos conocer tu empresa. Cuéntanos de qué se trata, cual es su razón de ser y qué productos o servicios ofrece.</p>
                </div>
                <textarea className={styles.input} placeholder="Cuéntanos más de tu empresa"/>
                <button className={styles.buttonTwo}>Siguiente paso <BiRightArrowAlt size={30}/> </button>
            </div>
        </div>
    )
}

export default Form