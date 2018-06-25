//definição de variaveis globais

let myCourses = []
let myUsers = []
let partners = []
let comentarios = []
let tags = []
let pontuacoes = []
let formadores = []
let idCard = 0
let idPartners = 0
let userName = ""
let userId = 0
let endereco, nomeParceiro;



// ######################################################################
// Classes utilizadores
// ######################################################################

class User {

    constructor(name, email, password, foto, type) {
        this._id = User.getLastId() + 1
        this.name = name
        this.email = email
        this.password = password
        this.foto = foto
        this.type = type
    }

    // Propriedade ID
    get id() {
        return this._id
    }

    // Propriedade NAME
    get name() {
        return this._name
    }

    set name(newName) {
        this._name = newName
    }

    // Propriedade EMAIL
    get email() {
        return this._email
    }

    set email(newEmail) {
        this._email = newEmail
    }

    // Propriedade PASSWORD
    get password() {
        return this._password
    }

    set password(newPassoword) {
        this._password = newPassoword
    }

    // Propriedade foto perfil
    get foto() {
        return this._foto
    }

    set foto(newFoto) {
        if (newFoto == "") {
            this._foto = "img/formador.png"
        } else
            this._foto = newFoto
    }

    // Propriedade Type User
    get type() {
        return this._type
    }

    set type(newType) {
        this._type = newType
    }

    static getLastId() {
        let lastId = 0
        if (users.length != 0) {
            lastId = users[users.length - 1]._id
        }
        return lastId
    }

}

// ######################################################################
// Preenche os utilizadores
// ######################################################################
if (localStorage.getItem("Users")) {
    users = JSON.parse(localStorage.getItem("Users"))
}


// ######################################################################
// preenche ParceiroS
// ######################################################################
if (localStorage.getItem("Parceiros")) {
    partners = JSON.parse(localStorage.getItem("Parceiros"))
}


// ######################################################################
// Classe Parceiros
// ######################################################################
class Partner {

    constructor(name, enderecoWeb, endereco) {
        this._id = Partner.getLastId() + 1
        this.name = name
        this.enderecoWeb = enderecoWeb
        this.endereco = endereco
     
    }

    // Propriedade ID
    get id() {
        return this._id
    }

    // Propriedade NAME
    get name() {
        return this._name
    }

    set name(newName) {
        this._name = newName
    }

    // Propriedade ENDEREÇO WEB
    get enderecoWeb() {
        return this._enderecoWeb
    }

    set enderecoWeb(newEnderecoWeb) {
        this._enderecoWeb = newEnderecoWeb
    }

    // Propriedade ENDEREÇO
    get endereco() {
        return this._endereco
    }

    set endereco(newEndereco) {
        this._endereco = newEndereco
    }

    static getLastId() {
        let lastId = 0
        if (partners.length != 0) {
            lastId = partners[partners.length - 1]._id
        }
        return lastId
    }

}

// ######################################################################
// preenche Comentarios
// ######################################################################
if (localStorage.getItem("Comentarios")) {
    comentarios = JSON.parse(localStorage.getItem("Comentarios"))
}

// ######################################################################
// Classe Comentario
// ######################################################################
class Comentario {

    constructor(id_User, id_Card, data, hora, comentario) {
        this._id = Comentario.getLastId() + 1
        this.id_User = id_User
        this.id_Card = id_Card
        this.data_Pub = data
        this.hora_Pub = hora
        this.comentario = comentario
    }

    // Propriedade ID
    get id() {
        return this._id
    }

    // Propriedade USER ID
    get id_User() {
        return this._id_User
    }

    set id_User(newId_User) {
        this._id_User = newId_User
    }

    // Propriedade CARD ID 
    get id_Card() {
        return this._id_Card
    }

    set id_Card(newId_Card) {
        this._id_Card = newId_Card
    }

    // Propriedade DATA PUBLICAÇÃO
    get data_Pub() {
        return this._data_Pub
    }

