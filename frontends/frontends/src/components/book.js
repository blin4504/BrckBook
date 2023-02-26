import ImageOverlaySlide from "./ImageOverlaySlide"

const Book = ({books}) => {
    console.log(books)
    return (
        <ul className='book-display'>
            {books.map((book) => {
                return <li style={{"display":"inline-block"}} key={book.id}>
                                        {/* {book.title} {book.author} {book.description}
                                        <img src={book.cover} alt={book.title}/> */}
                                        <ImageOverlaySlide src={book.cover} link={book.canonicalVolumeLink} />
                        </li>
            })}
        </ul>
    )
}

export default Book
