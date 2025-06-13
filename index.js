
document.getElementById("reponse").oninput = function(){
    trigger();
}
document.getElementById("celsius").onchange = function(){
    trigger();
}
document.getElementById("fah").onchange = function(){
    trigger();
}
function toCelsius(val){
    return (val-32) * 5/9;
}
function toFahrn(val){
    return (val * 9/5) + 32;
}
function trigger(){
    let temp = document.getElementById("reponse").value;
    if(document.getElementById("celsius").checked){
        document.getElementById("label_rep").textContent = "°C";
        document.getElementById("result").textContent = toFahrn(Number(temp)) + " °F";
    }
    else{
        if(document.getElementById("fah").checked){
            document.getElementById("label_rep").textContent = "°F";
            document.getElementById("result").textContent = toCelsius(Number(temp)) + " °C";
        }
        else{
            document.getElementById("result").textContent = "Please select a Mode!!";
        }
    }
}