const PATH = require("path");

//basename (nome do arquivo atual) pega nome base
console.log(PATH.basename(__filename)); //usa váriaveis globais

//basename (nome do diretório atual em que o arquivo está)
console.log(PATH.dirname(__filename));

//Pega a extensão do arquivo
console.log(PATH.extname(__filename));

//trabalha bem com diretórios

//criar objetos path inclusive (info do arquivo atual)
console.log(PATH.parse(__filename));

//junta caminhos de arquivos
console.log(PATH.join(__dirname, 'teste', 'index.html')); //pega nome do diretório atual (passa mais diretórios por ,)