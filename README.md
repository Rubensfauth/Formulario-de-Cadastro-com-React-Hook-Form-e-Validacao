# Formulario-de-Cadastro-com-React-Hook-Form-e-Validacao

Descrição

Objetivo: Implementar um formulário de cadastro com validação usando React Hook Form.

Crie um componente RegistrationForm.jsx que seja um formulário de cadastro com os seguintes campos:

Nome (obrigatório, mínimo 3 caracteres)

Email (obrigatório, formato de email válido)

Senha (obrigatória, mínimo 6 caracteres)

Confirmação de Senha (obrigatória, deve ser igual à senha)

Utilize useForm, register, handleSubmit e formState: { errors } do React Hook Form para gerenciar o formulário e suas validações. Exiba mensagens de erro claras para cada campo.

Checklist

Instale react-hook-form.

Crie o componente RegistrationForm.jsx.

Use useForm para inicializar o formulário.

Registre cada campo com register e suas regras de validação (required, minLength, pattern).

Implemente a validação de confirmação de senha customizada.

Use handleSubmit para processar os dados do formulário.

Exiba as mensagens de erro usando errors do formState.

Teste o formulário com dados válidos e inválidos.
