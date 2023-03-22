import { useState } from "react";
import Form from "./Form";
import Header from "./Header";

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
        <div>
            <Header useStyle={false}/>
            <Form/>
        </div>
    )
}

export default Forms