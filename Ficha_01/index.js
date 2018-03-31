function calc(option) {
    switch (option) {
        case "A":// função que retorna a consola o texto OLÁ MUNDO
            let f = () => { return "OLÁ MUNDO!" }
            console.log(f())
            break;

        case "B":// função que retorna a saudação do nome passado como parametro
            function n(name) {
                return console.log("OLÁ " + name + "!")
            }
            let Nome = n("EVANDRO");
            break;

        case "C"://essa função recebe 2 numeros como parametro e retorna a area de um retangulo
            function calcArea(a, b) {
                let area = a * b
                return console.log(area)
            }
            calcArea(2, 3)
            break;

        case "D"://Essa função calcula os dois numeros atraves do operador escolhido
            //variaveis com valores obetidos pelo utilizador
            let n1 = parseInt(prompt("Primeiro numero:", 0));
            let n2 = parseInt(prompt("Segundo numero:", 0));
            let operador = prompt("Indica Operador:", 0);

            function calcul(n1, n2, operador) {
                let result = 0;
                if (operador == "+") {
                    result = n1 + n2;
                }
                else if (operador == "-") {
                    result = n1 - n2;
                }
                else if (operador == "*") {
                    result = n1 * n2;
                }
                else if (operador == "/") {
                    result = n1 / n2;
                }
                else result = "Operação Inválida";

                return console.log(result)
            }
            calcul(n1, n2, operador)
            break;

        case "E"://essa função retorna o indice de massa corporal e seu estado
            let peso = parseInt(prompt("O teu peso:", 0));
            let altura = parseFloat(prompt("A sua altura:", 0));

            let calcIMC = peso / (altura * altura)
            IMC(calcIMC)
            function IMC(calcIMC) {
                if (calcIMC < 18.5) {
                    return console.log("IMC - " + calcIMC.toFixed(2) + " Abaixo do Peso")
                }
                else if (calcIMC >= 18.5 && calcIMC < 24.9) {
                    return console.log("IMC - " + calcIMC.toFixed(2) + " Peso Normal")
                }
                else if (calcIMC >= 24.9 && calcIMC <= 29.9) {
                    return console.log("IMC - " + calcIMC.toFixed(2) + " Sobrepeso")
                }
                else if (calcIMC >= 30 && calcIMC <= 34.9) {
                    return console.log("IMC - " + calcIMC.toFixed(2) + " Obesidade grau I")
                }
                else if (calcIMC >= 35 && calcIMC <= 39.9) {
                    return console.log("IMC - " + calcIMC.toFixed(2) + " Obesidade grau II")
                }
                else return console.log("IMC - " + calcIMC.toFixed(2) + " Obesidade grau III ou mórbida")
            }
            break;

        case "F"://recebe uma letra do utilizador e retorna  seu eco
            let S = prompt("Digite uma letra:", "");
            let N = parseFloat(prompt("Indique um numero:", 0));

            function eco(S, N) {
                let result = S
                return console.log(result.repeat(N))
            }
            eco(S, N)
            break;

        case "G"://Retorna o intervalo de dois numeros indicados pelo utilizador
            let a = parseInt(prompt("Primeiro numero:", 0));
            let b = parseInt(prompt("Segundo Numero:", 0));

            function intervalo() {
                for (var i = a; i < b; i++) {
                    console.log(i)
                }
            }
            intervalo()
            break;

        case "H"://retorna a tabuada de um numero dado pelo utilizador
            let num = prompt("Escolha o numero:", 0)

            function tab() {
                for (let i = 1; i <= 10; i++) {
                    let result = num * i
                    console.log(num + " x " + i + " = " + result)
                }
            }
            tab()
            break;

        case "I"://calcule a soma dos múltiplos de 3 existentes num intervalo [a,b], em que a e b são definidos pelo utilizador
            let num1 = parseInt(prompt("Primeiro numero:", 0));
            let num2 = parseInt(prompt("Segundo Numero:", 0));

            function interval() {
                let soma = 0
                for (var i = num1; i < num2; i++) {
                    if (i % 3 == 0) {
                        soma = soma + i
                        console.log(soma)
                    }
                }
            }
            interval()
            break;

        case "J"://função para determinar se um numero dado pelo utlizador é primo
            function primo() {
                let valor = prompt("Indique um valor, para verificar se é primo?", 0);
                let NumeroPrimo = true;

                for (let i = 2; i < valor; i++) {
                    if (valor / i == Math.round(valor / i) && i != 1 && i != valor) {
                        NumeroPrimo = false;
                        break;
                    };
                };
                if (NumeroPrimo && valor > 1)
                    console.log("Sim");
                else
                    console.log("Não");
            }
            primo()
            break;

        case "K"://devolve o fatorial de um numero dado pelo utilizador
            function fatorial() {
                let valor = prompt("Indique um valor para saber o seu fatorial", 0);
                let result = 1
                for (let i = valor; i > 0; i--) {
                    result = result * i
                }
                console.log(result)
            }
            fatorial()
            break;

        case "L"://devolve se o numero dado pelo utilizador é ou não perfeito
            function perfeito() {
                let valor = prompt("Indique um valor para saber se é perfeito", 0);
                let result = 0
                for (let i = 0; i < valor; i++) {
                    if (valor % i == 0) {
                        result = result + i
                    }
                }
                if (result == valor) {
                    console.log("Sim");
                }
                else console.log("Não");
            }
            perfeito()
            break;

        case "M"://devolve se o ano ddo pelo utilizador é ou não bissexto
            function bissexto() {
                let ano = prompt("Indique um ano para verificar se é bissexto", 0)

                if (ano % 400 == 0 || ano % 100 != 0 && ano % 4 == 0) {
                    console.log("Sim")
                }
                else console.log("Não")
            }
            bissexto()
            break;

        case "N"://devolve se um numero de 100 a 999 dado pelo utilizador é ou não uma capicua
            function capicua() {
                let num = prompt("Indique um numero de 100 a 999", 0)

                if (num <= 100 && num > 999) {
                    alert("Numero fora do intervalo")
                } else {
                    if (num.charAt(0) == num.charAt(2)) {
                        console.log("Sim")
                    } else {
                        console.log("Não")
                    }
                }
            }
            capicua()
            break;

        case "O"://jogo em que o utilizador tem que tentar adivinhar um numero de 0 a 100 
            //tem 5 tentativas
            let cont = 0
            let numAl = 0
            function jogoAdivinhar() {
                gerarNum()
                while (cont < 5) {
                    let valor = prompt("Tenta adivinhar o numero", 0)
                    if (valor < 1 && valor > 100) {
                        alert("Numero Invalido")
                    } else {
                        if (valor < numAl) {
                            console.log("PARA CIMA")
                        } else {
                            console.log("PARA BAIXO")
                        }
                    }
                    if (numAl == valor) {
                        gerarNum()
                        console.log("ADIVINHOU, PARABENS")
                    }
                    cont++
                    console.log(numAl)
                }
                if (cont == 5) {
                    gerarNum()
                    console.log("Paciência. Joga outra vez!")
                }
            }
            function gerarNum() {
                numAl = parseInt(1 + Math.random() * 100)
                cont = 0
            }
            
            jogoAdivinhar()
            break;

        default:
            break;
    }
}