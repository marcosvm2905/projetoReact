import React from 'react';
import styles from './FormFornecedor.module.css'; // Certifique-se que o caminho está correto

const FormFornecedor = () => {
  return (
    <div className={styles.formFornecedorBg}>
      <div className={styles.formHeader}>
        <h1 className={styles.formTitle}>Cadastro de Fornecedor</h1>
        <p className={styles.formSubtitle}>Cadastre sua empresa para se tornar nosso fornecedor!</p>
      </div>
      <form className={styles.formContainer}>
        <fieldset className={styles.formFieldset}>
          <legend className={styles.formLegend}>Informações da Empresa</legend>

          <div className={styles.formGroup}>
            <label htmlFor="nomeEmpresa" className={styles.formLabel}>
              Nome da Empresa:
            </label>
            <input
              type="text"
              name="nomeEmpresa"
              id="nomeEmpresa"
              className={styles.formInput}
              placeholder="Digite o nome da sua empresa..."
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="cnpj" className={styles.formLabel}>
              CNPJ:
            </label>
            <input
              type="text"
              name="cnpj"
              id="cnpj"
              className={styles.formInput}
              placeholder="Digite o CNPJ da sua empresa..."
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="razaoSocial" className={styles.formLabel}>
              Razão Social:
            </label>
            <input
              type="text"
              name="razaoSocial"
              id="razaoSocial"
              className={styles.formInput}
              placeholder="Digite a razão social..."
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="endereco" className={styles.formLabel}>
              Endereço:
            </label>
            <input
              type="text"
              name="endereco"
              id="endereco"
              className={styles.formInput}
              placeholder="Digite o endereço da empresa..."
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.formInput}
              placeholder="Digite o e-mail da sua empresa..."
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="telefone" className={styles.formLabel}>
              Telefone:
            </label>
            <input
              type="tel"
              name="telefone"
              id="telefone"
              className={styles.formInput}
              placeholder="Digite o telefone da sua empresa..."
              pattern="\\(\\d{2}\\) \\d{4,5}-\\d{4}"
              title="Formato: (XX) XXXXX-XXXX"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="site" className={styles.formLabel}>
              Site:
            </label>
            <input
              type="url"
              name="site"
              id="site"
              className={styles.formInput}
              placeholder="Digite o site da empresa..."
            />
          </div>
        </fieldset>
        <button type="submit" className={styles.formButton}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormFornecedor;