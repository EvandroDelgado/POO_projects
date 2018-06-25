//Definição de variaveis globais

let courses = []
let users = []
let partners = []
let comentarios = []
let tags = []
let pontuacoes = []
let formadores = []

let tagId = 0
let userId = 0
let courseId = 0
let formadorId = 0
let estadoLogin = "false"

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
else {
    localStorage.setItem("Users", JSON.stringify([{ _id: 1, _name: "administrador", _email: "admin@gmail.com", _password: "123123", _type: "administrador", _foto: "img/formador.png" }]))
    users = JSON.parse(localStorage.getItem("Users"))
}

// ######################################################################
// Preenche as categorias
// ######################################################################
if (localStorage.getItem("Tags")) {
    tags = JSON.parse(localStorage.getItem("Tags"))
}

// ######################################################################
// Classe cursos
// ######################################################################
if (localStorage.getItem("Courses")) {
    courses = JSON.parse(localStorage.getItem("Courses"))
}
console.log(courses)


class Course {
    constructor(title, description, date, hour, price, s_Price, teacher, institution, link, tagId) {
        this._id = Course.getLastId() + 1
        this.title = title
        this.description = description
        this.date = date
        this.hour = hour
        this.price = price
        this.s_Price = s_Price
        this.teacher = teacher
        this.institution = institution
        this.link = link
        this.tagId = tagId
    }

    // Propriedade ID
    get id() {
        return this._id
    }

    // Propriedade TITULO
    get title() {
        return this._title
    }

    set title(newTitle) {
        this._title = newTitle
    }

    // Propriedade DESCRIPTION
    get description() {
        return this._description
    }

    set description(newDescription) {
        this._description = newDescription
    }

    // Propriedade DATE
    get date() {
        return this._date
    }

    set date(newDate) {
        this._date = newDate
    }

    // Propriedade HOUR
    get hour() {
        return this._hour
    }

    set hour(newHour) {
        this._hour = newHour
    }

    // Propriedade PRICE
    get price() {
        return this._price
    }

    set price(newPrice) {
        this._price = newPrice
    }

    // Propriedade SPECIAL PRICE
    get s_Price() {
        return this._s_Price
    }

    set s_Price(newS_Price) {
        this._s_Price = newS_Price
    }

    // Propriedade TEACHER
    get teacher() {
        return this._teacher
    }

    set teacher(newTeacher) {
        this._teacher = newTeacher
    }

    // Propriedade INSTITUTION PARTNER
    get institution() {
        return this._institution
    }

    set institution(newInstitution) {
        this._institution = newInstitution
    }

    // Propriedade LINK
    get link() {
        return this._link
    }

    set link(newLink) {
        if (newLink == "") {
            this._link = "img/default.jpg"
        } else
            this._link = newLink
    }

    // Propriedade TAGID
    get tagId() {
        return this._tagId
    }

    set tagId(newTagId) {
        this._tagId = newTagId
    }

    static getLastId() {
        let lastId = 0
        if (courses.length != 0) {
            lastId = courses[courses.length - 1]._id
        }
        console.log("IDE: " + lastId)
        return lastId
    }

    // Método que vai comparar datas e ordená-los
    static comparar(course1, course2) {
        let data1 = Date.parse(course1._date)
        let data2 = Date.parse(course2._date)
        if (data2 > data1) {
            return 1
        } else if (data2 < data1) {
            return -1
        } else {
            return 0
        }
    }

    static comparar2(course1, course2) {
        if (course1._id > course2._id) {
            return 1
        } else if (course1._id < course2._id) {
            return -1
        } else {
            return 0
        }
    }
}

// ######################################################################
// Preencher formadores
// ######################################################################
if (localStorage.getItem("Formadores")) {
    formadores = JSON.parse(localStorage.getItem("Formadores"))
}
// ######################################################################
// Classe formador
// ######################################################################

class Formador {

