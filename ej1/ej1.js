class Jugador {
    constructor(nombre, apellidos, nivel=1, puntuacion=1){
        this.nombre = nombre,
        this.apellidos = apellidos,
        this.nivel = nivel,
        this.puntuacion = puntuacion
    }
    sumarPuntuacion(){
        this.puntuacion += 1
        console.log(`La puntuación de ${this.nombre} ha aumentado`)
        console.log(`Puntuacion actual: ${this.puntuacion}`)
        if(this.puntuacion === 10){
            this.nivel++
            console.log(`El jugador ${this.nombre} ${this.apellidos} ha subido de nivel`)
            return
        }
    }
    restarPuntuacion(){
        this.puntuacion--
        if(this.puntuacion === 0){
            this.nivel--
            console.log(`El jugador ${this.nombre} ${this.apellidos} ha bajado de nivel`)
            if(this.nivel = 0){
                console.log(`El jugador ${this.nombre} ${this.apellidos} ha perdido la partida`)
            }
        }
    }
    resetJugador(){
        alert(`Se ha reseteado al jugador ${this.nombre} ${this.apellidos}`)
    }
}

let jugador1 = new Jugador(nombre="Pepe",apellidos="Ramirez")
let jugador2 = new Jugador(nombre="Juanito", apellidos="Gonzalez")
let jugadores = [jugador1, jugador2]

jugador1.sumarPuntuacion()
jugador1.sumarPuntuacion()
jugador1.sumarPuntuacion()
jugador1.sumarPuntuacion()
jugador1.sumarPuntuacion()
jugador1.sumarPuntuacion()
jugador1.sumarPuntuacion()
jugador1.sumarPuntuacion()
jugador1.sumarPuntuacion()
jugador1.sumarPuntuacion()
console.log(jugador1.nivel)
jugador2.restarPuntuacion()
console.log(jugador2.nivel)

