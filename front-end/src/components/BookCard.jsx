import { Link } from "react-router-dom"
import bookCover from "../assets/king-cover.jpg"

export default function BookCard({id}) {
    id = 1

    return (
        <Link to={`/${id}`} className="bookcard max-w-sm rounded overflow-hidden shadow-lg mb-10 
        w-90% mx-auto
        md:w-[calc(100%/3)] md:mx-0
        lg:w-[calc(100%/5)]
        xl:w-[calc(100%/6)] 
        ">
            <img src={bookCover} alt="Shining" className="" />
            <div className="bookcard_info p-6">
                <h2 className="text-xl font-bold mb-2">{`The Shining`}</h2>
                <p>{`Stephen King`}</p>
                <p>{`1977`}</p>
            </div>
        </Link>
    )
}