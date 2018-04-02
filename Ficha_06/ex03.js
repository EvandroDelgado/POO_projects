let filmes = []

class Filme {
    constructor(titulo, ano, genero) {
        this.titulo = titulo
        this.ano = ano
        this.genero = genero
    }

    get titulo() {
        return this._titulo
    }

    set titulo(novoTitulo) {
        this._titulo = novoTitulo
    }

    get ano() {
        return this._ano
    }

    set ano(novoAno) {
        this._ano = novoAno
    }

    get genero() {
        return this._genero
    }

    set genero(novoGenero) {
        this._genero = novoGenero
    }
}

window.onload = function () {

    let fFilmes = document.getElementById("myForm")
    let fTitulo = document.getElementById("titulo")
    let fAno = document.getElementById("data")
    let fGenero = document.getElementById("generos")

    fFilmes.addEventListener("submit", function (event) {

        let filme = new Filme(fTitulo.value, fAno.value, fGenero.value)

        filmes.push(filme)
        console.log(filmes)

        atualizarTabela()
        
        // Previne do form não ser submetido (isso faria com que a página fizesse um refresh)
        event.preventDefault()

        
        removerFilme()
    })
    
}

function atualizarTabela() {
    tabela = document.getElementById("table")

    let txt = ""

    txt = "<tr><th>TÍTULO</th><th>ANO</th><th>GÉNERO</th></tr>"

    for (let i = 0; i < filmes.length; i++) {
        txt += "<tr><td scope='row'>" + filmes[i].titulo + "</td><td>" + filmes[i].ano + "</td><td>" + filmes[i].genero + "</td><td><a href='#' ><i id='rem' class='fa fa-trash-o'></i></a></td></tr>"

    }

    tabela.innerHTML = txt
    
}

function removerFilme() {

    let filmeSelec =  document.getElementById('rem')
   
    filmeSelec.addEventListener("click", function () {
        
        for (let i = 0; i < filmes.length; i++) {
            filmes.splice(i,1)     
        }
        atualizarTabela()
        console.log(filmes)
    })
}