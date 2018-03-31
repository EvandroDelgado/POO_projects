//Variável global reponsável por apresentar valor na TextArea
let show = function (value) {
    let myTextArea = document.querySelector("#txta")
    myTextArea.innerHTML += value + "\n"
}

//variaveis Globais


let student = {
    name: "David Silva",
    course: "POO",
    grade: 12
}

let grades = [
    {
        name: 'Rui',
        grade: 8
    },
    {
        name: 'Ana',
        grade: 12
    },
    {
        name: 'Carla',
        grade: 14
    }]

/*
    Exercicios alinha a
*/
function listar() {
    let lista = ""
    //Listar nome das propriedades do objeto student
    for (let key in student) {
        lista += key + ","
    }
    show(lista)
}

function remove() {
    //Remover a propriedade grade do objeto student e apresentar resultado antes e depois
    listar()
    delete student.grade
    listar()
}

function tamanho() {
    //calcular o tamanho do objeto
    let cont = 0;
    for (x in student) {
        cont++
    }
    show(cont)
}
/*
    Exercicios alinha b
*/
function inserir() {
    //criar novo objetos e inserir no array
    let nome = prompt("Inserir nome:")
    let nota = parseInt(prompt("Inserir nota:"))
    let novo = { name: nome, grade: nota }
    grades.push(novo)
}

function media() {
    //função que calcule a média das notas a POO
    //inserir()
    let soma = 0;
    for (let i = 0; i < grades.length; i++) {
        soma += grades[i].grade;
    }
    show("Media POO: " + soma / grades.length)
}

function positivas() {
    //função que liste os nomes dos estudantes com nota positiva
    let aprov = "";
    for (let i = 0; i < grades.length; i++) {
        if (grades[i].grade > 10) {
            aprov += grades[i].name + "\n";
        }
    }
    show(aprov)
}
/*
    Exercicios alinha c
*/
//Criar função construtora e adicionar 2 carros
let carros = []
let cores = ["vermelho", "verde", "Amarelo", "Preto","branco"]

class Cars {
    constructor(marca, matricula, cor, depActual, tip_combust, litro) {
        this.marca = marca
        this.matricula = matricula
        this.cor = cor
        this.depActual = depActual
        this.tip_combust = tip_combust
    }

    get marca() {
        return this._marca
    }

    set marca(novaMarca) {
        this._marca = novaMarca
    }

    get cor() {
        return this._cor
    }

    set cor(novaCor) {
        if (cores.indexOf(novaCor)!=-1) {
            this._cor = novaCor
        } else {
            console.log("Cor inválida")
            this._cor = "Sem cor"
        }
        this._cor = novaCor
    }

    get depActual(){
        return this._depActual
    }

    set depActual(novoDeposito){
        this._depActual = novoDeposito
    }

    //metodo a ser chamado antes da viagem
    consumir(nkms){
        let litrosGasto = nkms *  5/ 100

        if(this.depActual > litrosGasto) {
            //Vamos lá
            let msg = `O seu deposito é ${this.depActual}
        Depois da viagem o seu deposito será ${this.depActual - litrosGasto}`
        console.log(msg)
        }else{
            let msg = `O seu deposito esta vazio`
            console.log(msg)
        }
        this._depActual -= litrosGasto
    }
}

let car1 = new Cars("Ford", "91-GH-15", "verde", 40, "Gasólio")
let car2 = new Cars("Opel", "23-AB-23", "branco", 50, "Gasolina")

carros.push(car1,car2)

function InserirCarro() {
    console.log(carros)
}

function actualizarCor() {
    //Criar função que atualiza cor do carro
    for (let i = 0; i < carros.length; i++) {
        console.log(carros[i].marca + " - " + carros[i].cor)
    }
    car2._cor = "Preto"

    for (let i = 0; i < carros.length; i++) {
        console.log(carros[i].marca + " - " + carros[i].cor)
    }
}

function litrosGasto() {
    car1.consumir(400)
}

/*
    Exercicios alinha d
*/
// obter o volume de um cilindro com 4 casas decimais usando objetos
function volume() {
    class Cylinder {
        constructor(h, r) {
            this.raio = r
            this.altura = h
        }
        Volume() {
            return Math.PI * this.raio * this.raio * this.altura
        }
    }
    let cyl = new Cylinder(7, 4)
    show('volume = ' + cyl.Volume().toFixed(4))
}
/*
    Exercicios alinha e
*/
// calcula a área e o perímetro de um círculo
function propriedadesCirculo() {
    class Circle {
        constructor(r) {
            this.raio = r
        }
        area() {
            return Math.PI * this.raio * this.raio
        }
        perimeter() {
            return 2 * Math.PI * this.raio
        }
    }
    let c = new Circle(3)
    show('Area = ' + c.area().toFixed(2) + "\n" +
        'Perimetro = ' + c.perimeter().toFixed(2))
}
/*
    Exercicios alinha f
*/
//função que processe uma String e que devolva o primeiro e último caracter de uma String
function string() {
    class String {
        constructor(palavra) {
            this.string = palavra
        }
        initEnd() {
            return this.string.charAt(0) + this.string.charAt(this.string.length-1)
        }
    }
    let str = new String("dog")
    show(str.initEnd())
    
}