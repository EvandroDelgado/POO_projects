function calc(option) {

    //variaveis globais
    result = ""

    switch (option) {
        case "A"://indica o numero de caracteres de uma string
            let str = prompt("Escreva uma palavra", "")
            result = str.length
            break;

        case "B"://CONCATENA o nome e o apelido dados pelo utilizador
            let nome = prompt("Escreva o teu nome", "")
            let sobrenome = prompt("Escreva o teu apelido", "")
            result = sobrenome + ", " + nome
            break;
        case "C"://conta o numero de vogais de uma palavra dada pelo utilizador
            let contarVogais = 0
            let pal = prompt("Escreva uma palavra", "")
            for (let i = 0; i < pal.length; i++) {
                if (pal.charAt(i) == "a" || pal.charAt(i) == "e" || pal.charAt(i) == "i" || pal.charAt(i) == "o" || pal.charAt(i) == "u"
                    || pal.charAt(i) == "A" || pal.charAt(i) == "E" || pal.charAt(i) == "I" || pal.charAt(i) == "O" || pal.charAt(i) == "U") {
                    contarVogais++;
                }
            }
            result = contarVogais
            break;
        case "D"://Conta o numero de palavras escritas pelo utilizador
            let palav = prompt("Escreva mais que uma palavra", "")
            let cont = 1
            for (let i = 0; i < palav.length; i++) {
                if (palav.charAt(i) == " ") {
                    cont++
                }
                result = cont
            }

            break;
        case "E"://Imprime uma palavra dada pelo utilizador de forma inversa
            let r = prompt("Escreva uma palavra", "")
            let reverse = ""
            for (let i = r.length - 1; i >= 0; i--) {
                reverse += r.charAt(i)
            }
            result = reverse
            break;

        case "F"://Imprime uma palavra sem a ocorrência de uma letra indicada pelo utilizador 
            let pl = prompt("Escreva uma palavra", "")
            let lt = prompt("Escreva uma letra", "")
            let st = ""

            for (let i = 0; i < pl.length; i++) {

                if (lt != pl[i]) {
                    st = st + pl[i]
                }
            }
            result = st
            break;

        case "G"://Imprime a transformação de segundos dados pelo utilizador em hora,minuto e segundo 
            let s = prompt("Insere um numero em segundos", 0)
            function converter(s) {
                let hora = (Math.round(s / 3600))
                let minut = (Math.round(s % 3600 / 60))
                let secunds = (Math.round((s % 3600) % 60))
                return hora + "h" + " + " + minut + "m" + " + " + secunds + "s"
            }
            result = converter(s)
            break;

        case "H"://função que recebe uma string e um número que representa o nº
            //de posições a avançar para a sua transformação em cifra de césar
            let cod = prompt("escreva uma palavra", "")
            let number = prompt("Insere o numero de casas a avançar", 0)
            let abecedario = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]
            let msgCcript = ""
            for (let i = 0; i < cod.length; i++) {
                for (let j = 0; j < abecedario.length; j++) {
                    if (cod[i] == abecedario[j]) {
                        msgCcript += abecedario[j+parseInt(number)]
                    }
                }

            }
            result = msgCcript
            break;

        default:
            break;
    }
    document.getElementById("txta").innerHTML = result
}