window.onload = function () {
    saudacao()
}


function saudacao() {
    let myP = document.getElementById("txt")
    myP.innerHTML = "Bem-vindo à minha página!"

    let mybtn = document.getElementById("myBtn")
    mybtn.addEventListener("click", function() {
        let mytext = document.getElementById("itxt")
        if (mytext != "") {
            myP.innerHTML = "Bem-vindo, " + mytext.value + "!"
        } else {
            myP.innerHTML = "Bem-vindo à minha página!"
        }
    })
}

