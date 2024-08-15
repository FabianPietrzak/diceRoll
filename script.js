
let dice = document.getElementById("dice")
let roll = document.getElementById("roll")

roll.addEventListener("click", random)

let score = [
    [0, document.getElementById("score1"), 0],
    [0, document.getElementById("score2"), 0],
    [0, document.getElementById("score3"), 0],
    [0, document.getElementById("score4"), 0],
    [0, document.getElementById("score5"), 0],
    [0, document.getElementById("score6"), 0],
]

function random(){
    roll.disabled = true
    let number = 0
    let list = ["&#9856;","&#9857;","&#9858;","&#9859;","&#9860;","&#9861;"]
    let pick = ""
    while(number < 1 || number > 6){
        number = Math.round(Math.random() * 10)
    }
    switch(number){
        case 1:
            pick = list[0]
            break
        case 2:
            pick = list[1]
            break
        case 3:
            pick = list[2]
            break
        case 4:
            pick = list[3]
            break
        case 5:
            pick = list[4]
            break
        case 6:
            pick = list[5]
            break
    }
    rotating(pick, number)
}

let list = document.getElementById("list")

function rotating(pick, number){
    let rotInt = setInterval(intervalHandler, 10)
    
    let deg = 0

    function intervalHandler(){
        //console.log(deg, dice.style.transform)
        if(deg >=359){
            deg = 0
            dice.innerHTML = pick
            roll.disabled = false
            let listStore = list.innerHTML
            list.innerHTML = "<li>You scored "+number+" / "+pick+". </li>"+listStore
            score[number-1][0]++
            score[number-1][1].innerHTML = score[number-1][0]

            let sum = score[0][0] + score[1][0] + score[2][0] + score[3][0] + score[4][0] + score[5][0]
            for(let a = 0;a < 6;a++){
                if(score[a][0] > 0){
                    let percentage = Math.round((score[a][0] / sum) * 100)
                    //console.log(sum, percentage)
                    document.getElementById("scoreDiv"+(a+1)).style.background = "linear-gradient(90deg, #93e4fd "+percentage+"%, #666 "+percentage+"%)"
                }
            }
            clearInterval(rotInt)
        }else{
            deg++
        }
        dice.style.transform = "rotateY("+deg+"deg) rotateX("+deg+"deg)"
    }
}