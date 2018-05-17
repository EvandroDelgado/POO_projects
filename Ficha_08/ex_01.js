let personalidades = []

class Personalidades {
    constructor(nome, ano, nacio, obra, foto) {
        this.nome = nome
        this.ano = ano
        this.nacio = nacio
        this.obra = obra
        this.foto = foto
    }

    get nome() {
        return this._nome
    }
    set nome(novoNome) {
        this._nome = novoNome
    }

    get ano() {
        return this._ano
    }
    set ano(novoAno) {
        this._ano = novoAno
    }

    get nacio() {
        return this._nacio
    }
    set nacio(novaNacio) {
        this._nacio = novaNacio
    }

    get obra() {
        return this._obra
    }
    set obra(novoObra) {
        this._obra = novoObra
    }

    get foto() {
        return this._foto
    }
    set foto(novoFoto) {
        this._foto = novoFoto
    }

}

window.onload = function () {

    let myForm = document.getElementById("myForm")
    let txtData = document.getElementById("nasci")
    txtData.setAttribute("max", formatDate(new Date()))

    myForm.addEventListener("submit", function (event) {

        let escNac = document.getElementById("nacion")
        let txtPers = document.getElementById("perso")
        let txtObra = document.getElementById("obra")
        let txtFoto = document.getElementById("foto")

        if (escNac.value == "desconhecida") {
            alert("Erro: Escolha a nacionalidade")
            event.preventDefault()
        }

        let personalidade = new Personalidades(txtPers.value, txtData.value, escNac.value, txtObra.value, txtFoto.value)
        personalidades.push(personalidade)

        atualizarTabela()

        event.preventDefault()
    })

    let btnRemover = document.getElementById("btnTodos")

    btnRemover.addEventListener("click", function () {
        personalidades = []
        atualizarTabela()
    })


}

function atualizarTabela() {
    tabela = document.getElementById("myTabela")

    let txt = ""

    txt = "<tr><th colspan='5' style='text-align:center'>PERSONALIDADES</th></tr><tr><th>NOME</th><th>DATA NASCIMENTO</th><th>NACIONALIDADE</th><th>PRINCIPAIS CRIAÇÃO</th><th>LINK FOTO</th></tr>"

    for (let i = 0; i < personalidades.length; i++) {
        txt += "<tr><td scope='row'>" + personalidades[i].nome + "</td><td>" + personalidades[i].ano + "</td><td>" + personalidades[i].nacio + "</td><td>" + personalidades[i].obra + "</td><td>" + personalidades[i].foto + "</td></tr>"

    }

    tabela.innerHTML = txt

}

// Função que converte uma data
// Acrescentando zeros à esquerda sempre que o mês e o dia sejam inferiores a 10
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}