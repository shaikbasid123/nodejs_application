import { useEffect, useState } from 'react';
import { getBooks } from '../api/books';

export default function BookList({ token }) {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (token) {
      getBooks(token)
        .then(setBooks)
        .catch(() => setError('Failed to fetch books'));
    }
  }, [token]);

  if (!token) return <div>Please log in to view books.</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <div>
      <h2>Books</h2>
      <ul>
        {books.map(book => (
          <li key={book._id || book.id}>
            <strong>{book.title}</strong> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}