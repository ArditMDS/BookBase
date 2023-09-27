import { Link } from "react-router-dom"
import bookCover from "../assets/king-cover.jpg"

export default function BookCard({id}) {
    id = 1

    return (
        <Link to={`${id}`} className="bookcard max-w-sm rounded overflow-hidden shadow-lg">
            <img src={bookCover} alt="Shining" />
            <div className="bookcard_info p-6">
                <h2 className="text-xl font-bold mb-2">Book title</h2>
                <p>Stephen King</p>
                <p>1977</p>
            </div>
        </Link>
    )
}