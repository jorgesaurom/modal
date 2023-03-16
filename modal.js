let modal = document.getElementById("ventanamodal");
let boton = document.getElementById("abrirModal");
let span = document.getElementsByClassName("cerrar")[0];

boton.addEventListener("click",function() {
  modal.style.display = "block";
});


span.addEventListener("click",function() {
  modal.style.display = "none";
});