    set data_Pub(newData_pub) {
        this._data_Pub = newData_pub
    }

    // Propriedade HORA PUBLICAÇÃO
    get hora_Pub() {
        return this._hora_Pub
    }

    set hora_Pub(newHora_Pub) {
        this._hora_Pub = newHora_Pub
    }

    // Propriedade HORA PUBLICAÇÃO
    get comentario() {
        return this._comentario
    }

    set comentario(newComentario) {
        this._comentario = newComentario
    }

    static getLastId() {
        let lastId = 0
        if (comentarios.length != 0) {
            lastId = comentarios[comentarios.length - 1]._id
        }
        return lastId
    }

}

// ######################################################################
// preenche pontuação
// ######################################################################
if (localStorage.getItem("Pontuações")) {
    pontuacoes = JSON.parse(localStorage.getItem("Pontuações"))
}

// ######################################################################
// Classe Pontuação
// ######################################################################
class Pontuacao {

    constructor(id_User, id_Card, ponto) {
        this._id = Pontuacao.getLastId() + 1
        this.id_User = id_User
        this.id_Card = id_Card
        this.ponto = ponto

    }

    // Propriedade ID
    get id() {
        return this._id
    }

    // Propriedade USER ID
    get id_User() {
        return this._id_User
    }

    set id_User(newId_User) {
        this._id_User = newId_User
    }

    // Propriedade CARD ID 
    get id_Card() {
        return this._id_Card
    }

    set id_Card(newId_Card) {
        this._id_Card = newId_Card
    }

    // Propriedade DATA PUBLICAÇÃO
    get ponto() {
        return this._ponto
    }

    set ponto(newPonto) {
        this._ponto = newPonto
    }

    static getLastId() {
        let lastId = 0
        if (pontuacoes.length != 0) {
            lastId = pontuacoes[pontuacoes.length - 1]._id
        }
        return lastId
    }

}

// ######################################################################
// preenche Formadores
// ######################################################################
if (localStorage.getItem("Formadores")) {
    formadores = JSON.parse(localStorage.getItem("Formadores"))
}

let optLogin = document.getElementById("idlogin")
let optLogout = document.getElementById("idLogout")
let optRegister = document.getElementById("idRegister")
let userImage = document.getElementById("imageUser")
let optCriarParceiro = document.getElementById("addParc")
let optAddPontucao = document.getElementById("addPont")
let optEditParceiro = document.getElementById("editParc")
let optEliminParceiro = document.getElementById("eliminParc")
let optRemoverParc = document.getElementById("removParcCurso")
let divPontacao = document.getElementById("divPont")
optEditParceiro.style.display = 'none'
optEliminParceiro.style.display = 'none'
optRemoverParc.style.display = 'none'


if (localStorage.getItem("Users")) {
    myUsers = JSON.parse(localStorage.getItem("Users"))
}

if (localStorage.getItem("idCard")) {
    idCard = JSON.parse(localStorage.getItem("idCard"))
    console.log(idCard)
}

var estadoLogin = JSON.parse(localStorage.getItem("estadoLogin"))

