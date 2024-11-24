import React from "react";
import styles from '../Jogadores/jogadores.module.css';  // Importando o CSS Module

const Jogadores = () => {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>FC Barcelona</h1>
        <p className={styles.headerSubtitle}>Principais Jogadores</p>
      </header>

      <div className={styles.playersContainer}>
        {/* Lionel Messi */}
        <div className={styles.playerCard}>
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/60eedd5048d3e8c3bd201fb6/Lionel-Messi-will-return-to-FC-Barcelona-/960x0.jpg?format=jpg&width=960"
            alt="Lionel Messi"
            className={styles.playerImage}
          />
          <h2 className={styles.playerName}>Lionel Messi</h2>
          <p className={styles.playerInfo}>Posição: Atacante</p>
          <p className={styles.playerInfo}>Número: 10</p>
          <p className={styles.playerDescription}>O maior jogador da história do clube.</p>
        </div>

        {/* Andrés Iniesta */}
        <div className={styles.playerCard}>
          <img
            src="https://prod-media.beinsports.com/image/1683745204418_dea24af7-921d-46b6-a303-86df1a29092a.jpg"
            alt="Andrés Iniesta"
            className={styles.playerImage}
          />
          <h2 className={styles.playerName}>Andrés Iniesta</h2>
          <p className={styles.playerInfo}>Posição: Meio-Campo</p>
          <p className={styles.playerInfo}>Número: 8</p>
          <p className={styles.playerDescription}>
            Maestro no meio-campo, famoso por sua visão de jogo e passes precisos.
          </p>
        </div>

        {/* Ronaldinho Gaúcho */}
        <div className={styles.playerCard}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNg6BYT8-pLPiaEILL640vLkkffXVkWQR0CQ&s"
            alt="Ronaldinho Gaúcho"
            className={styles.playerImage}
          />
          <h2 className={styles.playerName}>Ronaldinho Gaúcho</h2>
          <p className={styles.playerInfo}>Posição: Atacante</p>
          <p className={styles.playerInfo}>Número: 10</p>
          <p className={styles.playerDescription}>Famoso por sua habilidade em dribles e jogadas mágicas.</p>
        </div>

        {/* Johan Cruyff */}
        <div className={styles.playerCard}>
          <img
            src="https://terceirotempo.uol.com.br/imagens/80/33/w700_h474_arq_78033.webp"
            alt="Johan Cruyff"
            className={styles.playerImage}
          />
          <h2 className={styles.playerName}>Johan Cruyff</h2>
          <p className={styles.playerInfo}>Posição: Atacante</p>
          <p className={styles.playerInfo}>Número: 14</p>
          <p className={styles.playerDescription}>
            Ícone do futebol como jogador e técnico, com contribuições inestimáveis.
          </p>
        </div>

        {/* Neymar Jr. */}
        <div className={styles.playerCard}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl_RHfmi2gHBbNcyMLFPE0DCoFsnAQbXrUkQ&s"
            alt="Neymar Jr."
            className={styles.playerImage}
          />
          <h2 className={styles.playerName}>Neymar Jr.</h2>
          <p className={styles.playerInfo}>Posição: Atacante</p>
          <p className={styles.playerInfo}>Número: 11</p>
          <p className={styles.playerDescription}>Um dos maiores jogadores brasileiros da história.</p>
        </div>

        {/* Luis Suárez */}
        <div className={styles.playerCard}>
          <img
            src="https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2020%2F0925%2Fr750922_1296x729_16%2D9.jpg"
            alt="Luis Suárez"
            className={styles.playerImage}
          />
          <h2 className={styles.playerName}>Luis Suárez</h2>
          <p className={styles.playerInfo}>Posição: Atacante</p>
          <p className={styles.playerInfo}>Número: 9</p>
          <p className={styles.playerDescription}>Centroavante histórico, parte do trio MSN.</p>
        </div>

        {/* Xavi */}
        <div className={styles.playerCard}>
          <img
            src="https://s.glbimg.com/es/ge/f/original/2010/11/29/xavi_reu62.jpg"
            alt="Xavi"
            className={styles.playerImage}
          />
          <h2 className={styles.playerName}>Xavi</h2>
          <p className={styles.playerInfo}>Posição: Meio-Campo</p>
          <p className={styles.playerInfo}>Número: 6</p>
          <p className={styles.playerDescription}>
            Parte do melhor trio de meio-campo da história ao lado de Iniesta e Busquets.
          </p>
        </div>

        {/* Sergio Busquets */}
        <div className={styles.playerCard}>
          <img
            src="https://s2-ge.glbimg.com/Bjk_PB2iPapaDf9N3_fW_WNU7tI=/0x0:4986x3325/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/d/i/CexnVFTieXYETO3ZGAGg/alex-caparros-getty-images.jpg"
            alt="Sergio Busquets"
            className={styles.playerImage}
          />
          <h2 className={styles.playerName}>Sergio Busquets</h2>
          <p className={styles.playerInfo}>Posição: Meio-Campo</p>
          <p className={styles.playerInfo}>Número: 5</p>
          <p className={styles.playerDescription}>Um dos melhores volantes de sua geração.</p>
        </div>

        {/* Carles Puyol */}
        <div className={styles.playerCard}>
          <img
            src="https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2013/09/13/1091422-18703904-2560-1440.jpg"
            alt="Carles Puyol"
            className={styles.playerImage}
          />
          <h2 className={styles.playerName}>Carles Puyol</h2>
          <p className={styles.playerInfo}>Posição: Zagueiro</p>
          <p className={styles.playerInfo}>Número: 5</p>
          <p className={styles.playerDescription}>Capitão e líder absoluto no campo e fora dele.</p>
        </div>
      </div>
    </>
  );
};

export default Jogadores;
