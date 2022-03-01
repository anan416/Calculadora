var pantalla = "";

var formacion = document.querySelector("h3");
var resultado = document.querySelector("h5");

var primerN = "";
var seguir = true;
var cuenta = "";
var segundoN = "";

var reiniciar = document.querySelector(".c");
var porcentaje = document.querySelector(".porcentaje");
var exponente = document.querySelector(".exponente");
var raiz = document.querySelector(".raiz");
var n1 = document.querySelector(".num1");
var n2 = document.querySelector(".num2");
var n3 = document.querySelector(".num3");
var n4 = document.querySelector(".num4");
var n5 = document.querySelector(".num5");
var n6 = document.querySelector(".num6");
var n7 = document.querySelector(".num7");
var n8 = document.querySelector(".num8");
var n9 = document.querySelector(".num9");
var n0 = document.querySelector(".num0");
var suma = document.querySelector(".suma");
var resta = document.querySelector(".resta");
var multiplicacion = document.querySelector(".multiplicacion");
var division = document.querySelector(".division");
var decimal = document.querySelector(".decimal");
var igual = document.querySelector(".igual");
var calculator = document.querySelector(".calculator");
var pantallaS = document.querySelector(".pantalla");

var sol = document.querySelector(".sol");
var luna = document.querySelector(".luna");

var cuerpo = document.querySelector(".container");
var h3 = document.querySelector("h3");
var h5 = document.querySelector("h5");


function bC(){
    pantalla = "0";
    formacion.innerHTML = pantalla;
    resultado.innerHTML = pantalla;
    primerN= "";
    seguir = true;
    cuenta = "";
    segundoN = "";
}

function b1(){
    pantalla += 1; 
    formacion.innerHTML = pantalla;
    if (seguir == true){
        primerN += "1";
    }
    else{
        segundoN += "1";
    }
}

function b2(){
    pantalla += 2; 
    formacion.innerHTML = pantalla;
    if (seguir == true){
        primerN += "2";
    }
    else{
        segundoN += "2";
    }
}

function b3(){
    pantalla += 3; 
    formacion.innerHTML = pantalla;
    if (seguir == true){
        primerN += "3";
    }
    else{
        segundoN += "3";
    }
}

function b4(){
    pantalla += 4; 
    formacion.innerHTML = pantalla;
    if (seguir == true){
        primerN += "4";
    }
    else{
        segundoN += "4";
    }
}

function b5(){
    pantalla += 5; 
    formacion.innerHTML = pantalla;
    if (seguir == true){
        primerN += "5";
    }
    else{
        segundoN += "5";
    }
}

function b6(){
    pantalla += 6; 
    formacion.innerHTML = pantalla;
    if (seguir == true){
        primerN += "6";
    }
    else{
        segundoN += "6";
    }
}

function b7(){
    pantalla += 7; 
    formacion.innerHTML = pantalla;
    if (seguir == true){
        primerN += "7";
    }
    else{
        segundoN += "7";
    }
}

function b8(){
    pantalla += 8; 
    formacion.innerHTML = pantalla;
    if (seguir == true){
        primerN += "8";
    }
    else{
        segundoN += "8";
    }
}

function b9(){
    pantalla += 9; 
    formacion.innerHTML = pantalla;
    if (seguir == true){
        primerN += "9";
    }
    else{
        segundoN += "9";
    }
}

function b0(){
    pantalla += 0; 
    formacion.innerHTML = pantalla;
    if (seguir == true){
        primerN += "0";
    }
    else{
        segundoN += "0";
    }
}

function bSuma(){
    if (cuenta !== ""){
        alert("Ya eligió un operador");
    }
    else{
        pantalla += "+"; 
        cuenta = "+"; 
        formacion.innerHTML = pantalla;
        seguir = false;
    }
}

function bResta(){
    if (cuenta !== ""){
        alert("Ya eligió un operador");
    }
    else{
        pantalla += "-"; 
        cuenta = "-";
        formacion.innerHTML = pantalla;
        seguir = false;
    }
}

function bMultiplicacion(){
    if (cuenta !== ''){
        alert("Ya eligió un operador");
    }
    else{
        pantalla += "x"; 
        cuenta = "x";
        formacion.innerHTML = pantalla;
        seguir = false;
    }
}

function bDivision(){
    if (cuenta !== ""){
        alert("Ya eligió un operador");
    }
    else{
        pantalla += "÷"; 
        cuenta = "÷";
        formacion.innerHTML = pantalla;
        seguir = false;
    }
}

