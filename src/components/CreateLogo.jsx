import { useNavigate } from "react-router-dom";
import styles from "../styles/CreateLogo.module.css";
import ilustracion from "../assets/Ilustracion1.svg";
import { useState, useRef } from "react";
import { setCompanyName } from "../features/form/formSlice";
import { useDispatch } from "react-redux";

function CreateLogo() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [nombreEmpresa, setNombreEmpresa] = useState("")
    const inputRef = useRef(null);

    function handleInputChange(e) {
        const inputValue = e.target.value;
        setNombreEmpresa(inputValue);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const inputValue = nombreEmpresa.trim();
        if (!inputValue) {
            inputRef.current.classList.remove(styles.inputError); 
            setTimeout(() => {
                inputRef.current.classList.add(styles.inputError);
            }, 10);
            return;
        }
        dispatch(setCompanyName(inputValue));
        navigate("/logo");
    }
    
    console.log(nombreEmpresa)
    return (
        <div className={styles.mainCreateLogo}>
            <div> 
                <img className={styles.img} src={ilustracion} alt="Ilustración1"/>
            </div>
            <div className={styles.mainTextButton}>
                <div className={styles.mainText}>
                    <h1 className={styles.title}>Obtén el logo perfecto para tu empresa</h1>
                    <p className={styles.parragrafh}>Ahorra tiempo y dinero con nuestra plataforma impulsada por IA.</p>
                </div>
                <div className={styles.containInput}>
                    <input ref={inputRef} onChange={handleInputChange} className={styles.input} value={nombreEmpresa} name="name" type="text" placeholder="Introduce el nombre de tu empresa"/>
                    <button onClick={handleSubmit} className={styles.button}>Quiero mi logo</button>
                </div>
            </div>
        </div>
    )
}

export default CreateLogo