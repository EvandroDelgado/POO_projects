function calc(option) {

    //variaveis globais
    let num = [7, 3, 6, 12, 5]
    let cores = ["Vermelho", "Verde", "Branco", "Preto"]
    let result = ""
    let valor = 0
    let array1 = [1, 0, 2, 3, 4];
    let array2 = [3, 5, 6, 7, 8, 13];

    switch (option) {
        case "A"://calcula a media dos elementos do Array
            let soma = 0
            for (let i = 0; i < num.length; i++) {
                soma = soma + num[i]
                result = soma / num.length
            }
            break;

        case "B"://Devolve o menor numero do Array
            let menor = num[0]
            for (let i = 0; i < num.length; i++) {
                if (menor >= num[i]) {
                    menor = num[i]
                }
            }
            result = menor
            break;
        case "C"://apresentar os elementos do array de numeros sem o elemento
            //indicado pelo utilizador
            valor = prompt("Indique um numero que esteja no array", 0)
            for (let i = 0; i < num.length; i++) {
                if (valor == num[i]) {
                    num.splice(i, 1)
                }
            }
            result = num
            break;
        case "D"://concatenar os elementos do array de strings
            let string = ""
            for (let i = 0; i < cores.length; i++) {
                string = string + cores[i];
            }
            result = string
            break;
        case "E"://Ordenar alfabeticamente o array de strings
            cores.sort()
            result = cores
            break;

        case "F"://ordenar decrescentemente o array de strings
            cores.sort()
            let element = []
            for (let i = cores.length; i >= 0; i--) {
                element.push(cores[i])
            }
            result = element
            break;

        case "G"://Devolver a maior string(com mais caracter) do array
            let maior = ""
            for (let i = 0; i < cores.length; i++) {
                if (cores[0].length <= cores[i].length) {
                    maior = cores[i]
                }
                result = maior
            }

            break;

        case "H"://Devolver o numero de ocorrências de um numero dado pelo utilizador
            let cont = 0;
            let s = prompt("Insira uma string", "")
            for (let i = 0; i < cores.length; i++) {
                if (s == cores[i]) {
                    cont++
                }
            }
            result = cont
            break;

        case "I"://Comparar duas strings inseridas pelo utilizador
            let pass = prompt("Inserir password", "")
            let confirm = prompt("Confirmar password", "")
            let autentic = [];

            function comparar(pass, confirm) {
                autentic.push(pass, confirm)
                if (autentic[0] == autentic[1]) {
                    return result = 1
                } else return result = 0
            }
            comparar(pass, confirm)
            break;

        case "J": //devolver a posição de elementos no array dada pelo utilizador
            let val = prompt("Inserir valor", 0)
            for (let i = 0; i < num.length; i++) {
                result = num[val]
            }
            break;

        case "K"://devolver array com numeros positivos ate o valor dado pelo utilizador
            let valor = prompt("Inserir valor", 0)
            if (valor < 0) {
                result = "valor invalido"
            } else {
                for (let i = 0; i < valor; i++) {
                    if (valor < num[i]) {
                        num.splice(i, 1)
                        result = num
                    }
                }
            }
            break;

        case "L"://Devolver numeros pares do array original
            array = []
            for (let i = 0; i < num.length; i++) {
                if (num[i]%2==0) {
                    array.push(num[i])
                }
            }
            result = array
            break;

        case "M"://incrementar um valor a todos os elementos do array
            let newNum = []
            for (let i = 0; i < num.length; i++) {
                newNum.push(num[i] + 1)
            }
            result = newNum
            break;

        case "N"://somar dois arrays
            let output = []
            for (let i = 0; i < array1.length; i++) {
                output.push(array2[i]+array1[i])
            }
            result = output.concat(array2[array1.length])
            break;
        default:
            break;
    }
    document.getElementById("txta").innerHTML = result
}