import React from 'react';
import styles from './Produtos.module.css'; // Adapte conforme o seu arquivo de estilo

const Produtos = () => {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>Loja de Produtos</h1>
        <p className={styles.headerSubtitle}>Encontre os melhores produtos para você!</p>
      </header>

      {/* Seção de Roupas */}
      <section className={styles.categorySection}>
        <h2 className={styles.categoryTitle}>Roupas</h2>
        <div className={styles.productsContainer}>
          {/* Produto de Roupas 1 */}
          <div className={styles.productCard}>
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcT_44JARI4f04jG0QHWOt_pcAQww0dvpxFcCTgoQSyksBhQI2OMgWyWM15YscmCGEoHGcgeZXK8cAaqdHVCgAd8KdkiZFFn2L31GtM9jtFr43YmChc-J8GakuP-gKWBdUxWA7fD17Tm4uuLdT01Z95kG8GgQ2pens4L-ws1-a_90-rokZUKmFZn1PSAE/s1600/barcelona%2024-25-home-kit%20%2813%29.jpg"
              alt="Camisa FC Barcelona I"
              className={styles.productImage}
            />
            <h3 className={styles.productName}>Camisa FC Barcelona I</h3>
            <p className={styles.productCategory}>Categoria: Roupas</p>
            <p className={styles.productPrice}>Preço: R$ 599,99</p>
            <p className={styles.productDescription}>Camisa oficial de jogo do FC Barcelona, com design exclusivo e tecido de alta performance.</p>
          </div>

          {/* Produto de Roupas 2 */}
          <div className={styles.productCard}>
            <img
              src="https://images.tokopedia.net/img/cache/500-square/VqbcmM/2024/9/17/db16bcf7-4e08-4bb2-b8c5-e24d60f175cd.jpg"
              alt="Camisa FC Barcelona II"
              className={styles.productImage}
            />
            <h3 className={styles.productName}>Camisa FC Barcelona II</h3>
            <p className={styles.productCategory}>Categoria: Roupas</p>
            <p className={styles.productPrice}>Preço: R$ 599,99</p>
            <p className={styles.productDescription}>Camisa oficial do Barcelona com tecnologia de absorção de suor, ideal para torcedores e atletas.</p>
          </div>

          <div className={styles.productCard}>
            <img
              src="https://diamu.com.bd/wp-content/uploads/2024/07/FC-Barcelona-Authentic-Third-Kit-2024-25.jpg"
              alt="Camisa FC Barcelona III"
              className={styles.productImage}
            />
            <h3 className={styles.productName}>Camisa FC Barcelona III</h3>
            <p className={styles.productCategory}>Categoria: Roupas</p>
            <p className={styles.productPrice}>Preço: R$ 599,99</p>
            <p className={styles.productDescription}>Camisa de edição especial, com detalhes modernos e escudo do clube bordado.</p>
          </div>

          <div className={styles.productCard}>
            <img
              src="https://images-americanas.b2w.io/produtos/7493913468/imagens/calca-do-barcelona-masculina-retro/7493913481_1_large.jpg"
              alt="Calça FC Barcelona"
              className={styles.productImage}
            />
            <h3 className={styles.productName}>Calça FC Barcelona</h3>
            <p className={styles.productCategory}>Categoria: Roupas</p>
            <p className={styles.productPrice}>Preço: R$ 179,99</p>
            <p className={styles.productDescription}>Calça oficial do FC Barcelona, confortável e perfeita para treinos ou uso casual.</p>
          </div>

          <div className={styles.productCard}>
            <img
              src="https://images.tcdn.com.br/img/img_prod/657285/blusa_moletom_barcelona_preto_masculino_2721_1_a91d17731726b446208dba44b4ab468a.jpg"
              alt="Blusa FC Barcelona"
              className={styles.productImage}
            />
            <h3 className={styles.productName}>Blusa FC Barcelona</h3>
            <p className={styles.productCategory}>Categoria: Roupas</p>
            <p className={styles.productPrice}>Preço: R$ 229,99</p>
            <p className={styles.productDescription}>Blusa confortável com o escudo do Barcelona, ideal para dias frios ou para um look casual.</p>
          </div>

          <div className={styles.productCard}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGCgxNYS0r26LDdTKHGmsQ_9dxZmfJ_Hy3Jw&s"
              alt="Meia FC Barcelona"
              className={styles.productImage}
            />
            <h3 className={styles.productName}>Meia FC Barcelona</h3>
            <p className={styles.productCategory}>Categoria: Roupas</p>
            <p className={styles.productPrice}>Preço: R$ 59,99</p>
            <p className={styles.productDescription}>Meia oficial do FC Barcelona, com design moderno e tecido macio, perfeita para jogos e treinos.</p>
          </div>
        </div>
      </section>

      {/* Seção de Acessórios */}
      <section className={styles.categorySection}>
        <h2 className={styles.categoryTitle}>Acessórios</h2>
        <div className={styles.productsContainer}>
          {/* Produto de Acessório 1 */}
          <div className={styles.productCard}>
            <img
              src="https://static.allianzparqueshop.com.br/produtos/mochila-nike-barcelona-stadium/86/HZM-3929-186/HZM-3929-186_zoom1.jpg?ts=1592996089?ims=400x"
              alt="Mochila FC Barcelona"
              className={styles.productImage}
            />
            <h3 className={styles.productName}>Mochila FC Barcelona</h3>
            <p className={styles.productCategory}>Categoria: Acessórios</p>
            <p className={styles.productPrice}>Preço: R$ 159,99</p>
            <p className={styles.productDescription}>Mochila oficial, ideal para o dia a dia e viagens, com compartimentos espaçosos.</p>
          </div>

          {/* Produto de Acessório 2 */}
          <div className={styles.productCard}>
            <img
              src="https://static.riachuelo.com.br/RCHLO/15510697001/portrait/baf5001af619e988e2e2639bd7270e6b6315b28c.jpg?imwidth=700"
              alt="Boné FC Barcelona"
              className={styles.productImage}
            />
            <h3 className={styles.productName}>Boné FC Barcelona</h3>
            <p className={styles.productCategory}>Categoria: Acessórios</p>
            <p className={styles.productPrice}>Preço: R$ 89,99</p>
            <p className={styles.productDescription}>Boné com escudo bordado, ajustável, perfeito para proteger do sol com estilo.</p>
          </div>

          <div className={styles.productCard}>
            <img
              src="https://http2.mlstatic.com/D_NQ_NP_973435-MLB50751232169_072022-O.webp"
              alt="Pingente FC Barcelona"
              className={styles.productImage}
            />
            <h3 className={styles.productName}>Pingente FC Barcelona</h3>
            <p className={styles.productCategory}>Categoria: Acessórios</p>
            <p className={styles.productPrice}>Preço: R$ 49,99</p>
            <p className={styles.productDescription}>Pingente metálico com o escudo do clube, ideal como chaveiro ou acessório.</p>
          </div>

          <div className={styles.productCard}>
            <img
              src="https://store.fcbarcelona.com/cdn/shop/files/74306_3.jpg?v=1698998897"
              alt="Fone de Ouvido FC Barcelona"
              className={styles.productImage}
            />
            <h3 className={styles.productName}>Fone de Ouvido FC Barcelona</h3>
            <p className={styles.productCategory}>Categoria: Acessórios</p>
            <p className={styles.productPrice}>Preço: R$ 199,99</p>
            <p className={styles.productDescription}>Fone oficial com excelente qualidade de som, perfeito para torcer em qualquer lugar.</p>
          </div>

          <div className={styles.productCard}>
            <img
              src="https://cdn.leroymerlin.com.br/products/caneca_barcelona_camisa_10_interior_e_alca_azul_escuro_1567074245_89a2_600x600.jpg"
              alt="Caneca FC Barcelona"
              className={styles.productImage}
            />
            <h3 className={styles.productName}>Caneca FC Barcelona</h3>
            <p className={styles.productCategory}>Categoria: Acessórios</p>
            <p className={styles.productPrice}>Preço: R$ 39,99</p>
            <p className={styles.productDescription}>Caneca personalizada com o escudo do clube, ideal para bebidas quentes ou frias.</p>
          </div>

          <div className={styles.productCard}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpFj96bFC_lT2p4SJDlbv7Gp56IU0XM3oi5Q&s"
              alt="Bola FC Barcelona"
              className={styles.productImage}
            />
            <h3 className={styles.productName}>Bola FC Barcelona</h3>
            <p className={styles.productCategory}>Categoria: Acessórios</p>
            <p className={styles.productPrice}>Preço: R$ 129,99</p>
            <p className={styles.productDescription}>Bola oficial, ideal para treinos e partidas recreativas, com o escudo do clube.</p>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Produtos;

