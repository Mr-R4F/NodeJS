//manipula sistemas de arquivos
const FS = require("fs");
const PATH = require("path");

//criar pasta
//passar o path (diretório)
/* FS.mkdir(PATH.join(__dirname, "/teste"), (err) => {
  //recebe callback que executa depois que a pasta foi criada, quando o mkdir for executado a função de erro será tbm
  if (err) {
    throw new Error("Pasta já existe");
  }

  console.log("Pasta criada");
});

//criar arquivo (necessário criar a pasta antes) (em caso de dois o mais recente tem prioridade (sobrescreve))
FS.writeFile(PATH.join(__dirname, "/teste", "teste.php"), 'Hello World ', (err) => {
    if (err) {
        throw new Error("Arquivo já existe");
    }
    
    console.log("Pasta criada");
}); //passa pasta e arquivo e depois o conteúdo do arquivo e callback

//Adicionar conteúdo à um arquivo 

FS.appendFile(PATH.join(__dirname, "/teste", "teste.php"), 'Olá, Mundo!', (err) => {
    if (err) {
        throw new Error("Arquivo já existe");
    }
    
    console.log("Pasta criada");
}); //passa pasta e arquivo (para editar) e depois o conteúdo do arquivo e callback

//Leitura de arquivos
FS.readFile(PATH.join(__dirname, "/teste", "teste.php"),'utf8', (err, data) => { //não pega o conteúdo atualizdo
    if (err) {
        throw new Error("Erro na leitura");
    }
    
    console.log(data);
}); //passa pasta e arquivo e depois o sistema de caracteres utilizado do arquivo e callback (com erro e conteúdo do arquivo lido) 
*/

//como a função writeFile é assincrona caso adicione mais conteúdo é necessário adicionar as funções dentro da callback (pois writeFile é assíncrona)
// ou seja o conteúdo será adcionado depois dele ter colocado algum conteúdo. (para pegar o conteúdo atualizado tbm a mesma coisa)

FS.writeFile(PATH.join(__dirname, "/teste", "teste.php"), 'Hello World ', (err) => { //assíncrono (não ocorre de uma vez)
    if (err) {
        throw new Error("Arquivo já existe");
    }
    
    console.log("Arquivo criado");

    FS.appendFile(PATH.join(__dirname, "/teste", "teste.php"), 'Olá, Mundo!', (err) => {
        if (err) {
            throw new Error("Arquivo já existe");
        }
        
        console.log("Arquivo criado");
    }); //passa pasta e arquivo (para editar) e depois o conteúdo do arquivo e callback

    //Leitura de arquivos
    FS.readFile(PATH.join(__dirname, "/teste", "teste.php"),'utf8', (err, data) => { //quando isso é lido os de cima não foram concluídos ainda
        if (err) {
            throw new Error("Erro na leitura");
        }
        
        console.log(data);
    });
});
//quando algum código demora o node vai para outro código e não espera