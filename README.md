# nodeJs-Coding


### Iniciando o projeto

### o que é o NodeJS?

<img src="https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_1280.png" width="300px" alt="logo nodejs"/>

O **NodeJs** é um ambiente de execução do **JavaScript** em _server-side_
</br></br>
Ok. Mas o que isso quer dizer? 🤔

Ele nos dá a possibilidade de rodar localmente o JavaScript fora do navegador por exemplo. 😎
</br></br>

Vamos falar um pouco sobre:
</br></br>

### Como surgiu? 📒

Todo navegador possui um **Interpretador de JavaScript** rodando ali por trás dos panos para fazer as coisas funcionarem direitinho:</br></br>
* Safari - Nitro
* Mozilla - SpiderMonkey
* Edge - Chakra
* Chrome - V8
</br></br>

Em 2009 um cara chamado Ryan Dahl criou o NodeJs a partir do V8 do Chrome.

### E o que tem isso? 🙄

Com a criação do NodeJS, temos a possibilidade de rodar o JavaScript sem precisar de um navegador, diminuindo o processamento e trabalhando com interpretação __just-in-time__, em tempo real meus amigos.

### OMG como assim?

O nodejs, diferente de outros interpretadores, trabalha com __single-thread__, ou seja, imagina que cada requisição é um pedido de delivery... vai chegar uma hora que o quadro de pedidos vai estar cheio e se tiver um pedido que ainda não foi produzido e entregue, ele vai bloquear a passagem dos outros pedidos, gerando insatisfação dos clientes.
Coitado do entregador.

<img width='50px' src='https://i.pinimg.com/280x280_RS/59/36/19/593619745992a4f2c3ad22601542f138.jpg' />

O nodejs trabalha com requisições **assíncronas**, ou seja, não precisa esperar todos os pedidos, vai entregando o que for ficando pronto. Assim todo mundo sai feliz.😊
Assim, o processamento é não-bloqueante(_non-blocking_), pois funciona mesmo sem uma requisição estar pronta, do contrário seria bloqueante(_blocking_) e tudo ficaria parado.</br></br>

Consequentemente, o entregador não precisa mais ficar preocupado e entrega o pedido assim que o mesmo for finalizado, depois volta no quadro de pedidos, pega os que faltaram e entrega logo após. Chamamos isso de **_Event-Loop_**.</br></br>
Isso tudo em tempo real 😮😮😮.

### NPM (_Node package manager_)

Com a criação do NodeJS também surgiu o NPM. que é uma ferramenta de gerenciamento de pacotes do Node, serve pra gente dar um upgrade nos nossos projetos usando frameworks e bibliotecas.</br></br>
Imagine um repositório gigantesco com inúmeras ferramentas de desenvolvimento... esse é o NPM do NodeJS.

### O que vamos fazer:

<p>Criar um servidor, subir e devolver uma mensagem em JSON com informações de uso da memória RAM."</p></br></br>
* Exemplo do servidor local:

```
http://localhost:3000
```
<img src='https://github.com/DianaMartine/nodeJs-liveCoding-DIO/blob/main/Nodejs/assets/server.png?raw=true' alt='server' />

* Exemplo:

index   | valor
--------- | ------
OS | sistema operacional
Arch | arquitetura
TotalRAM | memória total
FreeRAM | memória livre
Usage | porcentagem de uso

<img src='https://github.com/DianaMartine/nodeJs-liveCoding-DIO/blob/main/Nodejs/assets/pcRamUsage.png?raw=true' alt='pcRamUsage' />



