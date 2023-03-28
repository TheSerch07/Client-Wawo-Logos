import { useNavigate } from "react-router-dom";
import styles from "../styles/CreateLogo.module.css";
import ilustracion from "../assets/Ilustracion1.svg";
import { useState } from "react";
import { setCompanyName } from "../features/form/formSlice";
import { useDispatch } from "react-redux";

function CreateLogo() {
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
    
    console.log(nombreEmpresa)
    return (
        <div className={styles.mainCreateLogo}>
            <div className="a"> 
                <img src={ilustracion} alt="Ilustración1"/>
            </div>
            <div>
                <h1 className={styles.title}>Obtén el logo perfecto <br></br>para tu empresa</h1>
                <p className={styles.parragrafh}>Ahorra tiempo y dinero con nuestra plataforma impulsada por IA.</p>
                <div>
                    <input onChange={handleInputChange} className={styles.input} value={nombreEmpresa} name="name" type="text" placeholder="Introduce el nombre de tu empresa"/>
                    <button onClick={handleSubmit} className={styles.button}>Quiero mi logo</button>
                </div>
            </div>
        </div>
    )
}

export default CreateLogo