if (estadoLogin == false) {
    // Esconder opções de autenticação
    optLogout.style.display = 'none'
    userImage.style.display = 'none'
    optCriarParceiro.style.display = 'none'
    optAddPontucao.style.display = 'none'
    optRemoverParc.style.display = 'none'
}
else {

    if (localStorage.getItem("idUser")) {
        userId = JSON.parse(localStorage.getItem("idUser"))
    }

    optLogin.style.display = 'none'
    optRegister.style.display = 'none'
    optLogout.style.display = 'block'
    userImage.style.display = 'block'
    optCriarParceiro.style.display = 'none'
    optAddPontucao.style.display = 'none'

    let tipoUser = ""

    for (let i = 0; i < myUsers.length; i++) {
        if (userId == myUsers[i]._id) {
            tipoUser = myUsers[i]._type
            userImage.setAttribute("src", myUsers[i]._foto)
            userImage.setAttribute("alt", myUsers[i]._name)
        }
    }

    if (tipoUser === "administrador") {
        optEditParceiro.style.display = 'block'
        optEliminParceiro.style.display = 'block'
        optRemoverParc.style.display = 'block'
        optCriarParceiro.style.display = 'block'
        optAddPontucao.style.display = 'block'

    }
    if (tipoUser === "Formador") {
        optEditParceiro.style.display = 'block'
        optEliminParceiro.style.display = 'block'
        optRemoverParc.style.display = 'block'
        optCriarParceiro.style.display = 'block'
        optAddPontucao.style.display = 'block'
    }
    if (tipoUser === "Estudante") {
        optAddPontucao.style.display = 'block'
    }

    for (let i = 0; i < pontuacoes.length; i++) {

        if (pontuacoes[i]._id_Card == idCard && pontuacoes[i]._id_User == userId) {
            //modifica o botão para mostrar a pontuação
            let strHtml = "Minha Pontuação: " + pontuacoes[i]._ponto
            divPontacao.innerHTML = strHtml

        }
    }

    let optPontuar = document.getElementById("formPont")

    optPontuar.addEventListener('submit', function (e) {
        let val = document.getElementById("pontuar")
        console.log(val.value)
        let newPontuation = new Pontuacao(userId, idCard, parseInt(val.value))
        pontuacoes.push(newPontuation)
        alert("Curso pontuado com sucesso! Atenção que podes pontuar cada curso só uma vez.")
        localStorage.setItem("Pontuações", JSON.stringify(pontuacoes))
        optPontuar.reset()
        $('#pontuarModalCenter').modal('hide')
        window.location.reload()
        e.preventDefault()
    })

}

// LOGOUT
optLogout.addEventListener("click", function () {
    let userImage = document.getElementById("imageUser")
    userId = 0
    optLogin.style.display = 'block'
    optRegister.style.display = 'block'
    optLogout.style.display = 'none'
    optCriarParceiro.style.display = 'none'
    optAddPontucao.style.display = 'none'
    userImage.style.display = 'none'
    optEditParceiro.style.display = 'none'
    optEliminParceiro.style.display = 'none'
    optRemoverParc.style.display = 'none'
    let estadoLogin = false
    localStorage.setItem("estadoLogin", JSON.stringify(estadoLogin))
    localStorage.setItem("idUser", JSON.stringify(userId))
})

let txtTitulo = document.getElementById("getTitulo")
let txtData = document.getElementById("getData")
let txtHora = document.getElementById("getHora")
let txtPreco = document.getElementById("getPreço")
let txtEPreco = document.getElementById("getEPreço")
let txtFormad = document.getElementById("getFormador")
let txtDescricao = document.getElementById("getDescricao")
let txtlink = document.getElementById("idCursoImg")
let txtCateg = document.getElementById("getCateg")
let txtPont = document.getElementById("getPontuacao")
//elementos para preencher parceiros
let divParc = document.getElementById("divCardParc")
let txtParcNome = document.getElementById("nomeParc")
let txtParcSite = document.getElementById("siteParce")
let optEditar = document.getElementById("editParc")
let optEliminar = document.getElementById("eliminParc")

if (localStorage.getItem("Courses")) {
    myCourses = JSON.parse(localStorage.getItem("Courses"))
    console.log(myCourses)
}

if (localStorage.getItem("Tags")) {
    tags = JSON.parse(localStorage.getItem("Tags"))
}

let txt = [];
let total = 0
let cont = 0
let media = 0
for (let l = 0; l < pontuacoes.length; l++) {
    if (idCard == pontuacoes[l]._id_Card) {
        cont++
        total += pontuacoes[l]._ponto
        media = total / cont
        txtPont.innerHTML = media.toFixed(1)
    }

}

