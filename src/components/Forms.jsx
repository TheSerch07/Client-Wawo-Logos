import { useState } from "react";
import Form from "./Form";
import Header from "./Header";

function Forms() {
    
    const [form, useForm] = useState()
    
    return (
        <div>
            <Header />
            <Form/>
        </div>
    )
}

export default Forms