
computerResult = () => {
    const result = Math.random();
    let resultWord;
    if (result <= 0.334) {
        resultWord = "Rock";
    } else if (result > 0.334 && result <= 0.667) {
        resultWord = "Paper";
    } else if (result > 0.667 && result <= 0.999) {
        resultWord = "Scissor";
    }
    return resultWord;
}

let userCount = 0;
let computerCount = 0;
game = (userResult) => {
    hideShow("choiceCont");
    showHide("game_progress");
    let computer_Result = computerResult();
    let showResult = document.getElementById("greet");
    let showUserWinningCount = document.getElementById("UWC");
    let showComputerWinningCount = document.getElementById("CWC");
    // if draw
    if (computer_Result === userResult) {
        console.log("Draw");
        console.log("computer: " + computer_Result + " user: " + userResult);
        showResult.innerHTML = "Draw";
        changeResultImages(userResult, computer_Result);
        console.log("./icons/" + userResult.toLowerCase() + "_u.png");
        showResult.style.color = "rgb(188, 113, 21)";
        showResult.style.backgroundColor = 'rgb(253, 221, 181)';
    
    }
    // if computer win
    
    else if (computer_Result === "Rock" && userResult === "Scissor"
        || computer_Result === "Scissor" && userResult === "Paper"
        || computer_Result === "Paper" && userResult === "Rock") {
        console.log("you lost, Computer Win");
        console.log("computer: " + computer_Result + " user: " + userResult);
        changeResultImages(userResult, computer_Result);
        computerCount++;
        showComputerWinningCount.innerHTML = computerCount;
        showResult.innerHTML = "Computer Won";
        showResult.style.color = "red";
        showResult.style.backgroundColor = 'rgb(210, 175, 175)';
    } 
    //if user win 
    else {
        console.log("congratulations, you Win!");
        console.log("computer: " + computer_Result + " user: " + userResult);
        userCount++;
        changeResultImages(userResult, computer_Result);
        showUserWinningCount.innerHTML = userCount;
        showResult.innerHTML = "You Won";
        showResult.style.color = "green";
        showResult.style.backgroundColor = 'rgb(170, 199, 170)';
    }
}
hideShow = (name) => {
    var element = document.getElementById(name);
    if (element.style.display === "none") {
        element.style.display = "block";

    } else {
        element.style.display = "none";
    }
}
showHide = (name) => {
    var element = document.getElementById(name);
    if (element.style.display === "block") {
        element.style.display = "none";

    } else {
        element.style.display = "block";
    }
}
changeResultImages = (u_result, c_result) => {
    document.getElementById("user_result").src = "./icons/" + u_result.toLowerCase() + "_u.png";
    document.getElementById("computer_result").src = "./icons/" + c_result.toLowerCase() + "_c.png";
}