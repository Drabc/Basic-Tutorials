// if
const x = 1

// if (condicion) {
//   en caso verdad
// }

if (x == 1) {
  console.log('es verdar')
}

// if (condicion) {
//   en caso verdad
// } else {
  // corre en caso que la condicion sea falsa
// }

if (x == 1) {
  console.log('es verdar')
} else {
  console.log('es falso')
}

// else if

// if (condition primary) {
//   console.log('es verdar')
// } else if (si la primaria es falsa. condition secundary) {
//   console.log('es falso')
// }

// > mayor que
// < menor que
// >= mayor o igual
// <= menor o igual
// != no igual

const animal = 'gato'

if (animal == 'perro') {
  console.log('wao wao')
} else if (animal == 'gato') {
  console.log('miau miau')
}

const animal = 'delfin'

if (animal == 'perro') {
  console.log('wao wao')
} else if (animal == 'gato') {
  console.log('miau miau')
} else if (animal == 'pajaro') {
  console.log('pio pio')
} else {
    console.log('no se')
}

// multiples condiciones
// && (and) se usa para unir condiciones. Todas las condiciones tienen que ser verdar
// x == 1 && x != 0 && x != 1
// || (or) se usa para unir condiciones. Solo una de las condiciones tine que ser verdar
