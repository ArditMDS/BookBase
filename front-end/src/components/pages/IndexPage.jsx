import BookCard from "../BookCard"

export default function IndexPage () {
    return (
        <main>
            <h1 className="pt-10 text-5xl font-bold text-center">Liste de livres</h1>
            <div className="container flex gap-5 justify-between pt-16">
                <BookCard />
                <BookCard />
                <BookCard />
            </div>
        </main>
    )
}