// FormClienteData.js
export const formClienteData = {
    fields: [
      {
        id: 'nome',
        label: 'Nome',
        type: 'text',
        placeholder: 'Digite seu nome...',
        required: true,
      },
      {
        id: 'sobrenome',
        label: 'Sobrenome',
        type: 'text',
        placeholder: 'Insira seu sobrenome...',
        required: true,
      },
      {
        id: 'idade',
        label: 'Idade',
        type: 'number',
        placeholder: 'Digite sua idade',
        min: 0,
        max: 120,
        required: true,
      },
      {
        id: 'cpf',
        label: 'CPF',
        type: 'text',
        placeholder: 'Digite seu CPF...',
        required: true,
      },
      {
        id: 'endereco',
        label: 'Endereço',
        type: 'text',
        placeholder: 'Digite seu endereço...',
        required: false,
      },
      {
        id: 'email',
        label: 'Email',
        type: 'email',
        placeholder: 'Digite seu e-mail...',
        required: true,
      },
      {
        id: 'telefone',
        label: 'Celular',
        type: 'tel',
        placeholder: 'Digite seu número de celular...',
        pattern: '\\(\\d{2}\\) \\d{4,5}-\\d{4}',
        title: 'Formato: (XX) XXXXX-XXXX',
        required: true,
      },
    ],
  };
  