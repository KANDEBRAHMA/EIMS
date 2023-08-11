
export function LoginButton() {
    const url = "http://localhost:8080/home";

    const navigate = () => {
        window.location.href = url;
    };
    return (
        <div className="container p-5">
            <button type="button" className="btn btn-outline-secondary mb-3" onClick={(e) => {
                e.preventDefault();
                navigate();
            }}>Login</button>
            <p>Do not have an account? <a href="/register">Register Now</a></p>
        </div>
    )
}