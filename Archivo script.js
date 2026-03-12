function mostrar(id){

let paginas=document.querySelectorAll(".pagina");

paginas.forEach(p=>{
p.style.display="none";
});

document.getElementById(id).style.display="block";

}

window.onload=function(){
mostrar("dashboard");
}
