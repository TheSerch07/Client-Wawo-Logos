import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
import styles from "../styles/Form.module.css";
import { useDispatch, useSelector } from "react-redux";
import logosAbogadosMontes from "../assets/Logos-Abogados-Montes-1.jpg";
import logosGaleriaBalance from "../assets/Logos-Galería-Balance-1.jpg";
import logosAstraComics from "../assets/Logos-Astra-1.jpg";
import logosCantoraViche from "../assets/Cantora-V1-03.jpg";
import logosPrometeo from "../assets/Logos-Prometo-1.jpg"
import { useNavigate } from "react-router-dom";
import { setClean } from "../features/form/formSlice";

function Form({buttonText, submit, action, componenteAnterior, componenteSiguiente, titulo, parrafo, placeholder }){
    const formRedux = useSelector((state) => state.form)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // console.log(action("holi"), "llego la action?")
    const [form, setForm] = useState("")
    const [selectedLogo, setSelectedLogo] = useState("")

    function handleInputChange(e) {
        setForm(e.target.value)
    }

    function handleRadioChange(e) {
        console.log(e.target.value, "el value")
        setSelectedLogo(e.target.id);
        setForm(e.target.id)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (submit) {
            dispatch(action(form))
            fetch("https://sheet.best/api/sheets/6c0dc22f-110d-4949-999d-c468611090f1", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nombreEmpresa: formRedux.nombreEmpresa,
                cuentanosMas: formRedux.cuentanosMas,
                palabras: formRedux.palabras,
                eslogan: formRedux.eslogan,
                estilos: formRedux.estilos,
                correo: form
            }),
            })
            .then((r) => r.json())
            .then((data) => {
                // The response comes here
                console.log(data);
            })
            .catch((error) => {
                // Errors are reported there
                console.log(error);
            });
            // dispatch(setClean())
            navigate("/formFinished")
        } else {
            dispatch(action(form))
            componenteSiguiente()
        }
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
                        <div className={styles.contenTextTwo}>
                            <h1 className={styles.h1}>{ titulo }</h1>
                            <div className={styles.contentImg}>
                                <div className={`${styles.eachChild} ${selectedLogo === 'minimalista' ? styles.scaleUpCenter : ''}`}>
                                    <input className={styles.inputRadio} onChange={handleRadioChange} type="radio" name="logos" id="minimalista"/>
                                    <label htmlFor="minimalista">
                                        <img className={styles.img} src={logosAbogadosMontes} alt="LogoMinimalista"/>
                                        <p>Minimalista</p>
                                    </label>
                                </div >
                                <div className={`${styles.eachChild} ${selectedLogo === 'geometrico' ? styles.scaleUpCenter : ''}`}>
                                    <input className={styles.inputRadio} onChange={handleRadioChange} type="radio" name="logos" id="geometrico"/>
                                    <label htmlFor="geometrico">
                                        <img className={styles.img} src={logosGaleriaBalance} alt="LogoGeometrico"/>
                                        <p>Geométrico</p>
                                    </label>
                                </div>
                                <div className={`${styles.eachChild} ${selectedLogo === 'futurista' ? styles.scaleUpCenter : ''}`}>
                                    <input className={styles.inputRadio} onChange={handleRadioChange} type="radio" name="logos" id="futurista"/>
                                    <label htmlFor="futurista">
                                        <img className={styles.img} src={logosAstraComics} alt="LogoFuturista"/>
                                        <p>Futurista</p>
                                    </label>
                                </div>
                                <div className={`${styles.eachChild} ${selectedLogo === 'emblema' ? styles.scaleUpCenter : ''}`}>
                                    <input className={styles.inputRadio} onChange={handleRadioChange} type="radio" name="logos" id="emblema"/>
                                    <label htmlFor="emblema">
                                        <img className={styles.img} src={logosCantoraViche} alt="LogoEmblema"/>
                                        <p>Emblema</p>
                                    </label>
                                </div>
                                <div className={`${styles.eachChild} ${selectedLogo === 'moderno' ? styles.scaleUpCenter : ''}`}>
                                    <input className={styles.inputRadio} onChange={handleRadioChange} type="radio" name="logos" id="moderno"/>
                                    <label htmlFor="moderno">
                                        <img className={styles.img} src={logosPrometeo} alt="LogoModerno"/>
                                        <p>Moderno</p>
                                    </label>
                                </div>
                            </div>
                        </div>
                }
                <button disabled={form === ""} onClick={handleSubmit} className={styles.buttonTwo}>{buttonText} <BiRightArrowAlt size={30}/> </button>
            </div>
        </div>
    )
}

export default Form