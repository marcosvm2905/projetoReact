// FormFornecedorData.js
export const formFornecedorData = {
    fields: [
      {
        id: 'nomeEmpresa',
        label: 'Nome da Empresa',
        type: 'text',
        placeholder: 'Digite o nome da sua empresa...',
        required: true,
      },
      {
        id: 'cnpj',
        label: 'CNPJ',
        type: 'text',
        placeholder: 'Digite o CNPJ da sua empresa...',
        required: true,
      },
      {
        id: 'razaoSocial',
        label: 'Razão Social',
        type: 'text',
        placeholder: 'Digite a razão social...',
        required: true,
      },
      {
        id: 'endereco',
        label: 'Endereço',
        type: 'text',
        placeholder: 'Digite o endereço da empresa...',
        required: false,
      },
      {
        id: 'email',
        label: 'Email',
        type: 'email',
        placeholder: 'Digite o e-mail da sua empresa...',
        required: true,
      },
      {
        id: 'telefone',
        label: 'Telefone',
        type: 'tel',
        placeholder: 'Digite o telefone da sua empresa...',
        pattern: '\\(\\d{2}\\) \\d{4,5}-\\d{4}',
        title: 'Formato: (XX) XXXXX-XXXX',
        required: true,
      },
      {
        id: 'site',
        label: 'Site',
        type: 'url',
        placeholder: 'Digite o site da empresa...',
        required: false,
      },
    ],
  };
  