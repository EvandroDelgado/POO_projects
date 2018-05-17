window.onload = function () {

    let myForm = document.getElementById("myForm")
    let myEmail = document.getElementById("email")
    let myPass = document.getElementById("password")

    myForm.addEventListener("submit", function (event) {
        alert(myPass.value + "#" + myEmail.value)
        event.preventDefault()
    })

    myForm.addEventListener("reset", function () {
        myEmail.focus()
    })
}
