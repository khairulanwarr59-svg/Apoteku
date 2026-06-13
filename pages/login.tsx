import { useState } from 'react';
import { useRouter } from 'next/router';
import users from '../data/users';

const roleRedirect = {
  customer: '/catalog',
  sales: '/admin/sales',
  warehouse: '/admin/warehouse'
};

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find((user) => user.email === email && user.password === password);
    if (!user) {
      setMessage('Email atau password salah.');
      return;
    }
    setMessage('Login berhasil. Redirect...');
    router.push(roleRedirect[user.role] || '/');
  };

  return (
    <div className="page auth-page">
      <div className="auth-panel">
        <h1>Masuk ke Apotek Samawa</h1>
        <p>Gunakan akun customer, admin penjualan, atau admin gudang.</p>
        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" className="button primary">Masuk</button>
          {message && <p className="message">{message}</p>}
        </form>
        <p>
          Belum punya akun? <a href="/register">Daftar sekarang</a>
        </p>
      </div>
    </div>
  );
}
