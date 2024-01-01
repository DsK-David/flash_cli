#!/usr/bin/env node
import { program } from 'commander';
import fs from 'fs';
import path from 'path';
import inquirer from 'inquirer';
import { exec } from 'child_process';

program.version('1.0.0').description('Esta CLI foi criada para simplificar o processo de criação de projetos.');

program
  .command('create')
  .description('Cria um novo projeto')
  .action(() => {
    createProject();
  });

program
  .command('info')
  .description('Exibe informações sobre a CLI Flash')
  .action(() => {
    displayInfo();
  });

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}

async function createProject() {
  try {
    console.log('Criando um novo projeto...');

    const { projectName } = await inquirer.prompt([
      {
        type: 'input',
        name: 'projectName',
        message: 'Nome do projeto:',
        default: 'my_project',
      },
    ]);

    const projectPath = path.join(process.cwd(), projectName);

    fs.mkdirSync(projectPath);

    const answers = await inquirer.prompt([
      {
        type: 'list',
        name: 'projectType',
        message: 'Escolha o tipo de projeto:',
        choices: [
          'Node.js',
          'React',
          'Express',
          'Next.js',
          'React Native',
          'Vue.js',
          'Svelte',
          'Angular',
          'Nest.js',
          'Django',
          'Flask',
          'Spring Boot',
        ],
      },
      {
        type: 'input',
        name: 'dependencies',
        message: 'Informe as dependências do projeto (separadas por vírgula):',
        default: 'express, body-parser',
      },
    ]);

    const projectType = answers.projectType.toLowerCase();
    const dependencies = answers.dependencies.split(',').map(dep => dep.trim());

    createSampleFiles(projectPath, projectType);
    installDependencies(projectName, dependencies);

    console.log(`Projeto "${projectName}" criado com sucesso em ${projectPath}`);
  } catch (error) {
    console.error(`Erro ao criar o projeto: ${error.message}`);
  }
}

