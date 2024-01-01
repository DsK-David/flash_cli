# FLASH ⚡ 

Bem-vindo à Flash, uma CLI (Command Line Interface) poderosa para acelerar o processo de criação de projetos em diferentes tecnologias. 🚀

---

## Como Usar

### Instalação

Certifique-se de ter o Node.js instalado em sua máquina.

1. **Clone este repositório:**

   ```bash
   git clone https://github.com/seu-usuario/flash.git
   ```

2. **Instale globalmente:**

   ```bash
   npm install -g
   ```

### Comandos Disponíveis

- `flash create`: Cria um novo projeto.

### Opções Interativas

Durante o processo de criação de um novo projeto, você será solicitado a fornecer as seguintes informações:

1. **Nome do Projeto:** Digite um nome para o seu projeto.
2. **Tipo de Projeto:** Escolha entre Node.js, React, Express, Next.js, React Native ou Outro.
3. **Dependências:** Informe as dependências do projeto separadas por vírgulas.

---

## Estrutura do Projeto Criado

A estrutura do projeto será gerada automaticamente com base no tipo escolhido. Aqui estão alguns exemplos:

### Node.js

```javascript
// index.js
console.log('Hello, Node.js project!');
```

### React

```javascript
// App.js
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <div>Hello, React!</div>;
};

ReactDOM.render(<App />, document.getElementById('root'));
```

### Express

```javascript
// app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
```

### Next.js

```javascript
// pages/index.js
const App = () => <div>Hello, Next.js!</div>;

export default App;
```

### React Native

```javascript
// App.js
import React from 'react';
import { View, Text } from 'react-native';

const App = () => (
  <View>
    <Text>Hello, React Native!</Text>
  </View>
);

export default App;
```

### Vue.js

```javascript
// App.vue
<template>
  <div>Hello, Vue.js!</div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* Adicione estilos aqui */
</style>
```

### Svelte

```javascript
// App.svelte
<script>
  export let name = "World";
</script>

<main>
  <h1>Hello {name}!</h1>
</main>

<style>
  h1 {
    color: #ff3e00;
    text-align: center;
    margin-top: 40px;
  }
</style>
```

### Angular

```typescript
// app.component.ts
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: '<div>Hello, Angular!</div>',
})
export class AppComponent {}
```

### Nest.js

```typescript
// main.ts
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
```

### Django

```python
# views.py
from django.http import HttpResponse
from django.shortcuts import render

def index(request):
    return HttpResponse("Hello, Django!")
```

### Flask

```python
# app.py
from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello, Flask!"

if __name__ == "__main__":
    app.run(debug=True)
```

### Spring Boot

```java
// HelloController.java
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    @GetMapping("/")
    public String hello() {
        return "Hello, Spring Boot!";
    }
}
```

```java
// Application.java
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
```

---

## Instalação de Dependências

Depois de criar o projeto, as dependências serão instaladas automaticamente. Verifique o arquivo `package.json` para ver as dependências listadas.

---

Espero que a Flash torne a criação de seus projetos mais eficiente! Se precisar de ajuda, consulte a documentação ou abra uma [issue](https://github.com/seu-usuario/flash/issues

). Contribuições são bem-vindas. 💡

- [Documentação da CLI Flash](https://github.com/DsK-David/flash_cli/blob/main/DOCS.md)

Criado com :heart: por David Silva(DsK-David)
