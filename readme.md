# Menu



<p align="center">
  <img  src="https://cdn-icons-png.flaticon.com/512/4813/4813075.png">
</p>
<h1 align="center">  
    Menu
</h1>
<div align="center">

  <h3>Ferramentas</h3>

  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" height="30px"/>

</div>

<br/>

# Descrição


Menu é um site de busca e cadastro de receitas

</br>



</br>

## API 

### Receitas

### Cadastrar nova receita

```http
POST /revenue
```

#### Request:

####

| Body   | Type       | Description             |
| :----- | :--------- | :---------------------- |
| `title`           | `string` | **Required**     |
| `ingredients`         | `string` | **Required**          |
| `preparation` | `string` | **Required** |
| `imageUrl` | `string` | **Required** |

#

### Buscar receitas

```http
GET /revenues
```

#### Response:

```json
  [
  {
    "id": 1,
    "title": "Panqueca de Banana",
    "ingredients": "Ovo, banana, aveia, canela",
    "preparation": "Bata tudo e coloque na frigideira por uns 20min",
    "imageUrl": "https://www.anamariabrogui.com.br/assets/uploads/receitas/fotos/usuario-2516-e9ab2ae33ac87ed35dc6d4d37320e7e6.jpg"
  },
  {
    "id": 2,
    "title": "Bolo de caneca",
    "ingredients": "Ovo, óleo, fermento, chocolate em pó, farinha de trigo",
    "preparation": "Bata tudo e coloque no microondas por 15 min",
    "imageUrl": "https://receitinhas.com.br/wp-content/uploads/2022/07/Bolo-de-caneca-sem-acucar-.jpg"
  }
]
```

#

## Environment Variables

Para rodar esse projeto, você vai precisar adicionar um arquivo .env com essas variáveis

`DATABASE_URL = postgres://UserName:Password@Hostname:5432/DatabaseName`

`PORT = number #recommended:5000`

</br>

## Run Locally

Clone o projeto

```bash
  git clone https://github.com/Leticia-Pinheiro/Menu_BackEnd
```

Vá para o diretório do projeto

```bash
  cd RepoProvas_BackEnd/
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm start
```

</br>

## Autora

Letícia Gomez Pinheiro 
<p>Linkedin: https://www.linkedin.com/in/leticia-pinheiro-33354a1b6/</p>
<p>GitHub: https://github.com/Leticia-Pinheiro</p>
<br/>

#