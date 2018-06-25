
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
        console.log(users[i]._email == inputLoginEmail.value && users[i]._password == inputLoginPassword.value)
        if (users[i]._email == inputLoginEmail.value && users[i]._password == inputLoginPassword.value) {
            userExists = true
            
            userId = users[i]._id
        }
    }

    // Se sim, autenticar utilizador
    if (userExists == true) {
        alert("Autenticação efetuado com sucesso!!")
        // Fechar a modal
        $('#loginModal').modal('hide')
        window.location.reload()

        //quando logado estado login passa a true e guarda na local storage
        let estadoLogin = "true"
        localStorage.setItem("estadoLogin", estadoLogin)
        localStorage.setItem("idUser", userId)

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
    let inputImageUser = document.getElementById("idUseLink")
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
        let newUser = new User(inputName.value, inputEmail.value, inputPassword1.value, inputImageUser.value, tipoUser)
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
        window.location.reload()
        // 6. Fechar a modal
        $('#modalRegisterForm').modal('hide')

        let estadoLogin = "true"
        localStorage.setItem("estadoLogin", estadoLogin)
        localStorage.setItem("idUser", userId)

    } else {
        alert(strError)
    }
    event.preventDefault()
})

