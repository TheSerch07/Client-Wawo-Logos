import { Link } from "react-router-dom";
import styles from "../styles/CreateLogo.module.css";
import ilustracion from "../assets/Ilustracion1.svg";
import { useState } from "react";

function CreateLogo() {
    const [nombreEmpresa, setNombreEmpresa] = useState("")

    function handleInputChange(e) {
        setNombreEmpresa(e.target.value)
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
                    <Link to="/logo">
                        <button className={styles.button}>Quiero mi logo</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CreateLogo