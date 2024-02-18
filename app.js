let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset_btn");
let NewBtn = document.querySelector("#newGameBtn");
let congrats = document.querySelector("#congrats");
let turnO = true;
let count = 0;

const winPatters = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log(count++);
            if (turnO) {
                box.innerHTML = "O";
                turnO = false;
            }
            else {
                box.innerHTML = "X";
                turnO = true;
            }
            box.disabled = true;
            checkWinner();
            
        if (count === 9) {
            draw();
        }
    });
});

const draw = () => {
    congrats.innerHTML = "The Game is Draw...";
    congrats.classList.remove("hide");
    count = 0;
    turnO = true;
} 

const restart = () => {      
    turnO = true;
    enabledBtn();
    congrats.classList.add("hide");
    count = 0;
}

const diabledBtn = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enabledBtn = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
        congrats.classList.add("hide");
    }
}

const showWinner = (winner) => {
    congrats.innerHTML = `Congratulation! You are the Winner ${winner}`;
    congrats.classList.remove("hide");
    diabledBtn();
}

let checkWinner = () => {
    for (let pattern of winPatters) {
        pos1val = boxes[pattern[0]].innerHTML;
        pos2val = boxes[pattern[1]].innerHTML;
        pos3val = boxes[pattern[2]].innerHTML;
        
    if (pos1val != "" && pos2val != "" && pos3val != "") {
        if (pos1val === pos2val && pos2val === pos3val) {
            showWinner (pos1val);
            }
        }
    }
}

resetBtn.addEventListener("click", restart)
NewBtn.addEventListener("click", restart)