    constructor(name, photo, formation, cVitae) {
        this._id = Formador.getLastId() + 1
        this.name = name
        this.photo = photo
        this.formation = formation
        this.cVitae = cVitae
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

    // Propriedade foto
    get photo() {
        return this._photo
    }

    set photo(newPhoto) {
        if (newPhoto == "") {
            this._photo = "img/formador.jpg"
        } else
            this._photo = newPhoto
    }

    // Propriedade Formação
    get formation() {
        return this._formation
    }

    set formation(newFormation) {
        this._formation = newFormation
    }
    // Propriedade CV
    get cVitae() {
        return this._cVitae
    }

    set cVitae(newCVitae) {
        this._cVitae = newCVitae
    }

    static getLastId() {
        let lastId = 0
        if (formadores.length != 0) {
            lastId = formadores[formadores.length - 1]._id
        }
        return lastId
    }
}

// ######################################################################
// Preenche as Parcerias
// ######################################################################
if (localStorage.getItem("Parceiros")) {
    partners = JSON.parse(localStorage.getItem("Parceiros"))
}

// ######################################################################
// Preenche as Pontuações
// ######################################################################
if (localStorage.getItem("Pontuações")) {
    pontuacoes = JSON.parse(localStorage.getItem("Pontuações"))
}

// ######################################################################
// Preenche os Comentários
// ######################################################################
if (localStorage.getItem("Comentarios")) {
    comentarios = JSON.parse(localStorage.getItem("Comentarios"))
}


window.onload = function () {
    /* users[1]._type = "administrador"
    localStorage.setItem("Users", JSON.stringify(users)) */

    renderCatalog(userId)
    renderCatalog2()
    renderTags()

    // Referências para elementos HTML
    let optLogin = document.getElementById("idlogin")
    let optLogout = document.getElementById("idLogout")
    let optSalut = document.getElementById("salutUser")
    let optRegister = document.getElementById("idRegister")
    let optConfig = document.getElementById("idConfig")
    let optAddFormador = document.getElementById("addFormador")
    let tagId = document.getElementById("searchTag")
    let userImage = document.getElementById("imageUser")
    let optEditarFormador = document.getElementById("editar")
    let optEliminarFormador = document.getElementById("eliminar")
    let selectedTags = document.getElementsByClassName("tag")
    let optOrdenar = document.getElementById("checkboxOrdenar")

    optLogin.style.display = 'block'
    optRegister.style.display = 'block'
    optLogout.style.display = 'none'
    optConfig.style.display = 'none'
    optAddFormador.style.display = 'none'
    userImage.style.display = 'none'
    optSalut.style.display = 'none'
    optEditarFormador.style.display = 'none'
    optEliminarFormador.style.display = 'none'

    //verifica se o utilizador esta logado
    var estadoLogin = localStorage.getItem("estadoLogin")
    console.log(estadoLogin)
    if (estadoLogin == "true") {

        //apanha o id do utilizador logado na local Storage
        let userId = JSON.parse(localStorage.getItem("idUser"))

        //faz refresh aos catalogos
        renderCatalog(userId, tagId.value)
        renderCatalog2()
        atualizarTags()
        renderTags()
        comboFormador()
        comboParceiro()

        // Alterar navbar 
        optLogin.style.display = 'none'
        optRegister.style.display = 'none'
        optLogout.style.display = 'block'
        userImage.style.display = 'block'
        optSalut.style.display = 'block'

        let userName = ""
        let tipoUser = ""

        //verifica o id do utlizador que esta logado e compara com as do array de users 
        //para pegar o nome do utilizador logado
        for (let i = 0; i < users.length; i++) {
            if (userId == users[i]._id) {

                tipoUser = users[i]._type

                userImage.setAttribute("src", users[i]._foto)
                userImage.setAttribute("alt", users[i]._name)
                optSalut.innerHTML = 'Bem vindo&nbsp;<b>' + users[i]._name + '</b>!'
            }
        }
        console.log(tipoUser)
        console.log(tipoUser == "administrador")
        if (tipoUser == "administrador") {
            console.log(tipoUser == "administrador")
            optConfig.style.display = 'block'
            optEditarFormador.style.display = 'block'
            optEliminarFormador.style.display = 'block'
        } else if (tipoUser == "Formador") {
            optAddFormador.style.display = 'block'
            optEditarFormador.style.display = 'block'
            optEliminarFormador.style.display = 'block'
        }

        // SUBMETER CURSO
        let frmCurseAdd = document.getElementById("formAddCourse")
        frmCurseAdd.addEventListener("submit", function (event) {

            // Validate Platforms field
            let tagsSelect = []
            let strError = ""

            for (let i = 0; i < selectedTags.length; i++) {
                if (selectedTags[i].checked == true) {
                    tagsSelect.push(selectedTags[i].value)
                }
            }

            if (tagsSelect.length == 0) {
                strError = "Por favor, selecione pelo menos uma Categoria!"
            }

            if (strError == "") {
                // Obter valores do formulário da modal "Adicionar Curso"
                let inputTitulo = document.getElementById("idtitulo")
                let inputDescription = document.getElementById("idDescricao")
                let inputDate = document.getElementById("idData")
                let inputHour = document.getElementById("idHora")
                let inputPrice = document.getElementById("idPreco")
                let inputE_Price = document.getElementById("idPrecoEsp")
                let inputFormador = document.getElementById("idSelForm")
                let inputInstitution = document.getElementById("idSelParc")
                let inputLink = document.getElementById("idLink")
                let inputTag = tagsSelect

                for (let i = 0; i < courses.length; i++) {

                    if (courses[i]._id == courseId) {
                        courses[i]._title = inputTitulo.value
                        courses[i]._description = inputDescription.value
                        courses[i]._date = inputDate.value
                        courses[i]._hour = inputHour.value
                        courses[i]._price = inputPrice.value
                        courses[i]._s_Price = inputE_Price.value
                        courses[i]._teacher = inputFormador.value
                        courses[i]._institution = inputInstitution.value
                        courses[i]._link = inputLink.value
                        courses[i]._tagId = inputTag

                    }
                }

                //verificar se quer mesmo modificar
                let ver_alter
                ver_alter = confirm("Deseja mesmo guardar as alterações do Curso?")
                if (ver_alter) {
                    localStorage.setItem("Courses", JSON.stringify(courses))
                }

                //limpa o formulario
                frmCurseAdd.reset()
                $('#modalAdicionarForm').modal('hide')


                //atualizar as comboBox
                atualizarTags()
                renderTags()
                comboFormador()
                comboParceiro()
                renderCatalog(userId)
                renderCatalog2()
            } else {
                alert(strError)
            }
            event.preventDefault()
        })

        // SUBMETER formador
        let frmFormadorAdd = document.getElementById("frmFormador")
        frmFormadorAdd.addEventListener("submit", function (event) {

            // Obter valores do formulário da modal "Adicionar formador"
            let inputName = document.getElementById("nameformador")
            let inputLink = document.getElementById("txtLinkFotoF")
            let inputFormation = document.getElementById("txtFormacao")
            let inputCV = document.getElementById("descVitae")

            if (formadorId == 0) {

                // Criar objeto curso
                let newFormador = new Formador(inputName.value,
                    inputLink.value,
                    inputFormation.value,
                    inputCV.value,
                )

                // Adicionar novo objeto ao array formadores
                formadores.push(newFormador)
                alert("Formador adicionado com sucesso")
                console.log(formadores)
                localStorage.setItem("Formadores", JSON.stringify(formadores))

                //limpa o formulario
                frmFormadorAdd.reset()
                $('#modalAddFormadorForm').modal('hide')

            } else {
                console.log(formadorId)
                for (let i = 0; i < formadores.length; i++) {
                    if (formadores[i]._id == formadorId) {
                        formadores[i]._name = inputName.value
                        formadores[i]._photo = inputLink.value
                        formadores[i]._formation = inputFormation.value
                        formadores[i]._cVitae = inputCV.value

                    }
                }

                //verificar se quer mesmo modificar
                let ver_edit
                ver_edit = confirm("Deseja mesmo guardar as alterações no Formador?")
                if (ver_edit) {
                    formadorId = 0
                    console.log(formadores)
                    localStorage.setItem("Formadores", JSON.stringify(formadores))
                }

                //limpa o formulario
                frmFormadorAdd.reset()
                $('#modalAddFormadorForm').modal('hide')
            }


            //atualizar as comboBox
            comboFormador()
            renderCatalog2()
            event.preventDefault()
        })

    }

    // LOGOUT
    optLogout.addEventListener("click", function () {
        userId = 0
        optLogin.style.display = 'block'
        optRegister.style.display = 'block'
        optLogout.style.display = 'none'
        optSalut.style.display = 'none'
        optConfig.style.display = 'none'
        optAddFormador.style.display = 'none'
        userImage.style.display = 'none'
        optEditarFormador.style.display = 'none'
        optEliminarFormador.style.display = 'none'

        //o estadologin passa a ser false e guarda na local storage
        let estadoLogin = "false"
        localStorage.setItem("estadoLogin", JSON.stringify(estadoLogin))
        //como o userId passa a ser zero e guarda na local storage
        localStorage.setItem("idUser", JSON.stringify(userId))

        renderCatalog()
    })

    // procurar curso por categorias
    let btnSearch = document.getElementById("search")
    btnSearch.addEventListener("click", function (event) {

        //Buscar o valor do select
        let tagId = document.getElementById("searchTag")

        //apanha o id do utilizador logado na local Storage
        let userId = JSON.parse(localStorage.getItem("idUser"))

        //ordena os cursos por cursos mas recentes
        if (optOrdenar.checked != false) {
            courses.sort(Course.comparar)
        } else {
            courses.sort(Course.comparar2)
        }

        //Renderizar catálogo
        renderCatalog(userId, tagId.value)
    })

}

// Função que vai alimentar o meu catálogo de cursos
function renderCatalog(userId = 0, tagId = "All") {

    //Para cada curso vou definir uma Card e compô-la com os dados do objeto
    let strHtmlCard = ""
    let cursosFiltrados = []
    let tipoUser = ""

    for (let i = 0; i < users.length; i++) {
        if (userId == users[i]._id) {
            tipoUser = users[i]._type
        }
    }

    for (let j = 0; j < courses.length; j++) {

        //se utilizador estiver logado ou não apresenta todos os cards
        if ((userId == 0 && tagId == "All") ||
            (userId != 0 && tagId == "All")) {

            //preenche o array com todos os cursos
            cursosFiltrados.push(courses[j])
            cursosFiltrados[j]._media = 0
        }
        //preenche o array com os cursos filtrados por categorias
        for (let k = 0; k < courses[j]._tagId.length; k++) {
            if (tagId == courses[j]._tagId[k]) {
                cursosFiltrados.push(courses[j])
            }
        }
    }

    //calcula a media de cada curso
    for (let i = 0; i < cursosFiltrados.length; i++) {
        let total = 0
        let cont = 0
        let media = 0;

        for (let l = 0; l < pontuacoes.length; l++) {
            if (cursosFiltrados[i]._id == pontuacoes[l]._id_Card) {
                cont++
                total += pontuacoes[l]._ponto
                media = total / cont
                cursosFiltrados[i]._media = media.toFixed(1)
            }
            else cursosFiltrados[i]._media = media.toFixed(1)

        }

        // Inicia a linha
        if (i % 3 == 0) {
            strHtmlCard += `<div class="row">`
        }
        
        // Cria a card
        strHtmlCard += `<div class="col-sm-4 mt-2">
                <div class="card" style="width: 22rem;height:20rem" href="ver_cursos.html">
                    <img class="card-img-top" src="${cursosFiltrados[i]._link}" alt="Card image cap">
                    <div class="card-body">`
        strHtmlCard += `<span id="aprPont" ><i class="fa fa-star" title="Pontuação"></i> ${cursosFiltrados[i]._media}</span>`
        strHtmlCard += `<h5 id="${cursosFiltrados[i]._id}" class="card-title verMais">${cursosFiltrados[i]._title}</h5>
                        <p class="card-text">${cursosFiltrados[i]._description}</p>`
        if (tipoUser == "administrador") {
            strHtmlCard += `<a id="${cursosFiltrados[i]._id}" href="#" class="btn btn-dark alterar" data-toggle="modal" data-target="#modalAdicionarForm">ALTERAR</a>`
            strHtmlCard += `<a id="${cursosFiltrados[i]._id}" href="#" class="btn btn-danger ml-3 remove">REMOVER</a>`
        }
        strHtmlCard += `</div>
                </div>      
            </div>`

        // Fecha a linha
        if (i % 3 == 2) {
            strHtmlCard += `</div>`
        }

    }
    //preencher o html com as cards
    let coursesCatalog = document.getElementById("idCardCatal")
    coursesCatalog.innerHTML = strHtmlCard

    // Obter todos os botões REMOVE
    let btnRemove = document.getElementsByClassName("remove")
    // Para cada botão, adicionar um listener para escutar pelo evento clique
    for (let i = 0; i < btnRemove.length; i++) {
        btnRemove[i].addEventListener("click", function () {
            //verificar se quer mesmo remover

            // se clicar num botao especifico, remove-o do array
            let courseId = btnRemove[i].getAttribute("id")
            removeCourseById(courseId)
            renderCatalog(userId)

        })
    }

    // Obter todos os botões Ver mais
    let btnVerMais = document.getElementsByClassName("verMais")
    // Para cada botão, adicionar um listener para escutar pelo evento clique
    for (let i = 0; i < btnVerMais.length; i++) {
        btnVerMais[i].addEventListener("click", function () {
            location.href = "ver_cursos.html";
            //obtem o id da card que foi selecionada e guarda na local storage
            //para poder visualizar os dados na pagina ver cursos
            let courseId = btnVerMais[i].getAttribute("id")
            console.log(courseId)
            localStorage.setItem("idCard", courseId)
            userId = JSON.parse(localStorage.getItem("idUser"))
            //verifica se há user logado
            //guarda as informações no local storage
            if (userId == 0) {
                let estadoLogin = "false"
                localStorage.setItem("estadoLogin", estadoLogin)
            } else {
                let estadoLogin = "true"
                localStorage.setItem("estadoLogin", estadoLogin)
                localStorage.setItem("idUser", JSON.stringify(userId))
            }


        })
    }

    // Obter o botão ALTERAR
    let btnAlterar = document.getElementsByClassName("alterar")

    for (let i = 0; i < btnAlterar.length; i++) {

        btnAlterar[i].addEventListener("click", function () {
            console.log(courseId)
            courseId = btnAlterar[i].getAttribute("id")
            editCoursesById(courseId)
            renderCatalog(userId)

        })
    }


}

// Remove cursos baseada no seu ID
function removeCourseById(id) {
    console.log("ID: " + id)
    for (let i = 0; i < courses.length; i++) {


        if (courses[i]._id == id) {
            let ver_remove
            ver_remove = confirm("Deseja mesmo eliminar este Curso?")
            if (ver_remove) {
                courses.splice(i, 1)
                alert("Eliminaste o curso com sucesso")
                //quando é removido um curso ele elimina os seus comentários 
                for (let j = 0; j < comentarios.length; j++) {
                    for (let j = 0; j < comentarios.length; j++) {
                        if (id == comentarios[j]._id_Card) {
                            comentarios.splice(j, 1)
                        }console.log(comentarios)
                        //com a remoção do curso, guardar o array comentários atualizado na local storage
                        localStorage.setItem("Comentarios", JSON.stringify(comentarios))
                    }
                }

                //quando é removido um curso ele elimina as suas pontuações
                for (let k = 0; k < pontuacoes.length; k++) {
                    for (let k = 0; k < pontuacoes.length; k++) {
                        if (id == pontuacoes[k]._id_Card) {
                            pontuacoes.splice(k, 1)
                        }
                        //com a remoção do curso, guardar o array pontuações atualizado na local storage
                        localStorage.setItem("Pontuações", JSON.stringify(pontuacoes))
                    }console.log(pontuacoes)
                }
                localStorage.setItem("Courses", JSON.stringify(courses))
            }
        }
    }
}

// Editar cursos basiado nos seus ID's
function editCoursesById(id) {
    comboParceiro()
    comboFormador()
    //atualizarTags()
    renderCatalog(userId)

    // Obter valores do formulário da modal "Adicionar Curso"
    let inputTitulo = document.getElementById("idtitulo")
    let inputDescription = document.getElementById("idDescricao")
    let inputDate = document.getElementById("idData")
    let inputHour = document.getElementById("idHora")
    let inputPrice = document.getElementById("idPreco")
    let inputE_Price = document.getElementById("idPrecoEsp")
    let inputFormador = document.getElementById("idSelForm")
    let inputInstitution = document.getElementById("idSelParc")
    let inputLink = document.getElementById("idLink")
    let selectedTags = document.getElementsByClassName("tag")

    //courseId = id

    for (let i = 0; i < courses.length; i++) {
        if (courses[i]._id == id) {
            inputTitulo.value = courses[i]._title
            inputDescription.value = courses[i]._description
            inputDate.value = courses[i]._date
            inputHour.value = courses[i]._hour
            inputPrice.value = courses[i]._price
            inputE_Price.value = courses[i]._s_Price
            inputFormador.value = courses[i]._teacher
            inputInstitution.value = courses[i]._institution
            inputLink.value = courses[i]._link
            for (let j = 0; j < selectedTags.length; j++) {

                if (courses[i]._tagId.indexOf(selectedTags[j].getAttribute("value")) != -1) {
                    selectedTags[j].checked = true
                } else {
                    selectedTags[j].checked = false
                }
            }

        }
    }

}

// Função que vai alimentar o meu catálogo de formadores
function renderCatalog2() {

    //Para cada formador vou definir uma Card e compô-la com os dados do objeto
    let strHtmlCard = ""
    for (var i = 0; i < formadores.length; i++) {

        // Inicia a linha
        if (i % 4 == 0) {
            strHtmlCard += `<div class="row">`
        }

        // Cria a card formadores
        strHtmlCard += `<div class="col-sm-3 mt-2">
                <div id="${formadores[i]._id}" class="polaroid" data-toggle="modal" data-target="#modalSeeForm" style="width: 16rem;height:14rem">
                    <img  class="card-image-top" src="${formadores[i]._photo}" alt="${formadores[i]._name}" style="width:100%">
                    <div class="container">
                        <p>${formadores[i]._name}</p>`

        strHtmlCard += `</div>
                </div>      
            </div>`

        // Fecha a linha
        if (i % 4 == 3) {
            strHtmlCard += `</div>`
        }

    }

    //preencher o html com as cards
    let formadoresCatalog = document.getElementById("idCardFormad")
    formadoresCatalog.innerHTML = strHtmlCard

    //apanhar todos os cards formadores e verificar o seu id ao ser clicado
    let formerCard = document.getElementsByClassName("polaroid")
    for (let i = 0; i < formerCard.length; i++) {
        formerCard[i].addEventListener("click", function () {
            formadorId = formerCard[i].getAttribute("id")
            verCardFormador(formadorId)
        })
    }

    // Obter o botão REMOVE Formadores baseado no seu id
    let btnRemove = document.getElementById("eliminar")

    btnRemove.addEventListener("click", function () {

        let formerId = formadorId
        removeFormerById(formerId)
        $('#modalSeeForm').modal('hide')
        renderCatalog2()

    })

    // Obter o botão EDITAR Formadores baseado no seu id
    let btnEdit = document.getElementById("editar")

    btnEdit.addEventListener("click", function () {

        let formerId = formadorId
        editFormerById(formerId)
        $('#modalSeeForm').modal('hide')
        renderCatalog2()

    })
}

//função que preenche a modal de ver os formadores
function verCardFormador(id) {

    let modalformadorName = document.getElementById("modalNameFormad")
    let modalformadorlink = document.getElementById("modalFormadorlink")
    let modalformadorformation = document.getElementById("modalFormationFormad")
    let modalformadorCV = document.getElementById("modalCVFormad")

    for (let i = 0; i < formadores.length; i++) {
        if (formadores[i]._id == id) {
            modalformadorName.innerHTML = formadores[i]._name
            modalformadorformation.innerHTML = formadores[i]._formation
            modalformadorCV.innerHTML = formadores[i]._cVitae
            modalformadorlink.setAttribute("src", formadores[i]._photo)
        }
    }

}

// Remove formadores baseada no seu ID
function removeFormerById(id) {

    for (let i = 0; i < formadores.length; i++) {
        if (formadores[i]._id == id) {
            let ver_remove
            ver_remove = confirm("Deseja mesmo eliminar este Formador?")
            if (ver_remove) {
                formadores.splice(i, 1)
                //com a remoção do curso, guardar o array formadores e atualizar na local storage
                localStorage.setItem("Formadores", JSON.stringify(formadores))
            }
        }
    }
}

// Editar formadores basiado nos seus ID's
function editFormerById(id) {

    // Obter valores do formulário da modal "Adicionar formador"
    let inputName = document.getElementById("nameformador")
    let inputLink = document.getElementById("txtLinkFotoF")
    let inputFormation = document.getElementById("txtFormacao")
    let inputCV = document.getElementById("descVitae")

    formadorId = id

    for (let i = 0; i < formadores.length; i++) {
        if (formadores[i]._id == id) {
            inputName.value = formadores[i]._name
            inputFormation.value = formadores[i]._formation
            inputCV.value = formadores[i]._cVitae
            inputLink.value = formadores[i]._photo

        }
    }

}


// Preencher combobox com categorias para o filtro
function renderTags() {

    //Criar o HTML (option) para todos os tags
    let strHtml = "<option value='All'>Todos</option>"
    for (let i = 0; i < tags.length; i++) {
        strHtml += `<option value='${tags[i]._id}'>${tags[i]._name}</option>`
    }
    let selTags = document.getElementById("searchTag")
    selTags.innerHTML = strHtml

}

// Preencher combobox editar cursos com categorias
function atualizarTags() {

    //Criar o HTML (option) para todos os tags
    let strHtml = ""
    for (let i = 0; i < tags.length; i++) {
        strHtml += `<label class="form-check-label mr-3">
        <input class="form-check-input tag" type="checkbox" value="${tags[i]._id}"> ${tags[i]._name}</label><br>`
    }
    let selTags = document.getElementById("idSelTags")
    selTags.innerHTML = strHtml
}

// Preencher combobox com formadores
function comboFormador() {

    //Criar o HTML (option) para todos os formadores
    let strHtml = "<option value=''>Escolher</option>"
    for (let i = 0; i < formadores.length; i++) {
        strHtml += `<option value='${formadores[i]._id}'>${formadores[i]._name}</option>`
    }
    let selFormad = document.getElementById("idSelForm")
    selFormad.innerHTML = strHtml
}

// Preencher combobox com Parceiros
function comboParceiro() {

    //Criar o HTML (option) para todos os parceiros
    let strHtml = "<option value=''>Escolher</option>"
    for (let i = 0; i < partners.length; i++) {
        strHtml += `<option value='${partners[i]._id}'>${partners[i]._name}</option>`
    }
    let selParceiro = document.getElementById("idSelParc")
    selParceiro.innerHTML = strHtml
}

//Sobe a barra de navegação para o topo
function scrollToTop(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function () {
            if (window.scrollY != 0) {
                window.scrollBy(0, scrollStep);
            }
            else clearInterval(scrollInterval);
        }, 15);
}