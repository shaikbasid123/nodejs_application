import { useState } from 'react';
import { signup } from '../api/auth';

export default function SignupForm({ onSignup }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const data = await signup({ name, email, password });
      if (data && data.message === 'User created successfully') {
        setSuccess('Signup successful! Please log in.');
        setEmail('');
        setPassword('');
        if (onSignup) onSignup();
      } else {
        setError(data.message || 'Signup failed');
      }
    } catch {
      setError('Signup failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 300, margin: '2rem auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        required
        onChange={e => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        required
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        required
        onChange={e => setPassword(e.target.value)}
      />
      <button type="submit">Sign Up</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {success && <div style={{ color: 'green' }}>{success}</div>}
    </form>
  );
}