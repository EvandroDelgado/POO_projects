window.onload = function () {
    
    document.getElementById("btnSubmit").addEventListener("click", function () {
        let myEmail = document.getElementById("email")
        let myPass = document.getElementById("password")

        alert(myPass.value+"#"+myEmail.value)
    })
   
    document.getElementById("btnlimpar").addEventListener("click", function () {
        document.getElementById("email").value = ""
        document.getElementById("password").value= ""
        
        document.getElementById("email").focus()
    })
}