//Preenche a pagina com a informação do curso que foi selecionado
for (let i = 0; i < myCourses.length; i++) {

    for (let k = 0; k < tags.length; k++) {
        for (let n = 0; n < formadores.length; n++) {

            if (myCourses[i]._id == idCard) {
                txtTitulo.innerHTML = myCourses[i]._title
                txtData.innerHTML = myCourses[i]._date
                txtHora.innerHTML = myCourses[i]._hour
                txtPreco.innerHTML = myCourses[i]._price + " €"
                txtEPreco.innerHTML = myCourses[i]._s_Price + " €"
                if (myCourses[i]._teacher == formadores[n]._id) {
                    txtFormad.innerHTML = formadores[n]._name
                }
                txtDescricao.innerHTML = myCourses[i]._description
                txtlink.innerHTML = `<img id="idImg"  src="${myCourses[i]._link}" style="width: 100%;height:100%">`

                let categs = myCourses[i]._tagId
                categs.forEach(function (index) {
                    if (index == tags[k]._id) {
                        if (txt.indexOf(tags[k]._name) == -1) {
                            txt.push(tags[k]._name)
                        }
                    }
                });

                txtCateg.innerHTML = txt

                //preencher a card do parceiro se este tiver,caso contrario cria uma opção para adicionar um parceiro ao curso
                if (myCourses[i]._institution != "") {

                    for (let j = 0; j < partners.length; j++) {
                        if (myCourses[i]._institution == partners[j]._id) {

                            txtParcNome.innerHTML = partners[j]._name
                            txtParcSite.innerHTML = partners[j]._enderecoWeb
                            txtParcSite.setAttribute("href", partners[j]._enderecoWeb)
                            endereco = partners[j]._endereco
                            nomeParceiro = partners[j]._name

                        }
                    }
                } else {

                    var txtDiv = `<div align="center" style="padding-top: 15%"><h5 style="color: black">Não contem parceiro associado</h5></div>`
                    txtDiv += `<div align="center" style="padding-top: 2%"><h6 style="color: black">Podes adicionar um aqui</h6></div>`
                    txtDiv += `<div align="center" style="padding-top: 2%">
                                <form id="addParcCurso" action="">
                                    <select id="selParceiro" required></select><br>
                                    <button id="adicionarParc" class="btn mt-1" type="submit">Adicionar</button>
                                </form>
                                    </div>`
                    divParc.innerHTML = txtDiv
                    //chamo as funções para por o eventListener a escuta e para preencher a comboBox
                    submeterParceiro()
                    comboBoxParceiro()
                }

            }
        }
    }
}

//funções para por o eventListener a escuta
function submeterParceiro() {
    let formAddParceiro = document.getElementById("addParcCurso")

    formAddParceiro.addEventListener("submit", function (event) {
        let opcSelecionada = document.getElementById("selParceiro")
        let parceiroSel = opcSelecionada.value

        verif = confirm("Deseja mesmo atribuir este parceiro a este curso?")
        if (verif) {

            for (let j = 0; j < partners.length; j++) {

                for (let i = 0; i < myCourses.length; i++) {
                    if (idCard == myCourses[i]._id) {

                        if (parceiroSel == partners[j]._id) {

                            myCourses[i]._institution = parceiroSel
                            alert("Parceiro adicionado ao curso com sucesso")
                            console.log(myCourses[i])
                            window.location.reload()
                            localStorage.setItem("Courses", JSON.stringify(myCourses))
                        }
                    }
                }
            }
        }
        event.preventDefault()
    })
}

//Editar globalmente um parceiro
optEditar.addEventListener("click", function (event) {
    let idParceiro = ""

    let optTituloModal = document.getElementById("tituloModal")
    optTituloModal.innerHTML = "Editar Parceiro"

    for (let i = 0; i < myCourses.length; i++) {
        for (let j = 0; j < partners.length; j++) {
            if (myCourses[i]._id == idCard) {
                if (myCourses[i]._institution == partners[j]._id) {
                    idParceiro = partners[j]._id
                }
            }
        }
    }
    //chama esta função para preencher a modal adicionar parceiro 
    editarModelParceiro(idParceiro)

})

