// Funciones
// Son utiles para duplicar codigo sin tener que volver a escribirlo. En otras
// palabras, te ayudan a compartir funcinalidad
// Lo que esta dentro del cuerpo de una funcion no se ejecuta hasta que llames
// El nombre de las functiones debe ser unico
// las function son una capsula. Nada defino dentro de una function es accesible
// fuera de esta.

// Function syntax
// function NOMBRE(ARGUMENTOS) {
//  CUERPO DE LA FUNCTION
// }

function printTicket() {
  console.log(`Tu numero de espera es`)
}

function printRandomTicket() {
  const randomNumber = Math.floor(Math.random()*20)
  console.log(`Tu numero de espera es ${randomNumber}`)
}

function printRandomTicketWithCapilizeName(name) {
  name = name.toUpperCase()
  const randomNumber = Math.floor(Math.random()*20)
  console.log(`Tu numero de espera es ${randomNumber} ${name}`)
}

function printRandomTicketWithCapilizeNameAndLimit(name, limit) {
  name = name.toUpperCase()
  const randomNumber = Math.floor(Math.random()*limit)
  console.log(`Tu numero de espera es ${randomNumber} ${name}`)
}

function printRandomTicketWithCapilizeNameAndLimit(name, limit=20) {
  name = name.toUpperCase()
  const randomNumber = Math.floor(Math.random()*limit)
  console.log(`Tu numero de espera es ${randomNumber} ${name}`)
}
