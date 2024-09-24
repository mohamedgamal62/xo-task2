let startBt = document.querySelectorAll(".moodList .start")
let backall = document.querySelector(".moodList" )
let turn = "x"
let allBoxs = document.querySelectorAll(".boxs .box")
let array = Array.from(allBoxs)
let title = document.querySelector(".title")
let random = array[Math.floor(Math.random() * array.length )]
let text = document.querySelector(".Settings .GameName")
let stop = true


function computerplayer () {
        for (let i = 0 ; i < array.length ; i++) {
            array[i].addEventListener ("click" , (e) => {
                if (e.target.innerHTML !== "") {return}
                if (turn = "x") {
                    e.target.innerHTML = 'x'
                    title.innerHTML = "o"
                    checkwinner()
                    let non = setTimeout(computerplay , 500)
                    if (stop === false) {
                        clearTimeout(non)
                    }
                    turn = 'o'
                    stop = true
                }
            })
        }
    }
function computerplay () {
    let emptyboxs = []
    for (let i = 0 ; i < array.length ; i++) {
        if (array[i].innerHTML === ""){
            emptyboxs.push(array[i])
        }
    }
    let random = emptyboxs[Math.floor(Math.random() * emptyboxs.length )]
    random.innerHTML = "o"
    title.innerHTML = "x"
    checkwinner()
    turn = "x"

}

startBt.forEach((e) => {
    e.addEventListener("click" , (el) => {
    backall.style.display = "none"
    if (el.currentTarget.dataset.num === "one"){
        computerplayer()
    }
    if (el.currentTarget.dataset.num === "two"){
    allBoxs.forEach((el) => {
    el.onclick = function () {
        if (turn === "x" && el.innerHTML === "") {
            el.innerHTML = "x"
            turn = "o"
            title.innerHTML = "o"
        }else if (turn === "o" && el.innerHTML === "") {
            el.innerHTML = "o"
            turn = "x"
            title.innerHTML = "x"
        }
        checkwinner()
    }
})
    }  
    })
})

function win (num1,num2,num3) {
    title.innerHTML = `${array[num1].innerHTML} Winner`
    text.innerHTML = `${array[num1].innerHTML} Winner`
    document.getElementById(`item`+num1).style.background = "#000"
    document.getElementById(`item`+num2).style.background = "#000"
    document.getElementById(`item`+num3).style.background = "#000"
    for (let i = 0 ; i< array.length ; i++) {
        array[i].classList.add("done")
    }
    SettingsList()
    stop = false
}

function checkwinner () {
    if (array[0].innerHTML === array[1].innerHTML && array[1].innerHTML === array[2].innerHTML && array[0].innerHTML !== "") {win(0,1,2)      
    }else if (array[3].innerHTML === array[4].innerHTML && array[4].innerHTML === array[5].innerHTML && array[3].innerHTML !== ""){ win(3,4,5)
    }else if (array[6].innerHTML === array[7].innerHTML && array[7].innerHTML === array[8].innerHTML && array[6].innerHTML !== ""){ win(6,7,8)
    }else if (array[0].innerHTML === array[3].innerHTML && array[3].innerHTML === array[6].innerHTML && array[0].innerHTML !== ""){ win(0,3,6)
    }else if (array[1].innerHTML === array[4].innerHTML && array[4].innerHTML === array[7].innerHTML && array[1].innerHTML !== ""){ win(1,4,7)
    }else if (array[2].innerHTML === array[5].innerHTML && array[5].innerHTML === array[8].innerHTML && array[2].innerHTML !== ""){ win(2,5,8)
    }else if (array[0].innerHTML === array[4].innerHTML && array[4].innerHTML === array[8].innerHTML && array[0].innerHTML !== ""){ win(0,4,8)
    }else if (array[2].innerHTML === array[4].innerHTML && array[4].innerHTML === array[6].innerHTML && array[2].innerHTML !== ""){ win(2,4,6)
    }
}



let Settings = document.querySelector(".Settings")
let reset = document.querySelector(".reset")
let leave = document.querySelector(".leave")
let span = document.querySelector(".Settings span")

    function SettingsList () {
        Settings.style.display = "flex"
        span.onclick = function () {Settings.style.display = "none"  }
        reset.onclick = function () {
            Settings.style.display = "none"
            allBoxs.forEach((e) => {
                e.innerHTML = ""
                e.style.background = "#f44336"
                title.innerHTML = `<div><span>X O</span> GAME</div>`
                for (let i = 0 ; i< array.length ; i++) {
                array[i].classList.remove("done")
            }
            })

        }
        leave.onclick = function () {location.reload()}
    }

let Settingsicon = document.querySelector(".SettingsIcon")
Settingsicon.onclick = function ()  {
        Settings.style.display = "flex"
        span.onclick = function () {Settings.style.display = "none"  }
        reset.onclick = function () {
            Settings.style.display = "none"
            allBoxs.forEach((e) => {
                e.innerHTML = ""
                e.style.background = "#f44336"
                title.innerHTML = `<div><span>X O</span>GAME</div>`
                for (let i = 0 ; i< array.length ; i++) {
                array[i].classList.remove("done")
            }
            })


        }
        leave.onclick = function () {location.reload()}
        text.innerHTML = "Tic Tac Toe"
}   