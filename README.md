# `DevPets`

<img src="./src/assets/pets.png" width="300px">

#### Site com informações atualizadas com valores de referência de veículos utilizando a API [API Ninjas](https://api-ninjas.com/).

# `Link`

https://marleo-devpets.vercel.app/

###### O site tem suporte "adicionar a tela inicial" ou "Instalar PWA" (Progressive Web App).

# `Descrição`

###### O site criado é uma aplicação web de informações úteis sobre raças caninas e felinas.

###### O site oferece uma experiência intuitiva, permitindo aos usuários obter informações de:

#### Ações e Criptomoedas:

- Altura;
- Peso;
- Expectativa de vida;
- Latidos;
- Miados;
- Energia;
- Bom com crianças:
- Bom com outros animais;
- Bom com estranhos;
- Higiene;
- Treinabilidade;
- Perca de pelo;
Entre outros.

#### Informações úteis de:

- Como funciona a idade dos cães e gatos conforme o seu porte.

O repositório do projeto pode ser encontrado [aqui](https://github.com/marleopr/devpets)

| Tela de inicial                                    | Página de erro                                       |
| -------------------------------------------------- | ---------------------------------------------------- |
| <img src="src\assets\ReadmeImages\HomePage.jpg" >  | <img src="src\assets\ReadmeImages\ErrorPage.jpg" >   |
| Pesquisar raças de cachorro                        | Raça pesquisada                                      |
| <img src="src\assets\ReadmeImages\SearchDog.jpg" > | <img src="src\assets\ReadmeImages\SearchedDog.jpg" > |
| Pesquisar raças de gato                            | Raça pesquisada                                      |
| <img src="src\assets\ReadmeImages\SearchCat.jpg" > | <img src="src\assets\ReadmeImages\SearchedCat.jpg" > |
| Menu                                               | Idade animal                                         |
| <img src="src\assets\ReadmeImages\Menu.jpg" >      | <img src="src\assets\ReadmeImages\IdadeAnimal.jpg" > |

# `Passo a Passo para Instalação do Projeto React:`

##### Pré-requisitos:

Certifique-se de ter o Node.js e o npm (ou yarn) instalados em sua máquina. Você pode baixá-los em https://nodejs.org/.
Git instalado em sua máquina. Você pode baixá-lo em https://git-scm.com/.

##### Clone o Repositório:

Abra o terminal (ou Git Bash) e navegue até o diretório onde deseja clonar o projeto.
Execute o comando: git clone https://github.com/marleopr/devpets.git

##### Acesse o Diretório do Projeto:

Navegue até o diretório do projeto: cd nome-do-repositorio

##### Instale as Dependências:

Execute o comando: npm install
Este comando irá instalar todas as dependências listadas no arquivo package.json.
Configure as Variáveis de Ambiente (se necessário):

##### Execute o Projeto:

Após instalar as dependências, inicie o servidor de desenvolvimento com o comando: npm start
O projeto será executado e estará disponível em http://localhost:3000 no seu navegador.

##### Personalize o Projeto:

Agora você pode personalizar o projeto de acordo com suas necessidades, fazendo alterações nos arquivos do diretório "src".
Construa o Projeto (Opcional):

Se desejar criar uma versão otimizada do projeto para implantação, execute o comando: npm run build
Isso criará uma pasta "build" com os arquivos otimizados para produção.
Implante o Projeto (Opcional):

Você pode implantar o projeto em um servidor web ou em plataformas de hospedagem, como GitHub Pages, Vercel, Netlify, entre outros.

# `Organização do código`

##### Eu optei por organizar o projeto dividindo em pastas:

- Assets: Contém todas as imagens necessárias ao site.
- Components: Contém os loaders, botões, Cards e componentes utilizados:
- - ButtonAll.js: Botão Chakra UI estilizado.
- - DownloadButton.js: Componente do botão estilizado para instalação via PWA.
- - EasterEgg.js: Função para apresentar uma mensagem secreta no console de desenvolvimento.
- - StarRatingDogs/Cats.js: Card que renderiza dados requisitados da API.
- - Header.js: Componente de cabeçalho.
- - Footer.js: Componente de rodapé.
- - RadioButtonPets.js: Componente do botão menu da tela inicial.
- - Styled.css: Arquivo contendo todas as estilizações CSS presentes no site.
- Constants:
- - BASE_URL.js: Contém a base da API utilizada.
- - colors.js: Arquivo para padronização de cores do site.
- - theme.css: Arquivo CSS para padronização de cores do site.
- - theme.js: Arquivo para padronização de cores do Chakra com extendTheme.
- Pages:
- - ErrorPage.js: Página de erro.
- - HomePage.js: Componente da tela inicial.
- - Info.js: Componente de informações úteis.
- Routes:
- - Coordinator / Router: Componentes do React Router Dom.

# `Tecnologias utilizadas`

<div>
<img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
<img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white">
<img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white">
</div>

# `Autor`

#### [Márleo Piber da Rosa](https://github.com/marleopr)

<img src="src\assets\marleopr.jpg">
