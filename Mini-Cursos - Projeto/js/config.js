//Definição de variaveis globais

let courses = []
let users = []
let partners = []
let comentarios = []
let tags = []
let pontuacoes = []
let formadores = []


// ######################################################################
// Classe utilizadores
// ######################################################################
if (localStorage.getItem("Users")) {
    users = JSON.parse(localStorage.getItem("Users"))
}


class User {

    constructor(name, email, password, type) {
        this._id = User.getLastId() + 1
        this.name = name
        this.email = email
        this.password = password
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
// Preencher Categorias
// ######################################################################
if (localStorage.getItem("Tags")) {
    tags = JSON.parse(localStorage.getItem("Tags"))
}

// ######################################################################
// Classe categorias
// ######################################################################

class Tag {

    constructor(name) {
        this._id = Tag.getLastId() + 1
        this.name = name
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

    static getLastId() {
        let lastId = 0
        if (tags.length != 0) {
            lastId = tags[tags.length - 1]._id
        }
        return lastId
    }

}

// ######################################################################
// Classe cursos
// ######################################################################
if (localStorage.getItem("Courses")) {
    courses = JSON.parse(localStorage.getItem("Courses"))
}

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

    // Injetar utilizadores,cursos e categorias via código
    /* let user01 = new User("Evandro", "vand15@hotmail.com", 123456,"", "administrador")
    users.push(user01);
    let user02 = new User("Joao", "joao@mail.pt", 654321, "","administrador")
    users.push(user02)
    //iniciar um utilizador na local storage
    localStorage.setItem("Users", JSON.stringify(users)); */


    /* let tag01 = new Tag("Design")
    tags.push(tag01);
    let tag02 = new Tag("Programação")
    tags.push(tag02)
    let tag03 = new Tag("Animação")
    tags.push(tag03)
    localStorage.setItem("Tags", JSON.stringify(tags)); */

    /*let newCourse01 = new Course("Bootstrap", "Mobile First", "2018-04-22", "14:30", 90 + "€", 70, 1, 1, "", ["2"])
    courses.push(newCourse01);
    let newCourse02 = new Course("Design Gráfico", "Logos e Mockups", "2018-03-12", "10:00", 110, 90 + "€", 2, 2, "", ["1"])
    courses.push(newCourse02);
    let newCourse03 = new Course("SVG", "Intro de Jogos", "2017-02-22", "16:15", 150 + "€", 130 , 2, 1, "", ["3"])
    courses.push(newCourse03);
    let newCourse04 = new Course("JavaScript", "Aprender o JQuery", "2018-08-15", "9:30", 70, 50 + "€", 1, 2, "", ["2"])
    courses.push(newCourse04)
    let newCourse05 = new Course("JavaScript", "Aprender o JQuery", "2018-09-03", "9:30", 70, 50 + "€", 1, 1, "", ["2"])
    courses.push(newCourse05)
    localStorage.setItem("Courses", JSON.stringify(courses));*/

    /* let formador01 = new Formador("Ricardo Queirós", "css/img/rqueiros.jpg", "Doutorado em Ciências de Compu-tadores", "Doutor em Ciências de Compu-tadores pela Faculdade de Ciências da Universidade do Porto (FCUP). Exerço a minha atividade como docente na Escola Superior de Media Artes e Design (ESMAD), onde sou responsável por disciplinas na área da Programação de Computadores, focada para os ambientes Web e Mobile. Paralelamente, desenvolvo atividade científica na área de Interoperabilidade entre Sistemas de E-learning e Gamificação. Sou autor de vários livros relacionados com computação móvel e de várias publicações científicas. Sou membro efetivo do Center for Research in Advanced Computing Systems (CRACS), uma unidade de investigação do laboratório Associado INESC TEC.")
    formadores.push(formador01);
    let formador02 = new Formador("Teresa Terroso", "", "Doutora em Engenharia Informática, mestre em Engenharia Biomédica e licenciada em Engenharia Electrotécnica e de Computadores", "Doutora em Engenharia Informática, mestre em Engenharia Biomédica e licenciada em Engenharia Electrotécnica e de Computadores pela Faculdade de Engenharia da Universidade do Porto - FEUP. Fez estágio curricular na Infineon Technologies, Mindelo, Portugal, foi Engenheira Informática no Centre Europeénne pour la Recherche Nucléaire, Genebra, Suíça, e na ProjectBox, Viseu, Portugal. É professora do ensino superior público desde 2008. Atualmente é docente na ESMAD - Escola Superior de Media Artes e Design, Vila do Conde, Portugal. Foi investigadora do Laboratório de Óptica e Mecânica Experimental, na FEUP. Atualmente colabora com o INESC – TEC (Instituto de Engenharia de Sistemas e Computadores – Tecnologia e Ciência), no Centro de Telecomunicações e Multimédia, com foco nas áreas de investigação de processamento de imagem e visão computacional. Tem vários artigos publicados em revistas nacionais e internacionais, um livro publicado na área de Visão Computacional.")
    formadores.push(formador02)
    //iniciar um utilizador na local storage
    localStorage.setItem("Formadores", JSON.stringify(formadores)); */

    let optAddCurso = document.getElementById("AC")
    let optAddFormador = document.getElementById("AF")
    let optAddCateg = document.getElementById("AT")
    let optGerirUsers = document.getElementById("GU")
    let selectedTags = document.getElementsByClassName("form-check-input")

    optAddCurso.addEventListener("click", function () {
        comboParceiro()
        comboFormador()
        renderTags()

        // SUBMETER CURSO
        let frmCurseAdd = document.getElementById("formAddCourse")
        frmCurseAdd.addEventListener("submit", function (event) {

            let inputDate = document.getElementById("idData")

            // Validate Platforms field
            let tagsSelect = []
            let strError = ""

            for (let i = 0; i < selectedTags.length; i++) {
                if (selectedTags[i].checked == true) {
                    tagsSelect.push(selectedTags[i].value)
                }
            }

            if (tagsSelect.length == 0) {
                strError = "Por favor, selecione pelo menos uma categoria!"
            }

            let dataCurso = Date.parse(inputDate.value)
            let dataAtual = Date.parse(Date())
            if (dataCurso < dataAtual) {
                strError += "A data tem que ser superior à data atual!\n"
            }

            if (strError == "") {
                // Obter valores do formulário da modal "Adicionar Curso"
                let inputTitulo = document.getElementById("idtitulo")
                let inputDescription = document.getElementById("idDescricao")
                let inputHour = document.getElementById("idHora")
                let inputPrice = document.getElementById("idPreco")
                let inputE_Price = document.getElementById("idPrecoEsp")
                let inputFormador = document.getElementById("idSelForm")
                let inputInstitution = document.getElementById("idSelParc")
                let inputLink = document.getElementById("idLink")
                let inputTag = tagsSelect

                // Criar objeto curso
                let newCourse = new Course(inputTitulo.value,
                    inputDescription.value,
                    inputDate.value,
                    inputHour.value,
                    inputPrice.value,
                    inputE_Price.value,
                    inputFormador.value,
                    inputInstitution.value,
                    inputLink.value,
                    inputTag)

                // Adicionar novo objeto ao array curses
                courses.push(newCourse)
                alert("Curso adicionado com sucesso")
                localStorage.setItem("Courses", JSON.stringify(courses))

                //limpa o formulario
                frmCurseAdd.reset()

                //atualizar as comboBox
                renderTags()
                comboFormador()
            } else {
                alert(strError)
            }
            event.preventDefault();
        })
    })


    optAddFormador.addEventListener("click", function () {
        // SUBMETER formador
        let frmFormadorAdd = document.getElementById("frmFormador")
        frmFormadorAdd.addEventListener("submit", function (event) {

            // Obter valores do formulário da modal "Adicionar formador"
            let inputName = document.getElementById("nameformador")
            let inputLink = document.getElementById("txtLinkFotoF")
            let inputFormation = document.getElementById("txtFormacao")
            let inputCV = document.getElementById("descVitae")

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

            event.preventDefault()
        })
    })

    optAddCateg.addEventListener("click", function () {
        //preencher comboBox com as categorias
        let strHtml = "<option value=''>Escolher</option>"
        for (let i = 0; i < tags.length; i++) {
            strHtml += `<option value='${tags[i]._id}'>${tags[i]._name}</option>`
        }
        let escolherTag = document.getElementById("inputSelTags")
        escolherTag.innerHTML = strHtml

        let tagEscolhido = ""
        let optOk = document.getElementById("okCateg")

        optOk.addEventListener("click", function () {
            tagEscolhido = document.getElementById("inputSelTags").value
            alert("Categoria selecionada")
        })
        console.log(tagEscolhido)

        let optDeletarCateg = document.getElementById("deletarCateg")

        optDeletarCateg.addEventListener("click", function () {
            for (let i = 0; i < tags.length; i++) {
                if (tagEscolhido == tags[i]._id) {
                    tags.splice(i, 1)
                    alert("Eliminaste a categoria com sucesso")
                    localStorage.setItem("Tags", JSON.stringify(tags))
                    window.location.reload()
                }
            }
        })

        // SUBMETER categoria
        let frmCategAdd = document.getElementById("frmCateg")
        frmCategAdd.addEventListener("submit", function (event) {

            // Obter valores do formulário do formulário categoria"
            let inputName = document.getElementById("nameCateg")

            let categExists = false

            for (var i = 0; i < tags.length; i++) {
                if (tags[i]._name == inputName.value) {
                    categExists = true
                }
            }

            // Se sim enviar alerta
            if (categExists == true) {
                alert("Categoria já existe")
                event.preventDefault()
            }
            else {
                // Criar objeto curso
                let newTag = new Tag(inputName.value)

                // Adicionar novo objeto ao array formadores
                tags.push(newTag)
                alert("Categoria adicionado com sucesso")
                console.log(newTag)
                localStorage.setItem("Tags", JSON.stringify(tags))

                //limpa o formulario
                frmCategAdd.reset()
                renderTags2()
                event.preventDefault()
            }

        })

    })

    optGerirUsers.addEventListener("click", function () {
        comboUsers()

        let userEscolhido
        let optOk = document.getElementById("ok")

        optOk.addEventListener("click", function () {
            let txtImg = document.getElementById("cardImage")
            let txtNomeUser = document.getElementById("nomeUser")
            let txtEmailUser = document.getElementById("emailUser")
            let txtTipoUser = document.getElementById("tipoUser")

            let str = ""

            let selUser = document.getElementById("idGerirUser")
            console.log(selUser.value)
            for (let i = 0; i < users.length; i++) {
                if (selUser.value == users[i]._id) {
                    userEscolhido = users[i]._id
                    str = `<div class="row">
                    <div class="col-sm"></div>
                    <div class="col-sm">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                    <p>
                                        <img id="cardImg" class=" img-fluid" src="${users[i]._foto}" alt="card image">
                                    </p>
                                    <h4 id="nomeUser" class="card-title">${users[i]._name}</h4>
                                    <p id="emailUser" class="card-text">${users[i]._email}</p>
                                    <h6 id="tipoUser" class="card-title mt-2">${users[i]._type}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm"></div>
                </div>`
                }
            }

            let contend = document.getElementById("cardSeeUser")
            contend.innerHTML = str
        })

        let optDeletar = document.getElementById("deletar")

        optDeletar.addEventListener("click", function () {
            for (let i = 0; i < users.length; i++) {
                if (userEscolhido == users[i]._id) {

                    let ver_remove
                    ver_remove = confirm("Deseja mesmo eliminar o utilizador "+ users[i]._name +" ?")
                    if (ver_remove) {
                        users.splice(i, 1)
                        alert("Eliminaste o utilizador com sucesso")
                        //quando é removido um utilizador ele elimina os seus comentários 
                        for (let j = 0; j < comentarios.length; j++) {
                            for (let j = 0; j < comentarios.length; j++) {
                                if (userEscolhido == comentarios[j]._id_User) {
                                    comentarios.splice(j, 1)
                                } console.log(comentarios)
                                //com a remoção do utilizador, guardar o array comentários atualizado na local storage
                                localStorage.setItem("Comentarios", JSON.stringify(comentarios))
                            }
                        }

                        //quando é removido um utilizador ele elimina as suas pontuações
                        for (let k = 0; k < pontuacoes.length; k++) {
                            for (let k = 0; k < pontuacoes.length; k++) {
                                if (userEscolhido == pontuacoes[k]._id_User) {
                                    pontuacoes.splice(k, 1)
                                }
                                //com a remoção do utilizador, guardar o array pontuações atualizado na local storage
                                localStorage.setItem("Pontuações", JSON.stringify(pontuacoes))
                            } console.log(pontuacoes)
                        }
                        localStorage.setItem("Users", JSON.stringify(users))
                        window.location.reload()
                    }
                }
            }
        })

        let selTipo = document.getElementById("idMudarTipo")

        let formUser = document.getElementById("frmGerirUser")
        formUser.addEventListener("submit", function (event) {
            for (let i = 0; i < users.length; i++) {
                if (userEscolhido == users[i]._id) {
                    users[i]._type = selTipo.value
                    alert("Alteraste o tipo de utilizador com sucesso")
                    localStorage.setItem("Users", JSON.stringify(users))
                    window.location.reload()
                }
            }
            event.preventDefault()
        })

    })


}

// Preencher combobox com categorias adicionar curso
function renderTags() {

    //Criar o HTML (option) para todos os tags
    let strHtml = ""
    for (let i = 0; i < tags.length; i++) {
        strHtml += `<label class="form-check-label mr-3">
        <input class="form-check-input" type="checkbox" name="" id="" value="${tags[i]._id}"> ${tags[i]._name}</label><br>`
    }
    let selTags = document.getElementById("idSelTags")
    selTags.innerHTML = strHtml

}

// Preencher combobox com categorias adicionar categoria
function renderTags2() {

    let strHtml = "<option value=''>Escolher</option>"
    for (let i = 0; i < tags.length; i++) {
        strHtml += `<option value='${tags[i]._id}'>${tags[i]._name}</option>`
    }
    let escolherTag = document.getElementById("inputSelTags")
    escolherTag.innerHTML = strHtml

}

// Preencher combobox com formadores
function comboFormador() {

    //Criar o HTML (option) para todos os tags
    let strHtml = "<option value=''>Escolher</option>"
    for (let i = 0; i < formadores.length; i++) {
        strHtml += `<option value='${formadores[i]._id}'>${formadores[i]._name}</option>`
    }
    let selFormad = document.getElementById("idSelForm")
    selFormad.innerHTML = strHtml
}

// Preencher combobox com formadores
function comboUsers() {

    //Criar o HTML (option) para todos os users
    let strHtml = "<option value=''>Escolher</option>"
    for (let i = 0; i < users.length; i++) {
        strHtml += `<option value='${users[i]._id}'>${users[i]._name}</option>`
    }
    let selUser = document.getElementById("idGerirUser")
    selUser.innerHTML = strHtml
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

function addCurso() {
    let strHtmlCard = ""

    strHtmlCard = `<h4>Adicionar Curso</h4>
    <div id="curso" class="row mx-3">
        <div class="container">
            <div class="card card-register mx-auto mt-5 mb-5">
                <div class="card-body">
                    <form id="formAddCourse" action="">

                        <div class="modal-body mx-3">
                            <div class="form-group mb-2">
                                <label data-error="wrong" data-success="right" for="idtitulo">Titulo Curso</label>
                                <input type="text" id="idtitulo" class="form-control validate" maxlength="30" required>
                            </div>
                            <div class="form-group mb-2">
                                <label data-error="wrong" data-success="right" for="idDescricao">Descrição</label>
                                <textarea id="idDescricao" cols="115" rows="2" maxlength="120"></textarea>
                            </div>
                            <div class="form-group mb-2">
                                <label data-error="wrong" data-success="right" for="idData">Data Realização</label>
                                <input type="date" id="idData" class="form-control validate" maxlength="10" required>
                            </div>
                            <div class="form-group mb-2">
                                <label data-error="wrong" data-success="right" for="idHora">Hora Realização</label>
                                <input type="time" id="idHora" class="form-control validate" maxlength="5" required>
                            </div>
                            <div class="form-group mb-2">
                                <label data-error="wrong" data-success="right" for="idPreco">Preço</label>
                                <input type="number" id="idPreco" class="form-control validate" maxlength="4" placeholder="€" required>
                            </div>
                            <div class="form-group mb-2">
                                <label data-error="wrong" data-success="right" for="idPrecoEsp">Preço Especial</label>
                                <input type="number" id="idPrecoEsp" class="form-control validate" maxlength="4" placeholder="€" required>
                                <p id="obs">(obs:Preço para estudantes / membros IPP ou outros)</p>
                            </div>
                            <div class="form-group mb-2">
                                <label data-error="wrong" data-success="right" for="idSelForm">Formador Responsável</label>
                                <select id="idSelForm" class="form-control validate" required>
                                </select>
                            </div>
                            <div class="form-group mb-2">
                                <label data-error="wrong" data-success="right" for="idSelParc">Instituição Parceira</label>
                                <select id="idSelParc" class="form-control validate">
                                </select>
                            </div>
                            <div class="form-group mb-2">
                                <label>Categorias</label><br>
                                <div class="form-check" id="idSelTags">
                                        
                                </div>
                            </div>
                            <div class="form-group mb-2">
                                <label data-error="wrong" data-success="right" for="idLink">Link para foto</label>
                                <input type="text" id="idLink" class="form-control validate">
                            </div>

                        </div>
                        <div class="modal-footer d-flex justify-content-center">
                            <button class="btn btn-dark" type="submit">Guardar</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>`

    //preencher o html com os forms
    let formCurso = document.getElementById("body")
    formCurso.innerHTML = strHtmlCard
}

function addFormador() {
    let strHtmlCard = ""

    strHtmlCard = `<h4>Adicionar Formador</h4>
    <div id="formador" class="row mx-3">
        <div class="container">
            <div class="card card-register mx-auto mt-3 mb-5">
                <div class="card-body">
                    <form id="frmFormador" action="">
                        <div class="form-group mb-2">
                            <label data-error="wrong" data-success="right" for="nameformador">Nome Formador</label>
                            <input id="nameformador" type="text" class="form-control validate" maxlength="30" required>
                        </div>
                        <div class="form-group mb-2">
                            <label data-error="wrong" data-success="right" for="txtLinkFotoF">link Foto</label>
                            <input id="txtLinkFotoF" type="text" class="form-control validate">
                        </div>

                        <div class="form-group mb-2">
                            <label data-error="wrong" data-success="right" for="txtFormacao">Formação</label>
                            <input type="text" id="txtFormacao" class="form-control validate" maxlength="50" required>
                        </div>
                        <div class="form-group mb-4">
                            <label data-error="wrong" data-success="right" for="descVitae">Resume C.Vitae</label>
                            <textarea id="descVitae" cols="123" rows="4" maxlength="120"></textarea>
                        </div>


                        <div class="modal-footer d-flex justify-content-center">
                            <button class="btn btn-dark" type="submit">Guardar</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>`

    //preencher o html com os forms
    let formFormador = document.getElementById("body")
    formFormador.innerHTML = strHtmlCard
}

function addCateg() {
    let strHtmlCard = ""

    strHtmlCard = `<h4>Adicionar Categoria</h4>
    <div id="categ" class="row mx-3">
        <div class="container">
            <div class="card card-register mx-auto mt-3 mb-5">
                <div class="card-body">
                        <div class="form-group mb-2">
                            <label data-error="wrong" data-success="right" for="inputSelTags">Categoria</label>
                            <select id="inputSelTags" class="form-control validate">
                            </select>
                        </div>
                        Para validar a tag escolhida clique aqui 
                        <button id="okCateg" class="btn mt-1">OK</button>
                        e elimina-a aqui  
                        <button id="deletarCateg" class="btn mt-1"><i class="fas fa-trash"></i></button><br>
                        
                    <form id="frmCateg" action="">
                        <div class="form-group mb-2">
                            <label data-error="wrong" data-success="right" for="nameCateg">Nova Categoria</label>
                            <input id="nameCateg" type="text" class="form-control validate" maxlength="30" required>
                        </div>
                        <div class="modal-footer d-flex justify-content-center">
                            <button class="btn btn-dark" type="submit">Guardar</button>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    </div>`

    //preencher o html com os forms
    let formCateg = document.getElementById("body")
    formCateg.innerHTML = strHtmlCard
}
function gerirUser() {
    let strHtmlCard = ""

    strHtmlCard = `<h4>Gerir Utilizadores</h4>
    <div id="users" class="row mx-3">
        <div class="container">
            <div class="card card-register mx-auto mt-3 mb-5">
                <div class="card-body">
                    <form id="frmGerirUser" action="">
                        <div class="form-group mb-2">
                            <label data-error="wrong" data-success="right" for="idGerirUser">Utilizador</label>
                            <select id="idGerirUser" class="form-control validate" required>
                                <option value="">Escolher</option>
                            </select>
                            Para ver mais detalhes sobre o utilizador faz clique aqui 
                            <button id="ok" class="btn mt-1">OK</button>
                            Ou se queres elimina-lo clique aqui
                            <button id="deletar" class="btn mt-1"><i class="fas fa-trash"></i></button>
                        </div>
                        <div class="form-group mb-2">
                            <label data-error="wrong" data-success="right" for="idMudarTipo">Tipo Utilizador</label>
                            <select id="idMudarTipo" class="form-control validate" required>
                                <option value="">Escolher</option>
                                <option value="administrador">administrador</option>
                                <option value="Docente">Docente</option>
                                <option value="Estudante">Estudante</option>
                            </select>
                        </div>
                        <div class="modal-footer d-flex justify-content-center">
                            <button class="btn btn-dark" type="submit">Guardar</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
        <div id="cardSeeUser" class="container">
            
        </div>
    </div>`

    //preencher o html com os forms
    let formGerirUser = document.getElementById("body")
    formGerirUser.innerHTML = strHtmlCard
}