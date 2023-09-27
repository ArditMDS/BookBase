import BookCard from "../BookCard"

export default function IndexPage () {
    return (
        <main>
            <h1 className="pt-10 text-5xl font-bold text-center">Liste de livres</h1>
            <div className="container book-card-container 
                md:gap-[calc(100%/3)]
                lg:gap-[calc(100%/15)]
                xl:gap-[calc(100%/24)]
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
