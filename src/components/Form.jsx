import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
import styles from "../styles/Form.module.css";
import { useDispatch } from "react-redux";
import logosAbogadosMontes from "../assets/Logos-Abogados-Montes-1.jpg";
import logosGaleriaBalance from "../assets/Logos-Galería-Balance-1.jpg";
import logosAstraComics from "../assets/Logos-Astra-1.jpg";
import logosCantoraViche from "../assets/Cantora-V1-03.jpg";
import logosPrometeo from "../assets/Logos-Prometo-1.jpg"

function Form({ action, componenteAnterior, componenteSiguiente, titulo, parrafo, placeholder }){
    
    const dispatch = useDispatch()
    // console.log(action("holi"), "llego la action?")
    const [form, setForm] = useState("")

    function handleInputChange(e) {
        setForm(e.target.value)
    }

    function handleRadioChange(e) {
        setForm(e.target.id)
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(action(form))
        componenteSiguiente()
    }

    return(
        <div className={styles.mainForm}>
            <div className={styles.childForm}>
                <button onClick={componenteAnterior} className={styles.button}><BiArrowBack size={30}/> Atrás</button>
                {parrafo ?
                        <>
                        <div className={styles.contenText}>
                            <h1 className={styles.h1}>{ titulo }</h1>
                            <p className={styles.p}>{ parrafo }</p>
                        </div>
                        <textarea onChange={handleInputChange} className={styles.input} placeholder={placeholder}/>
                        </>
                     : 
                        <div className={styles.contenText}>
                            <h1 className={styles.h1}>{ titulo }</h1>
                            <div className={styles.contentImg}>
                                <div>
                                    <input onChange={handleRadioChange} type="radio" name="logos" id="minimalista"/>
                                    <label for="minimalista">
                                        <img className={styles.img} src={logosAbogadosMontes} alt="LogoMinimalista"/>
                                        <p>Minimalista</p>
                                    </label>
                                </div>
                                <div>
                                    <input onChange={handleRadioChange} type="radio" name="logos" id="geometrico"/>
                                    <label for="geometrico">
                                        <img className={styles.img} src={logosGaleriaBalance} alt="LogoGeometrico"/>
                                        <p>Geométrico</p>
                                    </label>
                                </div>
                                <div>
                                    <input onChange={handleRadioChange} type="radio" name="logos" id="futurista"/>
                                    <label for="futurista">
                                        <img className={styles.img} src={logosAstraComics} alt="LogoFuturista"/>
                                        <p>Futurista</p>
                                    </label>
                                </div>
                                <div>
                                    <input onChange={handleRadioChange} type="radio" name="logos" id="emblema"/>
                                    <label for="emblema">
                                        <img className={styles.img} src={logosCantoraViche} alt="LogoEmblema"/>
                                        <p>Emblema</p>
                                    </label>
                                </div>
                                <div>
                                    <input onChange={handleRadioChange} type="radio" name="logos" id="moderno"/>
                                    <label for="moderno">
                                        <img className={styles.img} src={logosPrometeo} alt="LogoModerno"/>
                                        <p>Moderno</p>
                                    </label>
                                </div>
                            </div>
                        </div>
                }
                <button onClick={handleSubmit} className={styles.buttonTwo}>Siguiente paso <BiRightArrowAlt size={30}/> </button>
            </div>
        </div>
    )
}

export default Form