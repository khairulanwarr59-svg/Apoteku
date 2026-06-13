import Link from 'next/link';
import products from '../data/products';

export default function Home() {
  return (
    <div className="page home-page">
      <header className="hero-banner">
        <div className="hero-content">
          <p className="eyebrow">Apotek Samawa</p>
          <h1>Apotek Online yang Praktis dan Terpercaya</h1>
          <p>Belanja obat, vitamin dan kebutuhan kesehatan sehari-hari. Pembayaran QRIS atau DANA 0895326738684.</p>
          <div className="hero-actions">
            <Link href="/login" className="button primary">Masuk / Daftar</Link>
            <Link href="/catalog" className="button secondary">Lihat Katalog</Link>
          </div>
        </div>
      </header>

      <section className="feature-grid">
        <article>
          <h2>Pembayaran QRIS</h2>
          <p>Bayar lebih mudah dengan QRIS atau DANA langsung ke 0895326738684.</p>
        </article>
        <article>
          <h2>Pengiriman Cepat</h2>
          <p>Dikirim cepat ke alamat Anda dengan paket aman dan terjamin.</p>
        </article>
        <article>
          <h2>Stok Terupdate</h2>
          <p>Produk selalu tersedia dan dapat dikelola admin gudang dengan mudah.</p>
        </article>
      </section>

      <section className="catalog-preview">
        <div className="section-title">
          <h2>Produk Unggulan</h2>
          <Link href="/catalog">Lihat Semua</Link>
        </div>
        <div className="product-grid">
          {products.slice(0, 4).map((product) => (
            <article key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <div className="product-info">
                <strong>{product.title}</strong>
                <p>{product.category}</p>
                <span>Rp {product.price.toLocaleString()}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
