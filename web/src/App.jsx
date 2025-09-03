import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

export default function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [showSignup, setShowSignup] = useState(false);
  const [refreshBooks, setRefreshBooks] = useState(false);

  const handleLogin = t => {
    setToken(t);
    localStorage.setItem('token', t);
  };

  const handleLogout = () => {
    setToken('');
    localStorage.removeItem('token');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Library App</h1>
      {!token ? (
        <>
          {showSignup ? (
            <>
              <SignupForm onSignup={() => setShowSignup(false)} />
              <button onClick={() => setShowSignup(false)}>Back to Login</button>
            </>
          ) : (
            <>
              <LoginForm onLogin={handleLogin} />
              <button onClick={() => setShowSignup(true)}>Sign Up</button>
            </>
          )}
        </>
      ) : (
        <>
          <button onClick={handleLogout}>Logout</button>
          <BookForm
            token={token}
            onBookCreated={() => setRefreshBooks(r => !r)}
          />
          <BookList token={token} key={refreshBooks} />
        </>
      )}
    </div>
  );
}