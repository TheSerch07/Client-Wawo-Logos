import styles from "../styles/Examples.module.css";
import Example from "./Example";
import LogoApolo from "../assets/Logos-Apolo-Envios-1.jpg"
import LogoJabonRey from '../assets/Logos-Jabon-Rey-2.jpg'
import LogoCantora from "../assets/Cantora-V1-04.jpg"
import LogoTrueno from '../assets/Logos-Trueno-1.jpg'
import LogoBalance from "../assets/Logos-Galería-Balance-2.jpg"
import LogoAguilaRoja from "../assets/Logos-Aguila-Roja-2.jpg"
import LogoSalvadog from "../assets/Logos-Salvadog-1.jpg"
import LogoScarlato from "../assets/Logos-Scarlatto-1.jpg"
import LogoColombina from "../assets/Logos-Colombina-1.jpg"
import LogoCantora2 from "../assets/Cantora-V1-05.jpg"
import { useSelector } from "react-redux";

function Examples() {
    const languageRedux = useSelector((state) => state.language)
    
    return (
        <>
        {
            languageRedux.language === "EN" ?
            <div className={styles.mainExamples}>
                <h1 className={styles.title}>Some of our logos</h1>
                <div className={styles.containerExample}>
                    <Example img={LogoApolo}/>
                    <Example img={LogoJabonRey}/>
                    <Example img={LogoCantora}/>
                    <Example img={LogoTrueno}/>
                    <Example img={LogoBalance} />
                    <Example img={LogoAguilaRoja} />
                    <Example img={LogoSalvadog} />
                    <Example img={LogoScarlato} />
                    <Example img={LogoColombina} />
                    <Example img={LogoCantora2} />
                </div>
            </div>
            :
            <div className={styles.mainExamples}>
                <h1 className={styles.title}>Algunos ejemplos</h1>
                <div className={styles.containerExample}>
                    <Example img={LogoApolo}/>
                    <Example img={LogoJabonRey}/>
                    <Example img={LogoCantora}/>
                    <Example img={LogoTrueno}/>
                    <Example img={LogoBalance} />
                    <Example img={LogoAguilaRoja} />
                    <Example img={LogoSalvadog} />
                    <Example img={LogoScarlato} />
                    <Example img={LogoColombina} />
                    <Example img={LogoCantora2} />
                </div>
            </div>
            
        }
        </>
    )
}

export default Examples