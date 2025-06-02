'use client'

import React, { useState } from "react";

const faqs = [
  {
    question: "Berapa lama prosesnya sampai halaman saya jadi?",
    answer: "Biasanya 3–5 hari kerja, tergantung kelengkapan data yang dikirim.",
  },
  {
    question: "Saya gak ngerti teknologi, nanti saya harus ngapain aja?",
    answer: "Cukup isi form, kirim logo dan info/konten landing page, sisanya kami yang urus.",
  },
  {
    question: "Apakah ini seperti bikin website?",
    answer: "Mirip website mini — cukup 1 halaman, tapi lengkap dan bisa langsung dipakai buat promosi + reservasi.",
  },
  {
    question: "Apakah ini perlu langganan setiap bulan?",
    answer: "Nggak perlu langganan. Sekali bayar, langsung jadi & aktif selamanya (bisa upgrade kalau mau).",
  },
  {
    question: "Link-nya nanti kayak gimana? Bisa masukin ke bio Instagram?",
    answer: "Nanti link-nya seperti ini: salonanggun.godigitallokal.com, bisa langsung taruh di bio IG, katalog WA, atau scan QR Code.",
  },
  {
    question: "Bisa bantu juga untuk GoFood, ShopeeFood, Google Maps, dsb?",
    answer: "Ya, kami bantu pasang semua link itu di halaman agar pelanggan tinggal klik.",
  },
  {
    question: "Kalau saya mau ganti harga/menu nanti, bisa?",
    answer: "Bisa. Kamu dapat 2x revisi gratis. Setelah itu bisa ambil paket update bulanan mulai Rp99rb.",
  },
  {
    question: "Saya bisa lihat contoh yang sudah jadi?",
    answer: "Ini landing page yang pernah kami buat semua, ",
  },
  {
    question: "Ada garansi kalau saya nggak suka?",
    answer: "Kami kasih revisi 2x gratis, dan update minor gratis dalam 7 hari setelah publish.",
  },
  {
    question: "Nanti saya bisa akses atau edit sendiri gak?",
    answer: "Halaman kami setup di platform khusus, tapi bisa kami bantu edit kapan pun. Kalau mau akses penuh juga bisa, tinggal upgrade.",
  },
  {
    question: "Kok murah banget? Aman gak?",
    answer: "Kami pakai sistem template yang efisien dan sudah kami rancang khusus untuk bisnis lokal. Cepat, hemat, dan tetap profesional.",
  },
  {
    question: "Ngapain punya landing page, saya kan udah ada Instagram?",
    answer: "Instagram bagus untuk branding, tapi landing page bantu pelanggan booking & klik aksi lebih cepat. Cuma 1 link, semua info lengkap.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="w-full py-16 flex flex-col items-center bg-linear-to-t from-amber-100 to-lime-100">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 tracking-tight text-lime-700">
      Pertanyaan yang sering ditanyakan.
      </h2>
      <p className="text-lg text-gray-700 text-center mb-12 max-w-2xl">
        Masih ada pertanyaan dengan layanan kami, baca ini dulu.
      </p>
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {/* First column: 1-6 */}
        <div className="flex flex-col gap-6">
          {faqs.slice(0, 6).map((faq, idx) => (
            <div
              key={idx}
              className="border-2 border-black rounded-2xl overflow-hidden bg-white transition"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-lg font-medium text-left focus:outline-none hover:bg-grey-700 cursor-pointer"
                onClick={() => setOpenIndex(idx)}
                aria-expanded={openIndex === idx}
              >
                <span className="text-lime-700">{faq.question}</span>
                <svg
                  className={`w-6 h-6 ml-4 transition-transform duration-200 ${openIndex === idx ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-5 text-base text-gray-800 animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Second column: 7-12 */}
        <div className="flex flex-col gap-6">
          {faqs.slice(6, 12).map((faq, idx) => (
            <div
              key={idx + 6}
              className="border-2 border-black rounded-2xl overflow-hidden bg-white transition"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-lg font-medium text-left focus:outline-none hover:bg-grey-700 cursor-pointer"
                onClick={() => setOpenIndex(idx + 6)}
                aria-expanded={openIndex === idx + 6}
              >
                <span className="text-lime-700">{faq.question}</span>
                <svg
                  className={`w-6 h-6 ml-4 transition-transform duration-200 ${openIndex === idx + 6 ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === idx + 6 && (
                <div className="px-6 pb-5 text-base text-gray-800 animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 