import React, { useEffect, useState } from 'react';
import bookService from '../services/books'
import Book from '../components/book'

export default function Landing() {
    // const [firstName, setName] = useState("");
    const [title, setTitle] = useState("");
    const [books, setBooks] = useState([])

    useEffect(() => {
        bookService.getAll().then(data =>
            {setBooks(data.data)}
        )        
    }, [])

    const handleLogout = () => {
        window.localStorage.clear()
        window.location.href = '/login'
    }

    const name = JSON.parse(window.localStorage['user'])
    return (
        <>
            <div>Welcome {name.name}</div>
            <button onClick={handleLogout}>logout</button>
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
