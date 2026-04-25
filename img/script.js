/*-------------------------------------------
 Variables
--------------------------------------------*/
:root {
  --bg-dark: #111;
  --card-bg: #222;
  --text-light: #f5f5f5;
  --text-muted: #ccc;
  --accent: #bfa76f;
  --hover-accent: #a68e57;
}

/*-------------------------------------------
 Reset
--------------------------------------------*/
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/*-------------------------------------------
 Base
--------------------------------------------*/
body {
  font-family: 'Playfair Display', serif;
  background: var(--bg-dark);
  color: var(--text-light);
  line-height: 1.5;
  scroll-behavior: smooth;
}

a {
  color: var(--accent);
  transition: color 0.3s;
}

a:hover {
  color: var(--hover-accent);
}

/*-------------------------------------------
 Header & Menu
--------------------------------------------*/
.site-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
  background: var(--bg-dark);
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  width: 180px; /* Logo maior */
}

.main-nav ul {
  display: flex;
  gap: 1.5rem;
  list-style: none;
}

.main-nav a {
  font-weight: 700;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: var(--text-light);
  font-size: 1.5rem;
  cursor: pointer;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }
  .main-nav {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--bg-dark);
    text-align: center;
    padding: 1rem 0;
  }
  .main-nav.active {
    display: block;
  }
  .main-nav ul {
    flex-direction: column;
    gap: 1rem;
  }
}

/*-------------------------------------------
 Hero
--------------------------------------------*/
.hero {
  text-align: center;
}
.hero .capa {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  display: block;
}

/*-------------------------------------------
 Imóveis
--------------------------------------------*/
#lista-imoveis {
  padding: 2rem 1rem;
  background: var(--bg-dark);
}

.section-title {
  text-align: center;
  margin-bottom: 1rem;
  color: var(--accent);
}

.imoveis-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.imovel {
  background: var(--card-bg);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s;
}

.imovel img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.imovel p {
  padding: 0.75rem;
  text-align: center;
}

.imovel:hover {
  transform: translateY(-5px);
}

@media (max-width: 1024px) {
  .imoveis-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 768px) {
  .imoveis-grid {
    grid-template-columns: 1fr;
  }
}

/*-------------------------------------------
 Sobre (fundo branco)
--------------------------------------------*/
.sobre-section {
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  color: #333;
  padding: 3rem 2rem;
  gap: 2rem;
}

.sobre-texto {
  flex: 1 1 300px;
}

.sobre-texto h2 {
  color: var(--accent);
  margin-bottom: 1rem;
}

.sobre-texto p {
  margin-bottom: 1rem;
}

.sobre-foto {
  flex: 1 1 300px;
}
.sobre-foto img {
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
}

/*-------------------------------------------
 Negocie
--------------------------------------------*/
.negocie-section {
  background: var(--bg-dark);
  padding: 2rem;
  text-align: center;
}

.negocie-section h2 {
  color: var(--accent);
  margin-bottom: 1rem;
}

.negocie-section ul {
  list-style: disc inside;
  max-width: 600px;
  margin: 0 auto;
  color: var(--text-light);
  text-align: left;
}
.negocie-section li {
  margin: 0.5rem 0;
}

/*-------------------------------------------
 Financie
--------------------------------------------*/
.financie-section {
  background: var(--card-bg);
  padding: 2rem;
  text-align: center;
}

.financie-section h2 {
  color: var(--accent);
  margin-bottom: 1rem;
}

/*-------------------------------------------
 Contracapa (CTA)
--------------------------------------------*/
.cta-banner {
  background: url('capa-final.jpg') center/cover no-repeat;
  text-align: center;
  padding: 4rem 1rem;
}

.cta-banner h2 {
  font-size: 2rem;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.6);
}

/*-------------------------------------------
 Rodapé
--------------------------------------------*/
.site-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  background: var(--bg-dark);
  color: var(--text-muted);
  flex-wrap: wrap;
}

.footer-logo img {
  width: 100px;
}

.footer-contact h3 {
  color: var(--accent);
  margin-bottom: 0.5rem;
}
