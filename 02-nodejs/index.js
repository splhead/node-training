/*
0 - get user
1 - getUserPhone(user.id)
2 - getUserAddress(user.id)
*/

function obterUsuario(callback) {
    setTimeout(() => {
        return callback(null, { 
            id: 1,
            nome: "Jonh Doe",
            dataNascimento: new Date()
        })
    }, 1000)
}

function obterTelefone(usuarioID, callback) {
    setTimeout(() => {
        return callback( null, { 
            ddd: 11,
            telefone: 98761234
        })
    }, 2000)
}

function obterEndereco(usuarioID, callback) {
    setTimeout(() => {
        return callback ( null, { 
            rua: "dos bobos",
             numero: 0
        })
    }, 2000)
}

function resolverUsuario(erro, usuario) {
    console.log('usuario', usuario)
}

obterUsuario((error, usuario) => {
    // null || "" || 0 === false
    if(error) {
        console.log('Deu Ruim em Usuario')
        return
    }

    obterTelefone(usuario.id,(error1, telefone) => {
        if(error1) {
            console.log('Deu Ruim em Telefone')
            return
        }

        obterEndereco(usuario.id, (error2, endereco) => {
            if(error2) {
                console.log('Deu Ruim em Endereco')
                return
            }
            
            console.log(`
                Nome: ${usuario.nome},
                Endereco: ${endereco.rua}, ${endereco.numero},
                Telefone: (${telefone.ddd}) ${telefone.telefone}
            `)
        })
    })
})
// const telefone = obterTelefone(usuario.id)
// const endereco = obterEndereco(usuario.id)

// console.log('usuario', usuario)
// console.log('telefone', telefone)