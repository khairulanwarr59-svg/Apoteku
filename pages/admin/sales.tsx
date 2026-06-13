import Link from 'next/link';
import ordersData from '../../data/orders';

export default function SalesAdmin() {
  return (
    <div className="page admin-page">
      <div className="admin-header">
        <div>
          <p className="eyebrow">Admin Penjualan</p>
          <h1>Dashboard Penjualan</h1>
          <p>Lihat pesanan terbaru dan kelola transaksi pelanggan.</p>
        </div>
        <Link href="/catalog" className="button secondary">Lihat Katalog</Link>
      </div>

      <section className="admin-card">
        <h2>Pesanan Terbaru</h2>
        <div className="orders-list">
          {ordersData.map((order) => (
            <article key={order.id} className="order-card">
              <div>
                <strong>Order #{order.id}</strong>
                <p>{order.customer}</p>
              </div>
              <div>
                <span>Rp {order.total.toLocaleString()}</span>
                <p>{order.status}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
