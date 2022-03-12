import React from 'react'

export default function MessageForm({handleAddPost}) {
    const [content, setcontent] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        handleAddPost(content);
    }

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={content}
                onChange={e => setcontent(e.target.value)}
            />
            <button type="submit">Add Post</button>
        </form>
    );
}
