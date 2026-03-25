function mostrarSeccion(id){

let secciones = document.querySelectorAll(".seccion");

secciones.forEach(sec=>{
sec.style.display = "none";
});

document.getElementById(id).style.display = "block";
}

function comprar(producto, precio){
alert("Compraste: " + producto + " 💸 $" + precio);
}

// iniciar en inicio
window.onload = function(){
mostrarSeccion("inicio");
}