//Remove o parceiro do curso associado
optRemoverParc.addEventListener("click", function (event) {

    //verificar se quer mesmo remover
    let verif
    verif = confirm("Deseja mesmo remover este parceiro?")
    if (verif) {

        for (let j = 0; j < partners.length; j++) {

            for (let i = 0; i < myCourses.length; i++) {
                if (idCard == myCourses[i]._id) {

                    if (myCourses[i]._institution == partners[j]._id) {

                        myCourses[i]._institution = ""
                        alert("Parceiro removido com sucesso")
                        window.location.reload()
                        localStorage.setItem("Courses", JSON.stringify(myCourses))
                    }
                }
            }
        }
    }
})

//Elimina o parceiro da localStorage e remove-os dos cursos associados
optEliminar.addEventListener("click", function (event) {

    //verificar se quer mesmo eliminar
    let verif
    verif = confirm("Deseja mesmo eliminar este parceiro?")
    if (verif) {
        var idParceiro
        for (let j = 0; j < partners.length; j++) {

            for (let i = 0; i < myCourses.length; i++) {
                if (idCard == myCourses[i]._id) {

                    if (myCourses[i]._institution == partners[j]._id) {
                        idParceiro = partners[j]._id
                        partners.splice(j, 1)
                        for (let k = 0; k < myCourses.length; k++) {
                            if (idParceiro == myCourses[k]._institution) {

                                myCourses[k]._institution = ""
                                localStorage.setItem("Courses", JSON.stringify(myCourses))
                            }

                        }
                        alert("Parceiro eliminado com sucesso")
                        localStorage.setItem("Parceiros", JSON.stringify(partners))
                        window.location.reload()
                    }

                }
            }
        }
    }
})

optCriarParceiro.addEventListener("click", function (event) {
    let optTituloModal = document.getElementById("tituloModal")
    optTituloModal.innerHTML = "Adicionar Parceiro"
})

//criação de um novo parceiro, mas caso for uma edição ele executa o else
let formPartner = document.getElementById("frmPartner")
formPartner.addEventListener("submit", function (event) {

    let opcNome = document.getElementById("namePartner")
    let opcSite = document.getElementById("txtLinkSite")
    let opcEndereco = document.getElementById("txtEndereco")
 

    if (idPartners == 0) {

        // Criar objeto parceiros
        let newPartner = new Partner(opcNome.value,
            opcSite.value,
            opcEndereco.value
        )

        // Adicionar novo objeto ao array formadores
        partners.push(newPartner)
        alert("Parceiro adicionado com sucesso")
        console.log(partners)
        localStorage.setItem("Parceiros", JSON.stringify(partners))

        $('#modalAddPartnerForm').modal('hide')
        //limpa o formulario
        formPartner.reset()
        //adiciona o parceiro a comboBox
        comboBoxParceiro()

        event.preventDefault()
    } else {

        for (let i = 0; i < partners.length; i++) {
            if (idPartners == partners[i]._id) {

                partners[i]._name = opcNome.value
                partners[i]._enderecoWeb = opcSite.value
                partners[i]._endereco = opcEndereco.value
                
            }
        }

        //verificar se quer mesmo modificar
        let verif
        verif = confirm("Deseja mesmo alterar os dados deste parceiro?")
        if (verif) {

            idPartners = 0
            console.log(partners)
            localStorage.setItem("Parceiros", JSON.stringify(partners))
            alert("Parceiro alterado com sucesso")
            window.location.reload()
        }

        //limpa o formulario
        formPartner.reset()
        $('#modalAddPartnerForm').modal('hide')
        window.location.reload()
        event.preventDefault()
    }

})

