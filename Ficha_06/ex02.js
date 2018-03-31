window.onload = function () {
    init()
}

function init() {

    let btncampus1 = document.getElementById("btnI")
    let btncampus2 = document.getElementById("btnII")
    let btncampus3 = document.getElementById("btnIII")
    let btnTodas = document.getElementById("btnAll")

    //Evento a ser chamado quando houver um clique no botão campus I
    btncampus1.addEventListener("click", function () {
        let refBtnAll = document.getElementsByTagName("input")
        let refBtn1 = document.getElementsByClassName("campus1")
     
        for (let i = 0; i < refBtn1.length; i++) {
            refBtn1[i].style.backgroundColor = 'green'
        }
        for (let j = 0; j < refBtnAll.length; j++) {
            if (refBtnAll[j].style.backgroundColor != 'green') {
                refBtnAll[j].style.visibility = "hidden"
            }
        }
    })
    //Evento a ser chamado quando houver um clique no botão campus II
    btncampus2.addEventListener("click", function () {
        let refBtnAll = document.getElementsByTagName("input")
        let refBtn2 = document.getElementsByClassName("campus2")

        for (let i = 0; i < refBtn2.length; i++) {
            refBtn2[i].style.backgroundColor = 'green'
        }

        for (let j = 0; j < refBtnAll.length; j++) {
            if (refBtnAll[j].style.backgroundColor != 'green') {
                refBtnAll[j].style.visibility = "hidden"
            }
        }
    })
    //Evento a ser chamado quando houver um clique no botão campus III
    btncampus3.addEventListener("click", function () {
        let refBtnAll = document.getElementsByTagName("input")
        let refBtn3 = document.getElementsByClassName("campus3")

        for (let i = 0; i < refBtn3.length; i++) {
            refBtn3[i].style.backgroundColor = 'green'
        }

        for (let j = 0; j < refBtnAll.length; j++) {
            if (refBtnAll[j].style.backgroundColor != 'green') {
                refBtnAll[j].style.visibility = "hidden"
            }
        }
    })
    //Evento a ser chamado quando houver um clique no botão Todos
    btnTodas.addEventListener("click", function () {
        let refBtnAll = document.getElementsByTagName("input")
        
        for (let i = 0; i < refBtnAll.length; i++) {
            refBtnAll[i].style.backgroundColor = 'green'
        }
    })
}