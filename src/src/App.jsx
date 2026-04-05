import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail('')
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="app-container">
      {/* Header y Navegación */}
      <header className="header">
        <nav className="navbar">
          <div className="logo">🐟 Nutrisco</div>
          <ul className="nav-links">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#empresa">Empresa</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Nutrisco: Productos Marinos de Calidad Premium</h1>
          <p className="hero-subtitle">Alimentos congelados frescos, selectos y sabrosos para tu mesa</p>
          <button className="cta-button">Conoce Nuestros Productos</button>
        </div>
        <div className="hero-background"></div>
      </section>

      {/* Sección de Productos */}
      <section id="productos" className="products-section">
        <div className="section-header">
          <h2>Nuestros Productos</h2>
          <p>Una variedad de opciones premium para satisfacer todos tus gustos</p>
        </div>
        
        <div className="products-grid">
          <div className="product-card">
            <div className="product-icon">🦐</div>
            <h3>Camarones Premium</h3>
            <p>Camarones frescos congelados de la mejor calidad, ideales para ceviche y platillos gourmet</p>
            <div className="product-price">Precio Variables</div>
          </div>
          
          <div className="product-card">
            <div className="product-icon">🦞</div>
            <h3>Langostas Congeladas</h3>
            <p>Langostas frescas seleccionadas, perfectas para ocasiones especiales</p>
            <div className="product-price">Precio Variables</div>
          </div>
          
          <div className="product-card">
            <div className="product-icon">🦪</div>
            <h3>Ostras y Almejas</h3>
            <p>Moluscos frescos y deliciosos para tus fondues y platos de mariscos</p>
            <div className="product-price">Precio Variables</div>
          </div>
          
          <div className="product-card">
            <div className="product-icon">🐙</div>
            <h3>Pulpo Fresco</h3>
            <p>Pulpo seleccionado, congelado en óptimas condiciones de conservación</p>
            <div className="product-price">Precio Variables</div>
          </div>
          
          <div className="product-card">
            <div className="product-icon">🐟</div>
            <h3>Filetes de Pescado</h3>
            <p>Filetes frescos de diversas especies, listos para cocinar</p>
            <div className="product-price">Precio Variables</div>
          </div>
          
          <div className="product-card">
            <div className="product-icon">🦑</div>
            <h3>Calamares y Sepia</h3>
            <p>Calamares frescos congelados, perfectos para arroces y guisos</p>
            <div className="product-price">Precio Variables</div>
          </div>
        </div>
      </section>

      {/* Sección Sobre la Empresa */}
      <section id="empresa" className="about-section">
        <div className="about-content">
          <h2>Sobre Nutrisco</h2>
          <p>Con más de 20 años en el mercado, Nutrisco se ha consolidado como la empresa líder en productos marinos congelados de alta calidad. Nuestro compromiso es ofrecer productos frescos, saludables y deliciosos a precios competitivos.</p>
          
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <h4>Productos Frescos</h4>
              <p>Congelación inmediata para mantener frescura</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <h4>Garantía de Calidad</h4>
              <p>Seleccionados y certificados internacionalmente</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <h4>Variedades Disponibles</h4>
              <p>Amplio catálogo para todos los gustos</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <h4>Entrega Asegurada</h4>
              <p>Logística eficiente a toda la región</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section id="contacto" className="contact-section">
        <div className="section-header">
          <h2>Ponte en Contacto</h2>
          <p>Estamos aquí para resolver tus dudas y ofrecerte el mejor servicio</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">📍</div>
              <h4>Ubicación</h4>
              <p>Puerto Principal, Mercado de Mariscos<br/>Zona de Distribución Costera</p>
            </div>
            <div className="info-item">
              <div className="info-icon">📞</div>
              <h4>Teléfono</h4>
              <p>+1 (555) 123-4567<br/>+1 (555) 123-4568</p>
            </div>
            <div className="info-item">
              <div className="info-icon">📧</div>
              <h4>Email</h4>
              <p>ventas@nutrisco.com<br/>info@nutrisco.com</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Envíanos tu mensaje</h3>
            <input 
              type="text" 
              placeholder="Tu nombre" 
              required 
            />
            <input 
              type="email" 
              placeholder="Tu email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
            <textarea 
              placeholder="Tu mensaje..." 
              rows="5"
              required
            ></textarea>
            <button type="submit" className="submit-button">Enviar Mensaje</button>
            {submitted && <p className="success-message">¡Mensaje enviado exitosamente!</p>}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Nutrisco</h4>
            <p>Productos marinos congelados de la más alta calidad</p>
          </div>
          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#productos">Productos</a></li>
              <li><a href="#empresa">Empresa</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Síguenos</h4>
            <ul className="social-links">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Nutrisco. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
