import { useState } from 'react';
import './ContactPage.css';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Solo UI por ahora — lógica de envío se agregará con back-end
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <main className="contact-page">
      <div className="container">
        <div className="contact-header animate-fade-in-up">
          <h1 className="contact-title">Contactanos</h1>
          <p className="contact-subtitle">
            ¿Tenés alguna consulta? Completá el formulario y te respondemos a la brevedad.
          </p>
        </div>

        <div className="contact-grid">
          {/* Form */}
          <form className="contact-form animate-fade-in-up" onSubmit={handleSubmit} id="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Nombre completo</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                placeholder="Tu nombre"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="tu@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">Asunto</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-input"
                placeholder="¿En qué podemos ayudarte?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-input form-textarea"
                placeholder="Describí tu consulta..."
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-lg form-submit" id="contact-submit">
              Enviar mensaje
            </button>

            {submitted && (
              <div className="form-success animate-fade-in" id="form-success">
                ✅ ¡Mensaje enviado! Te contactaremos pronto.
              </div>
            )}
          </form>

          {/* Info */}
          <aside className="contact-info animate-fade-in-up">
            <div className="info-card">
              <span className="info-icon">📍</span>
              <h3>Ubicación</h3>
              <p>Buenos Aires, Argentina</p>
            </div>
            <div className="info-card">
              <span className="info-icon">📞</span>
              <h3>Teléfono</h3>
              <p>+54 11 1234-5678</p>
            </div>
            <div className="info-card">
              <span className="info-icon">✉️</span>
              <h3>Email</h3>
              <p>info@autopartespro.com</p>
            </div>
            <div className="info-card">
              <span className="info-icon">🕐</span>
              <h3>Horario</h3>
              <p>Lunes a Viernes: 9:00 - 18:00</p>
              <p>Sábados: 9:00 - 13:00</p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default ContactPage;
