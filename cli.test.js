// cli.test.js
const { createProject } = require('./cli'); 

// Simule as entradas do usuário para o teste
const mockUserInput = {
  projectName: 'test_project',
  projectType: 'node.js',
  dependencies: 'express',
};

test('createProject cria um novo projeto com sucesso', async () => {
  // Suponha que a função createProject retorne uma Promise
  const result = await createProject(mockUserInput);

  // Adicione expectativas específicas com base no comportamento da sua função
  expect(result).toEqual('Projeto "test_project" criado com sucesso em ...');
});

test('createProject lida com erros de entrada', async () => {
  // Suponha que a função createProject retorne uma Promise
  const result = await createProject({}); // Chama createProject com entradas inválidas

  // Adicione expectativas específicas com base no comportamento da sua função
  expect(result).toEqual('Erro ao criar o projeto: Entrada inválida.');
});
