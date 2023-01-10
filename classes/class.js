// Clases
// Las clases son un object compuesto por datos y funciones
// Las clases se pueden ver como un molde. Ejemplo, un molde de cadenas
// un mismo molde puede crear muchas cadenas, pero todas las cadenas reflejan
// la forma del molde
// En otro ejemplo, el concepto de personas seria la clase, y un individuo en specifico
// (Bill Acosta), seria la instancia de esa clase.
// Para crear una clase usamos la keyword 'new' segido por el nombre de la case y parentesis ()
// new Person()
// Las clases tinen una keyword que hace referencia a la instancia: this

// Class sytanx
// class NOMBRE {
// El nombre de las clases por convencion, comienzan con mayuscula

  // PROPIEDADES
  // se definen de la misma forma que varibles (x = 1)

  // CONSTRUCTOR
  // Esta es una function special que indica como crear esta clase

  // FUNCIONES
  // como definimos las funciones en functions.js

// }

class Persona {

  // propiedades
  nombre
  apellido
  edad

  constructor(nombre, apellido, edad) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
  }

  // Esta funcion actua como un compleaños
  addNewYear() {
    this.edad = this.edad + 1
  }

  changeName(nombre) {
    this.nombre = nombre
  }
}

class Moneda {
  //          0       1
  lados = ['cara', 'cruz']
  cara = 0
  cruz = 0

  tirar() {
    // 0 o 1
    const lado = Math.floor(Math.random() * 2)

    if (lado == 0) {
      this.cara = this.cara + 1
    } else {
      this.cruz = this.cruz + 1
    }

    // console.log(`el resultado es ${this.lados[lado]}`)
  }

  resultado() {
    const total = this.cara + this.cruz
    const probabilidadCara = (this.cara/total)*100
    const probabilidadCruz = (this.cruz/total)*100
    console.log(probabilidadCara)
    console.log(`Resultado cara: ${probabilidadCara}%, cruz: ${probabilidadCruz}%`)
  }
}
