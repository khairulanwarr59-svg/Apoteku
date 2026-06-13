export default function PaymentPage() {
  return (
    <div className="page payment-page">
      <section className="payment-hero">
        <div>
          <p className="eyebrow">Pembayaran Online</p>
          <h1>Bayar dengan QRIS atau DANA</h1>
          <p>Transfer pembayaran ke nomor DANA resmi Apotek Samawa dan konfirmasi pesanan Anda.</p>
        </div>
        <div className="payment-card">
          <h2>QRIS / DANA</h2>
          <p>Silakan scan QRIS atau transfer ke:</p>
          <div className="payment-info">
            <span>0895326738684</span>
          </div>
          <p className="payment-note">Gunakan judul transfer sesuai nama pemesan. Simpan screenshot sebagai bukti pembayaran.</p>
        </div>
      </section>

      <section className="payment-steps">
        <h2>Cara Pembayaran</h2>
        <ol>
          <li>Buka aplikasi DANA atau scan QRIS dari perangkat Anda.</li>
          <li>Masukkan angka 0895326738684.</li>
          <li>Masukkan nominal sesuai pesanan Anda.</li>
          <li>Simpan bukti pembayaran dan konfirmasi ke admin.</li>
        </ol>
      </section>
    </div>
  );
}
