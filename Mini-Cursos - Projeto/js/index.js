let tagId = 0
let userId = 0
let courseId = 0
let estadoLogin = "false"

// ######################################################################
// Classes utilizadores
// ######################################################################

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
// Preenche os utilizadores
// ######################################################################
let users = JSON.parse(localStorage.getItem("Users"))

// ######################################################################
// Preenche os categorias
// ######################################################################
let tags = JSON.parse(localStorage.getItem("Tags"))

// ######################################################################
// Preenche os cursos
// ######################################################################
let courses = JSON.parse(localStorage.getItem("Courses"))

// ######################################################################
// Preenche os formadores
// ######################################################################
let formadores = JSON.parse(localStorage.getItem("Formadores"))

window.onload = function () {
    // Referências para elementos HTML
    let optLogin = document.getElementById("idlogin")
    let optLogout = document.getElementById("idLogout")
    let optSalut = document.getElementById("salutUser")
    let optRegister = document.getElementById("idRegister")
    let optConfig = document.getElementById("idConfig")
    let tagId = document.getElementById("searchTag")

    //verifica se o utilizador esta logado
    var estadoLogin = localStorage.getItem("estadoLogin")
    console.log(estadoLogin)
    if (estadoLogin == "true") {

        //apanha o id do utilizador logado na local Storage
        let userId = JSON.parse(localStorage.getItem("idUser"))
        console.log(userId)
        //faz refresh ao catalogo de cursos

        renderCatalog(userId, tagId.value)
        renderCatalog2()
        renderTags()

        // Alterar navbar 
        optLogin.style.display = 'none'
        optRegister.style.display = 'none'
        optLogout.style.display = 'block'
        //o botão adicionar curso so aparece se o user for 1 ou 2(administradores)
        let userName = ""
        let tipoUser = ""

        //verifica o id do utlizador que esta logado e compara com as do array de users 
        //para pegar o nome do utilizador logado
        for (let i = 0; i < users.length; i++) {
            if (userId == users[i]._id) {

                tipoUser = users[i]._type

                optSalut.innerHTML = 'Bem vindo&nbsp;<b>' + users[i]._name + '</b>!'
            }
        }
        console.log(tipoUser)
        console.log(tipoUser == "admin")
        if (tipoUser == "admin") {
            console.log(tipoUser == "admin")
            optConfig.style.display = 'block'
        }
        else {
            optConfig.style.display = 'none'
        }
        optSalut.style.display = 'block'

    }
    else {

        renderCatalog()
        renderCatalog2()
        renderTags()

        // Esconder opções de autenticação
        optLogout.style.display = 'none'
        optSalut.style.display = 'none'
        optConfig.style.display = 'none'

        let frmLogin = document.getElementById("frmLogin")
        // SUBMISSÃO DE AUTENTICAÇÃO
        frmLogin.addEventListener("submit", function (event) {
            console.log(users)
            // Obter as referências para as caixas de texto
            let inputLoginEmail = document.getElementById("validEmail")
            let inputLoginPassword = document.getElementById("validPass")

            console.log("Email: " + inputLoginEmail.value)
            console.log("Pass: " + inputLoginPassword.value)

            // Iterar sobre o array e verificar se o utilizador já existe
            let userExists = false
            let userName = ""
            let tipoUser = ""
            for (var i = 0; i < users.length; i++) {
                if (users[i]._email == inputLoginEmail.value && users[i]._password == inputLoginPassword.value) {
                    userExists = true
                    userId = users[i]._id
                    userName = users[i]._name
                    tipoUser = users[i]._type
                }
            }

            // Se sim, autenticar utilizador
            if (userExists == true) {
                alert("Autenticação efetuado com sucesso!!")
                // Fechar a modal
                $('#loginModal').modal('hide')
                // Alterar navbar 
                optLogin.style.display = 'none'
                optRegister.style.display = 'none'
                optLogout.style.display = 'block'
                //o botão adicionar curso so aparece se o user for 1 ou 2(administradores)
                if (tipoUser == "admin") {
                    optConfig.style.display = 'block'
                }
                optSalut.innerHTML = 'Bem vindo&nbsp;<b>' + userName + '</b>!'
                optSalut.style.display = 'block'

                //quando logado estado login passa a true e guarda na local storage
                let estadoLogin = "true"
                localStorage.setItem("estadoLogin", estadoLogin)
                localStorage.setItem("idUser", userId)


                // Atualizar o meu catálogo
                renderCatalog(userId)
            } else {
                // Se não, exibir mensagem a indicar a inexistência do utilizador no array
                alert("Dados de autenticação inválidos!!")
            }
            event.preventDefault()

        })

        // SUBMISSÃO DE REGISTO
        let frmRegister = document.getElementById("frmRegister")
        frmRegister.addEventListener("submit", function () {
            // 1. Validar pass iguais
            let inputPassword1 = document.getElementById("pass")
            let inputPassword2 = document.getElementById("confirmPass")
            let inputTypeUser1 = document.getElementById("gridRadios1")
            let inputTypeUser2 = document.getElementById("gridRadios2")
            let strError = ""

            console.log(inputPassword1.value)
            console.log(inputPassword2.value)

            // 1. Validar se password igual confirmar password
            if (inputPassword1.value != inputPassword2.value) {
                strError = "As passwords têm de ser iguais"
            }

            // 2. Validar se já existe um user com o mesmo email
            let inputEmail = document.getElementById("emailUser")
            let userExist = false
            for (var i = 0; i < users.length; i++) {
                if (users[i]._email == inputEmail.value) {
                    userExist = true
                }
            }

            // 3. Validar se um dos radiobuttons for seleccionado
            //passar o valor da radio seleccionada para variavel tipoUser
            let tipoUser = ""
            if (inputTypeUser1.checked == false && inputTypeUser2.checked == false) {
                strError = "Seleccione o tipo de utilizador"
            }
            if (inputTypeUser1.checked == false) {
                tipoUser = inputTypeUser2.value
            }
            else {
                tipoUser = inputTypeUser1.value
            }

            //se utilizador ja existir envia mensagem erro
            if (userExist == true) {
                strError += "\nEmail já existente!"
            }

            // 3. Criar o utilizador
            if (strError == "") {
                let inputName = document.getElementById("nameUser")
                let newUser = new User(inputName.value, inputEmail.value, inputPassword1.value, tipoUser)
                // 4. Adicionar ao array
                users.push(newUser)
                // guardar o array na local Storage
                localStorage.setItem("Users", JSON.stringify(users))
                console.log(users)
                userId = newUser.id
                localStorage.setItem("idUser", JSON.stringify(userId))
                let userName = newUser.name

                // 5. Alerta de sucesso!
                alert("Registo efetuado com sucesso!!")
                // 6. Fechar a modal
                $('#modalRegisterForm').modal('hide')

                // 7. ALterar navbar 
                optLogin.style.display = 'none'
                optRegister.style.display = 'none'
                optLogout.style.display = 'block'
                if (tipoUser == "admin") {
                    optConfig.style.display = 'block'
                }
                optSalut.innerHTML = 'Bem vindo&nbsp;<b>' + userName + '</b>!'
                optSalut.style.display = 'block'
                let estadoLogin = "true"
                localStorage.setItem("estadoLogin", estadoLogin)
                localStorage.setItem("idUser", userId)
                /*  let estadoLogin = "true"
                 localStorage.setItem("estadoLogin", JSON.stringify(estadoLogin)) */


            } else {
                alert(strError)
                //frmRegister.reset()
                //inputName.focus()
            }
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

        // 2. Renderizar catálogo
        renderCatalog(userId, tagId.value)

    })

}



// Função que vai alimentar o meu catálogo de cursos
function renderCatalog(userId = 0, tagId = "All") {

    //Para cada curso vou definir uma Card e compô-la com os dados do objeto
    let strHtmlCard = ""
    let cursosFiltrados = []

    for (let j = 0; j < courses.length; j++) {

        //se utilizador estiver logado ou não apresenta todos os cards
        if ((userId == 0 && tagId == "All") ||
            (userId != 0 && tagId == "All") ||
            (tagId == courses[j]._tagId)) {

            //preenche o array com os cursos filtrados
            cursosFiltrados.push(courses[j])

        }
        
    }

    for (let i = 0; i < cursosFiltrados.length; i++) {
        
        // Inicia a linha
        if (i % 3 == 0) {
            strHtmlCard += `<div class="row">`
        }

        // Cria a card
        strHtmlCard += `<div class="col-sm-4 mt-2">
                <div class="card" style="width: 22rem;height:20rem">
                    <img class="card-img-top" src="${cursosFiltrados[i]._link}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${cursosFiltrados[i]._title}</h5>
                        <p class="card-text">${cursosFiltrados[i]._description}</p>`
        if (userId == 1 || userId == 2) {
            strHtmlCard += `<a id="${cursosFiltrados[i]._id}" class="btn btn-dark verMais" type="button" href="./ver_cursos.html">VER MAIS</a>`
            strHtmlCard += `<a id="${cursosFiltrados[i]._id}" href="#" class="btn btn-danger ml-3 remove">REMOVER</a>`
        } else {
            strHtmlCard += `<a id="${cursosFiltrados[i]._id}" class="btn btn-dark verMais" type="button" href="./ver_cursos.html">VER MAIS</a>`
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
            let ver_remove
            ver_remove = confirm("Deseja mesmo eliminar este Curso?")
            if (ver_remove) {
                // se clicar num botao especifico, remove-o do array
                let courseId = btnRemove[i].getAttribute("id")
                removeCourseById(courseId)
                renderCatalog(userId)
            }

        })
    }

    // Obter todos os botões Ver mais
    let btnVerMais = document.getElementsByClassName("verMais")
    // Para cada botão, adicionar um listener para escutar pelo evento clique
    for (let i = 0; i < btnVerMais.length; i++) {
        btnVerMais[i].addEventListener("click", function () {

            //obtem o id da card que foi selecionada e guarda na local storage
            //para poder visualizar os dados na pagina ver cursos
            let courseId = btnVerMais[i].getAttribute("id")
            localStorage.setItem("idCard", JSON.stringify(courseId))
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

}

// Remove cursos baseada no seu ID
function removeCourseById(id) {
    console.log("ID: " + id)
    for (let i = 0; i < courses.length; i++) {
        if (courses[i]._id == id) {
            courses.splice(i, 1)
            //com a remoção do curso, guardar o array cursos atualizado na local storage
            localStorage.setItem("Courses", JSON.stringify(courses))
        }
    }
}

// Função que vai alimentar o meu catálogo de formadores
function renderCatalog2(userId = 0) {

    // 1. Iterar sobre o array de formadores

    // 2. Para cada formador vou definir uma Card e compô-la com os dados do objeto
    let strHtmlCard = ""
    for (var i = 0; i < formadores.length; i++) {

        // Inicia a linha
        if (i % 4 == 0) {
            strHtmlCard += `<div class="row">`
        }

        // Cria a card
        strHtmlCard += `<div class="col-sm-3 mt-2">
                <div id="${formadores[i]._id}" class="polaroid" data-toggle="modal" data-target="#modalSeeForm" style="width: 16rem;height:14rem">
                    <img class="card-image-top" src="${formadores[i]._photo}" alt="${formadores[i]._name}" style="width:100%">
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
            let formadorId = formerCard[i].getAttribute("id")
            verCardFormador(formadorId)
        })
    }

}

//função que preenche o madal de ver os formadores
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
