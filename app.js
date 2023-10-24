// laist doen all the winning combinations

var winningCombinations = [
    [1,2,3], 
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
]

//accessing all boxes

var boxElement = document.querySelectorAll(".box")
for (element of boxElement){
    element.addEventListener("click",handleClick)
}
var click = 0
let isWon = false;
var xAttempts = []
var oAttempts = []


function handleClick(e){
    console.log(e.target.id)
    let id = event.target.id
    let ptag = document.createElement("p")
    ptag.style.color = "#FAB201"
    ptag.style.fontSize = "90px"
    boxElement[id-1].append(ptag)
    

    if(click%2 == 0){
        ptag.textContent = "X"
        click++
        xAttempts.push(parseInt(id))
        console.log(xAttempts)
        result(xAttempts,"X")
    }
    else{
        ptag.textContent = "O"
        click++
        oAttempts.push(parseInt(id))
        console.log(oAttempts)  
        result(oAttempts,"O")
    }

    if(click == 9 && isWon == false){               
        resultBox.style.visibility = "visible";
        messageBox.textContent = "It's a Draw"
    }
}

var resultBox = document.getElementById("result")
var messageBox = document.getElementById("message")


function result(playerArray , player){
    console.log(player, playerArray)

    for(let i=0;i<winningCombinations.length;i++){
        console.log(winningCombinations[i])
        var check = true;
        for(let j=0;j<winningCombinations[i].length;j++){
            if(playerArray.includes(winningCombinations[i][j]) == false){
                check = false
                break
            }
        }
        if(check==true){
            isWon=true
            resultBox.style.visibility = "visible"
            messageBox.textContent = player + " Won the match"
            console.log(player,"won the match")
        }
    }
}

let playbtn = document.getElementById("button")

playbtn.addEventListener('click',()=>{ location.reload()})