function bIgual(){
    if (cuenta == "+"){
        resultado.innerHTML = parseInt(primerN) + parseInt(segundoN);
        primerN = parseInt(primerN) + parseInt(segundoN);
        seguir = true;
        cuenta = "";
        segundoN = "";
    }
    else if (cuenta == "-"){
        resultado.innerHTML = parseInt(primerN) - parseInt(segundoN);
        primerN = parseInt(primerN) + parseInt(segundoN);
        seguir = true;
        cuenta = "";
        segundoN = "";
    }
    else if (cuenta == "x"){
        resultado.innerHTML = parseInt(primerN) * parseInt(segundoN);
        primerN = parseInt(primerN) + parseInt(segundoN);
        seguir = true;
        cuenta = "";
        segundoN = "";
    }
    else if (cuenta == "÷"){
        resultado.innerHTML = parseInt(primerN) / parseInt(segundoN);
        primerN = parseInt(primerN) + parseInt(segundoN);
        seguir = true;
        cuenta = "";
        segundoN = "";
    }
    else{
        resultado.innerHTML = parseInt(primerN);
    }
}

function luminar(){
    sol.classList.remove("solDes");
    sol.classList.add("solAct");
    luna.classList.remove("lunaAct");
    luna.classList.add("lunaDes");
    cuerpo.classList.remove("container-oscuro");
    h3.classList.remove("letrasClaras");
    h5.classList.remove("letrasClaras");
    reiniciar.classList.remove("letrasClaras", "botones-oscuros");
    porcentaje.classList.remove("letrasClaras", "botones-oscuros");
    exponente.classList.remove("letrasClaras", "botones-oscuros");
    raiz.classList.remove("letrasClaras", "botones-oscuros");
    n1.classList.remove("letrasClaras", "botones-oscuros");
    n2.classList.remove("letrasClaras", "botones-oscuros");
    n3.classList.remove("letrasClaras", "botones-oscuros");
    n4.classList.remove("letrasClaras", "botones-oscuros");
    n5.classList.remove("letrasClaras", "botones-oscuros");
    n6.classList.remove("letrasClaras", "botones-oscuros");
    n7.classList.remove("letrasClaras", "botones-oscuros");
    n8.classList.remove("letrasClaras", "botones-oscuros");
    n9.classList.remove("letrasClaras", "botones-oscuros");
    n0.classList.remove("letrasClaras", "botones-oscuros");
    suma.classList.remove("letrasClaras", "botones-oscuros");
    resta.classList.remove("letrasClaras", "botones-oscuros");
    multiplicacion.classList.remove("letrasClaras", "botones-oscuros");
    division.classList.remove("letrasClaras", "botones-oscuros");
    decimal.classList.remove("letrasClaras", "botones-oscuros");
    igual.classList.remove("letrasClaras", "botones-oscuros");
    calculator.classList.remove("bordes-oscuros");
    pantallaS.classList.remove("bordes-oscuros");
}

function oscurecer(){
    sol.classList.remove("solAct");
    sol.classList.add("solDes");
    luna.classList.remove("lunaDes");
    luna.classList.add("lunaAct");
    cuerpo.classList.add("container-oscuro");
    h3.classList.add("letrasClaras");
    h5.classList.add("letrasClaras");
    reiniciar.classList.add("letrasClaras", "botones-oscuros");
    porcentaje.classList.add("letrasClaras", "botones-oscuros");
    exponente.classList.add("letrasClaras", "botones-oscuros");
    raiz.classList.add("letrasClaras", "botones-oscuros");
    n1.classList.add("letrasClaras", "botones-oscuros");
    n2.classList.add("letrasClaras", "botones-oscuros");
    n3.classList.add("letrasClaras", "botones-oscuros");
    n4.classList.add("letrasClaras", "botones-oscuros");
    n5.classList.add("letrasClaras", "botones-oscuros");
    n6.classList.add("letrasClaras", "botones-oscuros");
    n7.classList.add("letrasClaras", "botones-oscuros");
    n8.classList.add("letrasClaras", "botones-oscuros");
    n9.classList.add("letrasClaras", "botones-oscuros");
    n0.classList.add("letrasClaras", "botones-oscuros");
    suma.classList.add("letrasClaras", "botones-oscuros");
    resta.classList.add("letrasClaras", "botones-oscuros");
    multiplicacion.classList.add("letrasClaras", "botones-oscuros");
    division.classList.add("letrasClaras", "botones-oscuros");
    decimal.classList.add("letrasClaras", "botones-oscuros");
    igual.classList.add("letrasClaras", "botones-oscuros");
    calculator.classList.add("bordes-oscuros");
    pantallaS.classList.add("bordes-oscuros");
}

function noDisponible(){
    alert("Este botón no se encuentra disponible.");
}

