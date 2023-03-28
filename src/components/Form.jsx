import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
import styles from "../styles/Form.module.css";
import { useDispatch } from "react-redux";

function Form({ action, componenteAnterior, componenteSiguiente, titulo, parrafo, placeholder }){
    
    const dispatch = useDispatch()
    // console.log(action("holi"), "llego la action?")
    const [form, setForm] = useState("")

    function handleInputChange(e) {
        setForm(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(action(form))
        // console.log("Pude enviar dos funciones, jeje 🥺")
        componenteSiguiente()

    }

    return(
        <div className={styles.mainForm}>
            <div className={styles.childForm}>
                <button onClick={componenteAnterior} className={styles.button}><BiArrowBack size={30}/> Atrás</button>
                <div className={styles.contenText}>
                    <h1 className={styles.h1}>{ titulo }</h1>
                    <p className={styles.p}>{ parrafo }</p>
                </div>
                <textarea onChange={handleInputChange} className={styles.input} placeholder={placeholder}/>
                <button onClick={handleSubmit} className={styles.buttonTwo}>Siguiente paso <BiRightArrowAlt size={30}/> </button>
            </div>
        </div>
    )
}

export default Form