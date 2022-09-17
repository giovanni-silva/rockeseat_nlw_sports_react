# rockeseat_nlw_sports_react: #REACT + REACT NATIVE + SQLITE

Backend

Stage 1/6 | Aula Prática - Base Building

Criei a pasta server como back-end ;

Dentro da pasta server, criou o arquivo package.json: vai ser aonde vão ficar a referência para as dependências que a gente instala na nosso aplicação.

server.mjs : 'mjs' em vez '.js' por causa para mudar a importação do express , (moduleJavascript) mas como vou ter que instalar o typescript terei que mudar o tipo do arquivo para 'ts'.

npm i typescript para instalar para instalar o typescript

Como o node só reconhece apenas JS, tive que mudar a depencia do typescript para devtypescript ou seja , quando estiver em produção será reconhecido como Javascript mas na hora do desenvolvimento será feito em typescript

Em package.json tive que trocar o script e dentro dele mudei o nome 'test' para 'build' = tsc (mesma coisa que typescript)

Ao rodar npm run build consigo converter e criar um arquivo ts para js.

Arquivo tsconfig.json: especifica os arquivos raiz e as configurações de compilação necessárias para o projeto (arquivo de configuração) - comando: npx tsc --init .

Para criar projetos tanto react, tanto vue.js entre outros , usamos a ferramenta ViteJS , ou seja, é necessário ter uma ferramenta de compilação que convertar o código para o formato que o browser entenda
