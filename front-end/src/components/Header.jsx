import { Link } from "react-router-dom"
import logo from "../../public/logo.svg"

export default function Header () {
    return (
        <header className="shadow-lg">
            <div className="container">
                <nav className="nav py-10 flex justify-center">
                    <Link to=".">
                        <img src={logo} alt="Logo" className="h-10" />
                    </Link>
                </nav>
            </div>
        </header>
    )
}