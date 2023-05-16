var nombre = "Ivan Torres"
var altura = "180"

var concatenacion = nombre + " " + altura;
/*
ejemplo 1
var datos = document.getElementById("datos");
datos.innerHTML = concatenacion;
datos.innerHTML = `
<h1>Soy la caja de datos</h1>
<h2>Mi nombre es ${nombre}</h2>
<h3>Mido: ${altura} cm</h3>
`;

if(altura >= 190){
    datos.innerHTML += '<h1>eres una persona alta</h1>';
}
else{
    datos.innerHTML += '<h2>eres una persona bajita</h2>';
}

for(var i = 2000; i<=2020; i++){
    datos.innerHTML += "<h2>Estamos en el año: "+i;
}
*/
/*
ejemplo 2
function MuestraMinombre(nombre, altura){
    var datos = document.getElementById("datos");
    datos.innerHTML = `
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es ${nombre}</h2>
    <h3>Mido: ${altura} cm</h3>
    `;
}

MuestraMinombre("Ivan torres", 30);
*/
/*
ejemplo 3
function MuestraMinombre(nombre, altura){
    var datos = document.getElementById("datos");
    datos.innerHTML = `
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es ${nombre}</h2>
    <h3>Mido: ${altura} cm</h3>
    `;
    return misDatos;
}
function imprimir(){
    var datos = document.getElementById("datos");
    datos.innerHTML = MuestraMinombre("ivan torres", 30);
}
imprimir();
*/
/*
ejemplo 4
var nombres = ['victor', 'antonio', 'joaquin'];
alert(nombres[1]);
*/

var nombres = ['victor', 'antonio', 'joaquin'];

document.write('<h1>listado de nombres</h1>');
/*
for(i = 0; i < nombres.length; i++){
    document.write(nombres[i] + '<br/>');
}
*/
nombres.forEach((nombre) => {
    document.write(nombre + '<br/>');
});