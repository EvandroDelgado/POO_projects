let users = []
let trips = []
let userId = 0
let isValidate = true
let utilExist = false

class User {
    constructor(nome, email, pass) {
        this._id = User.getLastId() + 1
        this.nome = nome
        this.email = email
        this.password = pass
    }

    get id() {
        return this._id
    }

    get nome() {
        return this._nome
    }

    set nome(novoNome) {
        this._nome = novoNome
    }

    get email() {
        return this._email
    }

    set email(novoEmail) {
        this._email = novoEmail
    }

    get password() {
        return this._password
    }

    set password(novoPass) {
        this._password = novoPass
    }

    static getLastId() {
        let lastId = 0
        if (users.length != 0) {
            lastId = users[users.length - 1].id
        }
        return lastId
    }
}

class Viagem {
    constructor(nomeV, pais, link, dataV, descricao, pontuacao, userId) {
        this._id = Viagem.getLastId() + 1
        this.nomeV = nomeV
        this.pais = pais
        this.link = link
        this.dataV = dataV
        this.descricao = descricao
        this.pontuacao = pontuacao
        this.userId = userId
    }

    get id() {
        return this._id
    }

    get nomeV() {
        return this._nomeV
    }

    set nomeV(novoNomeV) {
        this._nomeV = novoNomeV
    }

    get pais() {
        return this._pais
    }

    set pais(novoPais) {
        this._pais = novoPais
    }

    get link() {
        return this._link
    }

    set link(novolink) {
        this._link = novolink
    }

    get dataV() {
        return this._dataV
    }

    set dataV(novoDataV) {
        this._dataV = novoDataV
    }

    get descricao() {
        return this._descricao
    }

    set descricao(novaDescricao) {
        this._descricao = novaDescricao
    }

    get pontuacao() {
        return this._pontuacao
    }

    set pontuacao(novaPontucao) {
        this._pontuacao = novaPontucao
    }

    get userId() {
        return this._userId
    }
   
    set userId(novoUserId) {
        this._userId = novoUserId
    }

    static getLastId() {
        let lastId = 0
        if (trips.length != 0) {
            lastId = trips[trips.length - 1].id
        }
        return lastId
    }

}

