//Funcion para convertir dolares euros y reales a pesos argentinos

function convertir() {
    let valore = parseInt(document.getElementById("valor").value);
    let resultado = 0;
    let dolar = 282;
    let euro =285;
    let real = 29; 
    if (document.getElementById("uno").checked){
        resultado = valore * dolar;
        alert(`El cambio de ${valore} USD a ARG es ${resultado}`);
    }
    else if (document.getElementById("dos").checked){
        resultado = valore * euro;
        alert(`El cambio de ${valore} EUR a ARG es ${resultado}`);
    }
    else if (document.getElementById("tres").checked){
        resultado = valore * real;
        alert(`El cambio de ${valore} BRL a ARG es ${resultado}`);
    }
    else{
        alert("Por favor seleccione uno")
    }
}

//Boton cotizador

let varcotizador = document.getElementById("cotizador");
cotizador.onclick = convertir;

// Mostrar nombre por consola

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputs = e.target.children;
  console.log("Su nombre es " + inputs[0].value);
  console.log("Y tienes " + inputs[1].value + " años");
  console.log(inputs[0].value + " Gracias por utilizar nuestros servicios");
})

//ID: prueba

let probando = document.getElementById("prueba");
let prueba = ["<h2>Pagina en preparacion mil disculpas"]

//ForEach de prueba

prueba.forEach(item => {
  let li = document.createElement("li");
  li.innerHTML = item;
  probando.append(li);
});

//ForEach ID: 0 (ARS)

let divisas = {id: 0, divisa: "ARS", precio: "1"};
let prueba2 = document.getElementById("prueba2");
let item = document.createElement("div");
item.innerHTML = `
  <h2>Id: ${divisas.id}</h2>
  <p>Divisa: ${divisas.divisa}</p>
  <b>$${divisas.precio}</b>
`;
prueba2.append(item);

//ID: 1, 2 y 3

let prueba3 = document.getElementById("prueba3");
let divisas2 = [
  { id: 1, nombre: "USD", precio: 282 },
  { id: 2, nombre: "EUR", precio: 285 },
  { id: 3, nombre: "BRL", precio: 29 },
];

//ForEach ID: 1(USD), 2(EUR) y 3(BRL)

divisas2.forEach((divisa) => {
    let item = document.createElement("div");
    item.innerHTML = `
      <h2>Id: ${divisa.id}</h2>
      <p>Divisa: ${divisa.nombre}</p>
      <b>$${divisa.precio}</b>
    `;
    prueba3.append(item);
  });

//Se guarda incluso si reiniciamos la pc (datos comunes)
localStorage.setItem("username", "admin");
localStorage.setItem("prueba", "prueba");

//No se guarda si reiniciamos la pc, solo si refrescamos la pagina (datos sensibles)
sessionStorage.setItem("contraseña", "1234");
sessionStorage.setItem("valor", "true");
sessionStorage.setItem("prueba", "prueba");

localStorage.removeItem("prueba");
sessionStorage.removeItem("prueba");

//Se le pide un nombre de usuario
let usuario;
let usuarioStorage = localStorage.getItem("usuario");
if(usuarioStorage){
  usuario = usuarioStorage;
  let mensaje = `Bienvenido ${usuario}`;
  alert(mensaje);
}else{
  usuario = prompt("Ingrese su usuario");
  localStorage.setItem("usuario", usuario);
}

let saludo = document.getElementById("botondeslogueo");
saludo.innerHTML = "Cerrar sesion";
saludo.className = "rojo";

//Cargar el storage
const nombre = [
    { id: 1, nombre: `${usuario}` },
  ];
  localStorage.setItem("deslogueo", JSON.stringify(nombre));
  
//traemos los elementos del dom
let varbienvenida = document.getElementById("bienvenida");
let botondeslogueo = document.getElementById("botondeslogueo");
  
//declaramos el deslogueo y traemosdel storage
let deslogueo = [];
let deslogueoStorage = JSON.parse(localStorage.getItem("deslogueo"));
  
//validamos si en el storage existe el deslogueo
if(deslogueoStorage){
  deslogueo = deslogueoStorage;
}
  
