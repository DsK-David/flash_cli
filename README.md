# Flash CLI


A **Flash CLI** é uma ferramenta de linha de comando desenvolvida para simplificar o processo de criação de projetos em diversas tecnologias. Com esta CLI, é possível criar rapidamente projetos para Node.js, React, Express, Next.js, React Native, Vue.js, Svelte, Angular, Nest.js, Django, Flask e Spring Boot com apenas alguns comandos simples.

## Instalação

Certifique-se de ter o Node.js instalado em seu sistema. Você pode instalar a Flash CLI globalmente usando o seguinte comando:

```bash
npm install -g @dskdavid/flash_cli
```

## Como Usar

Para criar um novo projeto, execute o seguinte comando:

```bash
flash create
```

Siga as instruções interativas para personalizar seu projeto, escolher o tipo de projeto desejado e informar as dependências necessárias.

## Tipos de Projetos Suportados

- **Node.js**
- **React**
- **Express**
- **Next.js**
- **React Native**
- **Vue.js**
- **Svelte**
- **Angular**
- **Nest.js**
- **Django**
- **Flask**
- **Spring Boot**

## Estrutura do Código

A CLI utiliza o Node.js e foi construída utilizando o Commander para a criação de comandos, Inquirer para interatividade com o usuário, e exec para executar comandos do sistema. O código principal está dividido em módulos dentro da pasta `components`, cada um responsável por gerar arquivos e estruturas específicas para o tipo de projeto selecionado.

## Contribuindo

1. **Clone o Repositório:**
   ```bash
   git clone https://github.com/DsK-David/flash_cli.git
   cd flash_cli
   ```

2. **Instale as Dependências:**
   ```bash
   npm install
   ```

3. **Faça as Modificações Necessárias:**
   Modifique o código conforme necessário para resolver problemas ou adicionar novos recursos.

4. **Teste as Modificações:**
   Execute testes ou verifique se o projeto ainda funciona conforme esperado.

5. **Envie um Pull Request:**
   Abra um pull request descrevendo suas alterações e fornecendo informações detalhadas sobre o que foi adicionado ou corrigido.

## Recursos Úteis

- [Documentação](https://github.com/DsK-David/flash_cli)
- [Problemas ou Sugestões](https://github.com/DsK-David/flash_cli/issues)

## Autor

[David Silva](https://seu-site.com)

## Licença

Este projeto é licenciado sob a [Licença MIT](LICENSE).