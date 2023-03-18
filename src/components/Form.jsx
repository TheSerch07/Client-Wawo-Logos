import { useState } from "react";

function Form() {
    
    const [form, useForm] = useState()
    
    return (
        <div>
            <form>
                <input type="text" />
            </form>
        </div>
    )
}

export default Form