import React from 'react';
import styles from './FormCliente.module.css'; // Ajuste o caminho conforme necessário

const FormCliente = () => {
  return (
    <div className={styles.fcBarcelonaBg}>
      <div className={styles.formHeader}>
        <h1 className={styles.formTitle}>FC Barcelona</h1>
        <p className={styles.formSubtitle}>Junte-se à nossa comunidade!</p>
      </div>
      <form className={styles.formContainer}>
        <fieldset className={styles.formFieldset}>
          <legend className={styles.formLegend}>Informações Pessoais</legend>

          <div className={styles.formGroup}>
            <label htmlFor="nome" className={styles.formLabel}>
              Nome:
            </label>
            <input
              type="text"
              name="nome"
              id="nome"
              className={styles.formInput}
              placeholder="Digite seu nome..."
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="sobrenome" className={styles.formLabel}>
              Sobrenome:
            </label>
            <input
              type="text"
              name="sobrenome"
              id="sobrenome"
              className={styles.formInput}
              placeholder="Insira seu sobrenome..."
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="idade" className={styles.formLabel}>
              Idade:
            </label>
            <input
              type="number"
              id="idade"
              name="idade"
              className={styles.formInput}
              min="0"
              max="120"
              placeholder="Digite sua idade"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="cpf" className={styles.formLabel}>
              CPF:
            </label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              className={styles.formInput}
              placeholder="Digite seu CPF..."
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
              placeholder="Digite seu endereço..."
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
              placeholder="Digite seu e-mail..."
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="telefone" className={styles.formLabel}>
              Celular:
            </label>
            <input
              type="tel"
              name="telefone"
              id="telefone"
              className={styles.formInput}
              placeholder="Digite seu número de celular..."
              pattern="\(\d{2}\) \d{4,5}-\d{4}"
              title="Formato: (XX) XXXXX-XXXX"
              required
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

export default FormCliente;