import { useEffect, useState } from "react"
import Book from "../components/book"
import bookService from "../services/books"


const Landing = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        bookService.getAll()
        .then(data => {
            // console.log(data.data);
            setBooks(data.data);
        })
    }, [])

    // console.log(books)
    
    return (
        <div>
            <h2>books</h2>
            <Book books={books} />
        </div>
    )
}

export default Landing

    