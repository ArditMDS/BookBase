import bookCover from "../../assets/king-cover.jpg"
import { Link } from "react-router-dom"

export default function BookPage ({id}) {
    return (
        <main>
            <div className="container py-16">
                <div className="book-wrapper flex flex-col md:flex-row items-start md:items-center gap-10">
                    <img src={bookCover} alt="The Shining" className="h-[500px]" />
                    <div className="book-info">
                        <h1 className="text-5xl font-bold">The Shining</h1>
                        <p className="italic py-4"> <Link to={`/results?stephen-king`}>Stephen King</Link>, 1977</p>
                        <p>
                            Jack Torrance (Jack Nicholson) becomes winter caretaker at the isolated Overlook Hotel in Colorado, hoping to cure his writer's block. He settles in along with his wife, Wendy (Shelley Duvall), and his son, Danny (Danny Lloyd), who is plagued by psychic premonitions. <br /> As Jack's writing goes nowhere and Danny's visions become more disturbing, Jack discovers the hotel's dark secrets and begins to unravel into a homicidal maniac hell-bent on terrorizing his family.
                        </p>
                        <p className="pt-5">Genre: Thriller</p>
                    </div>
                </div>
            </div>
        </main>
    )
}