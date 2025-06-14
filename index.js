const operators = ['-','+','*','/','%'];
function insert(val){
    document.getElementById("display").value +=val;
}
function calculate() {
    let val = document.getElementById("display").value;
    try {
        let valStr = String(val);
        let tab = [];
        let j = 0;
        let i = 0;

        while (i < valStr.length) {
            if (operators.includes(valStr[i])) {
                tab[j] = valStr.slice(0, i);
                tab[j + 1] = valStr[i];
                valStr = valStr.slice(i + 1);
                j += 2;
                i = 0;
            } else {
                i++;
            }
        }
        tab[j] = valStr;

        let k = 1;
        while (k < tab.length - 1) {
            if (tab[k] === '*' || tab[k] === '/' || tab[k] === '%') {
                let result = calc(tab[k - 1], tab[k], tab[k + 1]);
                tab.splice(k - 1, 3, result);
                k = 1;
            } else {
                k += 2;
            }
        }

        k = 1;
        while (k < tab.length - 1) {
            if (tab[k] === '+' || tab[k] === '-') {
                let result = calc(tab[k - 1], tab[k], tab[k + 1]);
                tab.splice(k - 1, 3, result);
                k = 1; 
            } else {
                k += 2;
            }
        }

        document.getElementById("display").value = tab[0];
    } catch (error) {
        document.getElementById("error").textContent = "Error";
    }
}

function backspace(){
    document.getElementById("display").value = document.getElementById("display").value.slice(0, -1);
}
function clearDisplay(){
    document.getElementById("display").value = "";
}
function multipNotFound(...tab){
    for(let i=0;i<tab.length;i++){
        if(tab[i] === '*' || tab[i] === '/'){
            return false;
        }
    }
    return true;
}
function additNotFound(...tab){
    for(let i=0;i<tab.length;i++){
        if(tab[i] === '+' || tab[i] === '-'){
            return false;
        }
    }
    return true;
}
function calc(prev,oper,next){
    if(oper === '*'){
        return Number(prev)*Number(next);
    }
    if(oper === '/'){
        return Number(prev)/Number(next);
    }
    if(oper === '+'){
        return Number(prev)+Number(next);
    }
    if(oper === '-'){
        return Number(prev)-Number(next);
    }
    if(oper === '%'){
        return Number(prev)%Number(next);
    }
}