import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import styles from '../styles/CallToAction.module.css';
import { setCompanyName } from "../features/form/formSlice";
import { useDispatch } from "react-redux";

function CallToAction() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [nombreEmpresa, setNombreEmpresa] = useState("")

    function handleInputChange(e) {
        setNombreEmpresa(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(setCompanyName(nombreEmpresa))
        navigate("/logo")
    }

    return (
        <div className={styles.mainCallToAction}>
            <div className={styles.divTitle}>
                <h1 className={styles.title}>¿Qué esperas para tener el logo perfecto para tu marca?</h1>
            </div>   
            <div className={styles.divButton}>
                <input onChange={handleInputChange} className={styles.input} type="text" placeholder="Introduce el nombre de tu empresa"/>
                <button onClick={handleSubmit} className={styles.button}>Quiero mi logo</button>
            </div>
        </div>
    )
}

export default CallToAction