//função que preenche o modal para adicionar parceiros 
function editarModelParceiro(id) {

    let optTituloModal = document.getElementById("tituloModal")
    optTituloModal.innerHTML = "Editar Parceiro"

    idPartners = id

    let opcNome1 = document.getElementById("namePartner")
    let opcSite1 = document.getElementById("txtLinkSite")
    let opcEndereco1 = document.getElementById("txtEndereco")

    for (let i = 0; i < partners.length; i++) {
        if (partners[i]._id == id) {
            opcNome1.value = partners[i]._name
            opcSite1.value = partners[i]._enderecoWeb
            opcEndereco1.value = partners[i]._endereco
            
        }
    }
}

// Preencher combobox com Parceiros
function comboBoxParceiro() {

    //Criar o HTML (option) para todos os parceiros
    let strHtml = "<option value=''>Escolher</option>"
    for (let i = 0; i < partners.length; i++) {
        strHtml += `<option value='${partners[i]._id}'>${partners[i]._name}</option>`
    }
    let selParceiro = document.getElementById("selParceiro")
    selParceiro.innerHTML = strHtml
}

//Submição de comentários
let optComent = document.getElementById('formComent')
optComent.addEventListener("submit", function (event) {

    if (userId != 0) {
        let data_Publicacao = new Date();
        let hora_Publicacao = new Date();

        let txtComent = document.getElementById("txtComent")

        let newComent = new Comentario(userId, idCard, dataRegisto(data_Publicacao), horaRegisto(hora_Publicacao), txtComent.value)
        comentarios.push(newComent)
        localStorage.setItem("Comentarios", JSON.stringify(comentarios))
        alert("Comentário efetuado com sucesso")
        tableComments()
        optComent.reset()
    } else {
        alert("Tens que fazer o login primeiro!!!")
    }
    event.preventDefault()
})

window.onload = function () {
    tableComments()
}

function tableComments() {

    let strHTML = "";

    strHTML += `<div class="table-container">
                            <table id="tabelaRegistos" class="table table-filter">
                                <tbody id="TabelaRegistos">`

    //data.forEach(function (row) {
    for (let j = 0; j < users.length; j++) {
        for (let i = 0; i < comentarios.length; i++) {
            if (idCard == comentarios[i]._id_Card && users[j]._id == comentarios[i]._id_User) {
                strHTML += `
                                    <tr>
                                            <td>
                                                <div class="media">
                                                
                                                    <a href="#" class="pull-left">
                                                        <img src="${users[j]._foto}" class="media-photo">
                                                    </a>
                                                    <div class="media-body">
                                                        <h4 class="title">
                                                            ${users[j]._name}
                                                            <span class="media-meta pull-right pl-5 ml-5">${comentarios[i]._data_Pub}</span>
                                                            <span class=" media-meta pull-right">${comentarios[i]._hora_Pub}</span> 
                                                        </h4>
                                                        <div class="container">
                                                            <p class="summary">${comentarios[i]._comentario}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                    </tr>`
            }

        }
    }
    strHTML += ` </tbody>
                            </table>
                        </div>`
    $("#TabelaComments").html(strHTML);
}

function initMap() {
    var myLatLng = { lat: 0, lng: 0 };

    var map = new google.maps.Map(document.getElementById('myMap'), {
        zoom: 18,
        center: myLatLng
    });

    let geocoder = new google.maps.Geocoder()

    geocodeAddress(geocoder, map)
    
}

function geocodeAddress(geocoder, resultsMap) {
    let address = endereco
 
    geocoder.geocode({ 'address': address }, function (results,
        status) {
        if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location)
            let marker = new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location,
                title: nomeParceiro
            })
        } else { alert('Geocode falhou devido a: ' + status) }
    })
}



function dataRegisto(date) {

    var d = new Date(date);

    var day = d.getDate();
    var month = (d.getMonth() + 1);
    var year = d.getFullYear();

    if (day < 10) { day = "0" + day; }
    if (month < 10) { month = "0" + month; }

    var strDate = day + "/" + month + "/" + year;

    return strDate

}

function horaRegisto(date) {

    var h = new Date(date);
    var hours = h.getHours();
    var minutes = h.getMinutes();

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }

    var strHour = hours + ":" + minutes;

    return strHour

}