window.onload = function () {

    let btnLog = document.getElementById("btnLogin")
    let btnReg = document.getElementById("btnRegist")

    let btnAddCatal = document.getElementById("addCatal")
    btnAddCatal.style.display = "none"

    let btnSair = document.getElementById("btnLogout")
    btnSair.style.display = "none"

    let saudacao = document.getElementById("saudar")
    saudacao.style.display = "none"

    let novoUtil2 = new User("Evandro", "vand15@hotmail.com", 1)
    users.push(novoUtil2)
    let novaViagem2 = new Viagem("Goa", "India", "https://i.ytimg.com/vi/0QOvPjTZroA/maxresdefault.jpg", "22/10/2018", "Comida banhada no activia", 10, 2)
    trips.push(novaViagem2)
    let novaViagem3 = new Viagem("Mumbai", "India", "https://i.ytimg.com/vi/0QOvPjTZroA/maxresdefault.jpg", "22/10/2018", "Crazy people", 10, 1)
    trips.push(novaViagem3)

    atualizarCatalogo()

    let registForm = document.getElementById("formReg")

    registForm.addEventListener("submit", function (e) {

        let txtNome = document.getElementById("nomeUtil")
        let txtEmail = document.getElementById("emailUtil")
        let txtPassword = document.getElementById("pass")
        let txtConfPass = document.getElementById("confirmarPass")
        let msg = ""

        if (isValidate) {
            if (txtPassword.value == txtConfPass.value) {

                alert("REGISTO EFETUADO COM SUCESSO")

                let novoUtil = new User(txtNome.value, txtEmail.value, txtPassword.value)
                users.push(novoUtil)
                console.log(users)

                $('#modalRegisterForm').modal('toggle');
                registForm.reset()


            }
            else {
                msg += "PASSWORD TEM QUE SER IGUAL A COMFIRMAR PASSWORD"
                isValidate = false
                txtPassword.value = ""
                txtConfPass.value = ""
                txtPassword.focus()
                console.log("erro pass")
                e.preventDefault()
            }

        } else {
            alert("ERRO: " + msg);
            isValidate = true
            console.log("erro")
        }

        e.preventDefault()
    })

    let loginForm = document.getElementById("formLog")

    loginForm.addEventListener("submit", function (event) {

        let emailLogin = document.getElementById("validEmail")
        let passLogin = document.getElementById("validPass")
        let userName = ""
        for (let i = 0; i < users.length; i++) {
            if (emailLogin.value == users[i].email && passLogin.value == users[i].password) {
                utilExist = true
                userId = users[i].id
                userName = users[i].nome
            }
        }

        if (utilExist == true) {
            let saudUser = document.getElementById("nomeUser")

            alert("Login efetuado com sucesso")

            $('#modalLoginForm').modal('toggle');
            loginForm.reset()


            btnLog.style.display = 'none'
            btnReg.style.display = 'none'
            btnSair.style.display = "block"
            saudacao.style.display = "block"
            btnAddCatal.style.display = "block"
            saudUser.innerHTML = userName
            logado = true
            console.log(userId)
            atualizarCatalogo(userId)
        }
        else {
            alert("Email ou password incorreto")
        }

        event.preventDefault()

    })


    //logout

    btnSair.addEventListener("click", function () {
        userId = 0
        btnLog.style.display = 'block'
        btnReg.style.display = 'block'
        btnSair.style.display = "none"
        saudacao.style.display = "none"
        btnAddCatal.style.display = "none"

        atualizarCatalogo(userId)
    })

    let formAdd = document.getElementById("formAd")

    formAdd.addEventListener("submit", function (e) {
        let txtNome = document.getElementById("idName")
        let txtPais = document.getElementById("idPais")
        let txtLink = document.getElementById("idLink")
        let txtData = document.getElementById("idData")
        let txtDesc = document.getElementById("idDescricao")
        let txtPont = document.getElementById("idSelPont")

        let novaViagem = new Viagem(txtNome.value, txtPais.value, txtLink.value, txtData.value, txtDesc.value, txtPont.value, userId)
        trips.push(novaViagem)
        console.log(trips)

        $('#modalAdicionarForm').modal('toggle');
        formAdd.reset()

        atualizarCatalogo(userId)
        e.preventDefault()
    })

}

function atualizarCatalogo(userId = 0) {

    let txtCat = ""

    for (let i = 0; i < trips.length; i++) {
        if (userId == trips[i].userId || userId == 0) {
            if (i % 3 == 0) {
                txtCat += `<div class="row">`
            }

            txtCat += `<div class="col-sm-4">
                <div class="card" style="width: 18rem;">
                        <img src="${trips[i].link}" style="width: 100%">
                        <div class="card-body">
                        <h4 ml-3">
                            ${trips[i].nomeV}
                        </h4>
                        <p>
                           ${trips[i].descricao}
                        </p>`
            if (userId != 0) {
                txtCat += `<a id="${trips[i].id}" href="#" class="btn btn-danger remove">REMOVER</a>`
            } else {
                txtCat += `<button class="btn btn-dark" type="button">VER MAIS</button>`
            }
            txtCat += `</div >
                    </div >
                </div > `

            if (i % 3 == 2) {
                txtCat += `</div >`
            }
        }
    }

    let tripsCatalog = document.getElementById("idCardCatal")
    tripsCatalog.innerHTML = txtCat

    // Obter todos os botões REMOVE
    let btnRemove = document.getElementsByClassName("remove")
    // Para cada botão, adicionar um listener para escutar pelo evento clique
    for (let i = 0; i < btnRemove.length; i++) {
        btnRemove[i].addEventListener("click", function() {
            // By clicking in a specific game, remove it from the array
            let tripId = btnRemove[i].getAttribute("id")
            removeTripById(tripId)
            atualizarCatalogo(userId)
        })        
    }
}

// Remove viagem baseada no seu ID
function removeTripById(id) {
    console.log("ID: " + id)
    for (let i = 0; i < trips.length; i++) {
        if(trips[i].id == id) {
            trips.splice(i, 1)
        }                  
    }
}

function scrollToTop(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function () {
            if (window.scrollY != 0) {
                window.scrollBy(0, scrollStep);
            }
            else clearInterval(scrollInterval);
        }, 15);
}
