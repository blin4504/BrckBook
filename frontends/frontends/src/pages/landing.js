import React, { useEffect, useState } from 'react';
import bookService from '../services/books'
import Book from '../components/book'
import axios from "axios";

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

    function searchClick(t)
    {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(`related:${t}`)}&key=${process.env.REACT_APP_API_KEY}`)
        // .then(response => console.log(response.json()))
        .then(response => response.json())
        // console.log(item.volumeInfo.imageLinks.smallThumbnail)
        .then(data => {
            const relatedBooks = data.items.map(item => {
                // title: item.volumeInfo.title,
            return {cover: item.volumeInfo.imageLinks.smallThumbnail };

            });  
            setBooks(relatedBooks)
        })
        .catch(error => {
            console.error(error);
        });
    }
}
