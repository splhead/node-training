/*
0 - get user
1 - getUserPhone(user.id)
2 - getUserAddress(user.id)
*/
// importar modulo interno nodejs
const util = require('util')

const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario() {
    // resolve = sucess
    // reject  = error
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            // return reject ( new Error('Erro fatal mano!') )
            return resolve({ 
                id: 1,
                nome: "Jonh Doe",
                dataNascimento: new Date()
            })
        }, 1000)
    })
}

function obterTelefone(usuarioID) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve( { 
                ddd: 11,
                telefone: 98761234
            })
        }, 2000)
    })
}

function obterEndereco(usuarioID, callback) {
    setTimeout(() => {
        return callback ( null, { 
            rua: "dos bobos",
             numero: 0
        })
    }, 2000)
}

// para manipular sucesso .then
// para manipular erro .catch
// usuario -> telefone -> telefone
const usuarioPromise = obterUsuario()
usuarioPromise
    .then((usuario) => {
        return obterTelefone(usuario.id)
            .then(function resolverTelefone(result) {
                return {
                    usuario: {
                        id: usuario.id,
                        nome: usuario.nome
                    },
                    telefone: result
                }
            })
    })
    .then((resultado) => {
        const endereco =  obterEnderecoAsync(resultado.usuario.id)
        return endereco.then((result) => {
            return {
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                endereco: result
            }
        })
    })
    .then((resultado) => {
        console.log(`
            Nome: ${resultado.usuario.nome}
            Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero}
            Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
        `)
    })
    .catch((error) => {
        console.error('Zica', error)
    })
// obterUsuario((error, usuario) => {
//     // null || "" || 0 === false
//     if(error) {
//         console.log('Deu Ruim em Usuario')
//         return
//     }

//     obterTelefone(usuario.id,(error1, telefone) => {
//         if(error1) {
//             console.log('Deu Ruim em Telefone')
//             return
//         }

//         obterEndereco(usuario.id, (error2, endereco) => {
//             if(error2) {
//                 console.log('Deu Ruim em Endereco')
//                 return
//             }
            
//             console.log(`
//                 Nome: ${usuario.nome},
//                 Endereco: ${endereco.rua}, ${endereco.numero},
//                 Telefone: (${telefone.ddd}) ${telefone.telefone}
//             `)
//         })
//     })
// })
// const telefone = obterTelefone(usuario.id)
// const endereco = obterEndereco(usuario.id)

// console.log('usuario', usuario)
// console.log('telefone', telefone)