import { useState } from "react";
import Form from "./Form";
import Header from "./Header";
import styles from "../styles/Forms.module.css"

function Forms() {
    
    const [form, useForm] = useState({
        nombreEmpresa: "",
        cuentanosMas: "",
        palabras: "", 
        eslogan: "", 
        estilos: "",
        correo: ""
    });
    
    return (
        <div className={styles.mainForms}>
            <Header useStyle={false}/>
            <Form/>
        </div>
    )
}

export default Forms