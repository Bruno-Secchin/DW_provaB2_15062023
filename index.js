// PROVA B2 Bruno Secchin Telles CC1MD

// QUESTÃO 1:

function verificarPrimo(num) {
    // verifica se o número é menor que 2, pois não são primos
    if (num < 2) {
        return false;
    }

    // verifica se o número é divisível por algum valor que não seja ele mesmo e 1:
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    // se o número não foi divisível por nenhum valor ele é primo
    return true;
}
// lista todos números entre 1 e 1000 que forem primos:
function listarPrimos() {
    for (num = 1; num < 1000; num++) {
        if (verificarPrimo(num)) {
            console.log(num);
        }
    }
}

// QUESTÃO 2:

// senha exemplo:
const senha = "Senha123"
function verificarSenha(senha) {
    // interrompe e avisa caso a senha contenha menos de 8 caracteres:
    if (senha.length < 8) {
        console.log("Senha inválida, a senha deve conter no mínimo 8 caracteres.");
        return false;
    }
    // critérios da senha:
    var mai = false;    // letra maiúscula 
    var min = false;    // letra minúscula
    var num = false;    // número
    // loop que percorre os caracteres da senha:
    for (var i = 0; i < senha.length; i++) {
        var caractere = senha[i];
        // condições que checam os critérios:
        if (caractere >= 'A' && caractere <= 'Z') {
            mai = true;
        }
        else if (caractere >= 'a' && caractere <= 'z') {
            min = true;
        }
        else if (!isNaN(caractere)) {
            num = true;
        }
    }

    // exibição de avisos:
    if (!mai) {
        console.log("Senha inválida, a senha deve conter ao menos um caractere maiúsculo.");
    }
    else if (!min) {
        console.log("Senha inválida, a senha deve conter ao menos um caractere minúsculo.");
    }
    else if (!num) {
        console.log("Senha inválida, a senha deve conter ao menos um número.");
    }
    else {
        console.log("Senha válida!");
    }

    return mai && min && num;
}

// QUESTÃO 3:

function fatorial(num) {
    resultado = num; // inicio o resultado sendo = ao número inserido
    // se o número inserido foi 0 ou 1 a fatorial é = 1
    if (num === 0 || num === 1) {
        return 1;
    }
    // multiplica o número inserido por todos seus inteiros anteriores que são maiores que 0:
    for (i = num - 1; i > 0; i--) {
        resultado = resultado * i;
    }
    return resultado;
}
// lista os fatoriais de 1 a 10:
function listarFatorial() {
    for (num = 1; num <= 10; num++) {
        var fat = fatorial(num);
        console.log("Fatorial de " + num + " é " + fat);
    }
}

// QUESTÃO 4:

function quadradoPerfeito(num) {
    // calcula a raiz do número:
    var raiz = Math.sqrt(num);
    // verifica se a raiz é um número inteiro ou não:
    if (Number.isInteger(raiz)) {
        console.log(num + " é um quadrado perfeito.");
        return true;
    }
    // se a raiz não for um número inteiro então o número em questão não é um quadrado perfeito
    console.log(num + " não é um quadrado perfeito.");
    return false;
}