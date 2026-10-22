import "../../App.css"

export default function Card({id, name, description, price, category})
{
    return(
    <>
        <article className="Card">
            <h1>{name}</h1>
            <p>{description}</p>
        </article>
    </>)
}