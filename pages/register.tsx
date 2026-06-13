import { useState } from 'react';
import { useRouter } from 'next/router';
import users from '../data/users';

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    const existing = users.find((user) => user.email === email);
    if (existing) {
      setMessage('Akun sudah terdaftar.');
      return;
    }
    users.push({ id: `u-${Date.now()}`, name, email, password, role: 'customer' });
    router.push('/login');
  };

  return (
    <div className="page auth-page">
      <div className="auth-panel">
        <h1>Daftar Akun Baru</h1>
        <p>Daftar sebagai customer untuk mulai belanja.</p>
        <form onSubmit={handleRegister}>
          <label>Nama Lengkap</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" className="button primary">Daftar</button>
          {message && <p className="message">{message}</p>}
        </form>
      </div>
    </div>
  );
}
