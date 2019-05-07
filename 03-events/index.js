const EventEmitter = require('events')

class MeuEmissor extends EventEmitter {

}

const meuEmissor = new MeuEmissor()
const nomeEvento = 'usuario:click'

meuEmissor.on( nomeEvento, (click) => {
    console.log('O usuario clicou', click)
})

// simular
// meuEmissor.emit(nomeEvento, 'na barra de rolagem')
// meuEmissor.emit(nomeEvento, 'no ok')

// let counter = 0

// setInterval(() => {
//     meuEmissor.emit(nomeEvento, 'no ok' + counter++ )
// }, 1000)

const stdin = process.openStdin()
stdin.on('data', (value) => {
    console.log(`Voce digitou: ${value.toString().trim()}`)
})