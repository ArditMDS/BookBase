import BookCard from "../BookCard"

export default function SearchResult(props) {
    return (
        <main>
            <div className="container">
                <h1 className="pt-10 text-3xl font-bold">Resultats de recherche: {`Stephen King`}</h1>
            </div>
            <div className="container book-card-container
            
            ">
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
            </div>
        </main>
    )
}