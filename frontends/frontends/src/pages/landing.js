import React, { useState } from 'react';

export default function Landing() {
    const [firstName, setName] = useState("");
    const [title, setTitle] = useState("");
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
        </>
    )

    function searchClick(title)
    {
        
    }
}