function createSampleFiles(projectPath, projectType) {
  switch (projectType) {
    case 'node.js':
      fs.writeFileSync(path.join(projectPath, 'index.js'), 'console.log("Hello, Node.js project!");');
      break;
    case 'react':
      fs.writeFileSync(
        path.join(projectPath, 'App.js'),
        'import React from "react";\nimport ReactDOM from "react-dom";\n\nconst App = () => {\n  return <div>Hello, React!</div>;\n};\n\nReactDOM.render(<App />, document.getElementById("root"));'
      );
      break;
    case 'express':
      fs.writeFileSync(
        path.join(projectPath, 'app.js'),'const express = require("express");\nconst app = express();\n\napp.get("/", (req, res) => {\n  res.send("Hello, Express!");\n});\n\napp.listen(3000, () => {\n  console.log("Server is listening on port 3000");\n});'
      );
      break;
    case 'next.js':
      const pagesDir = path.join(projectPath, 'pages');

      // Verifica se o diretório 'pages' existe, se não, cria
      if (!fs.existsSync(pagesDir)) {
        fs.mkdirSync(pagesDir, { recursive: true });
      }

      fs.writeFileSync(
        path.join(pagesDir, 'index.js'),
        'const App = () => <div>Hello, Next.js!</div>;\n\nexport default App;'
      );
      fs.writeFileSync(
        path.join(projectPath, 'package.json'),
        '{"scripts": {"dev": "next"}}'
      );
      break;
    case 'react native':
      fs.writeFileSync(
        path.join(projectPath, 'App.js'),
        'import React from "react";\nimport { View, Text } from "react-native";\n\nconst App = () => (\n  <View>\n    <Text>Hello, React Native!</Text>\n  </View>\n);\n\nexport default App;'
      );
      fs.writeFileSync(
        path.join(projectPath, 'package.json'),
        '{"scripts": {"start": "react-native start"}}'
      );
      break;
    case 'vue.js':
      fs.writeFileSync(
        path.join(projectPath, 'App.vue'),
        '<template>\n  <div>Hello, Vue.js!</div>\n</template>\n\n<script>\nexport default {\n  name: "App",\n};\n</script>\n\n<style>\n/* Adicione estilos aqui */\n</style>'
      );
      fs.writeFileSync(
        path.join(projectPath, 'main.js'),
        'import { createApp } from "vue";\nimport App from "./App.vue";\n\ncreateApp(App).mount("#app");'
      );
      fs.writeFileSync(
        path.join(projectPath, 'index.html'),
        '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Vue App</title>\n</head>\n<body>\n  <div id="app"></div>\n</body>\n</html>'
      );
      break;
    case 'svelte':
      fs.writeFileSync(
        path.join(projectPath, 'App.svelte'),
        '<script>\n  export let name = "World";\n</script>\n\n<main>\n  <h1>Hello {name}!</h1>\n</main>\n\n<style>\n  h1 {\n    color: #ff3e00;\n    text-align: center;\n    margin-top: 40px;\n  }\n</style>'
      );
      fs.writeFileSync(
        path.join(projectPath, 'main.js'),
        'import App from "./App.svelte";\n\nconst app = new App({\n  target: document.body,\n  props: {\n    name: "Svelte",\n  },\n});\n\nexport default app;'
      );
      break;

    case 'angular':
      fs.writeFileSync(
        path.join(projectPath, 'app.component.ts'),
        'import { Component } from "@angular/core";\n\n@Component({\n  selector: "app-root",\n  template: \'<div>Hello, Angular!</div>\',\n})\nexport class AppComponent {};'
      );
      fs.writeFileSync(
        path.join(projectPath, 'main.ts'),
        'import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";\nimport { AppModule } from "./app.module";\n\nplatformBrowserDynamic().bootstrapModule(AppModule);'
      );
      fs.writeFileSync(
        path.join(projectPath, 'app.module.ts'),
        'import { NgModule } from "@angular/core";\nimport { BrowserModule } from "@angular/platform-browser";\nimport { AppComponent } from "./app.component";\n\n@NgModule({\n  declarations: [AppComponent],\n  imports: [BrowserModule],\n  bootstrap: [AppComponent],\n})\nexport class AppModule {};'
      );
      fs.writeFileSync(
        path.join(projectPath, 'index.html'),
        '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Angular App</title>\n</head>\n<body>\n  <app-root></app-root>\n</body>\n</html>'
      );
      break;

    case 'nest.js':
      fs.writeFileSync(
        path.join(projectPath, 'main.ts'),
        'import { NestFactory } from "@nestjs/core";\nimport { AppModule } from "./app.module";\n\nasync function bootstrap() {\n  const app = await NestFactory.create(AppModule);\n  await app.listen(3000);\n}\nbootstrap();'
      );
      fs.writeFileSync(
        path.join(projectPath, 'app.module.ts'),
        'import { Module } from "@nestjs/common";\n\n@Module({})\nexport class AppModule {};'
      );
      break;

    case 'django':
      fs.writeFileSync(
        path.join(projectPath, 'views.py'),
        'from django.http import HttpResponse\nfrom django.shortcuts import render\n\ndef index(request):\n    return HttpResponse("Hello, Django!")'
      );
      fs.writeFileSync(
        path.join(projectPath, 'urls.py'),
        'from django.urls import path\nfrom .views import index\n\nurlpatterns = [\n    path("", index, name="index"),\n]'
      );
      break;

    case 'flask':
      fs.writeFileSync(
        path.join(projectPath, 'app.py'),
        'from flask import Flask\napp = Flask(__name__)\n\n@app.route("/")\ndef hello():\n    return "Hello, Flask!"\n\nif __name__ == "__main__":\n    app.run(debug=True)'
      );
      break;

    case 'spring boot':
      fs.writeFileSync(
        path.join(projectPath, 'HelloController.java'),
        'import org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\n@RestController\npublic class HelloController {\n    @GetMapping("/")\n    public String hello() {\n        return "Hello, Spring Boot!";\n    }\n}'
      );
      fs.writeFileSync(
        path.join(projectPath, 'Application.java'),
        'import org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\n\n@SpringBootApplication\npublic class Application {\n    public static void main(String[] args) {\n        SpringApplication.run(Application.class, args);\n    }\n}'
      );
      break;

    default:
      console.log('Tipo de projeto não suportado.');
  }
}


function installDependencies(projectName, dependencies) {
  console.log('Instalando as dependências...');

  // Simulação de animação de download
  const progressBarLength = 30;
  let progressBar = '[';

  const intervalId = setInterval(() => {
    progressBar += '=';
    const remainingSpaces = Math.max(progressBarLength - progressBar.length, 0);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`${progressBar}${' '.repeat(remainingSpaces)}]`);

    if (progressBar.length >= progressBarLength + 1) {
      console.log('\nDependências instaladas com sucesso.');
      clearInterval(intervalId);
    }
  }, 100);

  // Executa o comando npm install em segundo plano
  exec(`cd ${projectName} && npm init -y && npm install ${dependencies.join(' ')}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao instalar as dependências: ${error}`);
    }
  });
}

function displayInfo() {
  console.log('🚀 Bem-vindo à CLI Flash! Versão 1.0.0 🚀');
  console.log('Esta CLI foi criada para simplificar o processo de criação de projetos.');
  console.log('\nℹ️  Como usar:');
  console.log('1. Execute "flash create" para criar um novo projeto.');
  console.log('2. Siga as instruções para personalizar seu projeto.');
  console.log('3. Aproveite o código inicial e as dependências configuradas!\n');
  console.log('📚  Tipos de Projetos Suportados:');
  console.log('- Node.js');
  console.log('- React');
  console.log('- Express');
  console.log('- Next.js');
  console.log('- React Native');
  console.log('- Vue.js');
  console.log('- Svelte');
  console.log('🔗  Recursos Úteis:');
  console.log('- Documentação: https://github.com/DsK-David/flash_cli');
  console.log('- Problemas ou Sugestões: https://github.com/DsK-David/flash_cli/issues\n');
  console.log('Divirta-se criando projetos com Flash! 🎉');
}
