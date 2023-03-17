import { useState } from ("react")


function Form() {
    
    const [form, useForm] = useState()
    
    return (
        <form>
            <input type="text" />
        </form>
    )
}