var segundos = 0;
var minutos = 0;
var horas = 0;
var intervalId; 

function iniciar() {
    document.getElementById("go").disabled = true;
    document.getElementById("stop").disabled = false;

    intervalId = setInterval(function() {
        segundos++;
        let s = segundos < 10 ? "0" + segundos : segundos;
        let m = minutos < 10 ? "0" + minutos : minutos;
        let h = horas < 10 ? "0" + horas : horas;

        document.getElementById("timer").textContent = h + ":" + m + ":" + s;

        if (segundos > 59) {
            segundos = 0;
            minutos++;
        }

        if (minutos > 59) {
            minutos = 0;
            horas++;
        }

    }, 1000); // 1000 ms = 1 segundo
}

function parar() {
    clearInterval(intervalId);
    document.getElementById("stop").disabled = true;
    document.getElementById("go").disabled = false;

}

function resetar(){
    clearInterval(intervalId);
    document.getElementById("go").disabled = false;
    document.getElementById("stop").disabled = false;
    segundos = 0;
    minutos = 0;
    horas = 0;
    let s ="0" + segundos;
    let m ="0" + minutos;
    let h ="0" + horas;

    document.getElementById("timer").textContent = h + ":" + m + ":" + s;
}

document.getElementById("go").onclick = iniciar;
document.getElementById("stop").onclick = parar;
document.getElementById("reset").onclick = resetar;
