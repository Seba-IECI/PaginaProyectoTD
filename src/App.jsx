import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app-container">
      {/* Header/Navbar */}
      <header className="header">
        <nav className="navbar">
          <a href="#" className="logo">📊 Data Warehouse Nutrisco</a>
          <ul className="nav-links">
            <li><a href="#problema">Problema</a></li>
            <li><a href="#solucion">Solución</a></li>
            <li><a href="#objetivos">Objetivos</a></li>
            <li><a href="#timeline">Roadmap</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero fade-in-up">
        <div className="hero-content">
          <h1>Sistema Data Warehouse con Inteligencia de Negocio</h1>
          <p>Transformando la gestión de compensaciones en Nutrisco: De 14 días a segundos</p>
          <button className="cta-button">Conoce la Solución</button>
        </div>
      </section>

      {/* Problem Section */}
      <section className="problem-section" id="problema">
        <div className="container">
          <h2>El Problema Actual</h2>
          
          <div className="problem-grid">
            <div className="problem-card">
              <div className="problem-icon">⏱️</div>
              <h3>Tiempo Excesivo</h3>
              <p>El proceso de generación de reportes toma 1 a 2 semanas, ralentizando decisiones estratégicas.</p>
            </div>

            <div className="problem-card">
              <div className="problem-icon">📊</div>
              <h3>Datos Dispersos</h3>
              <p>Información fragmentada en múltiples fuentes: Excel, sistemas ERP y bases de datos operativas.</p>
            </div>

            <div className="problem-card">
              <div className="problem-icon">❌</div>
              <h3>Errores Humanos</h3>
              <p>Cálculos complejos manuales en Excel generan inconsistencias y riesgos operacionales.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution-section" id="solucion">
        <div className="container">
          <h2>Nuestra Solución</h2>

          <div className="solution-content">
            <div className="solution-text">
              <h3>Plataforma Integrada de BI</h3>
              <p>
                Implementamos un sistema Data Warehouse moderno que centraliza toda la información 
                del departamento de compensaciones con herramientas de inteligencia de negocio de última generación.
              </p>
              
              <ul className="features-list">
                <li>Extracción, transformación y carga automática de datos (ETL)</li>
                <li>Modelo de datos relacional optimizado (Star Schema)</li>
                <li>Tableros interactivos con cálculos complejos en Power BI</li>
                <li>Interfaz web intuitiva desarrollada en React/Node.js</li>
                <li>Reportes generados en segundos, no en días</li>
              </ul>
            </div>

            <div className="solution-visual">
              <div className="dashboard-mockup">
                <div className="dashboard-header">
                  <div className="dashboard-title">📈 Dashboard - Compensaciones</div>
                  <div className="dashboard-utils">
                    <button className="dashboard-util-btn">⚙️</button>
                    <button className="dashboard-util-btn">⬇️</button>
                    <button className="dashboard-util-btn">⋯</button>
                  </div>
                </div>

                <div className="dashboard-content">
                  <div className="dashboard-widget">
                    <div className="widget-title">Presupuesto Total</div>
                    <div className="widget-value">$2.5M</div>
                    <div className="widget-chart">
                      <div className="chart-bar"></div>
                      <div className="chart-bar"></div>
                      <div className="chart-bar"></div>
                      <div className="chart-bar"></div>
                      <div className="chart-bar"></div>
                    </div>
                  </div>

                  <div className="dashboard-widget">
                    <div className="widget-title">Gastos Realizados</div>
                    <div className="widget-value">68%</div>
                    <div className="widget-chart">
                      <div className="chart-bar"></div>
                      <div className="chart-bar"></div>
                      <div className="chart-bar"></div>
                      <div className="chart-bar"></div>
                      <div className="chart-bar"></div>
                    </div>
                  </div>

                  <div className="dashboard-widget">
                    <div className="widget-title">Variación YoY</div>
                    <div className="widget-value">+12%</div>
                    <div className="widget-chart">
                      <div className="chart-bar"></div>
                      <div className="chart-bar"></div>
                      <div className="chart-bar"></div>
                      <div className="chart-bar"></div>
                      <div className="chart-bar"></div>
                    </div>
                  </div>

                  <div className="dashboard-widget">
                    <div className="widget-title">Alertas Activas</div>
                    <div className="widget-value">3</div>
                    <div className="widget-chart">
                      <div className="chart-bar"></div>
                      <div className="chart-bar"></div>
                      <div className="chart-bar"></div>
                      <div className="chart-bar"></div>
                      <div className="chart-bar"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="objectives-section" id="objetivos">
        <div className="container">
          <h2>Objetivos del Proyecto</h2>

          <div className="objectives-grid">
            <div className="objective-card">
              <div className="objective-number">1</div>
              <h3>Análisis de Fuentes</h3>
              <p>Identificar y mapear todas las fuentes de datos del departamento de compensaciones.</p>
            </div>

            <div className="objective-card">
              <div className="objective-number">2</div>
              <h3>Procesos ETL</h3>
              <p>Diseñar e implementar pipelines de extracción, transformación y carga de datos.</p>
            </div>

            <div className="objective-card">
              <div className="objective-number">3</div>
              <h3>Data Warehouse</h3>
              <p>Construir un modelo relacional optimizado (Star Schema) para centralizar datos históricos.</p>
            </div>

            <div className="objective-card">
              <div className="objective-number">4</div>
              <h3>Inteligencia de Negocio</h3>
              <p>Desarrollar tableros interactivos con cálculos complejos en lenguaje DAX.</p>
            </div>

            <div className="objective-card">
              <div className="objective-number">5</div>
              <h3>Portal Web</h3>
              <p>Implementar una interfaz amigable en React/Node.js como acceso centralizado.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section" id="timeline">
        <div className="container">
          <h2>Roadmap del Proyecto</h2>

          <div className="timeline">
            <div className="timeline-items">
              <div className="timeline-item">
                <div className="timeline-content">
                  <div className="timeline-month">Abril 2026</div>
                  <div className="timeline-description">
                    <strong>Diagnóstico y Análisis</strong><br/>
                    Levantamiento de KPIs, definición de requisitos y prototipo UI.
                  </div>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-content">
                  <div className="timeline-month">Mayo 2026</div>
                  <div className="timeline-description">
                    <strong>Data Warehouse y ETL</strong><br/>
                    Diseño de base de datos y programación de procesos de transformación.
                  </div>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-content">
                  <div className="timeline-month">Junio 2026</div>
                  <div className="timeline-description">
                    <strong>Inteligencia de Negocio</strong><br/>
                    Modelado de datos y desarrollo de dashboards interactivos en Power BI.
                  </div>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-content">
                  <div className="timeline-month">Julio 2026</div>
                  <div className="timeline-description">
                    <strong>Plataforma Web y Validación</strong><br/>
                    Desarrollo de interfaz y pruebas de aceptación con usuarios.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Sistema Data Warehouse - Nutrisco</h3>
            <p>Optimizando la generación de reportes de compensaciones mediante inteligencia de negocio.</p>
          </div>
          <div className="footer-section">
            <p>
              <strong>Profesor Guía:</strong> Tatiana Gutiérrez Bunster<br/>
              <strong>Supervisor Empresa:</strong> Alejandra Aguayo<br/>
              <strong>Estudiante:</strong> Sebastián Albornoz Ibáñez
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Universidad del Bío-Bío - Proyecto de Titulación. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
