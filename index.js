let mode = "w";
let dices = [];
let btn = document.getElementById("roll");
let cont = document.getElementById("cont");
let legend = document.getElementById("legend");
let span = document.getElementById("span");
document.getElementById("imgd").style.display = "none";

//White Mode
document.getElementById("imgw").onclick = function(){
    document.getElementById("imgd").style.display = "block";
    document.getElementById("imgw").style.display = "none";
    btn.classList.add("btn-white");
    btn.classList.remove("btn-dark");

    cont.classList.add("container-dark");
    cont.classList.remove("container");

    legend.classList.add("legend-dark");
    legend.classList.remove("legend");

    span.classList.add("span-dark");
    span.classList.remove("span");

    mode = "d";
    Prepare(dices);
}
//Dark Mode
document.getElementById("imgd").onclick = function(){
    document.getElementById("imgw").style.display = "block";
    document.getElementById("imgd").style.display = "none";
    btn.classList.remove("btn-white");
    btn.classList.add("btn-dark");

    cont.classList.remove("container-dark");
    cont.classList.add("container");

    legend.classList.remove("legend-dark");
    legend.classList.add("legend");

    span.classList.remove("span-dark");
    span.classList.add("span");
    mode = "w";
    Prepare(dices);
}

document.getElementById("roll").onclick = function(){
    dices = [];
    let dice = Number(document.getElementById("reponse").value);
    for (let i=0; i<dice ; i++){
        dices[i] = Math.floor(Math.random()*6)+1;
    }
    Prepare(dices);
}

function Prepare(...dices){
    let dice = Number(document.getElementById("reponse").value);
    document.getElementById("result").textContent = "";
    for (let i=0; i<dice ; i++){
        if(mode === "d"){
            document.getElementById("result").innerHTML += `<img src="img/`+ dices[0][i] +`.svg" alt="img/`+ dices[0][i] +`.svg" width="70px"style=" background-color: white;">`;
        }
        else{
            document.getElementById("result").innerHTML += `<img src="img/`+ dices[0][i] +`-dark.svg" alt="img/`+ dices[0][i] +`.svg" width="50px">`;
        }
    }
}