const estudiantes = [
  { nombre: "Maria", apellidos: "Mora Perez", nota: 90 },


  { nombre: "Pedro", apellidos: "Sibaja Lopez", nota: 60 },

  { nombre: "Marco", apellidos: "Rojas Castro", nota: 78 }
];

const formulario = document.getElementById("formulario-estudiante");


const entradaNombre = document.getElementById("nombre");
const entradaApellidos = document.getElementById("apellidos");
const entradaNota = document.getElementById("nota");


const mensajeError = document.getElementById("mensaje-error");
const listaEstudiantes = document.getElementById("lista-estudiantes");

function mostrarEstudiantes() {
  listaEstudiantes.innerHTML = "";

  for (let i = 0; i < estudiantes.length; i++) {
    const estudiante = estudiantes[i];


    const fila = listaEstudiantes.insertRow();

    const celdaNombre = fila.insertCell();


    const celdaApellidos = fila.insertCell();
    const celdaNota = fila.insertCell();

    celdaNombre.textContent = estudiante.nombre;
    celdaApellidos.textContent = estudiante.apellidos;
    celdaNota.textContent = estudiante.nota;

    if (estudiante.nota >= 80) {
      celdaNota.className = "nota-verde";
    } else if (estudiante.nota < 65) {
      celdaNota.className = "nota-roja";
    }
  }

  actualizarResumen();
}

function actualizarResumen() {
  let notaMayor = estudiantes[0].nota;

  let nombreNotaMayor = estudiantes[0].nombre + " " + estudiantes[0].apellidos;

  let notaMenor = estudiantes[0].nota;

  let sumaNotas = 0;

  for (let i = 0; i < estudiantes.length; i++) {
    const estudiante = estudiantes[i];
    sumaNotas = sumaNotas + estudiante.nota;

    if (estudiante.nota > notaMayor) {
      notaMayor = estudiante.nota;
      nombreNotaMayor = estudiante.nombre + " " + estudiante.apellidos;
    }

    if (estudiante.nota < notaMenor) {
      notaMenor = estudiante.nota;
    }
  }

  const promedioNotas = sumaNotas / estudiantes.length;
  document.getElementById("nota-mayor").textContent =
    nombreNotaMayor + " (" + notaMayor + ")";

  document.getElementById("promedio").textContent = promedioNotas.toFixed(2);


  document.getElementById("nota-menor").textContent = notaMenor;
}

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nombre = entradaNombre.value.trim();

  const apellidos = entradaApellidos.value.trim();


  const notaTexto = entradaNota.value.trim();
  const nota = Number(notaTexto);

  if (nombre === "" || apellidos === "" || notaTexto === "") {
    mensajeError.textContent = "Todos los campos son obligatorio ";


    mensajeError.hidden = false;
    return;
  
  
  
  }

  if (isNaN(nota) || nota < 0 || nota > 100) {
    mensajeError.textContent = "La nota debe ser un número entre 0 y 100   ";
    mensajeError.hidden = false ;

    return;
  }

  estudiantes.push({
    nombre: nombre,


    apellidos: apellidos,
    nota: nota
  });

  formulario.reset();
  mensajeError.textContent = "    ";

  mensajeError.hidden = true;
  mostrarEstudiantes();
});

mostrarEstudiantes();
