let min = 1;
let max = 100;
let trials=7;
let checked = false;
let number = Math.floor(Math.random()*(max-min)+min);
document.getElementById("PlayAgain-btn").style.display = "none";
HideHints();
HideHintBtns();
document.getElementById("difficulty").onchange = function(){
    switch(document.getElementById("difficulty").value){
        case "Easy":
            max = 50;
            break;
        case "Medium":
            max = 500;
            break;
        case "Hard":
            max = 10000;
            break;
    }
    checked = true;
    trials = 7;
    number = Math.floor(Math.random()*(max-min)+min);
    document.getElementById("result").textContent = "";
    document.getElementById("Quest").textContent = "Choose a number between " + min + " and " + max + ": ";
    prepareHints();
}
document.getElementById("Guess-btn").onclick = function(){
    if(checked === false){
        alert("Please select difficulty");
    }
    else{
        if(trials!==0){
            if(Number(document.getElementById("reponse").value) > number){
                trials=trials-1;
                if(trials !== 0){
                    document.getElementById("result").textContent = "Too HIGH. Try again!"+"\n"+"You have "+trials+" trials left!";
                    document.getElementById("result").style = "color:#F4A460;"
                }
                else{
                    failed(number);
                }
            }
            else if (Number(document.getElementById("reponse").value) < number){
                trials=trials-1;
                if(trials !== 0){
                    document.getElementById("result").textContent = "TOO LOW. Try again!"+"\n"+"You have "+trials+" trials left!";
                    document.getElementById("result").style = "color:#F4A460;"
                }
                else{
                    failed(number);
                }
            }
            else{
                won();
            }
        }
        else{
            failed(number);
        }
    }
}
document.getElementById("PlayAgain-btn").onclick = function(){
    document.getElementById("PlayAgain-btn").style.display = "none";
    document.getElementById("reponse").style.display = "inline-block";
    document.getElementById("Guess-btn").style.display = "inline-block";
    document.getElementById("result").textContent = "";
    document.getElementById("reponse").value = "";
    document.getElementById("Quest").textContent = "";
    document.getElementById("difficulty").value = "Select an option";
    prepareHints();
    HideHintBtns();
}
function failed(num){
    document.getElementById("result").textContent = "You Lost ! The solution is: "+num;
    document.getElementById("result").style = "color:#FF0000;"
    document.getElementById("reponse").style.display = "none"; 
    document.getElementById("Guess-btn").style.display = "none";
    document.getElementById("PlayAgain-btn").style.display = "inline-block";
    HideHints();
    HideHintBtns();
}
function won(){
    document.getElementById("result").textContent = "Congrats,You Won🎉🎉";
    document.getElementById("result").style = "color:green;"
    document.getElementById("reponse").style.display = "none"; 
    document.getElementById("Guess-btn").style.display = "none";
    document.getElementById("PlayAgain-btn").style.display = "inline-block";
    HideHints();
    HideHintBtns();
    
}
function HideHints(){
    document.getElementById("hint1").style.display = "none";
    document.getElementById("hint2").style.display = "none";
    document.getElementById("hint3").style.display = "none";
    document.getElementById("Hint-btn1").style.backgroundColor= "#555555";
    document.getElementById("Hint-btn1").style.color= "white";

    document.getElementById("Hint-btn2").style.backgroundColor= "#555555";
    document.getElementById("Hint-btn2").style.color= "white";

    document.getElementById("Hint-btn3").style.backgroundColor= "#555555";
    document.getElementById("Hint-btn3").style.color= "white";

}
function HideHintBtns(){
    document.getElementById("getHints").style.display = "none";
    document.getElementById("Hint-btn1").style.display = "none";
    document.getElementById("Hint-btn2").style.display = "none";
    document.getElementById("Hint-btn3").style.display = "none";

}
function ShowHintBtns(){
    document.getElementById("getHints").style.display = "block";
    document.getElementById("Hint-btn1").style.display = "inline-block";
    document.getElementById("Hint-btn2").style.display = "inline-block";
    document.getElementById("Hint-btn3").style.display = "inline-block";

}

//Hints


function prepareHints(){
    ShowHintBtns();
    document.getElementById("hint1").textContent = "Hint1: ";
    document.getElementById("hint2").textContent = "Hint2: ";
    document.getElementById("hint3").textContent = "Hint3: ";
    console.log(document.getElementById("difficulty").value);
    if(document.getElementById("difficulty").value !== "Select an option"){
        const moy = Math.floor((min + max) / 2);
        if (number > moy) {
            document.getElementById("hint1").textContent += `Number > ${moy}`;
        } else {
            document.getElementById("hint1").textContent += `Number < ${moy}`;
        }
        let div = 0;
        for (let i = 2; i < 10; i++) {
            if (number % i === 0) {
                div+=1;
                document.getElementById("hint2").innerHTML += `<br>Number divisible by ${i}`;
            }
        }
        if(div === 0){
            document.getElementById("hint2").textContent += `\nNumber non divisible par aucun des: [1-9]`;
        }
        document.getElementById("hint3").textContent += `\nNumber is between ${number- (Math.floor(Math.random() * 5) + 1)} and ${number+ (Math.floor(Math.random() * 5) + 1)}`;

        document.getElementById("Hint-btn1").onclick = function(){
            console.log(number);
            document.getElementById("Hint-btn1").style = "background-color: #e7e7e7; color: black;"; 
            document.getElementById("hint1").style.display = "block";   
        }
        document.getElementById("Hint-btn2").onclick = function(){
            console.log(number);
            document.getElementById("Hint-btn2").style = "background-color: #e7e7e7; color: black;";
            document.getElementById("hint2").style.display = "block";   
        }
        document.getElementById("Hint-btn3").onclick = function(){
            console.log(number);
            document.getElementById("Hint-btn3").style = "background-color: #e7e7e7; color: black;";
            document.getElementById("hint3").style.display = "block";   
        }
    }
    else{
        HideHints();
    }
}
