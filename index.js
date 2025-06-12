
document.getElementById("Inc-btn").onclick = function() {
    document.getElementById("Output").textContent = Number(document.getElementById("Output").textContent) + 1;
}
document.getElementById("Dec-btn").onclick = function() {
    document.getElementById("Output").textContent = Number(document.getElementById("Output").textContent) -1;
}
document.getElementById("Res-btn").onclick = function() {
    document.getElementById("Output").textContent = 0;
}