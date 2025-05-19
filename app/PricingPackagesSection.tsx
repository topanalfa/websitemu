import React from "react";

const packages = [
  {
    title: "Basic Blueprint",
    price: "Rp499.000",
    features: [
      "1 Halaman landing page",
      "1 Halaman Price List atau Form Reservasi ke WhatsApp",
      "Design & Tampilan profesional",
      "Integrasi ke Google Maps & Review",
      "Gratis 1 tahun subdomain (buatwebmu.com)",
    ],
    highlight: false,
  },
  {
    title: "Premium Business",
    price: "Rp999.000",
    features: [
      "Semua yang ada di Basic Blueprint",
      "3 Halaman Tambahan (Tentang, Layanan, Galeri)",
      "Pilih Template Website (20+ Template)",
      "3x revisi minor (teks/gambar)",
      "Integrasi ke Google Analytics (lihat di FAQ)"
    ],
    highlight: true,
  },
  {
    title: "Custom Website",
    price: "Rp1.999.000",
    features: [
      "Four requests at a time",
      "Unlimited revisions",
      "No contract",
      "SEO optimisation",
      "Royalty free images",
      "The ability to pause time",
    ],
    highlight: false,
  },
];

const PricingPackagesSection: React.FC = () => (
  <section id="pricing" className="w-full py-16 flex flex-col items-center bg-lime-100">
    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 tracking-tight text-lime-700">
      Harga & Paket
    </h2>
    <p className="text-lg text-gray-700 text-center mb-8 max-w-2xl">
    HARGA MULAI DARI Rp499.000. Tanpa biaya bulanan. Sekali bayar, langsung jalan.
    </p>
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-stretch px-4 md:px-0 max-w-6xl">
      {packages.map((pkg, idx) => (
        <div
          key={idx}
          className={`flex flex-col border-2 border-black rounded-2xl p-8 shadow-sm transition text-left items-center ${pkg.highlight ? 'bg-yellow-300' : 'bg-white'}`}
        >
          <h3 className="text-2xl font-extrabold mb-2 text-center uppercase tracking-tight text-lime-700">{pkg.title}</h3>
          <div className="text-2xl font-extrabold mb-4 text-center text-green-700">{pkg.price}</div>
          <ul className="mb-6 text-base text-gray-800 list-disc list-inside">
            {pkg.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition border-2 border-black mt-auto">
            PESAN SEKARANG
          </button>
        </div>
      ))}
    </div>
  </section>
);

export default PricingPackagesSection; 