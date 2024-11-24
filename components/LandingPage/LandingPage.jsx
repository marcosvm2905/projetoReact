import React from 'react';
import styles from '../LandingPage/LandingPage.module.css';

const LandingPage = () => {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logo}>
          <h1>FC Barcelona</h1>
        </div>
        <nav className={styles.menu}>
          <ul>
            <li>Cadastro de Cliente </li>
            <li>Cadastro de Fornecedor</li>
            <li>Produtos</li>
            <li>Melhores Jogadores</li>
            <li>História</li>
          </ul>
        </nav>
      </header>

      <main className={styles.mainContent}>
        <h2>Bem-vindo ao Site Oficial do FC Barcelona!</h2>
        <p>
          Explore nossas páginas para conhecer mais sobre o clube, nossos jogadores e produtos exclusivos.
        </p>
        <div className={styles.buttons}>
          <a href="formulario_cliente.html" className={styles.button}>
            Cadastrar-se como Cliente
          </a>
          <a href="formulario_fornecedor.html" className={styles.button}>
            Cadastrar-se como Fornecedor
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 FC Barcelona - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