//recorremos el deslogueo para renderizarlo en el contenedor
deslogueo.forEach(item => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>ID: ${item.id}</h2>
    <p>Bienvenido: ${item.nombre}</p>
  `;
  varbienvenida.append(div);
});
  
//lógica para el borrado del deslogueo y del contenedor
botondeslogueo.addEventListener("click", () => {
  localStorage.clear();
  varbienvenida.innerHTML = "Sesion Cerrada";
  varbienvenida.className = "cerrada";
  alert("Sesion cerrada");
})

//botonlogueo para volver a Iniciar Sesion

let botonlogueo = document.getElementById("botonlogueo");
botonlogueo.addEventListener("click", () => {
  let usuario = prompt("Ingrese su usuario");
  localStorage.setItem("usuario", usuario);
  location.reload();
})

//Arrays
function Simbolo(valor, letras, pais){
    this.precio = valor;
    this.abreviatura = letras;
    this.nacionalidad = pais;
  }

const simbolo1 = new Simbolo(8, "MXN", "Mexico");
const simbolo2 = new Simbolo(1, "JPY", "Japon");
console.log(simbolo1.precio);
console.log(simbolo2.nacionalidad);

const pruebaArray = ["usd", "eur", "brl"];
pruebaArray.push("finaldelArray");
pruebaArray.unshift("principioDelArray");
console.log (pruebaArray);
console.log (pruebaArray.indexOf("eur"));
//eur queda en posicion 2 dado al .unshift principioDelArray que toma la posicion 0
console.log (pruebaArray.includes("noexiste")); //false
console.log (pruebaArray.includes("usd")); //true
//includes comprueba si existe, true or false

 
//si el ejemplo1 no es falsy retorna ejemplo1 en caso contrario retorna en ejemplo2
const ejemplo1 = 0;
const ejemplo2 = 1;
const resultado = 
ejemplo1 || ejemplo2;

console.log( 0 || "Falsy")  //falsy
console.log( 100 || "Falsy")  //100
console.log( null || "Falsy")  //falsy
console.log( undefined || "Falsy")  //falsy
console.log( "Hola divisas" || "Falsy")  //hola divisas
console.log( "" || "Falsy")  //falsy
console.log( NaN || "Falsy")  //falsy
console.log( true || "Falsy")  //true
console.log( false || "Falsy") // falsy

//Desetructuracion ejemplo divisa1
const divisa = {
  nombre2: "usd",
  valor: 282,
};

/* Metodo obsoleto
let nombre = divisa.nombre;
let valor = divisa.valor; */

//Metodo nuevo
let {
  nombre2,
  valor,
} = divisa;
console.log(nombre2, valor);

//Desetructuracion ejemplo divisa2
const divisa2 = {
  nombre: "eur",
  valor: 285,
  pais: {
    italia: 1,
    españa: 2,
    francia: 3,
    alemania: 4,
  },
};

let {
  nombre3,
  pais: { italia },
} = divisa2;
console.log(italia);

//Modificacion de un objeto (divisa usd a eur)
let objeto = {divisa: "usd", valor: 282};
let objeto1 = objeto;
objeto1.divisa = "eur";
console.log(objeto);

/* let contenedor = document.getElementById("contenedor");
let parrafo = document.createElement("p");
parrafo.innerHTML = "<h2>Prueba removida, gracias por utilizar nuestros servicios</h2>";
contenedor.append(parrafo);
contenedor.className = "mexcla";

//Convertidor de monedas


let saludo = document.getElementById("saludo");
let sesion = prompt("Ingrese la seccion a la que desea ingresar (dolares, euros o reales)");
if(sesion === "dolares"){
    saludo.innerHTML = "<h3>Bienvenido al conversor de USD a ARG</h3>";
    saludo.className = "mexcla";
  }else if(sesion === "euros"){
    saludo.innerHTML = "<h3>Bienvenido al conversor de EUR a ARG</h3>";
    saludo.className = "mexcla";
}else if(sesion === "reales"){
    saludo.innerHTML = "<h3>Bienvenido al conversor de BRL a ARG</h3>";
    saludo.className = "mexcla";
  }else{
    saludo.innerHTML = "<h3>Bienvenidos al Conversor de Monedas</h3>";
    saludo.className = "";
}

Posibles opciones para el boton

cotizador.addEventListener("mousedown", () => console.log("mousedown"));
cotizador.addEventListener("mouseup", () => console.log("mouseup"));
cotizador.addEventListener("mouseover", () => console.log("mouseover"));
cotizador.addEventListener("click", () => console.log("click"));
cotizador.addEventListener("mouseout", () => console.log("mouseout"));
cotizador.addEventListener("mousemove", () => console.log("mousemove"));

function dolares() {
    let monto = prompt("Ingresa el monto de USD a cambiar por ARS")
    let multiplicacion = 282;
    let resultado = monto * multiplicacion
    alert(resultado);

}

function euros() {
    let monto = prompt("Ingresa el monto de EUR a cambiar por ARS")
    let multiplicacion = 285;
    let resultado = monto * multiplicacion
    alert(resultado);

}

function real() {
    let monto = prompt("Ingresa el monto de BRL a cambiar por ARS")
    let multiplicacion = 29;
    let resultado = monto * multiplicacion
    alert(resultado);

}

function cotizacion (){
    let ingresarNombre = prompt("Por favor ingrese su nombre o ESC para salir");
    while(ingresarNombre != "ESC"){
    alert (`Hola ${ingresarNombre} bienvenido al Convertidor de Monedas`);

    let entrada = prompt("Eleja moneda entre USD, EUR o BRL");
switch (entrada){
    case "USD":
    alert ("Bienvenido al conversor de USD a ARS");
    dolares ()
    break;
    
    case "EUR":
    alert ("Bienvenido al conversor de EUR a ARS");
    euros ()
    break;

    case "BRL":
        alert ("Bienvenido al conversor de BRL a ARS");
        real ()
        break;

    default:
        alert ("Por favor seleccione entre USD, EUR o BRL para continuar, gracias");
        break;    
    }
}
}

Funciones de suma, resta, multiplicacion y division

function suma() {
    let numero1 = parseInt(prompt("Ingrese el primer numero a sumar"));
    let numero2 = parseInt(prompt("Ingrese el segundo numero a sumar"));
    let resultado = parseInt(numero1) + parseInt(numero2);
    alert(resultado);
}

function resta() {
    let numero1 = parseInt(prompt("Ingrese el primer numero a restar"));
    let numero2 = parseInt(prompt("Ingrese el segundo numero a restar"));
    let resultado = parseInt(numero1) - parseInt(numero2);
    alert(resultado);
}

function multiplicacion() {
    let numero1 = parseInt(prompt("Ingrese el primer numero a multiplicar"));
    let numero2 = parseInt(prompt("Ingrese el segundo numero a multiplicar"));
    let resultado = parseInt(numero1) * parseInt(numero2);
    alert(resultado);
}

function division() {
    let numero1 = parseInt(prompt("Ingrese el primer numero a dividir"));
    let numero2 = parseInt(prompt("Ingrese el segundo numero a dividir"));
    let resultado = parseInt(numero1) / parseInt(numero2);
    alert(resultado);
}

*/