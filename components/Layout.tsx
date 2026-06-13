import Link from 'next/link';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="site-brand">
          <Link href="/">
            <a>
              <span className="brand-mark">AS</span>
              <div>
                <strong>Apotek Samawa</strong>
                <small>Apotek Online dan Offline</small>
              </div>
            </a>
          </Link>
        </div>

        <nav className="site-nav">
          <Link href="/">Beranda</Link>
          <Link href="/catalog">Katalog</Link>
          <Link href="/payment">Pembayaran</Link>
          <Link href="/login">Masuk</Link>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div>
          <strong>Apotek Samawa</strong>
          <p>Belanja obat dan vitamin online, cepat, aman, dan terpercaya.</p>
        </div>
        <div>
          <p>Metode pembayaran:</p>
          <p>QRIS / DANA: <strong>0895326738684</strong></p>
          <p>Hubungi kami: apotek.samawa@example.com</p>
        </div>
      </footer>
    </div>
  );
}
