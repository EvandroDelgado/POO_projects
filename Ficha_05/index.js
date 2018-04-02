//Variável global reponsável por apresentar valor na TextArea
let show = function (value) {
    let myTextArea = document.querySelector("#txta")
    myTextArea.innerHTML += value + "\n"
}

/*
    Exercicio 1
*/

function retangulo() {
    //Classe que representa um retangulo
    class Retangulo {
        constructor(largura = 1, altura = 1) {
            this.largura = largura
            this.altura = altura
            this._cor = "Branco"
        }

        get largura() {
            return this._largura
        }

        set largura(newValue) {
            this._largura = newValue
        }

        get altura() {
            return this._altura
        }

        set altura(newValue) {
            this._altura = newValue
        }

        get cor() {
            return this._cor
        }

        getArea() {
            return this.largura * this.altura
        }

        getPerimetro() {
            return 2 * this.largura + 2 * this.altura
        }
    }

    let myRet = new Retangulo(2, 3)
    console.log(myRet.largura)
    myRet.largura = 5
    console.log(myRet.largura)
    console.log(myRet.getArea())
    console.log(myRet.getPerimetro())
    let myRet2 = new Retangulo()
    console.log(myRet2.getArea())
    show("Area: " + myRet.getArea() + "\n" + "Perimetro: " + myRet.getPerimetro())
}

/*
    Exercicio 2
*/
// 
function circulo() {
    //Classe que representa um retangulo
    class Circulo {
        constructor(r) {
            this.raio = r
        }

        get raio() {
            return this._raio
        }

        set raio(newValue) {
            this._raio = newValue
        }

        getArea() {
            return Math.PI * this.raio * this.raio
        }

        getCircunferencia() {
            return 2 * Math.PI * this.raio
        }

        aumentarRaio(valor) {
            let inc = this.raio * (valor * 10)
            return inc
        }
    }

    let myCirc = new Circulo(3)
    console.log(myCirc.raio)
    //myCirc.raio = 5
    console.log(myCirc.raio)
    console.log(myCirc.getArea())
    console.log(myCirc.getCircunferencia())

    show("Area: " + myCirc.getArea() + "\n" + "Circunferencia: " + myCirc.getCircunferencia()
        + "\n" + "Circunferencia: " + myCirc.aumentarRaio(5))
}

/*
    Exercicio 2
*/
function ventoinha() {

    const Velocidade = {
        baixa: 1,
        media: 2,
        alta: 3
    }

    class Ventoinha {
        constructor(velocidade, ligado) {
            this.velocidade = Velocidade.baixa
            this.ligado = false
        }

        get velocidade() {
            return this._velocidade
        }

        set velocidade(novaVeloc) {
            this._velocidade = novaVeloc
        }

        get ligado() {
            return this._ligado
        }

        set ligado(novoligado) {
            this._ligado = novoligado
        }

        toString() {
            if (this.ligado)
                return `A ventoinha está ligada com a velocidade ${this.velocidade}`
            else
                return "A ventoinha está desligada"
        }
    }

    let ventoinha1 = new Ventoinha()
    let ventoinha2 = new Ventoinha()

    ventoinha2.ligado = true
    ventoinha2.velocidade = Velocidade.alta
    show(ventoinha1.toString() + "\n" + ventoinha2.toString())

}

/*
    Exercicio 4
*/
function dado() {

    class Dado {
        constructor() {
            this._faces = 6
            this.valorFace = 1
        }

        get valorFace() {
            return this._valorFace
        }
        set valorFace(novoValor) {
            if (novoValor > 0 && novoValor < this._faces) {
                this._valorFace = novoValor
            }
            else {
                show("Valor inválido para a face do dado")
            }
        }

        rolar() {
            this.valorFace = Math.round((Math.random() * this._faces - 1) + 1)
        }

        getQuantidadeFaces() {
            this._faces
        }
    }

    let newDado = new Dado()

    newDado.rolar()

    show(newDado._valorFace)
}

/*
    Exercicio 5
*/
function paises() {
    //variaveis globais
    paises = []
    //Classe para representar um pais
    class Pais {
        constructor(nome, area, populacao) {
            this.nome = nome
            this.area = area
            this.populacao = populacao
        }
        //propriedade nome
        get nome() {
            return this._nome
        }
        set nome(novoNome) {
            this._nome = novoNome
        }

        get area() {
            return this._area
        }
        set area(novoArea) {
            this._area = novoArea
        }

        get populacao() {
            return this._populacao
        }
        set populacao(novoPopulacao) {
            this._populacao = novoPopulacao
        }

        static getPaisMaiorArea() {
            let maior = paises[0].area
            let nome = ""
            for (let i = 0; i < paises.length; i++) {
                if (paises[i].area >= maior) {
                    maior = paises[i].area
                    nome = paises[i].nome
                }
            }
            return nome
        }

        static getPaisMaiorPopulacao() {
            let maior = paises[0].populacao
            let nome = ""
            for (let i = 0; i < paises.length; i++) {
                if (paises[i].populacao >= maior) {
                    maior = paises[i].populacao
                    nome = paises[i].nome
                }
            }
            return nome
        }

        static getPaisMaiorDensidadePopulacional() {
            let maior = 0
            let nome = ""
            for (let i = 0; i < paises.length; i++) {
                let densidade = 0
                densidade = paises[i].populacao / paises[i].area
                if (densidade >= maior) {
                    maior = paises[i].nome

                }
            }
            return maior
        }

        static comparar(a, b) {
            if (a.nome > b.nome) {
                return 1
            } if (a.nome < b.nome) {
                return -1
            } else return 0
        }
    }

    let pais1 = new Pais("Angola", 100000, 300000)
    let pais2 = new Pais("Brazil", 80000, 200000)
    let pais3 = new Pais("Argentina", 60000, 100000)
    let pais4 = new Pais("Cabo Verde", 20000, 50000)
    let pais5 = new Pais("França", 40000, 800000)

    paises.push(pais1, pais2, pais3, pais4, pais5)
    show("Maior Area: " + Pais.getPaisMaiorArea() + "\n" + "Maior População: " + Pais.getPaisMaiorPopulacao() +
        "\n" + "Maior Densidade: " + Pais.getPaisMaiorDensidadePopulacional())

    //Ordenação original
    for (let i = 0; i < paises.length; i++) {
        console.log(paises.nome)
    }
    //Sort
    paises.sort(Pais.comparar)
    console.log(paises[i].nome)
}