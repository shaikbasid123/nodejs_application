import { useState } from 'react';
import { createBook } from '../api/books';

const categories = ["Adventure", "Classics", "Crime", "Fantasy"];

export default function BookForm({ token, onBookCreated }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const [error, setError] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      await createBook(
        {
          title,
          author,
          description,
          price: Number(price),
          category,
        },
        token
      );
      setTitle('');
      setAuthor('');
      setDescription('');
      setPrice('');
      setCategory(categories[0]);
      if (onBookCreated) onBookCreated();
    } catch {
      setError('Failed to create book');
    }
  };

  if (!token) return null;

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
      <h3>Add a Book</h3>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <input
        value={author}
        onChange={e => setAuthor(e.target.value)}
        placeholder="Author"
        required
      />
      <input
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <input
        type="number"
        value={price}
        onChange={e => setPrice(e.target.value)}
        placeholder="Price"
        required
        min="0"
        step="0.01"
      />
      <select
        value={category}
        onChange={e => setCategory(e.target.value)}
        required
      >
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <button type="submit">Add Book</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </form>
  );
}