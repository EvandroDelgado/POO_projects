let myCourses = [] 
let myUsers = []
let idCard = 0
let userName = ""
let userId = 0

window.onload = function () {
    let optLogin = document.getElementById("idlogin")
    let optLogout = document.getElementById("idLogout")
    let optSalut = document.getElementById("salutUser")
    let optRegister = document.getElementById("idRegister")

    if (localStorage.getItem("Users")) {
        myUsers = JSON.parse(localStorage.getItem("Users"))
        console.log(myCourses)
    }

    var estadoLogin = JSON.parse(localStorage.getItem("estadoLogin"))

    if (estadoLogin == false) {
        // Esconder opções de autenticação
        optLogout.style.display = 'none'
        optSalut.style.display = 'none'
    }
    else {

        if (localStorage.getItem("idUser")) {
            userId = JSON.parse(localStorage.getItem("idUser"))
        }

        optLogin.style.display = 'none'
        optRegister.style.display = 'none'
        optLogout.style.display = 'block'
        for (let i = 0; i < myUsers.length; i++) {
            if (userId == myUsers[i]._id) {
                optSalut.innerHTML = 'Bem vindo&nbsp;<b>' + myUsers[i]._name + '</b>!'
            }
        }
        optSalut.style.display = 'block'
    }

    // LOGOUT
    optLogout.addEventListener("click", function () {
        userId = 0
        optLogin.style.display = 'block'
        optRegister.style.display = 'block'
        optLogout.style.display = 'none'
        optSalut.style.display = 'none'
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
    let txtInstit = document.getElementById("getInstit")
    let txtDescricao = document.getElementById("getDescricao")
    let txtlink = document.getElementById("idCursoImg")

    if (localStorage.getItem("Courses")) {
        myCourses = JSON.parse(localStorage.getItem("Courses"))
        console.log(myCourses)
    }

    if (localStorage.getItem("idCard")) {
        idCard = JSON.parse(localStorage.getItem("idCard")) - 1
        console.log(idCard)
    }

    for (let i = 0; i < myCourses.length; i++) {
        txtTitulo.innerHTML = myCourses[idCard]._title
        txtData.innerHTML = myCourses[idCard]._date
        txtHora.innerHTML = myCourses[idCard]._hour
        txtPreco.innerHTML = myCourses[idCard]._price + " €"
        txtEPreco.innerHTML = myCourses[idCard]._s_Price + " €"
        txtFormad.innerHTML = myCourses[idCard]._teacher
        txtInstit.innerHTML = myCourses[idCard]._institution
        txtDescricao.innerHTML = myCourses[idCard]._description
        txtlink.innerHTML = `<img id="idImg"  src="${myCourses[idCard]._link}" style="width: 100%;height:100%">`
        
    }


}

