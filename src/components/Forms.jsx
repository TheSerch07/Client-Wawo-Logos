import { useState } from "react";
import Form from "./Form";
import Header from "./Header";
import styles from "../styles/Forms.module.css"
import { useNavigate } from "react-router-dom";

function Forms() {
    const navigate = useNavigate()

    function componenteAnterior(component) {
        if (component === 1) {
            navigate("/")
        }
    }

    const [form, useForm] = useState({
        nombreEmpresa: "",
        cuentanosMas: "",
        palabras: "", 
        eslogan: "", 
        estilos: "",
        correo: ""
    });
    
    const [component, setComponent] = useState(1);

    return (
        <div>
            <Header useStyle={false}/>
            <div className={styles.mainForms}>
            <Form componenteAnterior={() => componenteAnterior(component)} />
            </div>
        </div>
    )
}

export default Forms