import React, { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [result, setResult] = useState("Kirim Sekarang →");
  const [status, setStatus] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Mengirim...");

    const formData = new FormData(event.target);

    // Web3Forms Access Key
    formData.append("access_key", "fbacd598-c938-493f-b71a-8e318b20da3b");


    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Terkirim! ✅");
        setStatus("success");
        event.target.reset(); // Kosongkan form setelah berhasil

        // Kembalikan teks tombol setelah 3 detik
        setTimeout(() => {
          setResult("Kirim Sekarang →");
          setStatus("");
        }, 3000);
      } else {
        console.log("Error", data);
        setResult("Gagal Mengirim ❌");
        setStatus("error");
      }
    } catch (error) {
      console.log("Error", error);
      setResult("Gagal Mengirim ❌");
      setStatus("error");
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container contact-container">
        <div className="contact-info" data-reveal="left">
          <span className="section-label">Kontak</span>
          <h2 className="section-title" style={{ marginBottom: '20px' }}>Ayo Mengobrol!</h2>
          <p className="contact-desc">
            Tertarik berkolaborasi, membahas proyek, atau sekadar menyapa? Hubungi saya lewat media sosial atau formulir di samping.
          </p>

          <div className="contact-direct" style={{ marginTop: '24px' }}>
            <p style={{ fontWeight: 700, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FaEnvelope size={18} color="var(--primary)" />
              <span>Email : </span>
              <a href="mailto:putuagusarya2004@gmail.com" style={{ color: 'var(--primary)', textDecoration: 'none' }}>putuagusarya2004@gmail.com</a>
            </p>
            <p style={{ fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FaGithub size={18} color="var(--primary)" />
              <span>GitHub : </span>
              <a href="https://github.com/Aryasstraa" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Aryasstraa</a>
            </p>
          </div>
        </div>

        <div className="contact-form neo-card" data-reveal="right" data-delay="150">
          <h3 style={{ marginBottom: '24px' }}>Kirim Pesan</h3>
          <form onSubmit={onSubmit}>
            {/* Subject rahasia untuk email Anda */}
            <input type="hidden" name="subject" value="Pesan Baru dari Portofolio Anda!" />

            <div className="form-group">
              <label htmlFor="contact-name">Nama</label>
              <input id="contact-name" name="name" type="text" className="neo-input" placeholder="Nama lengkap Anda" required />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">Email</label>
              <input id="contact-email" name="email" type="email" className="neo-input" placeholder="alamat@email.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">Pesan</label>
              <textarea id="contact-message" name="message" className="neo-input" rows="4" placeholder="Tulis pesan Anda di sini..." required></textarea>
            </div>
            <button
              type="submit"
              className="neo-button"
              style={{
                width: '100%',
                backgroundColor: status === 'success' ? '#22c55e' : status === 'error' ? '#ef4444' : ''
              }}
              disabled={result === "Mengirim..."}
            >
              {result}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
