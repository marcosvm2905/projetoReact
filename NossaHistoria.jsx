import React from 'react';
import styles from './NossaHistoria.module.css'; // Importando o CSS diretamente no arquivo

const NossaHistoria = () => {
  return (
    <div>
      <header className={styles.header}>
        <h1>História do FC Barcelona</h1>
      </header>

      <main className={styles.content}>
        <section className={styles.history}>
          <h2>Fundação</h2>
          <p>
            O FC Barcelona foi fundado em 1899 por Joan Gamper, adotando as cores azul e grená, e desde então se tornou um símbolo da Catalunha.
          </p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Joan_Gamper_1910_year.jpg/640px-Joan_Gamper_1910_year.jpg"
            alt="Fundação do Barcelona"
            className={styles['history-image']}
          />
        </section>

        <section className={styles['golden-era']}>
          <h2>A Era de Johan Cruyff</h2>
          <p>
            Nos anos 1970 e 1990, Johan Cruyff transformou o Barça, trazendo o "futebol total" como jogador e técnico.
          </p>
          <img
            src="cruyff.jpg"
            alt="Johan Cruyff no Barcelona"
            className={styles['history-image']}
          />
        </section>

        <section className={styles['messi-era']}>
          <h2>A Era Messi</h2>
          <p>
            Com Lionel Messi, o Barça viveu sua maior era de conquistas, ganhando 4 Ligas dos Campeões e se consolidando como um dos maiores clubes do mundo.
          </p>
          <img
            src="messi.jpg"
            alt="Lionel Messi no Barcelona"
            className={styles['history-image']}
          />
        </section>

        <section className={styles.identity}>
          <h2>Mais que um clube</h2>
          <p>
            O lema "Més que un club" reflete a identidade catalã e o impacto global do FC Barcelona como um símbolo cultural.
          </p>
          <img
            src="mesqueunclub.jpg"
            alt="Mais que um clube"
            className={styles['history-image']}
          />
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 FC Barcelona - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default NossaHistoria;
