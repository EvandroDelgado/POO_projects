window.onload = function () {

    let DataAtual = new Date().toDateString()
    

    let frmValid = document.getElementById("myForm")

    frmValid.addEventListener("submit", function (event) {

        let myPass = document.getElementById("pass")
        let confPass = document.getElementById("confpass")

        if (myPass.value == confPass.value) {
            alert("Registo efectuado com sucesso")
        }
        else {
            let valpass = document.getElementById("valpass")
            valpass.innerHTML = "Campo confirmar password diferente password"
            event.preventDefault()
        }
        

        let dataNasc = document.getElementById("dataN").value
        let data2 = new Date(dataNasc).toDateString()

        if (data2 > DataAtual) {
            let valdate = document.getElementById("date")
            valdate.innerHTML = "Data Invalida"
            event.preventDefault()
        }
    })
}