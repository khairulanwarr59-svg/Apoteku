import { useState } from 'react';
import productsData from '../../data/products';

export default function WarehouseAdmin() {
  const [products, setProducts] = useState(productsData);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [stockValue, setStockValue] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [message, setMessage] = useState('');

  const selectProduct = (product) => {
    setSelectedProduct(product);
    setStockValue(String(product.stock));
    setImageUrl(product.image);
    setMessage('');
  };

  const updateProduct = () => {
    if (!selectedProduct) return;
    setProducts((current) =>
      current.map((item) =>
        item.id === selectedProduct.id
          ? { ...item, stock: Number(stockValue), image: imageUrl }
          : item
      )
    );
    setMessage('Data barang berhasil diperbarui.');
  };

  return (
    <div className="page admin-page">
      <div className="admin-header">
        <div>
          <p className="eyebrow">Admin Gudang</p>
          <h1>Kelola Stok dan Gambar Produk</h1>
          <p>Pilih barang untuk mengubah stok dan gambar katalog.</p>
        </div>
      </div>

      <section className="admin-card">
        <h2>Daftar Produk</h2>
        <div className="warehouse-grid">
          <div className="product-list">
            {products.map((product) => (
              <button
                type="button"
                key={product.id}
                className={selectedProduct?.id === product.id ? 'selected' : ''}
                onClick={() => selectProduct(product)}
              >
                <img src={product.image} alt={product.title} />
                <div>
                  <strong>{product.title}</strong>
                  <span>Stok: {product.stock}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="product-editor">
            {selectedProduct ? (
              <div className="editor-card">
                <h3>Edit Produk</h3>
                <label>Nama Produk</label>
                <input type="text" value={selectedProduct.title} disabled />
                <label>Stok</label>
                <input
                  type="number"
                  value={stockValue}
                  onChange={(e) => setStockValue(e.target.value)}
                />
                <label>URL Gambar</label>
                <input
                  type="text"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                />
                <button type="button" className="button primary" onClick={updateProduct}>
                  Simpan Perubahan
                </button>
                {message && <p className="message">{message}</p>}
              </div>
            ) : (
              <div className="editor-card empty">
                <p>Pilih produk untuk mengedit stok dan gambar.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
