

document.getElementById("hint1").style.display = "none";
document.getElementById("hint2").style.display = "none";
document.getElementById("hint3").style.display = "none";
const { min, max } = window.GetDifficulty();
const number = window.GetNumber();
console.log(number);
const moy = Math.floor((min + max) / 2);
if(Number(number) > Number(moy)){
    document.getElementById("hint1").textContent = document.getElementById("hint1").textContent + "Number > " + moy;
}
else{
    document.getElementById("hint1").textContent = document.getElementById("hint1").textContent + "Number < " + moy;
}
for(let i=2; i<10;i++){
    if(number%i === 0){
        document.getElementById("hint2").textContent = document.getElementById("hint2").textContent + "\n" +" Number divisible par " + i;
    }
}
document.getElementById("hint3").textContent = document.getElementById("hint3").textContent + "\n" +" Number between  " + number-(Math.floor(Math.random() * 5) + 1) + " and " + number+(Math.floor(Math.random() * 5) + 1);

document.getElementById("Hint-btn1").onclick = function(){
    document.getElementById("Hint-btn1").style = "background-color: #e7e7e7; color: black;"; 
    document.getElementById("hint1").style.display = "block";   
}
document.getElementById("Hint-btn2").onclick = function(){
    document.getElementById("Hint-btn2").style = "background-color: #e7e7e7; color: black;";
    document.getElementById("hint2").style.display = "block";   
}
document.getElementById("Hint-btn3").onclick = function(){
    document.getElementById("Hint-btn3").style = "background-color: #e7e7e7; color: black;";
    document.getElementById("hint3").style.display = "block";   
}
