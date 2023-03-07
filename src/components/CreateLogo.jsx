import styles from "../styles/CreateLogo.module.css"
import ilustracion from "../assets/Ilustracion1.svg"

function CreateLogo() {
    return (
        <div className={styles.mainCreateLogo}>
            <div className="a"> 
                <img src={ilustracion} alt="Ilustración1"/>
            </div>
            <div>
                <h1>Obtén el logo perfecto para tu empresa</h1>
                <p>Ahorra tiempo y dinero con nuestra plataforma impulsada por IA</p>
                <input type="text" placeholder="Introduce el nombre de tu empresa"/>
                <button>Quiero mi logo</button>
            </div>
        </div>
    )
}

export default CreateLogo