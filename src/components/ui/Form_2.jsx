import "../../App.css"

export default function Form_2({})
{
    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const data = {
            email: formData.get("email"),
            name: formData.get("name"),
            password: formData.get("password"),
        };

        console.log(data)
    }
    return(
        <form onSubmit={handleSubmit} className="Form">
            <input name="name" placeholder="Full name" required />
            <input name="email" type="email" placeholder="Email" required />
            <input name="password" type="password" placeholder="Password" required />

            <button type="submit">Register</button>
        </form>
    )
}