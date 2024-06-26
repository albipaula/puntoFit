let slideIndex = [1,1];
let slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}

/* POPOVER BOOSTRAP */
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

$("[data-toggle=popover]").popover({
    container: 'button' // body width
});


function calcularIMC() {
  var nombre = document.getElementById('nombre').value;
  var alturaEnCentimetros = parseInt(document.getElementById('altura').value);
  var pesoEnKilos = parseInt(document.getElementById('peso').value);

  // Validar las entradas
  if (isNaN(alturaEnCentimetros) || isNaN(pesoEnKilos) || nombre.trim() === '') {
    alert('Por favor, ingrese datos válidos en todos los campos.');
    return;
  }

  var alturaEnMetros = alturaEnCentimetros / 100;
  var imc = Math.round(pesoEnKilos / (alturaEnMetros * alturaEnMetros));
  var clasificacion;

  if (imc < 18.5) {
    clasificacion = 'estás muy delgado';
  } else if (imc < 25) {
    clasificacion = 'estás saludable';
  } else if (imc < 30) {
    clasificacion = 'tienes sobrepeso';
  } else if (imc < 35) {
    clasificacion = 'tienes obesidad 1';
  } else if (imc < 40) {
    clasificacion = 'tienes obesidad 2';
  } else {
    clasificacion = 'tienes obesidad 3';
  }

  const respuesta =  nombre.toUpperCase() + ', tu IMC es ' + imc + ', ' + clasificacion;
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = respuesta;
}




const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

