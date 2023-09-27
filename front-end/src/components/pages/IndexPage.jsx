import BookCard from "../BookCard"

export default function IndexPage () {
    return (
        <>
            <h1 className="text-xl">Liste de livres</h1>

            <div className="container flex">
                <BookCard />
                <BookCard />
                <BookCard />
            </div>
            
        </>
    )
}