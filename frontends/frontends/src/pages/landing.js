import React, { useEffect, useState } from 'react';
import bookService from '../services/books'
import Book from '../components/book'

export default function Landing() {
    const [title, setTitle] = useState("");
    const [books, setBooks] = useState([])

    const handleLogout = () => {
        window.localStorage.clear()
        window.location.href = '/login'
    }

    useEffect(() => {
        searchClick(title)
    }, [title])

    const name = JSON.parse(window.localStorage['user'])
    return (
        <div className='landing'>
            <nav>
                <div>Welcome {name.name}</div>
                <button onClick={handleLogout}>logout</button>
            </nav>
            <div className='searching'>
                <input 
                type="text" 
                placeholder="Search for a book..."
                value={title} onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className='book-content'>
            {
                title === "" ? null : <Book books={books} />
            }
            </div>
        </div>
    )

    function searchClick(t)
    {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(`related:${t}`)}&printType=books&key=${process.env.REACT_APP_API_KEY}`)
        .then(response => response.json())
        .then(data => {
            const relatedBooks = data.items.map(item => {
            return {cover: item.volumeInfo.imageLinks.smallThumbnail };
            });  
            setBooks(relatedBooks)
        })
        .catch(error => {
            console.error(error);
        });
    }
}
