// if

// if (condicion) {
//   en caso verdad
// }

const x = 1
if (x == 1) {
  console.log('es verdar')
}

// Else

// if (condicion) {
//   en caso de ser verdad
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

const animal = 'gato'

if (animal == 'perro') {
  console.log('wao wao')
} else if (animal == 'gato') {
  console.log('miau miau')
} else if (animal == 'pajaro') {
  console.log('pio pio')
} else {
    console.log('no se')
}

// > mayor que
// < menor que
// >= mayor o igual
// <= menor o igual
// != no igual

// multiples condiciones
// && (and) se usa para unir condiciones. Todas las condiciones tienen que ser verdar
// x == 1 && x != 0 && x != 1
// || (or) se usa para unir condiciones. Solo una de las condiciones tine que ser verdar
