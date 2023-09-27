import { Link } from "react-router-dom"

export default function Header () {
    return (
        <header>
            <div className="container">
                <nav className="nav">
                    <Link to=".">Home page</Link>
                    <Link to="book">Book</Link>
                </nav>
            </div>
        </header>
    )
}