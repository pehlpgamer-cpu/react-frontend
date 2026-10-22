import { useState } from "react"
import "../../App.css"

export default function Form({})
{
    const [name, setName] = useState("")
    function handleSubmit(e)
    {
        e.preventDefault()
        console.log(name)
    }

    return(
        <form onSubmit={handleSubmit} className="Form">
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name" 
                placeholder="Full name" 
                required
            />

            <button type="submit">Submit</button>
        </form>
    )
}