const API_URL = 'http://localhost:3000/books';

export async function getBooks(token) {
  const res = await fetch(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}

export async function createBook(data, token) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data),
  });
  return res.json();
}