const HTTP = require('http');

//cria servidor
HTTP.createServer((req, res) => {//objetos da requisição (pede uma solicitação, dados do cliente/ front) e response (retorna uma resposta com base na solicitação)
    if(req.url === '/home') { //url contém infos da req (baseando nisso faz certa ação)
        res.writeHead(200, {'Content-Type' : 'text/html'});   //diz o conteúdo que está usando / status e objeto (header da response - tipo do conteúdo (a response é de tal tipo);
        res.end('<h1>HELLO WORLD</h1>'); //mostra a info na tela
    }

    if(req.url === '/users') { //url contém infos da req (baseando nisso faz certa ação)
        const USERS = [
            {
                nome: 'teste',
                email: 'teste@teste.com'
            },
            {
                nome: 'testa',
                email: 'testa@testa.com'
            }
        ];
        res.writeHead(200, {'Content-Type' : 'application/json'});   //diz o conteúdo que está usando / status e objeto (header da response - tipo do conteúdo (a response é de tal tipo);
        res.end(JSON.stringify(USERS)); //mostra a info na tela
    }
}).listen(8080); //porta para conexão (coloca on-line)
//cai na página e manda um content type (de acordo que foi definido)