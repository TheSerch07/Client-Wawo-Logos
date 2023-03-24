import { BiArrowBack } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
import styles from "../styles/Form.module.css";

function Form({ componenteAnterior, componenteSiguiente, titulo, parrafo, placeholder }){
    return(
        <div className={styles.mainForm}>
            <div className={styles.childForm}>
                <button onClick={componenteAnterior} className={styles.button}><BiArrowBack size={30}/> Atrás</button>
                <div className={styles.contenText}>
                    <h1 className={styles.h1}>{ titulo }</h1>
                    <p className={styles.p}>{ parrafo }</p>
                </div>
                <textarea className={styles.input} placeholder={placeholder}/>
                <button onClick={componenteSiguiente} className={styles.buttonTwo}>Siguiente paso <BiRightArrowAlt size={30}/> </button>
            </div>
        </div>
    )
}

export default Form