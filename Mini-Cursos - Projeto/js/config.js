// ######################################################################
// Classe utilizadores
// ######################################################################
let users = JSON.parse(localStorage.getItem("Users"))

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
// Classe categorias
// ######################################################################
let tags = JSON.parse(localStorage.getItem("Tags"))

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
let courses = JSON.parse(localStorage.getItem("Courses"))

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
            this._link = "./css/img/default.jpg"
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
// Classe formador
// ######################################################################
let formadores = JSON.parse(localStorage.getItem("Formadores"))

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
            this._photo = "css/img/formador.jpg"
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


window.onload = function () {
    renderTags()
    comboFormador()
    comboUsers()

    // Injetar utilizadores,cursos e categorias via código
    /* let user01 = new User("Evandro", "vand15@hotmail.com", 12345, "admin")
    users.push(user01);
    let user02 = new User("Joao", "joao@mail.pt", 54321, "admin")
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

    /* let newCourse01 = new Course("Bootstrap", "Mobile First", "22-04-2018", "14h30", 90 + "€", 70 + "€", "Ricardo Queirós", "Universidad de Málaga", "", 2)
    courses.push(newCourse01);
    let newCourse02 = new Course("Design Gráfico", "Logos e Mockups", "12-03-2018", "10h00", 110 + "€", 90 + "€", "Marta", "Universidad de Málaga", "", 1)
    courses.push(newCourse02);
    let newCourse03 = new Course("SVG", "Intro de Jogos", "22-04-2017", "16h15", 150 + "€", 130 + "€", "Teresa Terroso", "Universidad de Málaga", "", 3)
    courses.push(newCourse03);
    let newCourse04 = new Course("JavaScript", "Aprender o JQuery", "22-04-2002", "9h30", 70 + "€", 50 + "€", "Ricardo Queirós", "Universidad de Málaga", "", 2)
    courses.push(newCourse04)
    let newCourse05 = new Course("JavaScript", "Aprender o JQuery", "22-04-2002", "9h30", 70 + "€", 50 + "€", "Ricardo Queirós", "Universidad de Málaga", "", 2)
    courses.push(newCourse05)
    localStorage.setItem("Courses", JSON.stringify(courses)); */

    /* let formador01 = new Formador("Ricardo Queirós", "css/img/rqueiros.jpg", "Doutorado em Ciências de Compu-tadores", "Doutor em Ciências de Compu-tadores pela Faculdade de Ciências da Universidade do Porto (FCUP). Exerço a minha atividade como docente na Escola Superior de Media Artes e Design (ESMAD), onde sou responsável por disciplinas na área da Programação de Computadores, focada para os ambientes Web e Mobile. Paralelamente, desenvolvo atividade científica na área de Interoperabilidade entre Sistemas de E-learning e Gamificação. Sou autor de vários livros relacionados com computação móvel e de várias publicações científicas. Sou membro efetivo do Center for Research in Advanced Computing Systems (CRACS), uma unidade de investigação do laboratório Associado INESC TEC.")
    formadores.push(formador01);
    let formador02 = new Formador("Teresa Terroso", "", "Doutora em Engenharia Informática, mestre em Engenharia Biomédica e licenciada em Engenharia Electrotécnica e de Computadores", "Doutora em Engenharia Informática, mestre em Engenharia Biomédica e licenciada em Engenharia Electrotécnica e de Computadores pela Faculdade de Engenharia da Universidade do Porto - FEUP. Fez estágio curricular na Infineon Technologies, Mindelo, Portugal, foi Engenheira Informática no Centre Europeénne pour la Recherche Nucléaire, Genebra, Suíça, e na ProjectBox, Viseu, Portugal. É professora do ensino superior público desde 2008. Atualmente é docente na ESMAD - Escola Superior de Media Artes e Design, Vila do Conde, Portugal. Foi investigadora do Laboratório de Óptica e Mecânica Experimental, na FEUP. Atualmente colabora com o INESC – TEC (Instituto de Engenharia de Sistemas e Computadores – Tecnologia e Ciência), no Centro de Telecomunicações e Multimédia, com foco nas áreas de investigação de processamento de imagem e visão computacional. Tem vários artigos publicados em revistas nacionais e internacionais, um livro publicado na área de Visão Computacional.")
    formadores.push(formador02)
    //iniciar um utilizador na local storage
    localStorage.setItem("Formadores", JSON.stringify(formadores)); */


    // SUBMETER CURSO
    let frmCurseAdd = document.getElementById("formAddCourse")
    frmCurseAdd.addEventListener("submit", function (event) {

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
        let inputTag = document.getElementById("idSelTags")

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
            inputTag.value)

        // Adicionar novo objeto ao array curses
        courses.push(newCourse)
        alert("Curso adicionado com sucesso")
        localStorage.setItem("Courses", JSON.stringify(courses))

        //limpa o formulario
        frmCurseAdd.reset()

        //atualizar as comboBox
        renderTags()
        comboFormador()
        event.preventDefault()
    })

    // SUBMETER formador
    let frmFormadorAdd = document.getElementById("frmFormador")
    frmFormadorAdd.addEventListener("submit", function (event) {

        // Obter valores do formulário da modal "Adicionar Curso"
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

        //atualizar as comboBox
        renderTags()
        comboFormador()
        event.preventDefault()
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

        // Se sim, autenticar utilizador
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

            //atualizar as comboBox
            renderTags()
            comboFormador()
            event.preventDefault()
        }

    })

}

// Preencher combobox com categorias
function renderTags() {

    //Criar o HTML (option) para todos os tags
    let strHtml = "<option value=''>Escolher</option>"
    for (let i = 0; i < tags.length; i++) {
        strHtml += `<option value='${tags[i]._id}'>${tags[i]._name}</option>`
    }
    let selTags = document.getElementById("idSelTags")
    selTags.innerHTML = strHtml
}

// Preencher combobox com formadores
function comboFormador() {

    //Criar o HTML (option) para todos os tags
    let strHtml = "<option value=''>Escolher</option>"
    for (let i = 0; i < formadores.length; i++) {
        strHtml += `<option value='${formadores[i]._name}'>${formadores[i]._name}</option>`
    }
    let selFormad = document.getElementById("idSelForm")
    selFormad.innerHTML = strHtml
}

// Preencher combobox com formadores
function comboUsers() {

    //Criar o HTML (option) para todos os tags
    let strHtml = "<option value=''>Escolher</option>"
    for (let i = 0; i < users.length; i++) {
        strHtml += `<option value='${users[i]._id}'>${users[i]._name}</option>`
    }
    let selUser = document.getElementById("idGerirUser")
    selUser.innerHTML = strHtml
}

