let jogos = []
let isValidate = true
let idJogo = 0

class Jogos {
    constructor(titulo, genero, plataforma, foto) {
        this._id = Jogos.getLastId() + 1
        this.titulo = titulo
        this.genero = genero
        this.plataforma = plataforma
        this.foto = foto
    }

    get id() {
        return this._id
    }

    get titulo() {
        return this._titulo
    }
    set titulo(novoTitulo) {
        this._titulo = novoTitulo
    }

    get genero() {
        return this._genero
    }
    set genero(novoGenero) {
        this._genero = novoGenero
    }

    get plataforma() {
        return this._plataforma
    }
    set plataforma(novaPlataforma) {
        this._plataforma = novaPlataforma
    }

    get foto() {
        return this._foto
    }
    set foto(novoFoto) {
        this._foto = novoFoto
    }

    static getLastId() {
        let lastId = 0
        if (jogos.length > 0) {
            lastId = jogos[jogos.length-1].id
        }
        return lastId
    }

}

window.onload = function () {

    let myForm = document.getElementById("myForm")
    let txtTitulo = document.getElementById("jogo")
    let selGenero = document.getElementById("genero")
    let selPlat = document.getElementsByClassName("form-check-input")
    let txtFoto = document.getElementById("foto")
    let plat = ""
    let cont = 0
    let msg = ""
    let modalGameName = document.getElementById("modalGameName")
    let modalGameGenre = document.getElementById("modalGameGenre")
    let modalGamePlatforms = document.getElementById("modalGamePlatforms")
    let modalGameCover = document.getElementById("modalGameCover")
    let atualizJogo = document.getElementsByClassName("atualizar")
    let mostrarJogo = document.getElementsByClassName("visualizar")
    let removJogo = document.getElementsByClassName("remover")

    myForm.addEventListener("submit", function (event) {

        for (let i = 0; i < selPlat.length; i++) {
            if (selPlat[i].checked == true) {
                plat += selPlat[i].value + "/"
                cont++
            }
        }

        if (cont == 0) {
            isValidate = false
            msg += "Pelo menos uma opção das plataformas tem de ser selecionada"
        }

        if (isValidate) {

            if (idJogo==0) {

                let jogo = new Jogos(txtTitulo.value, selGenero.value, plat, txtFoto.value)
                jogos.push(jogo)

                plat = ""
                cont = 0

                alert("REGISTO EFETUADO COM SUCESSO");

            } else {

                for (let i = 0; i < jogos.length; i++) {
                    if(jogos[i].id == idJogo) {
                        jogos[i].titulo = txtTitulo.value
                        jogos[i].genero = selGenero.value
                        jogos[i].plataforma = plat
                        jogos[i].foto = txtFoto.value
                    }                  
                }

                alert("JOGO ALTERADO COM SUCESSO");

                idJogo = 0
            }
            atualizarTabela()

            myForm.reset()

        } else {
            alert("ERRO: " + msg);
            isValidate = true
            event.preventDefault()
        }

        event.preventDefault()
    })

    let btnRemover = document.getElementById("btnTodos")

    btnRemover.addEventListener("click", function () {
        jogos = []
        atualizarTabela()
        tabela.innerHTML = ""
    })

    myForm.addEventListener("reset", function () {
        let txtTitulo = document.getElementById("jogo")
        txtTitulo.focus()
    })

    let btnFiltrar = document.getElementById("btnFil")

    btnFiltrar.addEventListener("click", function () {
        let genero = document.getElementById("genero")
        atualizarTabela(genero.value)
    })



    function atualizarTabela(genero = "") {
        tabela = document.getElementById("myTabela")

        let txt = ""

        txt = "<tr><th>#</th><th>Nome do jogo</th><th>Género</th><th>Plataformas Disponiveis</th><th>Ações</th></tr>"

        for (let i = 0; i < jogos.length; i++) {
            if (genero == jogos[i].genero || genero == "") {
                txt += "<tr><td scope='row'>" + jogos[i].id + "</td><td>" + jogos[i].titulo + "</td><td>" + jogos[i].genero + "</td><td>" + jogos[i].plataforma + "</td><td><a id='" + jogos[i].id + "' class='atualizar' href='#'><i class='fas fa-edit' style='color:white'></i></a>&emsp;<a id='" + jogos[i].id + "' class='visualizar' data-toggle='modal' data-target='#gameModal' href='#'><i class='fas fa-eye' style='color:white'></i></a>&emsp;<a id='" + jogos[i].id + "' class='remover' href='#'><i class='fas fa-eraser' style='color:white'></i></a></td></tr>"
            }
        }

        tabela.innerHTML = txt

        for (let j = 0; j < removJogo.length; j++) {

            removJogo[j].addEventListener("click", function () {
                let idJogo = removJogo[j].getAttribute("id")
                removerJogo(idJogo)
                atualizarTabela()
            })
        }

        for (let j = 0; j < mostrarJogo.length; j++) {

            mostrarJogo[j].addEventListener("click", function () {
                let idJogo = mostrarJogo[j].getAttribute("id")
                verJogo(idJogo)
            })
        }

        for (let j = 0; j < atualizJogo.length; j++) {

            atualizJogo[j].addEventListener("click", function () {

                let idJogo = atualizJogo[j].getAttribute("id")
                editarJogo(idJogo)
            })

        }
    }

    function removerJogo(id) {
        for (let i = 0; i < jogos.length; i++) {
            if (jogos[i].id == id) {
                jogos.splice(i, 1)
            }
        }
    }

    function verJogo(id) {
        for (let j = 0; j < jogos.length; j++) {
            if (jogos[j].id == id) {
                modalGameName.innerHTML = jogos[j].titulo
                modalGameGenre.innerHTML = jogos[j].genero
                modalGamePlatforms.innerHTML = jogos[j].plataforma
                modalGameCover.setAttribute("src", jogos[j].foto)
            }
        }
    }

    function editarJogo(id) {

        idJogo = id

        for (let j = 0; j < jogos.length; j++) {
            if (jogos[j].id == id) {

                txtTitulo.value = jogos[j].titulo
                selGenero.value = jogos[j].genero
                txtFoto.value = jogos[j].foto

                for (let i = 0; i < selPlat.length; i++) {
                    if (jogos[j].plataforma.indexOf(selPlat[i].getAttribute("value")) != -1) {
                        selPlat[i].checked = true
                    }
                    else {
                        selPlat[i].checked = false
                    }
                }
            }
        }
    }

}