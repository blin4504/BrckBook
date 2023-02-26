import React, { useEffect, useState } from 'react';
import bookService from '../services/books'
import Book from '../components/book'

export default function Landing() {
    const [firstName, setName] = useState("");
    const [title, setTitle] = useState("");
    const [books, setBooks] = useState([])

    useEffect(() => {
        bookService.getAll().then(data =>
            {setBooks(data.data)}
        )        
    }, [])

    return (
        <>
            <div>Welcome {firstName}</div>
            <div>
                <input 
                type="text" 
                placeholder="Search for a book..."
                value={title} onChange={(e) => setTitle(e.target.value)}
                />
                <button onClick={() => searchClick(title)}>🔎</button>
            </div>
            <Book books={books} />
        </>
    )

    function searchClick(title)
    {
        
    }
}
