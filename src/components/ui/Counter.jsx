import "../../App.css"
import { useEffect, useState } from "react"

export default function Counter({id, name, description, price, category})
{
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count])

    return(
    <button onClick={() => setCount(count+1)}>
        Count: {count}
    </button>)
}