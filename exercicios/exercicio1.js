/* Imagine que você está criando uma página de boas-vindas para um site de cursos online. Ao acessar a plataforma, o sistema precisa exibir uma mensagem de saudação para cada usuário. Às vezes, porém, o nome da pessoa pode estar ausente — e, nesse caso, uma saudação genérica deve ser exibida.

Sua tarefa é criar uma função chamada saudacao que receba um nome como parâmetro, mas que funcione mesmo quando nenhum nome for informado, exibindo uma saudação genérica. Use o parâmetro pré-definido para lidar com isso. */

const saudacao = (nome = '') =>{ 
    if (nome) {
        return `Olá, Seja Bem-vindo ${nome}!`;
    }else{
        return 'Olá Seja Bem-vindo!'
    }
};

console.log(saudacao());

