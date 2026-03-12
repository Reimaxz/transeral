// inventario.js

document.addEventListener("DOMContentLoaded", iniciarInventario);

function iniciarInventario(){

const input=document.querySelector("#inventario input");
const boton=document.querySelector("#inventario button");

const contenedor=document.createElement("div");

const tabla=document.createElement("table");

tabla.innerHTML=`
<tr>
<th>Material</th>
<th>Acción</th>
</tr>
`;

contenedor.appendChild(tabla);

document.getElementById("inventario").appendChild(contenedor);

let materiales=JSON.parse(localStorage.getItem("inventario")) || [];

function actualizarTabla(){

tabla.innerHTML=`
<tr>
<th>Material</th>
<th>Acción</th>
</tr>
`;

materiales.forEach((mat,i)=>{

let fila=document.createElement("tr");

fila.innerHTML=`
<td>${mat}</td>
<td><button data-id="${i}">Eliminar</button></td>
`;

tabla.appendChild(fila);

});

localStorage.setItem("inventario",JSON.stringify(materiales));

}

boton.addEventListener("click",function(){

let material=input.value.trim();

if(material==="") return;

materiales.push(material);

input.value="";

actualizarTabla();

});

tabla.addEventListener("click",function(e){

if(e.target.tagName==="BUTTON"){

let id=e.target.dataset.id;

materiales.splice(id,1);

actualizarTabla();

}

});

actualizarTabla();

}
