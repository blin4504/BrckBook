const Book = ({books}) => {
    return (
        <ul>
            {books.map((book) => {
                console.log(book)
                return <li key={book.id}>{book.title} {book.author} {book.description}
                                        <img src={book.cover} alt={book.title} /></li>
            })}
        </ul>
    )
}

export default Book
