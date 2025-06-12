
document.getElementById("Guess-btn").onclick = function() {
    let x = Math.floor(Math.random() * 10)+1;
    let y = Math.floor(Math.random() * 10)+1;
    let z = Math.floor(Math.random() * 10)+1;
    document.getElementById("Output1").textContent = x ;
    document.getElementById("Output2").textContent = y ;
    document.getElementById("Output3").textContent = z ;
    if(x === y && y === z){
        document.getElementById("result").textContent = "You Won!!";
        document.getElementById("result").style = "color:green;"
    }
    else{
        document.getElementById("result").textContent = "You Failed";
        document.getElementById("result").style = "color:red;"
    }
}