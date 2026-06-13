import { useState } from 'react';
import productsData from '../data/products';

export default function Catalog() {
  const [products, setProducts] = useState(productsData);
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()) ||
    product.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page catalog-page">
      <div className="catalog-hero">
        <div>
          <p className="eyebrow">Katalog Produk</p>
          <h1>Temukan Obat dan Perawatan Kesehatan</h1>
          <p>Cari produk berdasarkan kategori, nama, atau kebutuhan.</p>
        </div>
        <div className="catalog-search">
          <input
            type="search"
            placeholder="Cari produk, kategori, atau merek"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <article key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <div className="product-info">
              <strong>{product.title}</strong>
              <p>{product.category}</p>
              <span>Rp {product.price.toLocaleString()}</span>
              <p>Stok: {product.stock}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
